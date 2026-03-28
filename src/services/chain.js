module.exports = {
  handle(action, data) {
    return {
      module: 'chain',
      action,
      status: 'processed',
      data
    };
  }
};
