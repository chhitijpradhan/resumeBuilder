const { PrismaClient } = require("@prisma/client");
try {
  require("@prisma/client");
} catch (e) {
  process.exit(1);
}

const prisma = new prismaClient({
  log: ["query", "info", "warn", "error"],
});

prisma
  .$connect()
  .then(() => console.log("Prisma connected successfully"))
  .catch((err) => {
    console.error("Prisma connection failed:", err);
    process.exit(1);
  });

module.exports = prisma;
