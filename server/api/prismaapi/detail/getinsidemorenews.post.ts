// import { Prisma, PrismaClient } from "@prisma/client"
import { prisma } from "~/lib/prisma"
export default defineEventHandler(async (event) => {

    // const prisma = new PrismaClient()
    const getBody = await readBody(event)

    //=============== First Detail Inside Content exept ==================//
    // Inside More News Get 5 Content

    const getInsideMoreNews = await prisma.bn_contents.findMany({
        where: {
            NOT: {
                content_id: {
                    equals: parseInt(getBody?.content_id)
                }
            },
            cat_id: parseInt(getBody?.cat_id),
            deletable: 1,
            status: 1
        },
        orderBy: {
            content_id: "desc"
        },
        take: 7
    })

    const insideMoreNews = []

    if (getInsideMoreNews?.length > 0) {
        for (let i = 0; i < getInsideMoreNews?.length; i++) {
            // if (getInsideMoreNews[i].content_id !== parseInt(getBody?.content_id)) {

            // Category
            const category = await prisma.bn_categories.findFirst({
                where: {
                    cat_id: getInsideMoreNews[i]?.cat_id, // Assign Category ID 
                }
            })

            // Subcategory
            const subcategory = await prisma.bn_subcategories.findFirst({
                where: {
                    cat_id: getInsideMoreNews[i]?.cat_id, // Assign Category ID 
                }
            })

            insideMoreNews.push({
                content_id: getInsideMoreNews[i]?.content_id,
                content_type: getInsideMoreNews[i]?.content_type,
                img_bg_path: getInsideMoreNews[i]?.img_bg_path,
                content_heading: getInsideMoreNews[i]?.content_heading,
                cat_slug: category?.cat_slug,
                subcat_slug: subcategory?.subcat_slug
            })
            // } 
        }
    }

    //=============== First Detail Inside Content exept ==================//

    return insideMoreNews;


})