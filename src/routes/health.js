module.exports = function healthRoute(req, res) {
  res.json({ status: 'ok', service: 'ellisbank-stack', route: 'health' });
};
