import breakmoment from 'moment'
// import { Prisma, PrismaClient } from '@prisma/client'
import { prisma } from "~/lib/prisma"
export default defineEventHandler(async (event) => {
    breakmoment().locale('en')
    // const prisma = new PrismaClient()
    // const getBody = await readBody(event)
    // const getDate = new Intl.DateTimeFormat('en-US')
    const currentDate = breakmoment().utcOffset('+0600').format('YYYY-MM-DD[T]HH:mm:ss.SSS[Z]')

    const breakingNews = await prisma.bn_breaking_news.findMany({
        where: {

            expired_time: {
                // Greater Then "gte" & Less Then "lte" date or string
                gte: currentDate
            }

        },
        select: {
            id: true,
            news_title: true,
            news_link: true,
            expired_time: true,
        },
        orderBy: {
            id: 'desc'
        }
    })

    return breakingNews

})