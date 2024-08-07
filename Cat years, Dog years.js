// Cat years, Dog years

// https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b/train/javascript
// References

// http://www.catster.com/cats-101/calculate-cat-age-in-cat-years
// http://www.slate.com/articles/news_and_politics/explainer/2009/05/a_dogs_life.html

// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

function humanYearsCatYearsDogYears(humanYears) {
  let catYears, dogYears;
  switch (humanYears) {
    case 1:
      [catYears, dogYears] = [15, 15];
      break;
    case 2:
      [catYears, dogYears] = [24, 24];
      break;

    default:
      catYears = 24 + (humanYears - 2) * 4;
      dogYears = 24 + (humanYears - 2) * 5;

      break;
  }

  return [humanYears, catYears, dogYears];
}

console.log(humanYearsCatYearsDogYears(10));
