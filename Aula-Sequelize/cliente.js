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

const Cliente = sequelize.define('cliente', {

  nome: {
    type: Sequelize.STRING   
  },
  endereco: {
    type: Sequelize.STRING   
  },
  email: {
    type: Sequelize.STRING   
  },
  fone: {
    type: Sequelize.STRING   
  },
});


// Cliente.sync({force:false})


// Cliente.create({
//     nome: 'ana',
//     endereco:'rua a',
//     fone:'12341234',
//     email:'ana@ana.com'
// })

Cliente.destroy({
    where:{
        nome: 'ana'
    }
})

.then(
    ()=> console.log('Cliente cadastrado')
)