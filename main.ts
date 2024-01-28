import { catalogue } from "./src/models/Catalogue";
import { myAddress } from "./src/models/Delivery";
import { Order } from "./src/models/Order";
import { user } from "./src/models/Client";
import { TOrder, TBasketProduct } from "./src/models/order-types";

const order: TOrder = {
  client: user,
  delivery: {
    dateTime: new Date(),
    type: myAddress,
  },
  basket: {
    products: [],
    total: 0,
  },
};

for (let j = 0; j < 3; j++) {
  const products: TBasketProduct[] = [];
  // рандом товары
  for (let i = 0; i < Array(5).length; i++) {
    const random = Math.floor(Math.random() * 50);
    const selectProduct = catalogue.getProducts()[random];
    products.push(selectProduct);
  }

  order.basket = {
    products: products,
    total: products.reduce(
      (sum, currentProduct) => sum + currentProduct.price,
      0
    ),
  };

  const infoOrder = new Order(order);

  // console.log(infoOrder.getInfoOrder());
}

import { TNewOrder } from './src/models/reservation-types';
import autos from "./src/data/auto-show.json";
import users from "./src/data/users.json";
import { NewOrder } from "./src/models/NewOrder"

const newOrder: TNewOrder = {
  name: users[1].name,
  reservation: {
    autoShow: autos[1].address,
    mark: autos[1].name,
    model: autos[1].cars[1].model
  },
  price: autos[1].cars[1].price
}

if (users[1].age < 20) {
  console.log("Вам отказано");
} else {
  const newInfoOrder = new NewOrder(newOrder)
  console.log(newInfoOrder.getInfo())
}