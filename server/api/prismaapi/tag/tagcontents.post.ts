// import { Prisma, PrismaClient } from '@prisma/client'
import { prisma } from "~/lib/prisma"
export default defineEventHandler(async (event) => {

    // const prisma = new PrismaClient()
    const getBody = await readBody(event)

    const tag = await prisma.bn_tags.findFirst({
        where: {
            tag_slug: getBody?.tag_slug,
            deletable: 1,
        }
    })

    // If tag has
    if (tag) {
        const contents = await prisma.bn_contents.findMany({
            where: {
                tags: {
                    contains: tag?.tag_slug
                },
                status: 1,
                deletable: 1,
            },
            take: getBody?.take,
            orderBy: {
                content_id: 'desc'
            }
        })

        const data = []
        if (contents?.length > 0) {

            for (let i = 0; i < contents?.length; i++) {

                // Get Category
                const category = await prisma.bn_categories.findFirst({
                    where: {
                        cat_id: contents[i]?.cat_id, // Assign Category ID 
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
                    created_at: contents[i]?.created_at,
                    updated_at: contents[i]?.updated_at,
                    cat_slug: category?.cat_slug,
                    subcat_slug: subcategory?.subcat_slug
                })
            }

        }

        return {
            tag: {
                tag_name: tag?.tag_name,
                tag_slug: tag?.tag_slug
            },
            content: data
        }
    }

})