// import { Prisma, PrismaClient } from "@prisma/client"
import { prisma } from "~/lib/prisma"
export default defineEventHandler(async (event) => {

    // const prisma = new PrismaClient()
    const getBody = await readBody(event)
    
    // Get More Releted Contents
    const getMreletedContents = await prisma.bn_contents.findMany({
        where: {
            NOT: {
                content_id: {
                    in: getBody?.readedids
                }
            },
            deletable: 1,
            status: 1
        },
        orderBy: {
            content_id: 'desc'
        },
        take: 4,
        skip: 1
    })


    const data = []

    for (let i = 0; i < getMreletedContents?.length; i++) {
        // Get Category
        const category = await prisma.bn_categories.findFirst({
            where: {
                cat_id: getMreletedContents[i]?.cat_id
            }
        })
        // Sub Category
        const subcategory = await prisma.bn_subcategories.findFirst({
            where: {
                cat_id: getMreletedContents[i]?.cat_id
            }
        })

        // Pushing Data
        data.push({
            content_id: getMreletedContents[i]?.content_id,
            content_type: getMreletedContents[i]?.content_type,
            cat_id: getMreletedContents[i]?.cat_id,
            content_heading: getMreletedContents[i]?.content_heading,
            img_bg_path: getMreletedContents[i]?.img_bg_path,
            category: {
                cat_name_bn: category?.cat_name_bn,
                cat_slug: category?.cat_slug
            },
            subcategory: {
                subcat_name_bn: subcategory?.subcat_name_bn,
                subcat_slug: subcategory?.subcat_slug
            }

        })

    }

    return data;

})