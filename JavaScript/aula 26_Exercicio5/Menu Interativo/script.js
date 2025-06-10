let optcao;
do{

    optcao = parseInt(prompt("\n1-Despausar"+"\n2-Reiniciar"+"\n3-Configuração"+"\n4-Combos"+"\n5-Encerrar"))


    switch(optcao){
        case 1:
            alert("A opção 1 foi escolhida Despausar foi escolhida")
            break;
        case 2:
            alert("A  opção 2 foi escolhida Reiniciar ")    
            break;
        case 3:
            alert("A opção 3 foi escolhida Configuração")    
            break;
        case 4:
            alert("A opção 4 foi escolhida Combos")
            break;
        case 5:
            alert("A opção 5 foi escolhida Encerrar")    
            break;
        default:
            alert("Error 404")    
            break;
    }


}while(optcao !=5)


    alert("Programa Finalizado")