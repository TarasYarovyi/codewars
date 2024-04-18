let first = [1, 1, 1];
const second = [2, 2, 2];
let result;

function checkArrays(arrA, arrB) {
  arrA.forEach((el, index) => {
    if (Array.isArray(el) && el.length === arrB[index].length) {
      checkArrays(el, arrB[index]);
      result = true;
    } else if (!Array.isArray(el) && !Array.isArray(arrB[index])) {
      result = true;
    } else {
      result = false;
    }
  });
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
