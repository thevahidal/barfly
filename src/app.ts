import express from 'express';
import { json } from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

import { server as serverConfig, barfly as barflyConfig } from './config';
import { tables as tablesRoutes } from './routes';

const app = express();

const options = {
    failOnErrors: true, // Whether or not to throw when parsing errors. Defaults to false.
    definition: {
      openapi: '3.0.0',
      info: {
        title: barflyConfig.name,
        version: barflyConfig.version,
      },
    },
    apis: ['./routes/*.ts'],
  };
const swaggerSpec = swaggerJsdoc(options);


app.use(json());
app.use('/api/tables', tablesRoutes);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(serverConfig.port, () => {
  console.log(`Server is running on port ${serverConfig.port}`);
});