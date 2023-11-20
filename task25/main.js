let createBtn = () => {
    let myBtn = document.createElement('button')
    let body = document.querySelector('body')
    myBtn.classList.add('myBtn')
    myBtn.textContent = 'Жмяк'
    body.append(myBtn)
} 

createBtn()