const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres://Paixão:luna3112@localhost:5432/vendas');

sequelize
.authenticate()
.then(() => {
        console.log('Conexao realizada com sucesso!');
    }
)
.catch( erro => {
    console.log('Erro: ' + erro);
})

const Produto = sequelize.define('produtos', {

  nome: {
    type: Sequelize.STRING   
  },
  preco: {
    type: Sequelize.FLOAT   
  },
  qtd: {
    type: Sequelize.INTEGER   
  },
});

Produto.destroy({
    where:{
        id:2
    }
})

Produto.sync({force:false})

Produto.findAll()

.then(
    dados => console.log(JSON.stringify(dados))
)


// Produto.create({
//     nome: 'teclado',
//     preco: 100,
//     qtd:'50'
// })

// .then(
//     ()=> console.log('Produto criado')
// )