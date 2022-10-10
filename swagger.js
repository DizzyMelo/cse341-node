const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contacts',
    description: 'This api provides methods to manage personal contacts',
  },
  host: 'cse341-lesson1.onrender.com',
  schemes: ['https'],
};

const outputFile = './documentation/swagger-output.json';
const endpointsFiles = ['./routes/index.js', './routes/contactsRoutes.js'];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);