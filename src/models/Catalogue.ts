import { Shop, TBasketProduct } from "./order-types";
import data from "./../data/shop.json";

export class Catalogue {
  private _data: Shop[] = [];
  constructor() {
    this._data = data;
  }

  getProducts() {
    const list: TBasketProduct[] = [];

    this._data.forEach(({ products, id}) => {
      products.forEach((product) => {
        list.push({ shopId: id, ...product });
      });
    });

    return list;
  }
}

export const catalogue = new Catalogue()
