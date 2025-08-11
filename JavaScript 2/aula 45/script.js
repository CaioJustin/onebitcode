let pessoa = {
    nome:"bruno",
    idade:7,
    dizerola(){
        console.log(this.nome+" diz ola ")
    }
}


console.log(pessoa)
pessoa.dizerola()