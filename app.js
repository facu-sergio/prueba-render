const express = require ('express');
const app = express();
const router = express.router;


app.get('/',(req,res)=> res.send ('hello world'));

app.listen(procces.env.PORT||3000);
console.log('server on port 3000')