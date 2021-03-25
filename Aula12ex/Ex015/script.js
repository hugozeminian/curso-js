function verify() {
    var date = new Date()
    var year = date.getFullYear()
    var fyear = document.getElementById('txtyear')
    var ans = document.querySelector('div#ans')

//    window.alert('ok')

    if (fyear.value.length == 0 || Number(fyear.value) > year) {
        window.alert(' [ERRO] verify the year and try again')
    }else {
        var fgen = document.getElementsByName('radgen')
        var age = year - Number(fyear.value)
        var gen = ''
        var pic = document.createElement ('img')
        pic.setAttribute('id', 'image')
        //window.alert('ok')
        if (fgen[0].checked) {
            gen = 'Male'
           if (age < 10) {
                //crianca
                pic.setAttribute('src', 'img-m-babym.png')
            } else if (age >= 10 && age < 21) {
                //adoslecente
                pic.setAttribute('src', 'img-m-boy.png')
            } else if (age >=21 && age < 50) {
                //adulto
                pic.setAttribute('src', 'img-m-man.png')
            } else {
                //idoso
                pic.setAttribute('src', 'img-m-old.png')
            }
        } else if (fgen[1].checked) {
            gen = 'Female'
            if (age < 10) {
                //crianca
                pic.setAttribute('src', 'img-f-babyf.png')
            } else if (age >= 10 && age < 21) {
                //adoslecente
                pic.setAttribute('src', 'img-f-girl.png')
            } else if (age >=21 && age < 50) {
                //adulto
                pic.setAttribute('src', 'img-f-woman.png')
            } else {
                //idoso
                pic.setAttribute('src', 'img-f-old.png')
            }
        }
        ans.style.textAlign = 'center'
        ans.innerHTML = `We detected ${gen} with ${age} years old.`
        ans.appendChild(pic)

    }

}