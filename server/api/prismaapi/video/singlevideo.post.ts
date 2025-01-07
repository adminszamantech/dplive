// import { Prisma, PrismaClient } from '@prisma/client'
import { prisma } from "~/lib/prisma"
export default defineEventHandler(async (event) => {

    // const prisma = new PrismaClient()
    const getBody = await readBody(event)

    const video = await prisma.bn_videos.findFirst({
        where: {
            id: parseInt(getBody?.id)
        }
    })

    // If video has
    if (video) {

        const currentCategory = await prisma.bn_video_categories.findFirst({
            where: {
                id: parseInt(video?.cat_id)
            }
        })

        const currentVideo = {
            id: video?.id,
            cat_id: currentCategory?.id,
            type: video?.type,
            title: video?.title,
            code: video?.code,
            img_bg_path: video?.img_bg_path,
            link: video?.link,
            cat_name_bn: currentCategory?.name_bn,
            cat_slug: currentCategory?.slug,
            created_at: video?.created_at
        }
        const videos = await prisma.bn_videos.findMany({
            orderBy: {
                id: "desc"
            },
            take: 6
        })

        const getVideos = []
        for (let i = 0; i < videos?.length; i++) {

            if (videos[i]?.id !== video?.id) {
                const category = await prisma.bn_video_categories.findFirst({
                    where: {
                        id: videos[i]?.cat_id
                    }
                })

                getVideos.push({
                    id: videos[i]?.id,
                    cat_id: videos[i]?.cat_id,
                    type: videos[i]?.type,
                    title: videos[i]?.title,
                    code: videos[i]?.code,
                    img_bg_path: videos[i]?.img_bg_path,
                    link: videos[i]?.link,
                    cat_name_bn: category?.name_bn,
                    cat_slug: category?.slug,
                    created_at: videos[i]?.created_at
                })
            }

        }

        return {
            currentVideo: currentVideo,
            getVideos: getVideos
        }

    }

})