// import { Prisma, PrismaClient } from "@prisma/client"
import { prisma } from "~/lib/prisma"
export default defineEventHandler(async (event) => {

    // const prisma = new PrismaClient()
    const getBody = await readBody(event)

    // Get More Content Detail
    const getmoredetailsContent = await prisma.bn_contents.findMany({
        where: {
            status: 1,
            deletable: 1
        },
        take: 4,
        orderBy: {
            content_id: 'desc'
        }
    })
    const data = []
    for (let i = 0; i < getmoredetailsContent?.length; i++) {

        if (getmoredetailsContent[i]?.content_id !== parseInt(getBody?.content_id)) {

            // Get Category
            const getCategory = await prisma.bn_categories.findFirst({
                where: {
                    cat_id: getmoredetailsContent[i]?.cat_id
                }
            })
            const getSubcategory = await prisma.bn_subcategories.findFirst({
                where: {
                    cat_id: getmoredetailsContent[i]?.cat_id
                }
            })
            const getAuthor = await prisma.authors.findFirst({
                where: {
                    author_slug: getmoredetailsContent[i]?.author_slugs?.toString()
                }
            })

            data.push({
                content_id: getmoredetailsContent[i]?.content_id,
                content_brief: getmoredetailsContent[i]?.content_brief,
                content_details: getmoredetailsContent[i]?.content_details,
                content_heading: getmoredetailsContent[i]?.content_heading,
                content_sub_heading: getmoredetailsContent[i]?.content_sub_heading,
                created_at: getmoredetailsContent[i]?.created_at,
                updated_at: getmoredetailsContent[i]?.updated_at,
                img_bg_path: getmoredetailsContent[i]?.img_bg_path,
                content_type: getmoredetailsContent[i]?.content_type,
                meta_keywords: getmoredetailsContent[i]?.meta_keywords,
                tags: getmoredetailsContent[i]?.tags,
                category: {
                    cat_name_bn: getCategory?.cat_name_bn,
                    cat_id: getCategory?.cat_id,
                    cat_slug: getCategory?.cat_slug
                },
                subcategory: {
                    subcat_name_bn: getSubcategory?.subcat_name_bn,
                    subcat_id: getSubcategory?.subcat_id,
                    subcat_slug: getSubcategory?.subcat_slug
                },
                author: {
                    author_id: getAuthor?.author_id,
                    author_name_bn: getAuthor?.author_name_bn,
                    author_slug: getAuthor?.author_slug,
                }
            })


        } // End if
    }

    return data


})