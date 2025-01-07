// import moment from "moment"
import { prisma } from "~/lib/prisma"
export default defineEventHandler(async (event) => {
    // Localize
    // moment.locale('bn-bd')

    // const prisma = new PrismaClient()
    const getBody = await readBody(event)

    // If Keyword not Empty
    if (getBody?.keyword !== '') {

        const getContent = await prisma.bn_contents.findMany({
            where: {
                OR: [
                    {
                        content_heading: {
                            contains: getBody?.keyword
                        },
                    }
                ],
                status: 1,
                deletable: 1
            },
            orderBy: {
                content_id: 'desc'
            },
            take: parseInt(getBody?.take),
        })

        const data = []

        for (let c = 0; c < getContent?.length; c++) {

            // Get Category
            const category = await prisma.bn_categories.findFirst({
                where: {
                    cat_id: getContent[c]?.cat_id
                },
                select: {
                    cat_id: true,
                    cat_name_bn: true,
                    cat_slug: true
                }
            })

            // Sub Category
            const subcategory = await prisma.bn_subcategories.findFirst({
                where: {
                    subcat_id: getContent[c]?.subcat_id
                },
                select: {
                    subcat_id: true,
                    subcat_name_bn: true,
                    subcat_slug: true
                }
            })

            data.push({
                content_id: getContent[c]?.content_id,
                content_type: getContent[c]?.content_type,
                content_heading: getContent[c]?.content_heading,
                content_details: getContent[c]?.content_details,
                img_bg_path: getContent[c]?.img_bg_path,
                cat_slug: category?.cat_slug,
                subcat_slug: subcategory?.subcat_slug,
                created_at: getContent[c]?.created_at,
                updated_at: getContent[c]?.updated_at,
            })
        }

        return data

    } else {

        const getContent = await prisma.bn_contents.findMany({
            orderBy: {
                content_id: 'desc'
            },
            take: parseInt(getBody?.take),
        })

        const data = []

        for (let c = 0; c < getContent?.length; c++) {

            // Get Category
            const category = await prisma.bn_categories.findFirst({
                where: {
                    cat_id: getContent[c]?.cat_id
                },
                select: {
                    cat_id: true,
                    cat_name_bn: true,
                    cat_slug: true
                }
            })

            // Sub Category
            const subcategory = await prisma.bn_subcategories.findFirst({
                where: {
                    cat_id: category?.cat_id
                },
                select: {
                    subcat_id: true,
                    subcat_name_bn: true,
                    subcat_slug: true
                }
            })

            data.push({
                content_id: getContent[c]?.content_id,
                content_heading: getContent[c]?.content_heading,
                content_details: getContent[c]?.content_details,
                img_bg_path: getContent[c]?.img_bg_path,
                category: {
                    cat_id: category?.cat_id,
                    cat_name_bn: category?.cat_name_bn,
                    cat_slug: category?.cat_slug,
                },
                subcategory: {
                    cat_id: subcategory?.subcat_id,
                    subcat_id: subcategory?.subcat_id,
                    subcat_slug: subcategory?.subcat_slug,
                },
                created_at: getContent[c]?.created_at,
                updated_at: getContent[c]?.updated_at,
            })
        }

        return data

    }



})