let arr1 = [1, [2, 3]];
const arr2 = [1, [2, 3]];

let result;
function checkArrays(arrA, arrB) {
  arrA.forEach((elementA) => {
    arrB.forEach((elementB) => {
      if (elementA.length) {
        // checkArrays(elementA, elementB);
        console.log("ok");
      } else {
        console.log("ne ok");
      }
    });
  });
}
checkArrays(arr1, arr2);
