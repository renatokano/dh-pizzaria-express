const express = require("express");
let app = express();
const usuarioRoute = require("./routes/usuarioRoute");
const cardapioRoute = require("./routes/cardapioRoute");

app.use("/usuarios", usuarioRoute);

app.use("/cardapio", cardapioRoute);

app.listen(3000,()=>{
    console.log("Servidor funcionando.");
});