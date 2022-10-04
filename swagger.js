const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contacts',
    description: 'This api provides methods to manage personal contacts',
  },
  host: 'localhost:3000',
  schemes: ['http'],
};

const outputFile = './documentation/swagger-output.json';
const endpointsFiles = ['./routes/contactsRoutes.js'];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);