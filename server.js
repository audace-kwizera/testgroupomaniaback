const express = require('express');
const app = express(); /** App sera express */

//Aplication écoutera sur le port 6000
app.listen(6000, () => {
    console.log('Listening on port 6000');
})