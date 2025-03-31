// #reLkOkTB29Q

const books = [
  {
    name: 'Novel',
    pages: 10,
    authors: [{ name: 'Vasyl ' }],
    topics: ['novel'],
  },

  {
    name: 'Novel',
    pages: 11,
    authors: [{ name: 'Vasyl ' }, { name: 'Petro' }],
    topics: ['novel'],
  },

  {
    name: 'Nove;1',
    pages: 12,
    authors: [{ name: 'Vasyl ' }],
    topics: ['novel'],
  },

  {
    name: 'Novel13',
    pages: 13,
    authors: [{ name: 'Vasyl ' }],
    topics: ['novel', 'top'],
  },

  { name: 'Nov', pages: 14, authors: [{ name: ' Vasyl' }], topics: ['novel'] },

  {
    name: 'No',
    pages: 15,
    authors: [{ name: 'Vasyl ' }, { name: 'Dmutro' }],
    topics: ['novelss'],
  },
];

// – знайти найбльшу книжку

// let biggestPageBook = null;
// for (const book of books) {
//   if (!biggestPageBook || biggestPageBook.pages < book.pages) {
//     biggestPageBook = book;
//   }
// }
// console.log(biggestPageBook);

// – знайти книжку/ки з найбільшою кількістю жанрів

// let biggestTopicsBook = null;

// for (const book of books) {
//   if (
//     !biggestTopicsBook ||
//     biggestTopicsBook.topics.length < book.topics.length
//   ) {
//     biggestTopicsBook = book;
//   }
// }
// console.log(biggestTopicsBook);

//– знайти книжку/ки з найдовшою назвою

// let longestNameBook = null;

// for (const book of books) {
//   if (!longestNameBook || longestNameBook.name.length < book.name.length) {
//     longestNameBook = book;
//   }
// }
// console.log(longestNameBook);

// – знайти книжку/ки які писали 2 автори

// let twoAuthorsBooksArr = [];

// for (const book of books) {
//   if (book.authors.length == 2) {
//     twoAuthorsBooksArr.push(book);
//   }
// }
// console.log(twoAuthorsBooksArr);

// – знайти книжку/ки які писав 1 автор

// let oneAuthorBooksArr = [];

// for (const book of books) {
//   if (book.authors.length == 1) {
//     oneAuthorBooksArr.push(book);
//   }
// }
// console.log(oneAuthorBooksArr);

//  Створити пустий масив та :

//  a. заповнити його 50 парними числами за допомоги циклу.

// const array = [];
// for (let index = 1; array.length < 50; index++) {
//   if (index % 2 == 0) {
//     array.push(index);
//   }
// }

// console.log(array);
// console.log(array.length);

//  b. заповнити його 50 непарними числами за допомоги циклу.

// const array = [];

// for (let index = 1; array.length < 50; index++) {
//   if (index % 2 !== 0) {
//     array.push(index);
//   }
// }

// console.log(array);
// console.log(array.length);

// Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)

// const array = [];

// for (let index = 1; array.length < 20; index++) {
//   const randomNumber = Math.floor(Math.random() * (20 - 10 + 1)) + 10;

//   array.push(randomNumber);
// }

// console.log(array);
// console.log(array.length);

//  d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

// const array = [];

// for (let index = 0; array.length < 20; index++) {
//   const rangedValue = Math.floor(Math.random() * (732 - 8 + 1)) + 8;

//   array.push(rangedValue);
// }

// console.log(array);
// console.log(array.length);

//  2. Вивести за допомогою console.log кожен третій елемен

// const array = [];

// for (let index = 0; array.length < 20; index++) {
//   const rangedValue = Math.floor(Math.random() * (732 - 8 + 1)) + 8;

//   array.push(rangedValue);
// }

// console.log(array);

// for (let index = 0; index < array.length; index++) {
//   if ((index + 1) % 3 == 0) {
//     console.log(array[index]);
//   }
// }

//  3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

// const array = [];

// for (let index = 0; array.length < 20; index++) {
//   const rangedValue = Math.floor(Math.random() * (732 - 8 + 1)) + 8;

//   array.push(rangedValue);
// }

// console.log(array);

// for (let index = 0; index < array.length; index++) {
//   if ((index + 1) % 3 == 0 && array[index] % 2 == 0) {
//     console.log(array[index]);
//   }
// }

//  4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив

// const array = [];

// for (let index = 0; array.length < 20; index++) {
//   const rangedValue = Math.floor(Math.random() * (732 - 8 + 1)) + 8;

//   array.push(rangedValue);
// }

// const newArray = [];

// console.log(array);

// for (let index = 0; index < array.length; index++) {
//   if ((index + 1) % 3 == 0 && array[index] % 2 == 0) {
//     console.log(array[index]);
//     newArray.push(array[index]);
//   }
// }

// console.log(newArray);

// 5. Вивести кожен елемент масиву, сусід справа якого є парним

// const array = [];

// for (let index = 0; array.length < 20; index++) {
//   const rangedValue = Math.floor(Math.random() * (732 - 8 + 1)) + 8;

//   array.push(rangedValue);
// }

// console.log(array);

// for (let index = 0; index < array.length; index++) {
//   if (array[index + 1] % 2 == 0) {
//     console.log(array[index]);
//   }
// }

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

// const arr = [100, 250, 50, 168, 120, 345, 188];

// const countAverageCheck = () => {
//   const amount = arr.reduce((acc, el) => (acc += el), 0);

//   return amount / arr.length;
// };

// const averageCheck = countAverageCheck();

// console.log(averageCheck.toFixed(2));

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

// const arr = [];

// for (let index = 0; arr.length < 10; index++) {
//   const rangedValue = Math.floor(Math.random() * (40 - 1 + 1)) + 8;

//   arr.push(rangedValue);
// }

// const newArray = arr.map((el) => el * 5);

// console.log(arr);
// console.log(newArray);

//  8. Створити масив з будь якими значеннями (стрінги, числа, і тд…). пройтись по ньому, і якщо елемент є числом – додати його в інший масив.

// const arr = ['name', 3, null, undefined, false, 5, true, 1, 'petro'];

// const numberArray = arr.filter((el) => typeof el == 'number');

// console.log(numberArray);
