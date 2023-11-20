let form = document.getElementById('form1')
let btn = document.querySelector('button')

let getData = (e) => {
    e.preventDefault()
    let data = new FormData(form)
    for (const [key, value] of data) {
        alert(`${key}: ${value}`)
    }
}

form.addEventListener('submit', getData)