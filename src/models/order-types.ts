export interface Product {
  id: string;
  name: string;
  price: number;
}

export interface Shop {
  id: string;
  name: string;
  city: string;
  address: string;
  products: Product[];
}

export interface Client {
  id: string;
  firstName: string;
  lastName: string;
}

export type TDelivery =
  | {
      street: string;
      house: string;
      entranse?: number;
      floor?: number;
      apartment: number;
      comment?: string;
    }
  | {
      poinName: string;
      address: string;
    };

export interface Delivery {
  dateTime: Date;
  type: TDelivery;
}

export type TBasketProduct = {
    shopId: string;
} & Product

export interface Basket {
    products: TBasketProduct[];
    total: number;
}

export interface TOrder {
    client: Client;
    delivery: Delivery;
    basket: Basket;
}