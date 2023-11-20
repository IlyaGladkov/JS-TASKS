let fun1 = () => {
    setTimeout(() => console.log(1), 1000)
}

let fun2 = () => {
    console.log(2)
}

let fun3 = () => {
    console.log(3)
}
let fun4 = () => {
    console.log(4)
}


let arr = [fun1(),fun2(),fun3(),fun4()]

let callStack = (arrFuns) => {
    let indexArr = 0
    while (lengthArr.length) {
        arrFuns[indexArr]
        indexArr++
    }
}