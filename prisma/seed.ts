
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const adminEmail = 'admin@example.com';
  const adminHashedPassword = await bcrypt.hash('password123', 10);

  const adminUser = await prisma.user.upsert({
    where: { email: adminEmail },
    update: {},
    create: {
      email: adminEmail,
      password: adminHashedPassword,
    },
  });

  const testUser1Email = 'test1@example.com';
  const testUser1HashedPassword = await bcrypt.hash('password1', 10);

  const testUser1 = await prisma.user.upsert({
    where: { email: testUser1Email },
    update: {},
    create: {
      email: testUser1Email,
      password: testUser1HashedPassword,
    },
  });

  const testUser2Email = 'test2@example.com';
  const testUser2HashedPassword = await bcrypt.hash('password2', 10);

  const testUser2 = await prisma.user.upsert({
    where: { email: testUser2Email },
    update: {},
    create: {
      email: testUser2Email,
      password: testUser2HashedPassword,
    },
  });

  console.log({ adminUser, testUser1, testUser2 });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
