// import { Prisma, PrismaClient } from '@prisma/client'
import { prisma } from "~/lib/prisma"
export default defineEventHandler(async (event) => {

    // const prisma = new PrismaClient()

    // National Video
    const nationalVideos = await prisma.bn_videos.findMany({
        where: {
            cat_id: 1,
            status: 1,
            deletable: 1
        },
        orderBy: {
            id: "desc"
        },
        take: 8
    })

    // Saradesh Video
    const saradeshVideos = await prisma.bn_videos.findMany({
        where: {
            cat_id: 2,
            status: 1,
            deletable: 1
        },
        orderBy: {
            id: "desc"
        },
        take: 8
    })

    // Entertainment Video
    const entertainmentVideos = await prisma.bn_videos.findMany({
        where: {
            cat_id: 4,
            status: 1,
            deletable: 1
        },
        orderBy: {
            id: "desc"
        },
        take: 8
    })

    // International Video
    const internationalVideos = await prisma.bn_videos.findMany({
        where: {
            cat_id: 3,
            status: 1,
            deletable: 1
        },
        orderBy: {
            id: "desc"
        },
        take: 8
    })

    // Lifestyle Video
    const lifestyleVideos = await prisma.bn_videos.findMany({
        where: {
            cat_id: 7,
            status: 1,
            deletable: 1
        },
        orderBy: {
            id: "desc"
        },
        take: 8
    })

    const data = [
        {
            videos: nationalVideos,
            category: await prisma.bn_video_categories.findFirst({
                where: {
                    id: 1
                }
            })
        },
        {
            videos: saradeshVideos,
            category: await prisma.bn_video_categories.findFirst({
                where: {
                    id: 2
                }
            })
        },
        {
            videos: entertainmentVideos,
            category: await prisma.bn_video_categories.findFirst({
                where: {
                    id: 4
                }
            })
        },
        {
            videos: internationalVideos,
            category: await prisma.bn_video_categories.findFirst({
                where: {
                    id: 3
                }
            })
        },
        {
            videos: lifestyleVideos,
            category: await prisma.bn_video_categories.findFirst({
                where: {
                    id: 7
                }
            })
        }
    ]

    // Video Position
    const videoPosition = await prisma.bn_video_positions.findFirst({
        where: {
            position_id: 3,
            deletable: 1,
        }
    })

    // Special Top Video
    const specialTopVideos = []
    if(videoPosition && videoPosition?.video_ids?.length > 2){
        // Make Array
        const videoid = videoPosition?.video_ids?.split(',')

        for(let i = 0; i < videoid?.length; i++){

            // Special Position video
            const spTopVideo = await prisma.bn_videos.findFirst({
                where: {
                    id: parseInt(videoid[i]),
                    deletable: 1,
                    status: 1
                }
            })
            
            // Special Position Video category
            const spvCategory = await prisma.bn_video_categories.findFirst({
                where: {
                    id: spTopVideo?.cat_id
                }
            })

            specialTopVideos.push({
                id: spTopVideo?.id,
                is_live: spTopVideo?.is_live,
                cat_id: spTopVideo?.cat_id,
                type: spTopVideo?.type,
                code: spTopVideo?.code,
                target: spTopVideo?.target,
                title: spTopVideo?.title,
                img_bg_path: spTopVideo?.img_bg_path,
                cat_slug: spvCategory?.slug,
                cat_name: spvCategory?.name_bn
            })

        }
        

    }

    const allCategory = await prisma.bn_video_categories.findMany({
        where: {
            deletable: 1,
            status: 1
        },
        orderBy:{
            id: 'asc'
        }
    })

    return {
        categoryVideos: data,
        specialTopVideos: specialTopVideos,
        allCategory: allCategory
    }

})