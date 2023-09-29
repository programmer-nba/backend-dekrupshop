require("dotenv").config();
const express = require('express');
const app = express();

app.use(express.json());

const port = process.env.PORT || 9060;

app.listen(port,() => {
    console.log(`API Runing PORT ${port}`);
});
