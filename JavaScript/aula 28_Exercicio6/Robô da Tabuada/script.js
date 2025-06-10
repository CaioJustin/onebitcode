let numero=parseInt(prompt("Digite o Numro que voçê gostaria de saber a tabuada"))
i=0
let salvar="";
let guldonfand=0;

for(i=0;i<=20;i++){

    alert(numero+" x "+i+" = "+parseInt(numero*i))
    guldonfand=parseInt(numero*i)
    salvar+=","+guldonfand
}


alert(
    "os numeros da tabuada foi o seguinte : "+salvar

)