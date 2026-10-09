function testar(){
    alert("teste");
}

const pessoa = {
    nome: "André",
    idade: 20,
    saudacao: function(){
        alert("Olá, meu nome é " + pessoa.nome)
    },
    idadeReal(){
        return(2026 - this.anoNasc)
    }
}

pessoa.estado = "Rio Grande do Sul";
pessoa["cidade"] = "Barão";
console.log(pessoa);
console.log(pessoa.saudacao());
console.log(pessoa["idade"]);
pessoa.idade = 21;

delete pessoa.qualquer;

let cidade = "Rio de Janeiro";
const local = {
    cidade,
    testar
};
console.log(local.cidade);

function Carro (modelo, marca, ano) {
    this.modelo = modelo;
    this.marca = marca;
    this.ano = ano;
    this.detalhe = function(){
        alert("O carro é " + this.modelo + ", a marca é " + this.marca + " e o ano é " + this.ano);
    }
};

const carro1 = new Carro("Corolla", "Toyota", 2021);
const carro2 = new Carro("Celta", "Chevrolet", 2012);

console.log(carro2.modelo);
console.log(carro1.detalhe());
console.log(carro2.detalhe());

const estudante = {
    nome: "André",
    idade: 20,
    local: {
        cidade: "Barão",
        estado: "Rio Grande do Sul"
    }
}

console.lo(estudante.local.estado);