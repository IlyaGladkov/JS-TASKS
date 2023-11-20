let analysPass = (passwordValue) => {
    let s_letters = "qwertyuiopasdfghjklzxcvbnm"
    let b_letters = "QWERTYUIOPLKJHGFDSAZXCVBNM"
    let digits = "0123456789"
    let specials = "!@#$%^&*()_-+=\|/.,:;[]{}"

    let s_lettersBool = false
    let b_lettersBool = false
    let digitsBool = false
    let specialsBool = false

    let countCompl = 0

    for (let i = 0; i < passwordValue.length; i++) {
        if (passwordValue.indexOf(s_letters)) {
            countCompl++
            s_lettersBool = true
        }
        if (passwordValue.indexOf(b_letters)) {
            countCompl++
            b_lettersBool = true
        }
        if (passwordValue.indexOf(digits)) {
            countCompl++
            digitsBool = true
        }
        if (passwordValue.indexOf(specials)) {
            countCompl++
            specialsBool = true
        }
    }

    if (countCompl === 4 && passwordValue.length > 6) {
        return {
            complexity: 'hard',
            recommendation: ''
        }
    } else if (countCompl < 4 && passwordValue.length > 6) {
        return {
            complexity: 'medium',
            recommendation: 'добавте спец. символы, символы нижнего или верхнего регистра, цифры'
        }
    } else {
        return {
            complexity: 'Easy',
            recommendation: 'добавте спец. символы, символы нижнего или верхнего регистра, цифры'
        }
    }
}