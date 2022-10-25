import express from 'express';

import { getHostLatency } from './lib/network.js';

const router = express.Router();

router.get('/hosts/:hostId/times', async (req, res) => {
  const hostId = req.params.hostId;

  const host = 'www.google.com';

  const count = req.query.count;

  const { times } = await getHostLatency(host, count);

  res.json({
    times,
  });
});

// 404 handler
router.use((req, res, next) => {
  res.status(404).send('Content not found!');
});

// Error handler
router.use((err, req, res, next) => {
  // console.error(err.stack);
  res.status(500).send('Something broke!');
});

export default router;