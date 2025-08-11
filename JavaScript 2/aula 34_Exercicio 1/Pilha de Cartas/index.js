//Escreva um programa em javascript para simular um baralho de cartas.
//  O programa deve iniciar mostrando na tela um menu interativo contendo a quantidade de cartas 
// que estão atualmente no baralho e as opções de “Adicionar uma carta”, “Puxar uma carta” e “Sair”.
//  Ao escolher “Adicionar uma carta”, o programa deve perguntar o nome da carta e adicioná-la no 
// topo do baralho. Ao escolher “Puxar uma carta”, o programa deve retirar a carta do topo do baralho
//  e mostrar na tela o nome da carta puxada. O programa só deve ser encerrado ao escolher a
//  opção de “Sair”, caso contrário deve voltar ao menu.


let cartas =["Paus","Ouros","Copas"]
let escolha="";
let carta =""
do{

    alert(
        "Cartas no Baralho : "+cartas
    )

   escolha=parseInt(prompt("Menu Interativo "+
        "\n1 - Adicionar uma Carta"+
        "\n2 - puxar uma carta"+
        "\n3 - Sair"))

    switch(escolha){
        case 1:
        carta = prompt("Digite o nome da carta que você deseja adicionar")
        cartas.push(carta)
        alert("Carta adicionada com sucesso")
        break
        case 2:
        if(cartas.length ==0){
            alert("O baralho esta vazio")
        }else{
        carta = cartas.pop()
        alert("A Carta retirada e : "+carta)
        alert("Carta puxada com sucesso")
        }
        break;
        case 3:
            alert("Saindo");
            break;
         default:
            alert("saindo")   
    }


}while(escolha !==3)