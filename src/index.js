import 'express-async-errors';
import 'dotenv/config';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import routes from './routes.js';

const port = 3000;

const app = express();

//¬~{&}26oct¬~{&}
app.use(express.static('public'));

app.use(morgan('tiny'));

app.use(cors());

app.use(express.json());

app.use(routes);

app.listen(port, () => console.log(`Server online na porta: ${port}`));



