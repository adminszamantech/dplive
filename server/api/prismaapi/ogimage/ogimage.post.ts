// import { Prisma, PrismaClient } from '@prisma/client'
import { prisma } from "~/lib/prisma"
import jimp from 'jimp'
export default defineEventHandler(async (event) => {

    // const prisma = new PrismaClient()
    const getBody = await readBody(event)
    const config = useRuntimeConfig()
    
    const ogImageBanner = await prisma.site_settings.findFirst({
        where: {
            id: 1
        },
       select: {
            post_ogimage: true
       }
    })
    
    let  watermarkImage = await jimp.read(`${config.public.apiUrl}/media/ogImages/${ogImageBanner?.post_ogimage}`);
    const image = await jimp.read(`${config.public.apiUrl}/media/content/images/${getBody?.img_bg_path}`);
    const watermark = watermarkImage.resize(750,jimp.AUTO);
    image.composite(watermark, 0, 337, {
      mode: jimp.BLEND_SOURCE_OVER,
      opacityDest: 1,
      opacitySource: 1,
    
    })

    const ogimage = await image.getBase64Async(jimp.AUTO)
    return ogimage;

  
})