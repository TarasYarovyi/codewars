const product1Price = 5;
const product2Price = 10;

function add(x) {
  return function (y) {
    return y / (1 - x);
  };
}

const addMargin = add(0.25);

console.log(addMargin(product1Price));
console.log(addMargin(product2Price));
