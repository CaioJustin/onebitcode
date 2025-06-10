let Jogador1=prompt("Digite o nome do primeiro Jogador");
let atkJogador1=prompt("Digite o poder de ataque do primeiro jogador");



let Jogador2=prompt("Digite o nome do segundo Jogador");
let lifeJogador2=prompt("Digite a quantidade de vida do segundo Jogador");
let defesaJogador2=prompt("Digite a defesa do segundo Jogador");
let escudoJogador=prompt("o segundo Jogador possui um escudo?");

let ataque =parseInt(atkJogador1);
let defesa = parseInt(defesaJogador2)
let vidaj2=parseInt(lifeJogador2)

if(ataque >defesa && escudoJogador=="nao"){
    dano =ataque-defesa;

}else if(ataque>defesa    && escudoJogador=="sim"){
     dano = (ataque-defesa)/2;
}else if(ataque<=defesa){
    dano=0;
}

vidaj2=vidaj2-dano;

alert(

    "Informaçoes do Primeiro Personagem"+
    "\nNome: "+Jogador1+
    "\nPontos de ataque: "+atkJogador1
    +"\n\nInformaçoes do Segundo Personagem"+
    "\nPontos de vida: "+lifeJogador2+
    "\nDefesa: "+defesaJogador2+
    "\nEscudo: "+escudoJogador
    +"\nInformaçoes Pos Comparação"+
    "\n Pontos de vida atual do segundo jogador : "+vidaj2
)
