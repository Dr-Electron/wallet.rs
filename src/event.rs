use crate::address::Address;
use iota::message::prelude::MessageId;

use getset::Getters;
use once_cell::sync::Lazy;
use std::ops::Deref;
use std::sync::{Arc, Mutex};

/// The balance change event data.
#[derive(Getters)]
#[getset(get = "pub")]
pub struct BalanceEvent {
    /// The associated account identifier.
    account_id: [u8; 32],
    /// The associated address.
    address: Address,
    /// The new balance.
    balance: u64,
}

/// A transaction-related event data.
#[derive(Getters)]
#[getset(get = "pub")]
pub struct TransactionEvent {
    /// The associated account identifier.
    account_id: [u8; 32],
    /// The event transaction hash.
    message_id: MessageId,
}

/// A transaction-related event data.
#[derive(Getters)]
#[getset(get = "pub")]
pub struct TransactionConfirmationChangeEvent {
    /// The associated account identifier.
    account_id: [u8; 32],
    /// The event transaction hash.
    message_id: MessageId,
    /// The confirmed state of the transaction.
    confirmed: bool,
}

struct BalanceEventHandler {
    /// The on event callback.
    on_event: Box<dyn Fn(BalanceEvent) + Send>,
}

struct ErrorHandler {
    /// The on error callback.
    on_error: Box<dyn Fn(&crate::WalletError) + Send>,
}

#[derive(PartialEq)]
pub(crate) enum TransactionEventType {
    NewTransaction,
    Reattachment,
    Broadcast,
}

struct TransactionEventHandler {
    event_type: TransactionEventType,
    /// The on event callback.
    on_event: Box<dyn Fn(TransactionEvent) + Send>,
}

struct TransactionConfirmationChangeEventHandler {
    /// The on event callback.
    on_event: Box<dyn Fn(TransactionConfirmationChangeEvent) + Send>,
}

type BalanceListeners = Arc<Mutex<Vec<BalanceEventHandler>>>;
type TransactionListeners = Arc<Mutex<Vec<TransactionEventHandler>>>;
type TransactionConfirmationChangeListeners =
    Arc<Mutex<Vec<TransactionConfirmationChangeEventHandler>>>;
type ErrorListeners = Arc<Mutex<Vec<ErrorHandler>>>;

/// Gets the balance change listeners array.
fn balance_listeners() -> &'static BalanceListeners {
    static LISTENERS: Lazy<BalanceListeners> = Lazy::new(Default::default);
    &LISTENERS
}

/// Gets the transaction listeners array.
fn transaction_listeners() -> &'static TransactionListeners {
    static LISTENERS: Lazy<TransactionListeners> = Lazy::new(Default::default);
    &LISTENERS
}

/// Gets the transaction confirmation change listeners array.
fn transaction_confirmation_change_listeners() -> &'static TransactionConfirmationChangeListeners {
    static LISTENERS: Lazy<TransactionConfirmationChangeListeners> = Lazy::new(Default::default);
    &LISTENERS
}

/// Gets the balance change listeners array.
fn error_listeners() -> &'static ErrorListeners {
    static LISTENERS: Lazy<ErrorListeners> = Lazy::new(Default::default);
    &LISTENERS
}

/// Listen to balance changes.
pub fn on_balance_change<F: Fn(BalanceEvent) + Send + 'static>(cb: F) {
    let mut l = balance_listeners()
        .lock()
        .expect("Failed to lock balance_listeners: on_balance_change()");
    l.push(BalanceEventHandler {
        on_event: Box::new(cb),
    })
}

/// Emits a balance change event.
pub(crate) fn emit_balance_change(account_id: &[u8; 32], address: &Address, balance: u64) {
    let listeners = balance_listeners()
        .lock()
        .expect("Failed to lock balance_listeners: emit_balance_change()");
    for listener in listeners.deref() {
        (listener.on_event)(BalanceEvent {
            account_id: *account_id,
            address: address.clone(),
            balance,
        })
    }
}

