/*function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hr} horas.`
    if (hora >= 0 && hora < 12) {           
        //Bom dia
        img.src = 'loymanha.png'
    } else if (hora >= 12 && hora < 18) {       
        //Boa tarde
        img.src = 'loytarde.png'
    } else {                            
        //Boa noite
        img.src = 'loynoite.png'
    }
}*/

function carregar() {
    var msg = window.document.getElementById('one')
    var imagem = window.document.getElementById('img')
    var data = new Date()
    var hora = 20  // data.getHours()
   
    msg.innerHTML = `Agora sao ${hora} horas`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        imagem.src = 'loymanha.png'
    } else if (hora >=12 && hora < 18) {
        //BOA TARDE!
        imagem.src = 'loytarde.png'
    } else {
        //BOA NOITE!
        imagem.src = 'loynoite.png'
    } 
}