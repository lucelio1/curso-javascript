//Exibindo na vetor na tela sem formatação padrão do javascript

// 1ª Maneira de formatação
/*
let valores = [8,1,7,4,2,9]
for(let pos = 0 ; pos < valores.length ; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

// Simplificando oque foi feito acima usando o for in

/*
let valores = [8,1,7,4,2,9]
valores.sort()
for(let pos in valores){
    console.log(`A Posição ${pos} Tem O Valor ${valores[pos]}`)
}
*/

//Buscando Valores Dentro De Um Vetor

let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(9)
if(pos == -1){
    console.log('O valor não foi encontrado')
}else{
    console.log(`O valor 8 está na posição ${pos}`)
}
