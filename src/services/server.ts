import express from 'express';
import * as http from 'http';
import apiRouter from '../routes/index';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', apiRouter);

const server = new http.Server(app);

export default server;