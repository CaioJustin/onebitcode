  let escolha="";

  let Imoveis=[
    
  ]
  
  

do {
     escolha = parseInt(prompt("\nQuantidade de Imoveis:"+Imoveis.length+
                                        "\n 1 - Salva Imoveis" + 
                                      "\n 2 - Mostrar Imoveis" + 
                                     "\n 3 - Sair do Programa"))


    switch(escolha){
        case 1:
            const imovel={}

            imovel.owner =prompt("write the name owner");
            imovel.room=parseInt(prompt("Number of room"));
            imovel.bathroom=parseInt(prompt("Number of Bathroom"));        
            imovel.garage=prompt("Number of garage (true/false)");
           

            const confirma =confirm(
                "Você Deseja adicionar esses items ?"+
                "\nNome do Proprietario : "+imovel.owner+
                "\nQuantidade de quarto : "+imovel.room+
                "\nQuantidade de banheiro : "+imovel.bathroom+
                "\nGarage : "+imovel.garage
            
            )

            if(confirma){
                Imoveis.push(imovel)
            }else{
                alert("cancelado")
            }
            
            break;
        case 2:
        
            for(i =0;i<Imoveis.length;i++){
                alert("\nNome do Proprietario : "+Imoveis[i].owner+"\nQuantidade de quarto : "+Imoveis[i].room+"\nQuantidade de banheiro : "+Imoveis[i].bathroom+"\nGarage : "+Imoveis[i].garage)
            }
            
            break;
        case 3:
            alert("Saindo do Programa")
            break;
        default:
            alert("Código Inexistente ou não preenchido");
           break; 
    }





} while (escolha != 3);





