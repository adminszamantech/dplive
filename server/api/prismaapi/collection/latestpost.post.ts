// import { Prisma, PrismaClient } from '@prisma/client'
import { prisma } from "~/lib/prisma"
export default defineEventHandler(async (event) => {

    // const prisma = new PrismaClient()
    const getBody = await readBody(event)
    const contents = await prisma.bn_contents.findMany({
        where: {
            deletable: 1,
            status: 1
        },
        orderBy: {
            content_id: 'desc'
        },
        take: getBody?.take,
        skip: getBody?.skip
    })

    const data = []
    if(contents && contents?.length > 0){
  
        for (let i = 0; i < contents?.length; i++) {
        
            // Category
            const category = await prisma.bn_categories.findFirst({
                where: {
                    cat_id: contents[i]?.cat_id, // Assign Category ID 
                }
            })
            // Subcategory
            const subcategory = await prisma.bn_subcategories.findFirst({
                where: {
                    subcat_id: contents[i]?.subcat_id, // Assign Category ID 
                }
            })

            // Push Data
            data.push({
                content_id: contents[i]?.content_id,
                content_type: contents[i]?.content_type,
                img_bg_path: contents[i]?.img_bg_path,
                content_heading: contents[i]?.content_heading,
                content_details: contents[i]?.content_details,
                created_at: contents[i]?.created_at,
                updated_at: contents[i]?.updated_at,
                bn_cat_name: category?.cat_name_bn,
                cat_slug: category?.cat_slug,
                subcat_slug: subcategory?.subcat_slug
            })
        }

        return data
    }
})