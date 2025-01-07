// import { Prisma, PrismaClient } from '@prisma/client'
import { prisma } from "~/lib/prisma"
export default defineEventHandler(async (event) => {

    // const prisma = new PrismaClient()
    const getBody = await readBody(event)
 
    const contents = await prisma.bn_contents.findMany({
        where: {
            status: 1,
            deletable: 1
        },
        select: {
            cat_id: true,
            content_heading: true,
            content_details: true,
            content_id: true,
            subcat_id: true,
            img_bg_path: true,
            content_type: true,
            created_at: true
        },
        orderBy: {
            content_id: 'desc'
        },
        take: parseInt(getBody?.take)
        
    })
    
    const data = []
    if(contents?.length > 0){

        for(let i = 0; i < contents.length; i++ ){

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
                    subcat_id: contents[i].subcat_id
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
                created_at: contents[i]?.created_at
            })

        }
    
  
    return data

    }
 


})