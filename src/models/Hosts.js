import { v4 as uuidv4 } from "uuid";

import db from "../database/index.js";

function readAll() {
  return db.hosts;
}

function read(id) {
  const host = db.hosts.find((host) => host.id === id);

  return host;
}

function create(host) {
  const id = uuidv4();

  const newHost = { ...host, id };

  db.hosts.push(newHost);

  return newHost;
}

function update(host, id) {
  const newHost = { ...host, id };

  const index = db.hosts.findIndex((host) => host.id === id);

  db.hosts[index] = newHost;

  return newHost;
}

function remove(id) {
  const index = db.hosts.findIndex((host) => host.id === id);

  db.hosts.splice(index, 1);
}

export default {
  readAll,
  read,
  create,
  remove,
  update,
};