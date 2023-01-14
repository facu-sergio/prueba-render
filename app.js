const express = require ('express');
const app = express();
const router = express.router;
const path = require('node:path');
app.set('views', path.join(__dirname,'/views'));
app.get('/',(req,res)=> res.send ('hello world'));

app.listen(process.env.PORT||3000);
console.log('server on port 3000')