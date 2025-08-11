function areaDoTriangulo(){
   const base  =parseFloat(prompt("Digite a base do triângulo "))
   const altura  =parseFloat(prompt("Digite a altura do triângulo "))
   return alert("a áreaa do Triangulo e : "+base*altura/2)
}

function areaDoRetangulo(){
  const  base  =parseFloat(prompt("Digite a base do retângulo "))
  const  altura  =parseFloat(prompt("Digite a altura do retângulo "))
  return alert("a áreaa do Retangulo e : "+base*altura)
}

function areaDoQuadrado(){
   const lado = parseFloat(prompt("Digite o lado do quadrado"))
    return alert("a áreaa do quadrado e : "+lado*lado)
}

function areaDoTrapezio(){
  const baseM = parseFloat(prompt("Digite a base maior do Trapézio"))
  const basem=parseFloat(prompt("Digite a base menor do Trapézio"))
  const altura=parseFloat(prompt("Digite a base menor do Trapézio"))
  return alert("a áreaa do Trapezio e : "+(baseM+basem)*altura/2)
}


function areaDoCirculo(){
  const pi=3.14
  const raio=parseFloat( prompt("Digite o raio do circulo"))
  return alert("a áreaa do circulo e : "+pi*(raio*raio))
}

function menu(){ 
 return prompt("========Menu da Calculadora========"+"\n"+
            "1- área do triângulo:"+"\n"+
            "2- área do retângulo: "+"\n"+
            "3- área do quadrado:"+"\n"+
            "4- área do trapézio: "+"\n"+
            "5- área do círculo"+"\n"+
            "6- Sair")

}


let opcao;

do{

   opcao = menu()


    if(opcao ==="1"){
      areaDoTriangulo() 
    }else if(opcao ===2){
      areaDoRetangulo()
    }else if(opcao ===3){
     areaDoQuadrado();
    }else if(opcao===4){
     areaDoTrapezio()
    }else if(opcao===5){
      areaDoCirculo()
    }else{
      alert("Error")
    }



}while(opcao != 6);