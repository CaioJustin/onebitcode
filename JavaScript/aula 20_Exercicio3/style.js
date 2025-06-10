let Metro=parseFloat(prompt("Digite a quantidade de metros"))

let UnidadeDeMedida =prompt("Digite a unidade de medida que voçe deseja Converte \nmilímetro(mm)\ncentímetro (cm)\nndecímetro (dm)\ndecâmetro (dam)\n\hectômetro (hm)\nquilômetro (km)")

let resultado=0;

switch(UnidadeDeMedida){
    case "mm":
            resultado=Metro*(10*10*10)
        break;
    case "cm":
             resultado=Metro*(10*10)
        break;
    case "dm":
            resultado=Metro*10
        break;
    case "dam":
           resultado=Metro/10; 
        break;
    case "hm":
            resultado=Metro/(10*10);
        break;
    case "km":
            resultado=Metro/(10*10*10);
        break;

    default :
        alert("Opção Invalida")
}

prompt("O resultado e : "+resultado)