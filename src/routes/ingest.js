module.exports = function ingestRoute(req, res, services) {
  const payload = req.body;

  if (!payload || !payload.action) {
    return res.status(400).json({ error: 'Invalid payload: missing action' });
  }

  const { action, target, data } = payload;

  try {
    if (target === 'ledger') {
      return res.json(services.ledger.handle(action, data));
    }

    if (target === 'chain') {
      return res.json(services.chain.handle(action, data));
    }

    if (target === 'agent') {
      return res.json(services.agent.handle(action, data));
    }

    return res.status(400).json({ error: 'Unknown target' });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
