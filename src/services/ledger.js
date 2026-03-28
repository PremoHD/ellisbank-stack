module.exports = {
  handle(action, data) {
    return {
      module: 'ledger',
      action,
      status: 'processed',
      data
    };
  }
};
