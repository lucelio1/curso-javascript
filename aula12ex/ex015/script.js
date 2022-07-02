function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        alert('[ERRO] Verifique Os Dados Inseridos E Tente Novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 14){
                //Criança
                img.setAttribute('src' , './imagens/infantil-homem.jpg')
                img.style.borderRadius = '50%'
                img.style.marginTop = '30px'
            }else if (idade < 23){
                //Jovem
               img.setAttribute('src' , './imagens/jovem-homem.jpg')
               img.style.borderRadius = '50%'
               img.style.marginTop = '30px'
            }else if (idade < 50){
                //Adulto
                img.setAttribute('src' , './imagens/adulto-homem.jpg')
                img.style.borderRadius = '50%'
                img.style.marginTop = '30px'
            }else{
                //Idoso
                img.setAttribute('src' , './imagens/idoso-homem.jpg')
                img.style.borderRadius = '50%'
                img.style.marginTop = '30px'
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 14){
                //Criança
                img.setAttribute('src' , './imagens/infantil-mulher.jpg')
                img.style.borderRadius = '50%'
                img.style.marginTop = '30px'
            }else if (idade < 23){
                //Jovem
                img.setAttribute('src' , './imagens/jovem-mulher.jpg')
                img.style.borderRadius = '50%'
                img.style.marginTop = '30px'
            }else if (idade < 50){
                //Adulto
                img.setAttribute('src' , './imagens/adulto-mulher.jpg')
                img.style.borderRadius = '50%'
                img.style.marginTop = '30px'
            }else{
                //Idoso
                img.setAttribute('src' , './imagens/idoso-mulher.jpg')
                img.style.borderRadius = '50%'
                img.style.marginTop = '30px'
            }
        }
        res.innerHTML = `Detectado ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}