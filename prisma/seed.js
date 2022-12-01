import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const seed = {
    status: [
     {  name: "Google",
        address: "www.google.com",
        protocolo: "http",
    },
    {  name: "Facebook",
        address: "www.facebook.com",
        protocolo: "https",
    },
    {  name: "Twitter",
        address: "www.twitter.com",
        protocolo: "https",
    },
    ],
};

async function main() {
  for (const status of seed.status) {
    await prisma.status.create({ data: status });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });