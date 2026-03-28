module.exports = function statusRoute(req, res) {
  res.json({
    system: 'EllisBank Stack',
    modules: ['ledger', 'chain', 'agent'],
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
};
