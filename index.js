`use strict`
require('dotenv').config();
const PORT=process.env.PORT||3002
const {start}=require('./server') 
start(PORT);