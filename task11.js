let counterFun = () => {
    let count = 0
    return function() {
        return count++
    }
}

let counter = counterFun()
console.log(counter())
console.log(counter())
console.log(counter())