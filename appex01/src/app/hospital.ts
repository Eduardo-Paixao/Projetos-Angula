export class Hospital {

    id : number;
    nome : string;
    bairro : string;

    constructor( id : number,
                 nome : string,
                 bairro : string){
        this.id = id;
        this.nome = nome;
        this.bairro = bairro;
    }
}
