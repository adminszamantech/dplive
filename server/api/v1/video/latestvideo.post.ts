// import { Prisma, PrismaClient } from '@prisma/client'
import { prisma } from "~/lib/prisma"
export default defineEventHandler(async (event) => {
    const getBody = await readBody(event)
    const videos = await prisma.bn_videos.findMany({
        where: {
            type:1,
            status: 1,
            deletable: 1
        },
        orderBy: {
            id: "desc"
        },
        select: {
            id: true,
            title: true,
            code: true,
            img_bg_path: true,
            created_at: true
        },
        take: parseInt(getBody?.take),
    });

    const total = await prisma.bn_videos.aggregate({
        _count: {
            id: true
        },
        where: {
            type: 1
        }
    })

    return {
        videos: videos,
        total_videos: total._count.id
    };

})