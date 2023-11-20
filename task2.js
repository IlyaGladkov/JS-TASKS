const oldNumber = (num) => {
    let divideNums = []
    for (let i = 1; i <= num; i++) {
        if (num % i === 0 && i !== num) {
            divideNums.push(i)
        }
    }
    console.log(divideNums.reduce((acc, num) => acc += num) === num)
}

oldNumber(496)