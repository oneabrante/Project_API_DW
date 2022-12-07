import prisma from '../database/index.js';

async function readAll() {
  const status = await prisma.status.findMany({
    include: {
      user: true,
    },
  });

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


// async function create(status, id) {
  
//   const user = await prisma.user.findUnique({ where: {id: Number(id) } });
  
//   if(!user) {
//     return res.json({message: "Usuário inexistente"})
//   }
  
//     const newStatus = await prisma.status.create({
//       data: {
//         status,
//         userId: user.id,
//       },
//       include: {
//         user: true
//       },
//     });
  
//     return newStatus;
//   }


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
      id
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