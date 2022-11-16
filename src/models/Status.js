import { v4 as uuidv4 } from "uuid";

import db from "../database/index.js";

function readAll() {
  return db.status;
}

function read(id) {
  const status = db.status.find((status) => status.id === id);

  return status;
}

function create(status) {
  const id = uuidv4();

  const newStatus = { ...status, id };

  db.status.push(newStatus);

  return newStatus;
}

function update(status, id) {
  const newStatus = { ...status, id };

  const index = db.status.findIndex((status) => status.id === id);

  db.status[index] = newStatus;

  return newStatus;
}

function remove(id) {
  const index = db.status.findIndex((status) => status.id === id);

  db.status.splice(index, 1);
}

export default {
  readAll,
  read,
  create,
  remove,
  update,
};