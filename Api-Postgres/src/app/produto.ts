export class Produto {

    id : number;
    nome : string;
    preco : number;
    qtd : number;

    constructor( id : number,
                 nome : string,
                 preco : number,
                 qtd : number){
        this.id = id;
        this.nome = nome;
        this.preco = preco;
        this.qtd = qtd;
    }
}
