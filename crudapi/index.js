const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./Routes/index')

const app = express();

const PORT = 1111;

app.use(bodyParser.json());
//routes
app.use('/',routes);

app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`);
});


