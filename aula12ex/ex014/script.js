function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    //var hora = 20

    msg.innerHTML = `Agora são <strong>${hora}:${min}</strong> Hrs`
    if(hora >= 0 && hora < 12){
        var saudação = document.getElementById('saud')
        saudação.innerHTML = '<strong>BOM DIA !!!</strong>'
        saudação.style.color = '#e2cd9f'
        //Bom dia !
        imagem.src = './img/fotomanha.jpg'
        document.body.style.background = '#e2cd9f'
    }else if(hora >= 12 && hora < 18){
        var saudação = document.getElementById('saud')
        saudação.innerHTML = '<strong>BOA TARDE !!!</strong>'
        saudação.style.color = '#f4a16e'
        //Boa Tarde !
        imagem.src = './img/fototarde.jpg'
        document.body.style.background = '#f4a16e'
    }else{
        var saudação = document.getElementById('saud')
        saudação.innerHTML = '<strong>BOA NOITE !!!</strong>'
        saudação.style.color = '#515154'
        //Boa Noite
        imagem.src = './img/fotonoite.jpg'
        document.body.style.background = '#515154'
    }
}
