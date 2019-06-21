var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var pg = require('pg');

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.use(cors({
  origin: 'http://localhost:4200'
}));

const config = {
    host: 'localhost',
    user: 'Paixão',
    password: 'luna3112',
    database: 'vendas',
    port: 5432
};
// app.use(function (req, res, next) {

//     // Website you wish to allow to connect
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

//     // Request methods you wish to allow
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

//     // Request headers you wish to allow
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

//     // Set to true if you need the website to include cookies in the requests sent
//     // to the API (e.g. in case you use sessions)
//     res.setHeader('Access-Control-Allow-Credentials', true);

//     // Pass to next layer of middleware
//     next();
// });
const pool = new pg.Pool(config);

app.get('/produtos', function (req, res) {

pool.query('select * from produto', function(err, result) {
  
if (err) {
 return console.error('Erro na consulta!', err);
}

console.log(result.rows);
res.send(result.rows);

});
});

app.get('/produtos/:id', function (req, res) {

const id = parseInt(req.params.id);

pool.query('select * from produto where id = $1', [id], function(err, result) {

if (err) {
 return console.error('Erro na consulta!', err);
}

console.log(result.rows);
res.send(result.rows);

});
});

app.post('/produtos', function (req, res) {

console.log('POST... ' );
console.log('Dados: ' );
console.log(req.body);

const { nome, preco, qtd } = req.body;

pool.query('insert into produto(nome, preco, qtd) values($1, $2,$3)', [nome, preco, qtd], function(err, result) {

if (err) {
 return console.error('Erro no cadastro do produto!', err);
}

res.status(201).send(`Produto ID: ${result.insertId}`)

});
});

app.put('/produtos/:id', function (req, res) {

console.log('PUT... ' );
console.log('Dados: ' );
console.log(req.body);

const id = parseInt(req.params.id);
const { nome, preco, qtd } = req.body;

pool.query('update produto set nome = $1, preco = $2, qtd = $3 where id = $4', [nome, preco, qtd, id], function(err, result) {

if (err) {
 return console.error('Erro no cadastro do produto!', err);
}

res.status(201).send(`Produto atualizado: ${id}`)

});
});

app.delete('/produtos/:id', function (req, res) {

console.log('DELETE... ' );

const id = parseInt(req.params.id);

pool.query('delete from produto where id = $1', [id], function(err, result) {

if (err) {
 return console.error('Erro no exclusão do produto!', err);
}

res.status(201).send(`Produto excluído: ${id}`)

});
});

app.get('/', function (req, res) {
console.log('Testando ...')
  res.send('Alo Mundo');
});

app.listen(3000, function () {
  console.log('Aplicação executando na porta 3000!');
});

