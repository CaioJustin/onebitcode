//Escreva um programa em javascript para simular uma fila de espera em um consultório médico.
//  O programa deve iniciar mostrando na tela um menu interativo contendo a lista de todos os 
//  esperando em ordem mostrando sua posição ao lado do nome (ex.: 1º Matheus, 2º Marcos, etc). 
// O menu também deve permitir escolher entre as opções de “Novo paciente”, 
// para adicionar um novo paciente ao fim da fila (pedindo o nome do paciente), “Consultar paciente”, 
// que retira o primeiro paciente da fila e mostra na tela o nome do paciente consultado, e “Sair”.
//  O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu.



let escolha=0
let FilaDeEspera=["caio"]
let paciente=""

do{
    
    for(let i=0;i<FilaDeEspera.length;i++){
       alert(i+"º"+FilaDeEspera[i])  
            
    }

  escolha = parseInt(prompt("Escolha a Opção :"+
    "\n1 - Novo Paciente"+
    "\n2 - Consulta Paciente"+
    "\n3 - Sair"))

    switch(escolha){
        case 1:
         paciente=prompt("Digite o nome do Novo Paciente")
         FilaDeEspera.push(paciente)
         alert("Paciente adicionado com sucesso")        
        break;
        case 2:
       if(FilaDeEspera.length==0){
         alert("Não ha paciente para ser atendido")
       }else{
        alert(FilaDeEspera)
        paciente=FilaDeEspera.shift()
        alert("Paciente Consultado"+paciente)
       }
        break;
    }


}while(escolha !=3)