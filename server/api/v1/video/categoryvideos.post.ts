// import { Prisma, PrismaClient } from '@prisma/client'
import { prisma } from "~/lib/prisma"
export default defineEventHandler(async (event) => {

    // const prisma = new PrismaClient()
    const getBody = await readBody(event)

    const category = await prisma.bn_video_categories.findFirst({
        where: {
            slug: getBody?.cat_slug
        }
    })

    if (category) {
        const allCategory = await prisma.bn_video_categories.findMany({
            where: {
                deletable: 1,
                status: 1
            },
            orderBy: {
                id: 'asc'
            }
        })
        const videos = await prisma.bn_videos.findMany({
            where: {
                cat_id: category?.id,
                deletable: 1,
                status: 1
            },
            orderBy: {
                id: 'desc',
            },
            take: getBody?.take
        })

        return {
            videos: videos,
            category: category,
            allCategory: allCategory
        }
    }

})