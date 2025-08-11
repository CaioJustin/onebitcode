
let Vagas = [

];

function menu(){
const number=parseInt(prompt("====="+"Menu de Opçoes"+"====="+
         "\n1- Lista vagas disponives"+           
         "\n2- Criar uma nova vaga"+
         "\n3- Visualizar uma vaga"+
         "\n4- Inscrever um candidato em uma vaga"+
         "\n5- Excluir uma vaga"+
         "\n6- Sair")
    )
    return number
}

function RowVagas(){
  if(Vagas.length >0){
    for(let i=0;i<Vagas.length;i++){
  
      alert("INFORMAÇOES SOBRE A VAGA "+"\n"+
            "Posição : "+i+"\n"+
            "VAGA : "+Vagas[i].nome+"\n"+
            "Descrição: "+Vagas[i].desc+"\n"+
            "Data Limite:"+Vagas[i].data+"\n"+
             "Candidatos : "+Vagas[i].candidates)
    }

  
  }else{
    alert("Não há Vagas")
  }
    
}

function CreateJob(){

  let job={}

  job.nome=prompt("Digite o nome do emprego")
  job.desc=prompt("Digite a descrição do emprego")
  job.data=prompt("Digite a data limite do emprego")
  job.candidates= [];


  let confirmar = confirm("INFORMAÇOES DO EMPREGO"+"\n"+
                "Nomde do emprego:  "+job.nome+"\n"+
                "Descição do emprego:  "+job.desc+"\n"+
                "Data Limite:  "+job.data+"\n"
  )
    
      if(confirmar){
        Vagas.push(job)
      }
    
}

function viewjob(){

  let number =parseInt(prompt("Digite o numero da vaga"))

 

      if(number >=0 && number <Vagas.length ){
        alert("Indice :"+number+"\n"+
           "nome:"+Vagas[number].nome+"\n"+
      "descrição :"+Vagas[number].desc+"\n"+
    "data limite :"+Vagas[number].data+"\n"+
    "quantidade de candidatos :"+Vagas[number].candidates.length+"\n"+
    "Nome dos candidatos:"+Vagas[number].candidates)
      }else{
        alert("Essa opção não existe")
      }

}

function subscrive(){

  let nome = prompt("Digite  o nome do candidato")
  let indice = parseInt(prompt("Digite o indice da vaga "))

  let conf= confirm("Inscrição "+"\n"+
    "nome : "+nome+"\n"+
    "Indice da vaga : "+indice    
  )


 if(conf){

   if(indice >=0 && indice<Vagas.length){
    Vagas[indice].candidates.push(nome)
  }else{
    alert("Essa vaga não existe")
  }

 }else{
    alert("Inscrição Cancelada !")
 }



}

function del(){

  let indice =parseInt(prompt("Digite o indice da vaga "))
  let confi
  if(indice >=0 && indice <Vagas.length){
    confi = confirm("Informaçoes sobre a vaga"+"\n"
    +"Nome: "+Vagas[indice].nome+"\n"
    +"Descrição: "+Vagas[indice].desc+"\n"
    +"data: "+Vagas[indice].data+"\n"
    +"Candidatos: "+Vagas[indice].candidates
  )
  }

  if(confi){

        Vagas.splice(indice,1)


  }else{
    alert("Cancelado")
  }

}


let opcao;
function SystemMain(){
  do{

  opcao =menu()
  

  switch(opcao){
    case 1:
      RowVagas()
        break;
    case 2:
      CreateJob()
        break;
    case 3:
      viewjob()
      break;
    case 4:
      subscrive()
      break;
    case 5:
      del()
      break;
    case 6:
      alert("Saindo")
      break;   
    default:
        alert("Essa opção não existe")
      break
  }


    
}while(opcao!=6)

}

SystemMain()
