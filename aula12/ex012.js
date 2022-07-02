var agora = new Date()
var dia = agora.getDate()
var mes = (agora.getMonth() + 1)
var ano = agora.getFullYear()
var hr = agora.getHours()
var min = agora.getMinutes()
console.log(`Hoje é ${dia}/${mes}/${ano} e são ${hr}:${min}`)
if (hr < 12){
    console.log('Bom Dia !')
}else if(hr <= 18){
    console.log('Boa Tarde !')
}else{
    console.log('Boa Noite !')
}