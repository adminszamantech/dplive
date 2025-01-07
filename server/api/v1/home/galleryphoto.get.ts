// import { Prisma, PrismaClient } from '@prisma/client'
import { prisma } from "~/lib/prisma"
export default defineEventHandler(async (event) => {

    // const getBody = await readBody(event)
    // const prisma = new PrismaClient()

    const position = await prisma.p_album_positions.findFirst({
        where: {
            position_id: 1,
            status: 1,
            deletable: 1
        },
        select: {
            position_id: true,
            position_name: true,
            content_ids: true,
            total_content: true
        }
    })


    const data = []

    if (position && position?.content_ids?.length > 4) {

        // Get Photo Ids Array
        const arrayPhotoIds = position?.content_ids?.split(',')

        // For Loop for getting Photo
        for (let i = 0; i < arrayPhotoIds?.length; i++) {

            // Get Album By Album ID
            const album = await prisma.p_albums.findFirst({
                where: {
                    album_id: parseInt(arrayPhotoIds[i])
                }
            })

            // Get Photo By Album ID
            const photo = await prisma.p_galleries.findFirst({
                where: {
                    album_id: parseInt(arrayPhotoIds[i])
                }
            })

            // Get Category By Cat ID
            const photo_category = await prisma.p_categories.findFirst({
                where: {
                    cat_id: album?.cat_id
                }
            })
            data.push({
                cat_name: photo_category?.cat_name_bn,
                cat_slug: photo_category?.cat_slug,
                album_id: album?.album_id,
                album_name: album?.album_name,
                short_description: album?.short_description,
                photo_caption : photo?.photo_capture,
                photo: photo?.photo
            })

        }
    }

    return data;



})