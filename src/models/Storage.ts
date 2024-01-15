import { TProduct } from "./Products";
import storage from "./../data/storage.json";

type TStorage = {
  id: number,
  city: string,
  name: string,
  address: string,
  products: TProduct[];
};

export class Storage {
  private _data: TStorage[];

  constructor() {
    this._data = storage;
  }

  getAllStorages() {
    return this._data;
  }

  private setUpdateStorage(storage: TStorage) {
    this._data = this._data.map((item) => {
      if (item.id !== storage.id) return item;
      return storage;
    });
  }

  protected getStorage(id: number): TStorage {
    return this._data.find((item) => item.id === id);
  }

  protected setProducts(id: number, product: TProduct) {
    const storage = this.getStorage(id);
    storage.products.push(product);
    this.setUpdateStorage(storage);
  }
}