/// Emits a transaction-related event.
pub(crate) fn emit_transaction_event(
    event_type: TransactionEventType,
    account_id: &[u8; 32],
    message_id: &MessageId,
) {
    let listeners = transaction_listeners()
        .lock()
        .expect("Failed to lock balance_listeners: emit_balance_change()");
    for listener in listeners.deref() {
        if listener.event_type == event_type {
            (listener.on_event)(TransactionEvent {
                account_id: *account_id,
                message_id: *message_id,
            })
        }
    }
}

/// Emits a transaction confirmation state change event.
pub(crate) fn emit_confirmation_state_change(
    account_id: &[u8; 32],
    message_id: &MessageId,
    confirmed: bool,
) {
    let listeners = transaction_confirmation_change_listeners()
        .lock()
        .expect("Failed to lock transaction_confirmation_change_listeners: emit_confirmation_state_change()");
    for listener in listeners.deref() {
        (listener.on_event)(TransactionConfirmationChangeEvent {
            account_id: *account_id,
            message_id: *message_id,
            confirmed,
        })
    }
}

/// Adds a transaction-related event listener.
fn add_transaction_listener<F: Fn(TransactionEvent) + Send + 'static>(
    event_type: TransactionEventType,
    cb: F,
) {
    let mut l = transaction_listeners()
        .lock()
        .expect("Failed to lock transaction_listeners: add_transaction_listener()");
    l.push(TransactionEventHandler {
        event_type,
        on_event: Box::new(cb),
    })
}

/// Listen to new messages.
pub fn on_new_transaction<F: Fn(TransactionEvent) + Send + 'static>(cb: F) {
    add_transaction_listener(TransactionEventType::NewTransaction, cb);
}

/// Listen to transaction confirmation state change.
pub fn on_confirmation_state_change<F: Fn(TransactionConfirmationChangeEvent) + Send + 'static>(
    cb: F,
) {
    let mut l = transaction_confirmation_change_listeners().lock().expect(
        "Failed to lock transaction_confirmation_change_listeners: on_confirmation_state_change()",
    );
    l.push(TransactionConfirmationChangeEventHandler {
        on_event: Box::new(cb),
    })
}

/// Listen to transaction reattachment.
pub fn on_reattachment<F: Fn(TransactionEvent) + Send + 'static>(cb: F) {
    add_transaction_listener(TransactionEventType::Reattachment, cb);
}

/// Listen to transaction broadcast.
pub fn on_broadcast<F: Fn(TransactionEvent) + Send + 'static>(cb: F) {
    add_transaction_listener(TransactionEventType::Broadcast, cb);
}

pub(crate) fn emit_error(error: &crate::WalletError) {
    let listeners = error_listeners()
        .lock()
        .expect("Failed to lock error_listeners: emit_error()");
    for listener in listeners.deref() {
        (listener.on_error)(&error)
    }
}

/// Listen to errors.
pub fn on_error<F: Fn(&crate::WalletError) + Send + 'static>(cb: F) {
    let mut l = error_listeners()
        .lock()
        .expect("Failed to lock error_listeners: on_error()");
    l.push(ErrorHandler {
        on_error: Box::new(cb),
    })
}

#[cfg(test)]
mod tests {
    use super::{emit_balance_change, on_balance_change, on_error};
    use crate::address::{AddressBuilder, IotaAddress};
    use iota::message::prelude::Ed25519Address;

    fn _create_and_drop_error() {
        let _ = crate::WalletError::GenericError(anyhow::anyhow!("generic error"));
    }

    #[test]
    fn error_events() {
        on_error(|error| {
            assert!(matches!(error, crate::WalletError::GenericError(_)));
        });
        _create_and_drop_error();
    }

    #[test]
    fn balance_events() {
        on_balance_change(|event| {
            assert!(event.account_id == [1; 32]);
            assert!(event.balance == 0);
        });

        emit_balance_change(
            &[1; 32],
            &AddressBuilder::new()
                .address(IotaAddress::Ed25519(Ed25519Address::new([0; 32])))
                .balance(0)
                .key_index(0)
                .build()
                .expect("failed to build address"),
            0,
        );
    }
}
