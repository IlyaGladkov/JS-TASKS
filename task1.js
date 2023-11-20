const checkPalindrome = (str) => {
    console.log(str.replaceAll(' ','').split('').reverse().join('') === str.replaceAll(' ',''))
    // Используется replaceAll, если убрать пробелы то порядок букв не поменяеться
}

checkPalindrome('оно')