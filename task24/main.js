let tableBody = document.querySelector('tBody')
let pagination = document.getElementById('pagination')

let createTableElem = (notes) => {
    notes.forEach(row => {
        let tr = document.createElement('tr')
        for (let key of Object.keys(row)) {
            let td = document.createElement('td')
            td.textContent = row[key]
            tr.append(td)
        }
        tableBody.append(tr)
    });
}

let createLiPAG = (data) => {
    let countLiPag = data.length / 50;

    for (let i = 1; i <= countLiPag; i++) {
        let li = document.createElement('li')
        li.textContent = i
        pagination.append(li)
    }
}

let paginationFun = (data) => {
    createLiPAG(data)
    let pangLi = document.querySelectorAll('#pagination li')
    createTableElem(data.slice(0, 50))
    let notesSort = data.slice(0, 50)
    let switchSort = true

    for (let elem of pangLi) {
        elem.addEventListener('click', (e) => {
            let numPage = +e.target.textContent

            let notesOnPage = 50

            let start = (numPage - 1) * notesOnPage
            let end = start + notesOnPage

            let notes = data.slice(start, end)
            notesSort = data.slice(start, end)
            switchSort = true
            tableBody.innerHTML = ''
            createTableElem(notes)
        })
    }

    let sortBtn = document.querySelectorAll('.sort')

    for (let btn of sortBtn) {
        btn.addEventListener('click', (e) => {
            let parentElemText = e.target.parentElement.textContent
            let nameSort = parentElemText.slice(0, parentElemText.length - 1).toLowerCase()
            if (switchSort) {
                notesSort.sort((a, b) => {
                    if (a[nameSort] !== b[nameSort]) {
                        return a[nameSort] < b[nameSort] ? -1 : 1
                    }
                    return 0
                })
            } else {
                notesSort.sort((a, b) => {
                    if (a[nameSort] !== b[nameSort]) {
                        return a[nameSort] > b[nameSort] ? -1 : 1
                    }
                    return 0
                })
            }
            switchSort = !switchSort
            tableBody.innerHTML = ''
            createTableElem(notesSort)
        })
    }
}

let getData = async () => {
    await fetch('http://www.filltext.com/?rows=1000&fname=%7BfirstName%7D&lname=%7BlastName%7D&tel=%7Bphone%7Cformat%7D&address=%7BstreetAddress%7D&city=%7Bcity%7D&state=%7BusState%7Cabbr%7D&zip=%7Bzip%7D&pretty=true')
        .then(res => { return res.json() })
        .then(data => { paginationFun(data) })
}

getData()