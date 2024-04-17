let arr1 = [1, [2, 3]];
const arr2 = [1, [2, 3]];
let result = 0;

function checkArrays(arrA, arrB) {
  arrA.forEach((elementA) => {
    if (elementA.length) {
      checkArrays(elementA);
    } else {
      result += elementA;
    }
  });
}
checkArrays(arr1, arr2);
console.log(result);
