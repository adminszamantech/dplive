// import { Prisma, PrismaClient } from '@prisma/client'
import { prisma } from "~/lib/prisma"
export default defineEventHandler(async (event) => {

    // const prisma = new PrismaClient()
    const getBody = await readBody(event)

    // Get Video Position
    const videoPosition = await prisma.bn_video_positions.findFirst({
        where: {
            position_id: 1,
            deletable: 1
        },

    })

    const data = []
    if (videoPosition && videoPosition?.video_ids?.length > 0) {
        const vdieoPositionArray = videoPosition?.video_ids?.split(',')
        const getVideoIds = vdieoPositionArray?.splice(0, parseInt(getBody?.take))

        for (let i = 0; i < getVideoIds?.length; i++) {
            const video = await prisma.bn_videos.findFirst({
                where: {
                    id: parseInt(getVideoIds[i]),
                    status: 1,
                    deletable: 1
                }
            })


            // Category
            const category = await prisma.bn_video_categories.findFirst({
                where: {
                    id: parseInt(video?.cat_id)
                },
                select: {
                    id: true,
                    slug: true,
                    name_bn: true
                }
            })

            data.push({
                id: video?.id,
                cat_id: category?.id,
                slug: category?.slug,
                type: video?.type,
                title: video?.title,
                img_bg_path: video?.img_bg_path,
                img_sm_path: video?.img_sm_path,
                code: video?.code,
                is_live: video?.is_live,
                target: video?.target
            })
          

        }

        return data

    }





})