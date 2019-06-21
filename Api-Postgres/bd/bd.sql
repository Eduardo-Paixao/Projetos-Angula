-- Database: vendas

-- DROP DATABASE vendas;

CREATE DATABASE vendas
    WITH 
    OWNER = "Paixão"
    ENCODING = 'UTF8'
    LC_COLLATE = 'Portuguese_Brazil.1252'
    LC_CTYPE = 'Portuguese_Brazil.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;
	
create table produto(
	id serial primary key,
	nome varchar(50) not null,
	preco real not null, qtd int not null
)

INSERT INTO produto(id, nome, preco) VALUES(1, 'celular', 1500)

SELECT * FROM produto

INSERT INTO produto(id, nome, preco) VALUES(2, 'notebook', 2500)

INSERT INTO produto(id, nome, preco) VALUES(3, 'ultrabook', 3000)

INSERT INTO produto(id, nome, preco) VALUES(4, 'SmartTV', 4000)