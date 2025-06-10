let velocidade =100


while(velocidade >0){
    alert("O carro esta rapido")
    console.log(velocidade)

    if(velocidade >0){
        alert("Desacelerando ")
        velocidade-=20
        console.log(velocidade)
    }

    if(velocidade <=40){
        alert("O CARRO ESTA EM 40KM")
        break;
    }

}


alert("O CARRO PAROU")