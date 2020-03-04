const controller = {
  index: (req,res)=>{
    res.send("Lista de todas as pizzas do cardápio");
  },

  cadastrar: (req,res)=>{
    let {nome, preco} = req.params;
    res.send(`A pizza ${nome} foi cadastrada com o preço de R$ ${preco}.`);
  }
};

module.exports = controller;