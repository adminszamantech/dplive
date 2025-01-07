import moment from "moment"
// import { Prisma, PrismaClient } from '@prisma/client'
import { prisma } from "~/lib/prisma"
export default defineEventHandler(async (event) => {
    // Localize
    moment.locale('bn-bd')
    // const prisma = new PrismaClient()
    const getBody = await readBody(event)
    const categoryContent = await prisma.bn_contents.findMany({
        where: {
            cat_id: parseInt(getBody?.cat_id),
            status: 1,
            deletable: 1
        },
        take: parseInt(getBody?.take),
        orderBy: {
            content_id: 'desc'
        }
    })

    const data = []
    if(categoryContent && categoryContent?.length > 0){
  
        for (let i = 0; i < categoryContent?.length; i++) {
        
            // Category
            const category = await prisma.bn_categories.findFirst({
                where: {
                    cat_id: parseInt(getBody?.cat_id)
                }
            })
            // Subcategory
            const subcategory = await prisma.bn_subcategories.findFirst({
                where: {
                    cat_id: parseInt(getBody?.cat_id)
                }
            })

            // Push Data
            data.push({
                content_id: categoryContent[i]?.content_id,
                img_bg_path: categoryContent[i]?.img_bg_path,
                content_heading: categoryContent[i]?.content_heading,
                content_details: categoryContent[i]?.content_details,
                bn_cat_name: category?.cat_name_bn,
                cat_slug: category?.cat_slug,
                subcat_slug: subcategory?.subcat_slug,
                created_at: moment(categoryContent[i]?.created_at).startOf('hour').fromNow()
            })
        }

        return data
    }
})