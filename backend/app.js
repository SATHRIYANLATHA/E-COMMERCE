const express = require ('express');
const app = express();
const dotenv = require ('dotenv');
const path = require ('path');
dotenv.config({path : path.join(__dirname,'config','config.env')});
const cors = require('cors');

const connectDatabse = require('./config/connectDatabase');

const products = require ('./routes/product');
const orders = require ('./routes/order');


connectDatabse();


app.use(express.json())
app.use(cors())
app.use('/api/v1',products);
app.use('/api/v1',orders);

app.listen(process.env.PORT,()=>{
    console.log(`Server listening on the port  ${process.env.PORT} in ${process.env.NODE_ENV}`);
})