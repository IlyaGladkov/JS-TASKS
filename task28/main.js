let ul = document.querySelector('ul')

let arrTask = ['task1','task2','task3']

let addElem = (tasks) => {
    let t = document.getElementById('template1')
    let span = t.content.querySelector('span')
    tasks.forEach(task => {
        span.textContent = task
        let li = t.content.cloneNode(true)
        ul.append(li)
    });
}

addElem(arrTask)