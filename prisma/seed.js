const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const products = [
  { name: "ANIMATIONS & Cartoons" },
  { name: "HEROES & Villains" },
  { name: "MOVIES & TV" },
  { name: "ICONS & Sports & More" },
  { name: "SHOP By Type" },
];

async function main() {
  const product = await prisma.product.createMany({
    data: products,
  });

  console.log(product);
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
