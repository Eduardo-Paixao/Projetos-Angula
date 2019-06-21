const express = require('express')
const app = express()
const pg = require('pg')
const dadosConexao = 'postgres://postgres:Luna3112@localhost:5432/escola'
const cliente = new pg.Client(dadosConexao)
cliente.connect()
console.log('Conectado!')
app.get('/cursos', function(req, res) {   
            
        cliente.query('SELECT * from curso', function(err, result) {
            if (err) {
                return console.error('Erro na consulta', err);
            }
            res.status(200).json(result.rows)
        });
    }
)

app.get('/', (req, res) => 
           res.send('Chamada via GET......'))

app.listen(3000, () => console.log('Exemplo de APP com Express'))