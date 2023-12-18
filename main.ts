import testFunction from "./src/scripts/geron"; // default импорт
import { test } from "./src/scripts/geron"; // определенный импорт
import * as testObject from "./src/scripts/geron"; // импорт всего в обьекте
// console.log(test)
// console.log(testFunction())
// console.log(testObject.test1)

// Object.entries(office).forEach(([keys, values]) => {
//     console.log(keys, values)
// })

import { departaments } from "./src/scripts/data";


Object.entries(departaments).forEach(([keys, values]) => {
  let totalDepartament = 0;
  values.forEach((value) => {
    let totalMoney = 0;
    console.log("Название проекта: ", value.name);
    value.details.forEach((detail) => {
      console.log("Название детали: ", detail.title);
      totalMoney +=
        ((detail.params.height * detail.params.width) / detail.params.weight) *
        150;
      console.log(
        "Стоимость детали: ",
        ((detail.params.height * detail.params.width) / detail.params.weight) *
          150
      );
    });
    console.log("Общий бюджет на проект: ", totalMoney);
    totalDepartament += totalMoney;
  });
  console.log("Отдел: ", keys, " . Общий бюджет на отдел: ", totalDepartament);
  console.log("-----------------------");
});
