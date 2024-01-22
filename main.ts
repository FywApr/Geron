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

  console.log(infoOrder.getInfoOrder());
}
