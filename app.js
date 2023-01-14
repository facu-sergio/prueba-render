const express = require ('express');
const app = express();
const router = express.router;


app.get('/',(req,res)=> res.send ('hello world'));

app.listen(4000);
console.log('server on port 3000')