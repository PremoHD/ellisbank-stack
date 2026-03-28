module.exports = {
  handle(action, data) {
    return {
      module: 'agent',
      action,
      status: 'processed',
      data
    };
  }
};
