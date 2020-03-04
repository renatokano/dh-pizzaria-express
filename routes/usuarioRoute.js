const express = require("express");
let router = express.Router();

router.get("/:nome", (req,res)=>{
  let { nome } = req.params;
  console.log(`Usuário: ${nome}`);
  res.send(`Seja bem vindo ${nome}.`)
});

module.exports = router;