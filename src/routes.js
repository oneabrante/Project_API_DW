import express from 'express';

import Hosts from './models/Hosts.js';
import Users from './models/Users.js';
import Status from './models/Status.js';

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
// router.get('/hosts/:hostId/times', async (req, res) => {
//   const hostId = req.params.hostId;

//   const host = 'www.google.com';

//   const count = req.query.count;

//   const { times } = await getHostLatency(host, count);

//   res.json({
//     times,
//   });
// });



//¬~{&}30octprojct¬~{&}
// router.get('/api/:apiID/status', async (req, res) => {
//   const apiID = req.params.apiID;
//   const hostp1 = 'https://www.uol.com';
//     const data = await statusController(hostp1);
//     res.json({
//         url: data.url,
//         ok: data.ok,
//         status: data.status,
//         statusText: data.statusText,
//     });

// });



//¬~{&}9nov¬~{&}
router.get('/users', (req, res) => {
  const users = Users.readAll();

  res.json(users);
});

router.post('/users', async (req, res) => {
  const user = req.body;


  const newUser = await Users.create(user);


  res.status(201).json(newUser);
});

router.get('/hosts', (req, res) => {
  const hosts = Hosts.readAll();

  res.json(hosts);
});

router.post('/hosts', (req, res) => {
  const host = req.body;

  const newHost = Hosts.create(host);

  res.status(201).json(newHost);
});

router.put('/hosts/:id', (req, res) => {
  const id = req.params.id;

  const host = req.body;

  const newHost = Hosts.update(host, id);

  res.json(newHost);
});

router.delete('/hosts/:id', (req, res) => {
  const id = req.params.id;

  Hosts.remove(id);

  res.status(204).send();
});


//¬~{&}9novTIMES¬~{&}
router.get('/hosts/:hostId/times', async (req, res) => {
  const hostId = req.params.hostId;

  const host = Hosts.read(hostId);

  const count = req.query.count;

  const { times } = await getHostLatency(host.address, count);

  res.json({
    times,
  });
});


//¬~{&}12novproject¬~{&}
router.get('/status', async (req, res) => {
  const status = Status.readAll();

  res.json(status);
});


router.post('/status', (req, res) => {
  const status = req.body;

  const newStatus = Status.create(status);

  res.status(201).json(newStatus);
});

router.put('/status/:id', (req, res) => {
  const id = req.params.id;

  const status = req.body;

  const newStatus = Status.update(status, id);

  res.json(newStatus);
});

router.delete('/status/:id', (req, res) => {
  const id = req.params.id;

  Status.remove(id);

  res.status(204).send();
});




//¬~{&}12octprojctstatus¬~{&}
router.get('/status/:apiID/', async (req, res) => {
  const apiID = req.params.apiID;
  const hostp1 = Status.read(apiID);
    const data = await statusController(hostp1.address);
    res.json({
        url: data.url,
        ok: data.ok,
        status: data.status,
        statusText: data.statusText,
        name: hostp1.name,
        Id: hostp1.id,
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