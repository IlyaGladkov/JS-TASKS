let listPersons = [
    { name: 'John', age: 25 },
    { name: 'John', age: 22 },
    { name: 'Ac', age: 23 },
    { name: 'John', age: 24 },
    { name: 'John', age: 21 },
    { name: 'Aa', age: 23 },
    { name: 'John', age: 26 }
]

let sortPersons = list => {
    return list.sort((a, b) => {
        if (a.age !== b.age) return a.age - b.age
        return a.name > b.name ? 1 : -1
    })
}

console.log(sortPersons(listPersons))