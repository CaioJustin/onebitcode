let Dinheiro =parseFloat(prompt("Digite a quantidade de dinheiro"))
let opcoes=0;
let DepositoRetirada=0;

do{


    opcoes=parseInt(prompt(("Quantidade de dinheiro R$"+Dinheiro+"\n1-Adicionar Dinheiro"+"\n2-Remover Dinheiro"+"\n3-Sair do sistema")))

    if(opcoes ==1){
      DepositoRetirada=parseFloat(prompt("Digite a quantidade de dinheiro que voçê deseja adicionar"))
        Dinheiro+=DepositoRetirada;
    }else if(opcoes ==2){
        DepositoRetirada=parseFloat(prompt("Digite a quantidade que voçê deseja remover"))
        Dinheiro-=DepositoRetirada
    }

}while(opcoes!=3);

alert("Saindo do Sistema")