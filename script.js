function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verificar informações! Tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                //Bebe - homem
                img.setAttribute('src', 'bebe-homem.png')
            }
            else if (idade < 21 ) {
                //Jovem - homem
                img.setAttribute('src', 'jovem-homem.png')
            }
            else if (idade < 50) {
                //Adulto - homem
                img.setAttribute('src', 'adulto-homem.png')
            }
            else {
                // Idoso
                img.setAttribute('src', 'idoso-homem.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //Bebe - mulher
                img.setAttribute('src', 'bebe-muler.png')
            }
            else if (idade < 21 ) {
                //Jovem - mulher
                img.setAttribute('src', 'jovem-mulher.png')
            }
            else if (idade < 50) {
                //Adulto - mulher
                img.setAttribute('src', 'adulto-mulher.png')
            }
            else {
                // Idoso
                img.setAttribute('src', 'idoso-mulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}
