import { PrismaClient } from '@prisma/client';

let prisma;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient(); // New instance for production
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient(); // Avoid reinitializing in development
  }
  prisma = global.prisma;
}

export default prisma;
