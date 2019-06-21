const Sequelize = require(sequelize)

const sequelize = new Sequelize ('Postgres//postgres fgf comp localhost:$432/agenda');

sequelize
.authenticate()
.then( () => {
console.log('Conexão realizada com sucess');
})

.catch(err =>{
console.error('Não foi possivel conectar',err);
});

const User = sequelize.define('contatos', {
    nome: {
    type: Sequelize. STRING},
    telefone: {    
    type: Sequelize. STRING},
    email: {    
    type: Sequelize. STRING},
    
    tipo: {    
    type: Sequelize. STRING}
});

    User.sync({force: false})
    .then(() =>{
    return User.create({
    nome: 'Edvan ',
    telefone: '123456',
    email: 'Edvan@chaves',
    tipo: 'Trabalho'
    });
});    
    User.findAll()
    .then(users => {
    console.log(users)
    })