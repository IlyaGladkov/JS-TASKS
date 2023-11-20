let MathX = {
  begin: [0, 1],
  fibN(n) {
    return n <= 1 ? n : this.fibN(n - 1) + this.fibN(n - 2)
  },
  fibToN(n) {
    for (let i = 1; i < n - 1; i++) {
      this.begin.push(this.begin[i - 1] + this.begin[i])
    }
    return this.begin
  },
  primeNumN(n) {
    //TODO: Вычисление N-го простого числа
  },
  primeNumToN(n) {
    for (let i = 1; i <= n; i++) {
      for (let j = 2; j <= i; j++) {
        if (i % j === 0 && j < i) {
          break;
        } else if (j === i) {
          console.log(i);
        }
      }
    }
  }
}
console.log(MathX.primeNumN())