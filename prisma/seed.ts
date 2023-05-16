import prisma from "../src/lib/prisma"

async function main() {
  // const response = await Promise.all([
  //   prisma.users.upsert({
  //     where: { email: "rauchg@vercel.com" },
  //     update: {},
  //     create: {
  //       email: "rauchg@vercel.com",
  //     },
  //   }),
  //   prisma.users.upsert({
  //     where: { email: "lee@vercel.com" },
  //     update: {},
  //     create: {
  //       email: "lee@vercel.com",
  //     },
  //   }),
  //   await prisma.users.upsert({
  //     where: { email: "stey@vercel.com" },
  //     update: {},
  //     create: {
  //       email: "stey@vercel.com",
  //     },
  //   }),
  // ])
  // console.log(response)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
