const timeStamp = '1591532812'
const apiKey = 'f3e1e4ea5b5da46782848ef6efadc4e3'
const md5 = '9fa9cb74b92d0af6d363ca1c515041a2'

let searchResult = new URLSearchParams(window.location.search),
    queryParameterName = searchResult.get('search'),
    divHero = document.querySelector('.cards')

if (queryParameterName !== null && queryParameterName !== "") {
    document.querySelector
}

fetch(`http://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}&limit=100`)
    .then((res) => {
        return res.json()
    }).then((jsonParsed) => {
        const divHero = document.querySelector('.cards')

        
        // selectHero(nameHero)

        jsonParsed.data.results.forEach(element => {
            const srcImage = element.thumbnail.path + '.' + element.thumbnail.extension
            const nameHero = element.name
            const idHero = element.id


            
            
            createDivHero(srcImage, divHero, nameHero, idHero)
        })

        console.log(jsonParsed)
    })

// function selectHero(nameHero) {
//     if (nameHero == searchResult) {
//         nameHero
//     }
// }

function createDivHero(imageHero, divToAppend, nameHero, idHero) {
    const divPai = document.createElement('div')
    const divImagem = document.createElement('div')
    const divTexto = document.createElement('div')
    const img = document.createElement('img')
    const textName = document.createElement('h2')
    const description = document.createElement('h4')

    textName.textContent = nameHero
    img.src = imageHero

    divImagem.appendChild(img)
    divPai.appendChild(divImagem)
    divPai.appendChild(divTexto)
    divTexto.appendChild(textName)
    divTexto.appendChild(description)
    divPai.setAttribute('name', nameHero)
    divToAppend.appendChild(divPai)

    divPai.classList.add('card')
    divPai.id = idHero

    description.innerHTML = `Clique para mostrar detalhes de <a href="detalhes.html">${nameHero}</a>`

}




