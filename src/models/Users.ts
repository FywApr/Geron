type TUser = {
  fullname: string;
  login: string;
  password: string | number;
  country: string;
  city: string;
  age: number;
};


export default class Users {
  private _fullname: string;
  private _login: string;
  private _password: string | number;
  private _country: string;
  private _city: string;
  private _age: number;
  private _id: string | number;

  constructor(params: TUser) {
    this._fullname = params.fullname;
    this._login = params.login;
    this._password = params.password;
    this._country = params.country;
    this._city = params.city;
    this._age = params.age;
    this._id;
  }

  async setId() {
    await console.log(users);
  }
}

const getUsers = async () => {
    const response = await fetch(
      "https://run.mocky.io/v3/b1bd6eba-759d-4e61-9d45-0816794d2d0b"
    );
    const data = await response.json();
    return data;
  };
  
  let users: TUser[];
  getUsers().then((data) => {
    users = data;
  });

const test = new Users({ fullname, login, password, country, city, age });
