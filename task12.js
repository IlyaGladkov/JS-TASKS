let book = {
    name: 'Harry Potter',
    author: 'G. Rolling',
    year: 2000,
    get infoBook() {
        return `name: ${this.name}, author: ${this.author},year: ${this.year}`
    },
    set changeInfo({ 
        name = 'Harry Potter',
        author = 'G. Rolling',
        year = 2000
    }) {
        this.name = name
        this.author = author
        this.year = year
    }
}

book.changeInfo = {author: 'f', year: 1000}
console.log(book)