export type TUser = {
  name: string;
  surname: string;
  age: number;
  phone_number: string | number;
};

export type TAutoShow = {
  name: string;
  city: string;
  address: string;
  hours: string | number;
  cars: TCar[]
};

export type TCar = {
  model: string;
  color: string;
  year: number;
  price: number;
};

export type TNewOrder = {
  name: string;
  reservation: TReservation;
  price: number;
}

export type TReservation = {
  autoShow: string;
  mark: string;
  model: string;
}