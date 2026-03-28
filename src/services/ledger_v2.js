const state = {
  balances: {},
  transactions: []
};

function ensureAccount(id) {
  if (!state.balances[id]) {
    state.balances[id] = 0;
  }
}

module.exports = {
  handle(action, data) {
    if (action === 'account.create') {
      ensureAccount(data.id);
      return { ok: true, balances: state.balances };
    }

    if (action === 'payment.deposit') {
      ensureAccount(data.to);
      state.balances[data.to] += data.amount;
      state.transactions.push({ type: 'deposit', ...data });
      return { ok: true, balances: state.balances };
    }

    if (action === 'payment.send') {
      ensureAccount(data.from);
      ensureAccount(data.to);

      if (state.balances[data.from] < data.amount) {
        throw new Error('Insufficient funds');
      }

      state.balances[data.from] -= data.amount;
      state.balances[data.to] += data.amount;

      state.transactions.push({ type: 'transfer', ...data });

      return { ok: true, balances: state.balances };
    }

    if (action === 'ledger.get') {
      return state;
    }

    return { ok: false, error: 'Unknown ledger action' };
  }
};
