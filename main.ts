import testFunction from "./src/scripts/geron"; // default импорт
import { test } from "./src/scripts/geron"; // определенный импорт
import * as testObject from "./src/scripts/geron"; // импорт всего в обьекте

// console.log(test)
// console.log(testFunction())
// console.log(testObject.test1)

const office = {
  tech: {
    employersCount: 10,
    jobsCount: 5,
  },
  design: {
    employersCount: 10,
    jobsCount: 5,
  },
};

// Object.entries(office).forEach(([keys, values]) => {
//     console.log(keys, values)
// })