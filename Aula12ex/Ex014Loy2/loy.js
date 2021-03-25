function hello() {
    var msg = window.document.getElementById('one')
    var imagem = window.document.getElementById('fig')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Hi, now it is ${hora} hours`

    if (hora > 0 && hora < 12) {
        imagem.src = 'loymanha.png'
    } else if (hora >= 12 && hora < 18) {
        imagem.src = 'loytarde.png'
    } else {
        imagem.src = 'loynoite.png'
    }
}