const express = require('express');
const app = express();

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'ellisbank-stack' });
});

app.get('/api/status', (req, res) => {
  res.json({
    system: 'EllisBank Stack',
    modules: ['ledger', 'chain', 'agent'],
    uptime: process.uptime()
  });
});

app.post('/api/ingest', (req, res) => {
  const payload = req.body;

  if (!payload) {
    return res.status(400).json({ error: 'No payload provided' });
  }

  console.log('INGEST:', payload);

  res.json({
    status: 'accepted',
    received: payload
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`EllisBank running on port ${PORT}`);
});
