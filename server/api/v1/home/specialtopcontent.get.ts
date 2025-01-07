
// export default defineEventHandler(async (event) => {
//     const data = await $fetch("http://127.0.0.1:8000/api/specialcontent", {
//         method: 'GET'
//     })
//     return data
// })



// import moment from "moment"
import { prisma } from "~/lib/prisma"
// import { Prisma, PrismaClient } from '@prisma/client'
export default defineEventHandler(async (event) => {
    // moment.locale('bn-bd')
    // const getBody = await readBody(event)
    // const prisma = new PrismaClient()
    // const getBody = await readBody(event)





    const position = await prisma.bn_content_positions.findFirst({
        where: {
            position_id: 1,
            status: 1,
            deletable: 1
        },
        select: {
            position_id: true,
            cat_id: true,
            special_cat_id: true,
            subcat_id: true,
            content_ids: true
        }
    })

    const specialFixedPosition = await prisma.bn_position_fixed.findFirst({
        where: {
            is_fixed: 1
        }
    })

    const data = []
    if (position && position?.content_ids?.length > 0) {
        const positionArray = position?.content_ids?.split(',')
        const getContents = positionArray?.splice(0, 11)

        // const arryPos = [1,2,3,4,5,6,7,8,9,10,11]
        const getPositionIds = [];

        for(let i = 0; i < 11; i++){
            if(specialFixedPosition?.position_number === i+1){
                getPositionIds.push(specialFixedPosition?.news_id?.toString())
            }else{
                getPositionIds.push(getContents[i])
            }
        }
 

        for (let i = 0; i < getPositionIds?.length; i++) {
            const content = await prisma.bn_contents.findFirst({
                where: {
                    content_id: parseInt(getPositionIds[i]),
                    status: 1,
                    deletable: 1
                }
            })

            // If Content Found
            if (content) {
                // Category
                const category = await prisma.bn_categories.findFirst({
                    where: {
                        cat_id: content?.cat_id,
                        cat_type: 1
                    }
                })
                // Subcategory
                const subcategory = await prisma.bn_subcategories.findFirst({
                    where: {
                        subcat_id: content?.subcat_id
                    }
                })

                // Push Data
                data.push({
                    content_id: content?.content_id,
                    content_type: content?.content_type,
                    img_bg_path: content?.img_bg_path,
                    content_heading: content?.content_heading,
                    content_sub_heading: content?.content_sub_heading,
                    content_details: content?.content_details,
                    bn_cat_name: category?.cat_name_bn,
                    cat_slug: category?.cat_slug,
                    subcat_slug: subcategory?.subcat_slug,
                    created_at: content?.created_at,
                    // post_date: moment(content?.created_at).startOf('hour').fromNow()
                })
            }

        }

        return data


    }



})