import { TNewOrder, TReservation } from "./reservation-types";
export class NewOrder {
  name: string;
  reservation: TReservation;
  price: number;
  constructor(params: TNewOrder) {
    this.name = params.name;
    this.reservation = params.reservation;
    this.price = params.price;
  }

  getInfo() {
    return `Клиент: ${this.name}. Ваша машина: ${this.reservation.model} \nСтоимость: ${this.setPrice()} `;
  }

  private setPrice() {
    if (this.reservation.mark == "Audi" || this.reservation.mark == "BMW") {
      return this.price - (this.price * 10 / 100)
    } else {
      return this.price;
    }
  }
}
