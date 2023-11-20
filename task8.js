let resolveFuncs = (arrFuncs) => {
    let result = []
    return function () {
        arrFuncs.forEach(func => {
            result.push(func())
        });
        return result
    }
}

let func1 = () => {
    return 1
}

let func2 = () => {
    return 1+2
}

let res = resolveFuncs([func1, func2])
console.log(res())