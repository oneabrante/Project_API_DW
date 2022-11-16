import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";

const saltRounds = 10;

import db from "../database/index.js";

function readAll() {
  return db.users;
}

function read(id) {
  const user = db.users.find((user) => user.id === id);

  return user;
}

function readByEmail(email) {
  const user = db.users.find((user) => user.email === email);

  return user;
}

async function create(user) {
  const id = uuidv4();

  const hash = await bcrypt.hash(user.password, saltRounds);

  const newUser = { ...user, id, password: hash };

  db.users.push(newUser);

  return newUser;
}

function update(user, id) {
  const newUser = { ...user, id };

  const index = db.users.findIndex((user) => user.id === id);

  db.users[index] = newUser;

  return newUser;
}

function remove(id) {
  const index = db.users.findIndex((user) => user.id === id);

  db.users.splice(index, 1);
}

export default {
  readAll,
  read,
  readByEmail,
  create,
  remove,
  update,
};