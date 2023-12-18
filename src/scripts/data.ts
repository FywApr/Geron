// import { hireds } from './data';
export const departaments: TDepartaments = {
  tech: [
    {
      name: "Проект Автоматизации",
      details: [
        {
          title: "Шасси",
          params: { width: 45, height: 20, weight: 70 },
        },
        {
          title: "Двигатель",
          params: { width: 35, height: 35, weight: 120 },
        },
        {
          title: "Экран",
          params: { width: 25, height: 15, weight: 20 },
        },
        {
          title: "Кабель",
          params: { width: 5, height: 1000, weight: 30 },
        },
        {
          title: "Корпус",
          params: { width: 60, height: 40, weight: 200 },
        },
      ],
      mainEngineer: "Иван Иванов",
      deadline: "2023-12-15",
    },
    {
      name: "Система Охлаждения",
      details: [
        {
          title: "Трубы",
          params: { width: 10, height: 200, weight: 50 },
        },
        {
          title: "Компрессор",
          params: { width: 40, height: 40, weight: 110 },
        },
        {
          title: "Радиатор",
          params: { width: 50, height: 30, weight: 75 },
        },
        {
          title: "Вентилятор",
          params: { width: 20, height: 20, weight: 25 },
        },
        {
          title: "Фильтр",
          params: { width: 15, height: 15, weight: 10 },
        },
      ],
      mainEngineer: "Петр Петров",
      deadline: "2023-10-20",
    },
  ],
  turbo: [
    {
      name: "Турбина A-100",
      details: [
        {
          title: "Лопатки",
          params: { width: 5, height: 30, weight: 20 },
        },
        {
          title: "Вал",
          params: { width: 10, height: 200, weight: 100 },
        },
        {
          title: "Кожух",
          params: { width: 100, height: 100, weight: 400 },
        },
        {
          title: "Подшипник",
          params: { width: 15, height: 15, weight: 10 },
        },
        {
          title: "Система смазки",
          params: { width: 30, height: 30, weight: 70 },
        },
      ],
      mainEngineer: "Сергей Сергеев",
      deadline: "2024-02-28",
    },
    {
      name: "Турбогенератор B-200",
      details: [
        {
          title: "Ротор",
          params: { width: 40, height: 100, weight: 300 },
        },
        {
          title: "Статор",
          params: { width: 50, height: 110, weight: 320 },
        },
        {
          title: "Соединительная часть",
          params: { width: 20, height: 30, weight: 50 },
        },
        {
          title: "Панель управления",
          params: { width: 60, height: 40, weight: 90 },
        },
        {
          title: "Кабельное соединение",
          params: { width: 10, height: 500, weight: 100 },
        },
      ],
      mainEngineer: "Андрей Андреев",
      deadline: "2023-11-15",
    },
  ],
  chemical: [
    {
      name: "Синтез органических соединений",
      details: [
        {
          title: "Реактор",
          params: { width: 100, height: 200, weight: 600 },
        },
        {
          title: "Фильтр",
          params: { width: 30, height: 30, weight: 40 },
        },
        {
          title: "Колонна дистилляции",
          params: { width: 80, height: 300, weight: 800 },
        },
        {
          title: "Хранилище",
          params: { width: 150, height: 150, weight: 1000 },
        },
        {
          title: "Система насосов",
          params: { width: 40, height: 40, weight: 120 },
        },
      ],
      mainEngineer: "Екатерина Смирнова",
      deadline: "2023-09-30",
    },
    {
      name: "Производство удобрений",
      details: [
        {
          title: "Бункер",
          params: { width: 200, height: 200, weight: 1500 },
        },
        {
          title: "Мешалка",
          params: { width: 50, height: 50, weight: 200 },
        },
        {
          title: "Лента конвейера",
          params: { width: 100, height: 1000, weight: 400 },
        },
        {
          title: "Система сушки",
          params: { width: 100, height: 100, weight: 500 },
        },
        {
          title: "Пакетировочная машина",
          params: { width: 60, height: 60, weight: 300 },
        },
      ],
      mainEngineer: "Ольга Олеговна",
      deadline: "2023-07-15",
    },
  ],
};


type TDepartaments = {
  tech: TDepartamentInfo[],
  turbo: TDepartamentInfo[],
  chemical: TDepartamentInfo[],
}
type TDepartamentInfo =  {
  name: string,
  details: TDepartamentInfoDetails[],
  mainEngineer: string,
  deadline: string
}

type TDepartamentInfoDetails = {
  title: string,
  params: TDepartamentInfoDetailsParams
}

type TDepartamentInfoDetailsParams = {
  width: number,
  height: number,
  weight: number
}

export const seasons = {
  winter: {
    closeProjects: 10,
    income: 600000,
    hired: 12,
    dismissed: 19,
    newProjects: 10,
  },
  spring: {
    closeProjects: 10,
    income: 750000,
    hired: 15,
    dismissed: 25,
    newProjects: 10,
  },
  summer: {
    closeProjects: 10,
    income: 550000,
    hired: 18,
    dismissed: 11,
    newProjects: 10,
  },
  autumn: {
    closeProjects: 10,
    income: 900000,
    hired: 9,
    dismissed: 12,
    newProjects: 10,
  },
};

