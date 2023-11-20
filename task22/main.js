let i = 0;

const func = () => {
  i++;
  document.write(func())
};

try {
  func();
} catch (e) {
  console.log(`${i}`);
}