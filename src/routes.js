import express from 'express';

import { getHostLatency } from './lib/network.js';
import { statusController } from './lib/statusController.js';

const router = express.Router();



//¬~{&}13oct¬~{&}
router.get('/', (req, res) => {
  res.send('Hello World!');
});

// Query parameters
// GET /hello/en?name=John
router.get('/hello/en', (req, res) => {
  try {
    const name = req.query.name;

    if (name) {
      res.send(`Olá, ${name}!`);
    } else {
      throw new Error('Name is required');
    }
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// Route parameters
// GET /hello/pt/John
router.get('/hello/en/:name', (req, res) => {
  try {
    const name = req.params.name;

    if (name) {
      res.send(`Olá, ${name}!`);
    } else {
      throw new Error('Name is required');
    }
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// Body parameters
// POST /hello/en
router.post('/hello/en', (req, res) => {
  try {
    const name = req.body.name;

    if (name) {
      res.send(`Olá, ${name}!`);
    } else {
      throw new Error('Name is required');
    }
  } catch (err) {
    res.status(400).send(err.message);
  }
});


//¬~{&}19oct¬~{&}
// Route parameters
router.get('/hosts/:hostId/times', async (req, res) => {
  const hostId = req.params.hostId;

  const host = 'www.google.com';

  const count = req.query.count;

  const { times } = await getHostLatency(host, count);

  res.json({
    times,
  });
});



//¬~{&}30octatv¬~{&}
router.get('/hostp1/:apiID/status', async (req, res) => {
  const apiID = req.params.apiID;
  const hostp1 = 'https://dados.ifpb.edu.br/dataset/2b36e2b7-4fcc-47c1-9eb6-9da314181780/resource/1b7e1a56-a23a-4392-9305-292a7149cff6/download/releases.json';
    const data = await statusController(hostp1);
    res.json({
        url: data.url,
        ok: data.ok,
        status: data.status,
        statusText: data.statusText,
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