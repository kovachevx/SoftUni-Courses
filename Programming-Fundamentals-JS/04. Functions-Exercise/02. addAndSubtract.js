function addAndSubtract(a, b, c) {

  function sum(a, b) {
    return a + b;
  }

  let addition = sum(a, b);

  let subtract = (addition, c) => addition - c;

  console.log(subtract(addition, c));
}
addAndSubtract(23, 6, 10);
addAndSubtract(1, 17, 30);
addAndSubtract(42, 58, 100);