// export const hireds = [
//   {
//     name: "John",
//     departament: "TECH",
//     experience: 3,
//     isClosedProjects: true,
//     salary: 400000,
//   },
//   {
//     name: "Alice",
//     departament: "DESIGN",
//     experience: 1,
//     isClosedProjects: false,
//     salary: 250000,
//   },
//   {
//     name: "Michael",
//     departament: "PROJECT",
//     experience: 7,
//     isClosedProjects: true,
//     salary: 800000,
//   },
//   {
//     name: "Emma",
//     departament: "TECH",
//     experience: 2,
//     isClosedProjects: true,
//     salary: 350000,
//   },
//   {
//     name: "David",
//     departament: "DESIGN",
//     experience: 4,
//     isClosedProjects: false,
//     salary: 500000,
//   },
//   {
//     name: "Sophia",
//     departament: "PROJECT",
//     experience: 5,
//     isClosedProjects: true,
//     salary: 600000,
//   },
//   {
//     name: "James",
//     departament: "TECH",
//     experience: 0,
//     isClosedProjects: false,
//     salary: 200000,
//   },
//   {
//     name: "Olivia",
//     departament: "DESIGN",
//     experience: 8,
//     isClosedProjects: true,
//     salary: 900000,
//   },
//   {
//     name: "Daniel",
//     departament: "PROJECT",
//     experience: 6,
//     isClosedProjects: false,
//     salary: 700000,
//   },
//   {
//     name: "Emily",
//     departament: "TECH",
//     experience: 3,
//     isClosedProjects: true,
//     salary: 400000,
//   },
//   {
//     name: "William",
//     departament: "DESIGN",
//     experience: 1,
//     isClosedProjects: false,
//     salary: 250000,
//   },
//   {
//     name: "Ava",
//     departament: "PROJECT",
//     experience: 7,
//     isClosedProjects: true,
//     salary: 800000,
//   },
//   {
//     name: "Alexander",
//     departament: "TECH",
//     experience: 2,
//     isClosedProjects: true,
//     salary: 350000,
//   },
//   {
//     name: "Mia",
//     departament: "DESIGN",
//     experience: 4,
//     isClosedProjects: false,
//     salary: 500000,
//   },
//   {
//     name: "Benjamin",
//     departament: "PROJECT",
//     experience: 5,
//     isClosedProjects: true,
//     salary: 600000,
//   },
//   {
//     name: "Charlotte",
//     departament: "TECH",
//     experience: 0,
//     isClosedProjects: false,
//     salary: 200000,
//   },
//   {
//     name: "Henry",
//     departament: "DESIGN",
//     experience: 8,
//     isClosedProjects: true,
//     salary: 900000,
//   },
//   {
//     name: "Elijah",
//     departament: "PROJECT",
//     experience: 6,
//     isClosedProjects: false,
//     salary: 700000,
//   },
//   {
//     name: "Scarlett",
//     departament: "TECH",
//     experience: 3,
//     isClosedProjects: true,
//     salary: 400000,
//   },
//   {
//     name: "Lucas",
//     departament: "DESIGN",
//     experience: 1,
//     isClosedProjects: false,
//     salary: 250000,
//   },
//   {
//     name: "Victoria",
//     departament: "PROJECT",
//     experience: 7,
//     isClosedProjects: true,
//     salary: 800000,
//   },
// ];

export const dismissed = [
  {
    name: "John",
    departament: "TECH",
    workPeriod: 3,
    salary: 400000,
    isWill: false,
  },
  {
    name: "Alice",
    departament: "DESIGN",
    workPeriod: 1,
    salary: 250000,
    isWill: true,
  },
  {
    name: "Michael",
    departament: "PROJECT",
    workPeriod: 7,
    salary: 800000,
    isWill: false,
  },
  {
    name: "Emma",
    departament: "TECH",
    workPeriod: 2,
    salary: 350000,
    isWill: false,
  },
  {
    name: "David",
    departament: "DESIGN",
    workPeriod: 4,
    salary: 500000,
    isWill: true,
  },
  {
    name: "Sophia",
    departament: "PROJECT",
    workPeriod: 5,
    salary: 600000,
    isWill: false,
  },
  {
    name: "James",
    departament: "TECH",
    workPeriod: 0,
    salary: 200000,
    isWill: true,
  },
  {
    name: "Olivia",
    departament: "DESIGN",
    workPeriod: 8,
    salary: 900000,
    isWill: false,
  },
  {
    name: "Daniel",
    departament: "PROJECT",
    workPeriod: 6,
    salary: 700000,
    isWill: false,
  },
  {
    name: "Emily",
    departament: "TECH",
    workPeriod: 3,
    salary: 400000,
    isWill: true,
  },
  {
    name: "William",
    departament: "DESIGN",
    workPeriod: 1,
    salary: 250000,
    isWill: false,
  },
  {
    name: "Ava",
    departament: "PROJECT",
    workPeriod: 7,
    salary: 800000,
    isWill: true,
  },
  {
    name: "Alexander",
    departament: "TECH",
    workPeriod: 2,
    salary: 350000,
    isWill: true,
  },
  {
    name: "Mia",
    departament: "DESIGN",
    workPeriod: 4,
    salary: 500000,
    isWill: false,
  },
  {
    name: "Benjamin",
    departament: "PROJECT",
    workPeriod: 5,
    salary: 600000,
    isWill: true,
  },
  {
    name: "Charlotte",
    departament: "TECH",
    workPeriod: 0,
    salary: 200000,
    isWill: false,
  },
  {
    name: "Henry",
    departament: "DESIGN",
    workPeriod: 8,
    salary: 900000,
    isWill: true,
  },
  {
    name: "Elijah",
    departament: "PROJECT",
    workPeriod: 6,
    salary: 700000,
    isWill: false,
  },
  {
    name: "Scarlett",
    departament: "TECH",
    workPeriod: 3,
    salary: 400000,
    isWill: false,
  },
  {
    name: "Lucas",
    departament: "DESIGN",
    workPeriod: 1,
    salary: 250000,
    isWill: true,
  },
];
