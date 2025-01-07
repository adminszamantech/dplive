// import { Prisma, PrismaClient } from "@prisma/client"
import { prisma } from "~/lib/prisma"
export default defineEventHandler( async (event) => {
    
    // const prisma = new PrismaClient()
    const getBody = await readBody(event)

    const insidemorenews = await prisma.bn_contents.findMany({
        where: {
            NOT: {
                content_id: {
                    in:[parseInt(getBody?.currentPostDetailId), parseInt(getBody?.morePostId)]
                }
            },
            cat_id: parseInt(getBody?.cat_id),
            status:1,
            deletable: 1
        },
        orderBy: {
            content_id: 'desc'
        },
        take: 5
    })


    const data = []

    for (let i = 0; i < insidemorenews?.length; i++) {
        // Get Category
        const category = await prisma.bn_categories.findFirst({
            where: {
                cat_id: insidemorenews[i]?.cat_id
            }
        })
        // Sub Category
        const subcategory = await prisma.bn_subcategories.findFirst({
            where: {
                cat_id: insidemorenews[i]?.cat_id
            }
        })

        // Pushing Data
        data.push({
            content_id: insidemorenews[i]?.content_id,
            content_type: insidemorenews[i]?.content_type,
            content_heading: insidemorenews[i]?.content_heading,
            img_bg_path: insidemorenews[i]?.img_bg_path,
            cat_slug: category?.cat_slug,
            subcat_slug: subcategory?.subcat_slug
        })

    }


    return data;


 
    

})