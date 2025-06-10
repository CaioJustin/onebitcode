const idade = prompt("Digite a sua idade")
if(idade>18){
    console.log("Voçe e maior de idade")  
}else if(idade >15){
console.log("Voçe e menor de idade")
}else if(idade >12){
    console.log("Voce e maior que 12")
}else{
    console.log("Idade não Computada")
}


//Operador ternario 
yearBirt = prompt("Digite a seu ano de nascimento")
let Year = yearBirt != 2004? console.log("Nasceu no ano errado") :console.log("Nasceu no melhor ano")