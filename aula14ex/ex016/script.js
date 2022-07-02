function contar(){
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    //Validação
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossivel Efetuar Contagem'
        //alert('[ERRO] Faltam Dados!')
    }else{
        res.innerHTML = ('Contando:')
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        //Caso passo seja 0 passo 1 será considerado
        if (p <= 0){
            alert('Passo Invalido Considerando Passo 1')
            p = 1
        }
        if (i < f){
            //Contagem Crescente
            for (let c = 1 ; c <= f ; c += p){
                res.innerHTML += `  ${c} \u{1f449}`
            }
        }else{
            //Contagem Regressiva
            for (let c = i ; c >= f ; c -= p){
                res.innerHTML += `  ${c} \u{1f449}`
            }
        }
        res.innerHTML += ` \u{1f3c1}`
    }
}
