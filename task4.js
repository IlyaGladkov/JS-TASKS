let rigthWord = ['сообщение','сообщения','сообщений']

let rightEnd = (num, arrWords) => {
    let n = Math.abs(num) % 100
    if (n >= 5 && n <= 20) {
        return `${num} ${arrWords[2]}`;
    }
    let n1 = n %= 10;
    if (n1 === 1) {
        return `${num} ${arrWords[0]}`;
    }
    if (n1 >= 2 && n <= 4) {
        return `${num} ${arrWords[1]}`;
    }
    return `${num} ${arrWords[0]}`;
}

console.log(rightEnd(12, rigthWord))

export default rightEnd