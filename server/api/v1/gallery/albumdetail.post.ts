// import { Prisma, PrismaClient } from "@prisma/client"
import { prisma } from "~/lib/prisma"
export default defineEventHandler(async (event) => {

    // const prisma = new PrismaClient()
    const getBody = await readBody(event)

    const photoAlbum = await prisma.p_albums.findFirst({
        where: {
            album_id: parseInt(getBody?.photo_id)
        }
    })
    
    const albumCategory = await prisma.p_categories.findFirst({
        where: {
            cat_id: photoAlbum?.cat_id
        }
    })

    const albumGallery = await prisma.p_galleries.findMany({
        where: {
            album_id: photoAlbum?.album_id
        }
    })

    return {
        album_name: photoAlbum?.album_name,
        created_at: photoAlbum?.created_at,
        updated_at: photoAlbum?.updated_at,
        short_description: photoAlbum?.short_description,
        cat_name: albumCategory?.cat_name_bn,
        cat_slug: albumCategory?.cat_slug,
        photo_galleries: albumGallery
    }


})