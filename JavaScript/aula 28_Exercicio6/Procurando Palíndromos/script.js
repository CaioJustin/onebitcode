let palavra =prompt("Digite a palavra")
d=0
let palindromo=true;

for(i =0;i<palavra.length/2;i++){
    if(palavra[i] !== palavra[palavra.length-1-i]){
        palindromo=false
        break
    }
    
}



if(palindromo){
    alert("A palavra e um palindromo")
}else{
    alert("A palavrar : "+palavra+" Não e um palindromo")
}