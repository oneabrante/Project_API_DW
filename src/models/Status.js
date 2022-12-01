import prisma from '../database/index.js';

async function readAll() {
  const status = await prisma.status.findMany();

  return status;
}

async function read(id) {
  const status = await prisma.status.findFirst({
    where: {
      id,
    },
  });

  return status;
}

async function create(status) {
  const newStatus = await prisma.status.create({
    data: status,
  });

  return newStatus;
}

async function update(status, id) {
  const newStatus = await prisma.status.update({
    data: status,
    where: {
      id,
    },
  });

  return newStatus;
}

async function remove(id) {
  await prisma.status.delete({
    where: {
      id,
    },
  });
}

export default {
  readAll,
  read,
  create,
  remove,
  update,
};