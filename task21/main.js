let i = 0;

const func = () => {
  i++;

  func();
};

try {
  func();
} catch (e) {
  console.log(`Размер коллстека = ${i}`);
}

//Размер коллстека = 45630 -> Safari
//Размер коллстека = 9194 -> Chrome