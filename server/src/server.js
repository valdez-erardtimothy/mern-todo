const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config({ path: '../.env' });

/* in-project imports */


const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
// load express routes
require('./routes.js')(app);


app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);

});