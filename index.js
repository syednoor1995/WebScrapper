// Import express
const express = require('express');
//Object initialization
const app = express();
//Import dotenv for environment variable
const dotenv = require('dotenv');
var bodyParser  = require('body-parser');
app.use(bodyParser.json());
 //Object initialization
dotenv.config();
require("./Middleware/DBConnection")
var cors = require('cors');
app.use(cors())
app.use('/api/scrap/',require('./Routes/ProductRouter'))

//Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT,() => console.log(`Server started ${PORT}`));