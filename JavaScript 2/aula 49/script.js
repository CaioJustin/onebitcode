

const personagem =[

  { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
  { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
  { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
  { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
  { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
]


//metodo de array Map


//const nomes =[]
//for(let i =0;i<personagem.length;i++){
//    nomes.push(personagem[i].nome)
//}

// map: permite obter um novo array a partir de um array existenste
const nomes = personagem.map(function(personagem){
    return personagem.nome
})

console.log(nomes)

//metodo de array Filter

//const orcs =[]

//for (let i = 0; i < personagem.length; i++) {

//    if(personagem[i].raca ==="Orc"){
//        orcs.push(personagem[i])
//    }
    
//}
// filter: permite obter um novo array contendo apenas elementos específicos de um array existente
const orcs = personagem.filter(function(personagem){
    return personagem.raca==="Orc"
})


console.log(orcs)




//metodo de array Reduce
// reduce: serve para reduzir um array existente a um valor final qualquer,
// passando um valor entre cada iteração sobre esse array e retornando ele no final
const NivelTotal = personagem.reduce(function(valorAcumulado,personagem){
return valorAcumulado +personagem.nivel
    
},0)

console.log(NivelTotal)


const racas=personagem.reduce(function(valorAcumulado,personagem){

    if(valorAcumulado[personagem.raca]){
        valorAcumulado[personagem.raca].push(personagem)
    }else{
        valorAcumulado[personagem.raca]=[personagem]
    }
    return valorAcumulado
},{})

console.log(racas)


//metodo de array sort

// sort: ordena os elementos de um array a partir de comparações entre duplas de elementos
personagens.sort(function (a, b) {
  return a.nivel - b.nivel
})