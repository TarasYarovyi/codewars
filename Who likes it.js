// Who likes it?
// https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.
function likes(names) {
  switch (names.length) {
    case 0:
      return `no one likes this`;
      break;
    case 1:
      return `${names[0]} likes this`;
      break;
    case 2:
      return `${names[0]} and ${names[1]} like this`;
      break;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
      break;
    case 4:
      return `${names[0]}, ${names[1]} and 2 others like this`;
      break;

    default:
      return `${names[0]}, ${names[1]} and ${
        names.length - 2
      } others like this`;
      break;
  }
}

or; //
// function likes(names) {
//     return {
//       0: 'no one likes this',
//       1: `${names[0]} likes this`,
//       2: `${names[0]} and ${names[1]} like this`,
//       3: `${names[0]}, ${names[1]} and ${names[2]} like this`,
//       4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`,
//     }[Math.min(4, names.length)]
//   }
