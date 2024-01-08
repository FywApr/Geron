import Order from "../models/Order";

const user = "Виктор Марш";
const address = "Торайгырова 16";
const sum = 30000;

const order = new Order({ user, address, sum });
