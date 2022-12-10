import express from 'express';

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


import Users from './models/Users.js';
import Status from './models/Status.js';
import StatusControl from './models/StatusControl.js';

import { isAuthenticated } from './middleware/auth.js';


import { statusController } from './lib/statusController.js';
import { statusControllerr } from './lib/statusController.js';
import { notifyController } from './lib/notifyController.js';

import returnipController from './lib/returnipController.js';


const router = express.Router();



//¬~{&}9nov¬~{&}
router.get('/users', isAuthenticated, async (req, res) => {
  const users = await Users.readAll();

  res.json(users);
});


router.post('/users', async (req, res) => {
  const user = req.body;

  delete user.confirmationPassword;

  const newUser = await Users.create(user);


  res.status(201).json(newUser);
});


router.delete('/users/:id', isAuthenticated, async (req, res) => {
  const id = Number(req.params.id);

  Users.remove(id);

  res.status(204).send();
});


router.put('/users/:id', isAuthenticated, async (req, res) => {
  const id = Number(req.params.id);

  const user = req.body;

  const newUser = await Users.update(user, id);

  res.json(newUser);
});







//¬~{&}12novproject¬~{&}
router.get('/status', async (req, res) => {
  const status = await Status.readAll();

  res.json(status);
});


router.put('/status/:id', async (req, res) => {
  const id = Number(req.params.id);

  const status = req.body;

  const newStatus = await Status.update(status, id);

  res.json(newStatus);
});

router.delete('/status/:id', async (req, res) => {
  const id = Number(req.params.id);

  Status.remove(id);

  res.status(204).send();
});



//¬~{&}16nov¬~{&}
router.post('/signin', async (req, res) => {
  try {
    const { email, password } = req.body;

    const { id: userId, password: hash } = await Users.readByEmail(email);

    const match = await bcrypt.compare(password, hash);

    if (match) {
      const token = jwt.sign(
        { userId, email }, 
        process.env.SECRET,
        { expiresIn: 7200 } // 2 hours
      );

      res.json({ auth: true, token });
    } else {
      throw new Error('User not found');
    }
  } catch (error) {
    res.status(401).json({ error: 'User not found' });
  }
});



//¬~{&}12octprojctstatus¬~{&}
router.get('/status/api', async (req, res) => {
  const statys = await Status.readAll();
  const address = statys.map((staty) => staty.address);
  const name = statys.map((staty) => staty.name);
  const protocolo = statys.map((staty) => staty.protocolo);
  await Promise.all(
    address.map(async (address, index) => {
      const { ok, status, statusText } = await statusController(address, protocolo[index]);
      statys[index].ok = ok;
      statys[index].status = status;
      statys[index].statusText = statusText;
    })
  );
  res.json(statys);
});


router.get('/status/:apiID/', async (req, res) => {
  const apiID = Number(req.params.apiID);
  const hostp1 = await Status.read(apiID);
    const data = await statusControllerr(hostp1.address);
    res.json({
        url: data.url,
        ok: data.ok,
        status: data.status,
        statusText: data.statusText,
        name: hostp1.name,
        Id: hostp1.id,
    });

});


router.post('/status/:id', StatusControl.createStatus);

router.post('/send', notifyController);

router.get('/ip/:id', returnipController.ipaddr);










// 404 handler
router.use((req, res, next) => {
  res.status(404).send('Content not found!');
});

// Error handler
router.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});


export default router;