// – Дано 2 масиви з рівною кількістю об'єктів.

// let usersWithId = [
//   { id: 1, name: 'vasya', age: 31, status: false },

//   { id: 2, name: 'petya', age: 30, status: true },

//   { id: 3, name: 'kolya', age: 29, status: true },

//   { id: 4, name: 'olya', age: 28, status: false },
// ];

// let citiesWithId = [
//   { user_id: 3, country: 'USA', city: 'Portland' },

//   { user_id: 1, country: 'Ukraine', city: 'Ternopil' },

//   { user_id: 2, country: 'Poland', city: 'Krakow' },

//   { user_id: 4, country: 'USA', city: 'Miami' },
// ];

// З'єднати в один об'єкт користувача та місто з відповідними “id” та “user_id” .

// Записати цей об'єкт в новий масив

// const usersWithAdressArr = [];

// for (const user of usersWithId) {
//   const adress = citiesWithId.find((el) => el.user_id == user.id);

//   if (adress) {
//     const usersWithAdress = {
//       ...user,
//       adress,
//     };

//     usersWithAdressArr.push(usersWithAdress);
//   }
// }

// console.log(usersWithAdressArr);

// – Взяти масив з 10 чисел або створити його. Створити 2й порожній масив.
//  За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// const newArray = arr.map((el) => el);

// console.log(newArray);

// – Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

// – Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

// – Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

// const arr = ['a', 'b', 'c'];

// let forWord = '';

// for (let index = 0; index < arr.length; index++) {
//   forWord += arr[index];
// }

// let forofWord = '';

// for (const element of arr) {
//   forofWord += element;
// }

// let whileWord = '';

// let index = 0;

// while (index < arr.length) {
//   whileWord += arr[index];
//   index++;
// }

// console.log(forWord);
// console.log(forofWord);
// console.log(whileWord);
