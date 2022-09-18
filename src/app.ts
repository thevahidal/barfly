import express from 'express';
import { json } from 'body-parser';

import { server as serverConfig } from './config';

const app = express();
app.use(json());

app.get('/', (req, res) => {
    res.send('Hello Barfly!');
});

app.listen(serverConfig.port, () => {
  console.log(`Server is running on port ${serverConfig.port}`);
});