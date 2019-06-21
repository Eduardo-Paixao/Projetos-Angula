-- Database: escola

-- DROP DATABASE escola;

CREATE DATABASE escola
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Portuguese_Brazil.1252'
    LC_CTYPE = 'Portuguese_Brazil.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;
	
	
CREATE TABLE curso(
	nome VARCHAR(20)null,
	id INT PRIMARY KEY
)

INSERT INTO curso(nome, id) VALUES('JS', 1)

SELECT * FROM curso

INSERT INTO curso(nome, id) VALUES('Java', 2)

INSERT INTO curso(nome, id) VALUES('React', 3)

INSERT INTO curso(nome, id) VALUES('Bootstrap', 4)











