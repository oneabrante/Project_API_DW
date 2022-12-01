import bcrypt from 'bcrypt';

const saltRounds = Number(process.env.SALT);

import prisma from '../database/index.js';


async function readAll() {
  const users = await prisma.user.findMany();

  return users;
}

async function read(id) {
  const user = await prisma.user.findFirst({
    where: {
      id,
    },
  });

  return user;
}

async function readByEmail(email) {
  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  return user;
}

async function create(user) {
  const hash = await bcrypt.hash(user.password, saltRounds);

  user.password = hash;

  const newUser = await prisma.user.create({
    data: user,
  });

  return newUser;
}

async function update(user, id) {
  const updatedUser = await prisma.user.update({
    where: {
      id,
    },
    data: user,
  });

  return updatedUser;
}

async function remove(id) {
  await prisma.user.delete({
    where: {
      id,
    },
  });
}

export default {
  readAll,
  read,
  readByEmail,
  create,
  remove,
  update,
};