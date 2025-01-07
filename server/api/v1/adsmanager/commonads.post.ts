import adsmoment from 'moment'
import { prisma } from "~/lib/prisma"
// import { Prisma, PrismaClient } from '@prisma/client'
export default defineEventHandler(async (event) => {
    
    // Moment JS Localize
    adsmoment.locale('en')
    // const prisma = new PrismaClient()
    const getBody = await readBody(event)
    
    // const currentDate = moment().zone('+0600').format('YYYY-MM-DD[T]HH:mm:ss.SSS[Z]')
    const currentDate = adsmoment().utcOffset('+0600').format('YYYY-MM-DD[T]HH:mm:ss.SSS[Z]')

    const ads = await prisma.bn_ads.findFirst({
        where: {
            page: parseInt(getBody?.page),
            position: parseInt(getBody?.position),
            status: 1,
            end_time: {
                gte: currentDate
            }
        },
        select: {
            id: true,
            type: true,
            page: true,
            status: true,
            position: true,
            dfp_header_code: true,
            code: true,
            desktop_image_path: true,
            mobile_image_path: true,
            external_link: true,
            start_time: true,
            end_time: true
        }
    })


    return ads

})