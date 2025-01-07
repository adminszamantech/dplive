// import { Prisma, PrismaClient } from "@prisma/client"
import { prisma } from "~/lib/prisma"
export default defineEventHandler(async (event) => {

    // const prisma = new PrismaClient()
    const getBody = await readBody(event)

    //=============== First Detail Inside Content exept ==================//

    const getContents = await prisma.bn_contents.findMany({
        where: {
            cat_id: parseInt(getBody?.cat_id),
            NOT: {
                content_id: {
                    equals: parseInt(getBody?.content_id)
                }
            },
            status: 1,
            deletable: 1
        },
        orderBy: {
            content_id: "desc"
        },
        take: 5
    })

    const data = []

    for (let i = 0; i < getContents?.length; i++) {

        const category = await prisma.bn_categories.findFirst({
            where: {
                cat_id: getContents[i]?.cat_id
            },
            select: {
                cat_name_bn: true,
                cat_slug: true
            }
        })
        // Subcategory
        const subcategory = await prisma.bn_subcategories.findFirst({
            where: {
                subcat_id: getContents[i]?.subcat_id
            }
        })

        data.push({
            content_id: getContents[i]?.content_id,
            content_type: getContents[i]?.content_type,
            img_bg_path: getContents[i]?.img_bg_path,
            content_heading: getContents[i]?.content_heading,
            cat_slug: category?.cat_slug,
            subcat_slug: subcategory?.subcat_slug
        })

    }
    //=============== First Detail Inside Content exept ==================//

    return {
        contents: data
    };


})