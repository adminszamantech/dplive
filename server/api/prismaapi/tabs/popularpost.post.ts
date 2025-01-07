// import { Prisma, PrismaClient } from '@prisma/client'
import popularMoment from 'moment'
import { prisma } from "~/lib/prisma"
export default defineEventHandler(async (event) => {
    popularMoment().locale('en')
    // const prisma = new PrismaClient()
    const getBody = await readBody(event)

    const contents = await prisma.bn_contents.findMany({
        where: {
            status: 1,
            deletable: 1,
            created_at: {
                gt: popularMoment().subtract(3, 'days').format('YYYY-MM-DD[T]HH:mm:ss.SSS[Z]')
            }
        },
        select: {
            cat_id: true,
            content_heading: true,
            content_details: true,
            content_id: true,
            content_type: true,
            subcat_id: true,
            img_bg_path: true,
            created_at: true,
            total_hit: true
        },
        orderBy: {
            total_hit: "desc"
        },
        take: parseInt(getBody?.take)

    })

    const data = []
    if (contents?.length > 0) {

        for (let i = 0; i < contents.length; i++) {

            // Category
            const category = await prisma.bn_categories.findFirst({
                where: {
                    cat_id: contents[i]?.cat_id,
                    cat_type: 1
                }
            })
            // Subcategory
            const subcategory = await prisma.bn_subcategories.findFirst({
                where: {
                    subcat_id: contents[i]?.subcat_id
                }
            })

            // Push Data
            data.push({
                content_id: contents[i]?.content_id,
                content_type: contents[i]?.content_type,
                img_bg_path: contents[i]?.img_bg_path,
                content_heading: contents[i]?.content_heading,
                content_details: contents[i]?.content_details,
                bn_cat_name: category?.cat_name_bn,
                cat_slug: category?.cat_slug,
                subcat_slug: subcategory?.subcat_slug,
                created_at: contents[i]?.created_at,
                total_hit: contents[i]?.total_hit,
            })

        }

        return data

    }


})