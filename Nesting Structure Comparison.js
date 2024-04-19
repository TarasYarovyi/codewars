let first = [1, [1, 1]];
const second = [2, [2, 2]];
let result;

function checkArrays(arrA, arrB) {
  for (let index = 0; index < arrA.length; index++) {
    const elementA = arrA[index];
    const elementB = arrB[index];

    if (Array.isArray(elementA) && elementA.length === elementB.length) {
      result = true;
      checkArrays(elementA, elementB);
    } else if (!Array.isArray(elementA) && !Array.isArray(elementB)) {
      result = true;
    } else {
      result = false;
    }
  }
}

checkArrays(first, second);
console.log(result);

// arrA.forEach((elementA) => {
//     if (elementA.length) {
//       checkArrays(elementA);
//     } else {
//       result += elementA;
//     }

// if (arrA.length) {
//     arrA.forEach((el, index) => {
//       if (arrA[index].length) {
//         checkArrays(el);
//       }
//     });
//   }
