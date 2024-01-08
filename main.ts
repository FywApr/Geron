import testFunction from "./src/scripts/geron"; // default импорт
import { test } from "./src/scripts/geron"; // определенный импорт
import * as testObject from "./src/scripts/geron"; // импорт всего в обьекте
// console.log(test)
// console.log(testFunction())
// console.log(testObject.test1)

// Object.entries(office).forEach(([keys, values]) => {
//     console.log(keys, values)
// })

// import { departaments } from "./src/scripts/data";

// Object.entries(departaments).forEach(([keys, values]) => {
//   let totalDepartament = 0;
//   values.forEach((value) => {
//     let totalMoney = 0;
//     console.log("Название проекта: ", value.name);
//     value.details.forEach((detail) => {
//       console.log("Название детали: ", detail.title);
//       totalMoney +=
//         ((detail.params.height * detail.params.width) / detail.params.weight) *
//         150;
//       console.log(
//         "Стоимость детали: ",
//         ((detail.params.height * detail.params.width) / detail.params.weight) *
//           150
//       );
//     });
//     console.log("Общий бюджет на проект: ", totalMoney);
//     totalDepartament += totalMoney;
//   });
//   console.log("Отдел: ", keys, " . Общий бюджет на отдел: ", totalDepartament);
//   console.log("-----------------------");
// });

// ------------------------- 25.12.2023 -------------------------------

// ================== PROMISE ==============================
// type TUser = {
//   userId: number;
//   id: number;
//   title: string;
//   body: string;
// };
// const getData = async () => {
//   return fetch("https://jsonplaceholder.typicode.com/posts/1");
// };

// const myPromise = async (status) => {
//   let user: TUser = await (await getData()).json();
//   return new Promise((reslove, reject) => {
//     setTimeout(() => {
//       if (status) {
//         reslove(user);
//       } else {
//         reject("Произошла ошибка");
//       }
//     }, 1000);
//   });
// };

// const checkResult = async () => {
//   await myPromise(true)
//     .then((response) => {
//       // удачно
//       console.log(`Имя:`);
//     })
//     .catch((error) => {
//       // неудачно
//       console.log(error);
//     })
//     .finally(() => {
//       console.log("Промис сработал");
//     });
//   console.log("Привет");
// };

// checkResult();

// ========================= ASYNC ========================

// const getUser = async () => {
//   let user = (await myPromise(true)) as TUser;
//   console.log(user);
// };
// getUser().catch((error) => {
//   console.log(error);
// });

// // =========================== FETCH=========================

// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

// Задача

// type TUsers = {
//   postId: number;
//   id: number;
//   name: string;
//   email: string;
//   body: string;
// };

// const getUsers = async () => {
//   const response = await fetch(
//     "https://jsonplaceholder.typicode.com/posts/1/comments"
//   );
//   const data: TUsers[] = await response.json();

//   let firstValue: TUsers = data[0];
//   await data.forEach((values) => {
//     if (firstValue.body.length < values.body.length) {
//       firstValue = values;
//     }
//   });
//   return firstValue;
// };

// getUsers().then((data) =>{
//   console.log(data)
// })
