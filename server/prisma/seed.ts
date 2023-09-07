import { PrismaClient } from '@prisma/client'
import { 
  egoIsTheEnemyData, 
  ryanHolidayData, 
  timFerrisData, 
  toolsOfTitansData,
} from './seed-data'

const prisma = new PrismaClient()

async function main() {
  const ryanHoliday = await prisma.author.create({
    data: ryanHolidayData
  })

  const timFerris = await prisma.author.create({
    data: timFerrisData
  })

  const egoIsTheEnemy = await prisma.book.create({
    data: egoIsTheEnemyData
  })
  
  const toolsOfTitans = await prisma.book.create({
    data: toolsOfTitansData
  })

  await prisma.booksOnAuthor.createMany({
    data: [
      { bookId: egoIsTheEnemy.id, authorId: ryanHoliday.id },
      { bookId: toolsOfTitans.id, authorId: timFerris.id },
    ]
  })
}

main()
  .catch(async (e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
