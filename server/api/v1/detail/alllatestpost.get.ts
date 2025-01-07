// import { Prisma, PrismaClient } from "@prisma/client"
import { prisma } from "~/lib/prisma"
export default defineEventHandler(async (event) => {

    // const prisma = new PrismaClient()
    // const getBody = await readBody(event)

    //=============== First Detail Inside Content exept ==================//
    // Inside More News Get 5 Content

    const data = []
    const contents = await prisma.bn_contents.findMany({
        where: {
            status: 1,
            deletable: 1
        },
        orderBy: {
            content_id: "desc"
        },
        take: 20
    })


    for (let i = 0; i < 20; i++) {
        const category = await prisma.bn_categories.findFirst({
            where: {
                cat_id: contents[i].cat_id
            }
        })

        const subcategory = await prisma.bn_subcategories.findFirst({
            where: {
                subcat_id: contents[i]?.subcat_id
            }
        })

        data.push({
            content_id: contents[i]?.content_id,
            content_type: contents[i]?.content_type,
            content_heading: contents[i]?.content_heading,
            img_bg_path: contents[i]?.img_bg_path,
            cat_slug: category?.cat_slug,
            subcat_slug: subcategory?.subcat_slug,
        })
    }


    return data


})