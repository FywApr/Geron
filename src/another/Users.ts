export type TUser = {
  fullname: string;
  login: string;
  password: string | number;
  country: string;
  city: string;
  age: number;
  id: string;
};


export default class Users {
  fullname: string;
  login: string;
  password: string | number;
  country: string;
  city: string;
  age: number;
  id: string | number;

  constructor(params: TUser) {
    this.fullname = params.fullname;
    this.login = params.login;
    this.password = params.password;
    this.country = params.country;
    this.city = params.city;
    this.age = params.age;
    this.id = params.id;
  }
}


