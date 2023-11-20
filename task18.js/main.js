function LocalStorageSize() {
	const testData = 'a'.repeat((1024*1024)*4) // задаём строку данных для теста она равна 4 МБ
	const key = 'testData' // задаём ключ для localStorage
	// try catch для отлова ошибок
	try {
		// Пытаемся записать данные в localStorage
		localStorage.setItem(key, testData)
        for (let i = 0; i < 102; i++) {
            localStorage.setItem(key, localStorage.getItem(key) + 'a'.repeat(1024*10))
        }
		// Считываем данные из localStorage
		let dataSize = JSON.stringify(localStorage).length
		// вывод размера
		return dataSize
		// отлов ошибки который возвращает в консоль ошибку и выводит 0
	} catch (error) {
		console.error('LocalStorage не поддерживается или достиг своего предела.')
		return 0
	}
}

// Вызываем функцию и выводим результат
const result = LocalStorageSize()
console.log(`Максимальный объем данных в localStorage: ${result/1024/1024} MB`)