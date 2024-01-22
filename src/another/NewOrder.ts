export type TProduct = {
  name: string;
  price: number;
};

export type TDelivery = {
  fullname: string;
  country: string;
  city: string;
  products: TProduct[];
};

export default class newOrder {
  fullname: string;
  country: string;
  city: string;
  products: TProduct[];
  price: number;
  private _createDate: Date;
  private _delivery: Date;

  constructor(params: TDelivery) {
    this.fullname = params.fullname;
    this.country = params.country;
    this.city = params.city;
    this.products = params.products;
    this.price = this.getPrice();
    this._createDate = new Date();
    this._delivery = this.generateDeliveryDate();
  }

  private generateDeliveryDate() {
    const deliveryDate = new Date(this._createDate);
    deliveryDate.setDate(deliveryDate.getDate() + 10); // getDate получается день
    return deliveryDate;
  }

  private getPrice() {
    let total = 0;
    this.products.forEach((product) => (total += product.price));
    return total;
  }

  getInfoOrder() {
    return `Заказчик: ${this.fullname} \n ${this.products[0].name}, ${this.products[1].name}, ${this.products[2].name}, ${this.products[3].name}`;
  }

  getInfoDelivery() {
    const date = `${this._delivery.getDate()}.${
      this._delivery.getMonth() + 1
    }.${this._delivery.getFullYear()}`;
    return `Ваш заказ, ${this.fullname}, на сумму: ${this.price} будет доставлен ${date}`;
  }
}
