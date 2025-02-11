const express = require('express');
const cors = require('cors');
require('dotenv').config();
const router = require('./routes/routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(router);

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Running on port ${port || 3000}`);
})