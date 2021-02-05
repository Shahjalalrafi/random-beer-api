document.addEventListener('DOMContentLoaded', function () {
    const startBtn = document.querySelector('.beer-button')
    const randomBeer = document.querySelector('.random-beer')
    const displayDescription = document.querySelector('.description')

    function getData(e) {
        e.preventDefault()
        fetch('https://api.punkapi.com/v2/beers/random')
            .then(res => res.json())
            .then(data => {
                const name = data[0].name
                const description = data[0].description
                const volumeValue = data[0].volume.value
                const volumeUnit = data[0].volume.unit

                randomBeer.innerHTML = name + ' ' + volumeValue + volumeUnit
                displayDescription.innerHTML = description
            })

    }
    startBtn.addEventListener('click', getData)
})