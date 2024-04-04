import { prisma } from "../src/lib/prisma"

async function seed() {
  await prisma.event.create({
    data: {
      id: "1",
      title: "Generic Event",
      slug: "generic-event",
      details: "This is a generic event",
      maximumAttendees: 120,
    }
  })
}

seed().then(() => {
  console.log("Database seeded!");
  prisma.$disconnect();
});