let nome =prompt("Digite o seu nome :")
let resposta =prompt("Já visitou alguam cidade")

let cidade="";
let visita
let i=0;

while(resposta =="sim"){

    

    visita =prompt("Digite quais cidade voce visitou")
    cidade+= visita;
    i++;


    resposta=prompt("Visitou mais alguam cidade")


}


alert("Saiu do loop")



alert(

            "Nome : "+nome+"\nQuantidade de cidades visitadas : "+i+"\nCidades visitadas:"+cidade


)

