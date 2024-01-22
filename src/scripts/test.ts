// import { TProduct } from "../another/NewOrder";
// import Order from "../models/Order";
// import NewOrder from "../another/NewOrder";
// import { TUser } from "../models/Users";
// import Users from "../models/Users";
// const user = "Виктор Марш";
// const address = "Торайгырова 16";
// const sum = 30000;

// const order = new Order({ user, address, sum });

// const getUsers = async () => {
//   const response = await fetch(
//     "https://run.mocky.io/v3/b1bd6eba-759d-4e61-9d45-0816794d2d0b"
//   );
//   const data = await response.json();
//   return data;
// };

// const getProducts = async () => {
//   const response = await fetch(
//     "https://run.mocky.io/v3/de2f0069-2896-4b67-99cc-fbd0ff242ccf"
//   );
//   const data: TProduct[] = await response.json();
//   const products: TProduct[] = [];
//   products.push(data[2], data[4], data[0], data[3]);
//   return products
// };

// let users: TUser[];

// getUsers().then((data) => {
//   users = data;
//   const user: TUser = users.find((person) => person.login == "alex777");

//   const alex = new Users({
//     fullname: user.fullname,
//     login: user.login,
//     password: user.password,
//     country: user.country,
//     city: user.city,
//     age: user.age,
//     id: user.id,
//   });

//   getProducts().then(products => {
//     console.log(alex.fullname)
//     const newOrder = new NewOrder({
//       fullname: alex.fullname,
//       country: alex.country,
//       city: alex.city,
//       products: products,
//     })

//     console.log(newOrder.getInfoOrder())
//     console.log(newOrder.getInfoDelivery())
//   })
// });
