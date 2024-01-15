import { Storage } from "./Storage";
import products from "../data/products.json"

export type TProduct = {
  product_name: string,
  seller_name: string,
  quantity: number,
  price: number,
  delivery_id: number,
  id: number
};

export class Products extends Storage {
  constructor() {
    super();
    products.forEach(item => {
      this.setProducts(item.id, item)
    })
  }
}
