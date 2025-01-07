// import { Prisma, PrismaClient } from '@prisma/client'
import { prisma } from "~/lib/prisma"
export default defineEventHandler(async (event) => {

    // const prisma = new PrismaClient()
    // const getBody = await readBody(event)
    const ads = await prisma.site_settings.findFirst({
        where: {
            id: 1
        },
        select: {
            logo: true,
            title: true,
            meta_keywords: true,
            meta_description: true,
            og_image: true,
            facebook: true,
            youtube:true,
            instagram:true,
            linkedin: true,
            twitter:true,
            editor_meta:true,
            address:true,
            favicon: true
        }
    })


    return ads

})