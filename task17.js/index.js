let input = document.querySelector('.search')
let ul = document.querySelector('ul')

input.addEventListener('input', () => {
    fetch(`https://suggest-maps.yandex.ru/v1/suggest?apikey=a4ad7c85-188e-4884-8678-86b0742f7763&text=${input.value}`)
    .then(response => {return response.json()})
    .then(data => {
        data.results.forEach(elem => {
            let li = document.createElement('li')
            let btnRes = document.createElement('btn')
            btnRes.textContent = elem.title.text
            li.append(btnRes)
            ul.append(li)
        });
    })
})