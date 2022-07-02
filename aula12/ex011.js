var idade = 12
console.log(`Você Tem ${idade}`)
if(idade < 16){
    console.log('Não Pode Votar')
}else if(idade < 18 || idade > 65){
    console.log('Voto Opcional')
}else {
    console.log('Voto Obrigatorio')
}