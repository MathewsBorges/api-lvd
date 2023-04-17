const express = require("express");
const app = express();
const port = 3000
const allRoutes = require('./routes/route')

app.use(express.json())
app.use('/', allRoutes)

app.listen(port, () =>{
    console.log(`Escutando app na porta ${port}`);
})