const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.urlencoded({extended: true}));

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Running on port ${port || 3000}`);
})