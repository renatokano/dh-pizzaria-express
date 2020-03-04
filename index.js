const express = require("express");
let app = express();
const usuarioRoute = require("./routes/usuarioRoute");

app.use("/usuarios", usuarioRoute);

app.listen(3000,()=>{
    console.log("Servidor funcionando.");
});