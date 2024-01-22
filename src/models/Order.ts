import { Client, Delivery, Basket, TOrder } from "./order-types";

export class Order {
  client: Client;
  delivery: Delivery;
  basket: Basket;
  constructor(order: TOrder) {
    this.client = order.client;
    this.delivery = order.delivery;
    this.basket = order.basket;
  }

  getInfoOrder() {
    return `Клиент: ${this.client.firstName}. Ваши заказы:${this.getProductsText()}. \nДоставка придет: ${this.generateDeliveryDate().toDateString()} `;
  }
  private getProductsText() {
    let newProducts = []
    this.basket.products.forEach(product => {
        newProducts.push(" " + product.name)
    })
    return newProducts
  }
  private generateDeliveryDate() {
    const deliveryDate = new Date(this.delivery.dateTime);
    deliveryDate.setDate(deliveryDate.getDate() + 7); // getDate получается день
    return deliveryDate;
  }
}
