// import { Prisma, PrismaClient } from "@prisma/client"
import { prisma } from "~/lib/prisma"
export default defineEventHandler(async (event) => {

    // const prisma = new PrismaClient()
    const getBody = await readBody(event)

    const albumCategory = await prisma.p_categories.findFirst({
        where: {
            cat_slug: getBody?.album_id
        }
    })

    const albums = await prisma.p_albums.findMany({
        where: {
            cat_id: albumCategory?.cat_id,
            deletable: 1,
            status:1
        },
        take: 12,
        orderBy: {
            album_id: 'desc'
        },
        select: {
            album_id: true,
            cat_id: true,
            album_name: true
        }
    })


    const data = [];

    for(let i = 0; i < albums?.length; i++){

        const photo = await prisma.p_galleries.findFirst({
            where: {
                album_id: albums[i].album_id
            }
        })
     

        data.push({
            album_id: albums[i].album_id,
            album_name: albums[i].album_name,
            photo_path: photo?.photo,
            cat_name_bn: albumCategory?.cat_name_bn,
            cat_slug: albumCategory?.cat_slug
        })

    }




    return {
        catalbums: data,
        cat_name_bn: albumCategory?.cat_name_bn,
        cat_slug: albumCategory?.cat_slug
    }
 


})