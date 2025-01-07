// import jimp from 'jimp'
// import { Prisma, PrismaClient } from "@prisma/client"
import { prisma } from "~/lib/prisma"
export default defineEventHandler(async (event) => {

    // const prisma = new PrismaClient()
    const getBody = await readBody(event)
    const config = useRuntimeConfig()
    // Get Content Detail

    const getdetailsContent = await prisma.bn_contents.findFirst({
        where: {
            content_id: parseInt(getBody?.content_id),
            status: 1,
            deletable: 1
        }
    })

    // If single detail content has
    if (getdetailsContent) {
        // Increment Hit
        const hit = await prisma.bn_contents.update({
            where: {
                content_id: parseInt(getBody?.content_id)
            },
            data: {
                total_hit: {
                    increment: 1
                }
            }
        })

        // Get Category
        const getCategory = await prisma.bn_categories.findFirst({
            where: {
                cat_id: getdetailsContent?.cat_id
            }
        })
        const getSubcategory = await prisma.bn_subcategories.findFirst({
            where: {
                cat_id: getCategory?.cat_id
            }
        })
        const getAuthor = await prisma.authors.findFirst({
            where: {
                author_slug: getdetailsContent?.author_slugs?.toString()
            },
            select: {
                author_id: true,
                author_name_bn: true,
                author_slug: true,
                img_path: true
            }
        })


        // First Detail Right Category Cont
        // const firstDetailRightCatConents = await prisma.bn_contents.findMany({
        //     where: {
        //        NOT: {
        //         content_id: {
        //             equals: parseInt(getBody?.content_id)
        //         }
        //        }
        //     },
        //     select: {
        //         content_id: true,
        //         content_type: true,
        //         content_heading: true,
        //         subcat_id: true,
        //         cat_id: true,
        //         img_bg_path: true
        //     }
        // }) 

        // const firstrightcatcontent = []

        // if(firstDetailRightCatConents){
        //     for(let frct = 0; frct < firstDetailRightCatConents.length; frct++){
        //         const frcsubcategory = await prisma.bn_subcategories.findFirst({
        //             where: {
        //                 subcat_id: firstDetailRightCatConents[frct]?.subcat_id
        //             },
        //             select: {
        //                 subcat_id: true,
        //                 subcat_name_bn:true,
        //                 subcat_slug: true
        //             }
        //         })

        //         firstrightcatcontent.push({
        //             content_heading: firstDetailRightCatConents[frct].content_heading,
        //             content_type: firstDetailRightCatConents[frct].content_type,
        //             img_bg_path: firstDetailRightCatConents[frct].img_bg_path,
        //             cat_slug: getCategory?.cat_slug,
        //             subcat_slug: frcsubcategory?.subcat_slug
        //         })
        //     }
        // }
 

        // =============== ADS OG Image Generate ============= //
        // const ogImageBanner = await prisma.site_settings.findFirst({
        //     where: {
        //         id: 1
        //     },
        //     select: {
        //         post_ogimage: true
        //     }
        // })

        // let  watermarkImage = await jimp.read(`${config.public.apiUrl}/media/ogImages/${ogImageBanner?.post_ogimage}`);
        // const image = await jimp.read(`${config.public.apiUrl}/media/content/images/${getdetailsContent?.img_bg_path}`);
        // const watermark = watermarkImage.resize(750,jimp.AUTO);
        // image.composite(watermark, 0, 337, {
        //   mode: jimp.BLEND_SOURCE_OVER,
        //   opacityDest: 1,
        //   opacitySource: 1,

        // })
        // const genretedOG = await image.getBase64Async(jimp.AUTO)
        // =============== ADS OG Image Generate ============= //

        // Detail Content
        const detailsContent = {
            // ogImage: genretedOG,
            content_id: getdetailsContent?.content_id,
            content_type: getdetailsContent?.content_type,
            cat_id: getdetailsContent?.cat_id,
            subcat_id: getdetailsContent?.subcat_id,
            special_cat_id: getdetailsContent?.special_cat_id,
            country_id: getdetailsContent?.country_id,
            division_id: getdetailsContent?.division_id,
            district_id: getdetailsContent?.district_id,
            upozilla_id: getdetailsContent?.upozilla_id,
            content_heading: getdetailsContent?.content_heading,
            content_sub_heading: getdetailsContent?.content_sub_heading,
            author_slugs: getdetailsContent?.author_slugs,
            content_brief: getdetailsContent?.content_brief,
            content_details: getdetailsContent?.content_details,
            img_xs_path: getdetailsContent?.img_xs_path,
            img_sm_path: getdetailsContent?.img_sm_path,
            img_sm_caption: getdetailsContent?.img_sm_caption,
            img_bg_path: getdetailsContent?.img_bg_path,
            img_bg_caption: getdetailsContent?.img_bg_caption,
            og_image: config?.public?.apiUrl + getdetailsContent?.og_image,
            tags: getdetailsContent?.tags,
            meta_keywords: getdetailsContent?.meta_keywords,
            created_at: getdetailsContent?.created_at,
            updated_at: getdetailsContent?.updated_at,
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
                img_path: getAuthor?.img_path
            }
            // firstrightcatcontent: firstrightcatcontent
        }
        // Detail Content


        // =========== More 3 Three Content =========================
        const moreContents = await prisma.bn_contents.findMany({
            where: {
                NOT: {
                    content_id: {
                        equals: parseInt(getBody?.content_id)
                    }
                },
                status: 1,
                deletable: 1
            },
            orderBy: {
                content_id: 'desc'
            },
            take: 3
        })

        const moreDetailContent = []

        const mrelatedPosts = []
        const mreletedReadIds = [detailsContent?.content_id]

        for (let i = 0; i < moreContents?.length; i++) {

            const getmoreContentCategory = await prisma.bn_categories.findFirst({
                where: {
                    cat_id: moreContents[i]?.cat_id
                }
            })
            const getmoreContentSubCategory = await prisma.bn_subcategories.findFirst({
                where: {
                    subcat_id: moreContents[i]?.subcat_id
                }
            })
            const getmoreContentAuthor = await prisma.authors.findFirst({
                where: {
                    author_slug: moreContents[i]?.author_slugs?.toString(),
                },
                select: {
                    author_id: true,
                    author_name_bn: true,
                    author_slug: true,
                    img_path: true
                }
            })


            // catewise content will be added 
            const catwisePosts = await prisma.bn_contents.findMany({
                where: {
                    cat_id: moreContents[i]?.cat_id,
                    NOT: {
                        content_id: {
                            equals: moreContents[i]?.content_id
                        }
                    },
                    status: 1,
                    deletable: 1
                },
                orderBy: {
                    content_id: 'desc'
                },
                take: 5
            })
            const catwisePost = []
            for (let catwise = 0; catwise < catwisePosts?.length; catwise++) {

                const catwisecategory = await prisma.bn_categories.findFirst({
                    where: {
                        cat_id: catwisePosts[catwise]?.cat_id
                    }
                })
                const catwisesubcategory = await prisma.bn_subcategories.findFirst({
                    where: {
                        subcat_id: catwisePosts[catwise]?.subcat_id
                    }
                })
                catwisePost.push({
                    content_id: catwisePosts[catwise]?.content_id,
                    content_type: catwisePosts[catwise]?.content_type,
                    content_heading: catwisePosts[catwise]?.content_heading,
                    img_bg_path: catwisePosts[catwise]?.img_bg_path,
                    cat_slug: catwisecategory?.cat_slug,
                    subcat_slug: catwisesubcategory?.subcat_slug,
                })
            }

            // catewise content will be added 
            // let  watermarkImage = await jimp.read(`${config.public.apiUrl}/media/ogImages/${ogImageBanner?.post_ogimage}`);
            // const image = await jimp.read(`${config.public.apiUrl}/media/content/images/${moreContents[i]?.img_bg_path}`);
            // const watermark = watermarkImage.resize(750,jimp.AUTO);
            // image.composite(watermark, 0, 337, {
            //   mode: jimp.BLEND_SOURCE_OVER,
            //   opacityDest: 1,
            //   opacitySource: 1,

            // })
            // const genretedOG = await image.getBase64Async(jimp.AUTO)



            // ========= More Releted Content ecept 4 post  ===================//
            mreletedReadIds.push(moreContents[i]?.content_id)

            const readpost = await prisma.bn_contents.findMany({
                where: {
                    status: 1,
                    deletable: 1,
                    NOT: {
                        content_id: {
                            in: mreletedReadIds
                        }
                    }

                },
                orderBy: {
                    content_id: 'desc'
                },
                take: 4,
                skip: 1
            })

            const mrelPostArray = []
            for (let pb = 0; pb < readpost?.length; pb++) {

                const mrCategory = await prisma.bn_categories.findFirst({
                    where: {
                        cat_id: readpost[pb]?.cat_id
                    }
                })

                const mrsubCategory = await prisma.bn_subcategories.findFirst({
                    where: {
                        subcat_id: readpost[pb]?.subcat_id
                    }
                })

                mrelPostArray.push({
                    content_id: readpost[pb]?.content_id,
                    content_type: readpost[pb]?.content_type,
                    content_heading: readpost[pb]?.content_heading,
                    img_bg_path: readpost[pb]?.img_bg_path,
                    cat_slug: mrCategory?.cat_slug,
                    subcat_slug: mrsubCategory?.subcat_slug

                })
            }

            mrelatedPosts.push(mrelPostArray)
            // ========= More Releted Content ecept 4 post  ===================//

            // ============== OG Image ==============
            // let  watermarkImage = await jimp.read(`${config.public.apiUrl}/media/ogImages/${ogImageBanner?.post_ogimage}`);
            // const image = await jimp.read(`${config.public.apiUrl}/media/content/images/${moreContents[i]?.img_bg_path}`);
            // const watermark = watermarkImage.resize(750,jimp.AUTO);
            // image.composite(watermark, 0, 337, {
            //   mode: jimp.BLEND_SOURCE_OVER,
            //   opacityDest: 1,
            //   opacitySource: 1,

            // })
            // const genretedOG = await image.getBase64Async(jimp.AUTO)

            moreDetailContent.push({
                // ogImage: genretedOG,
                content_id: moreContents[i]?.content_id,
                content_type: moreContents[i]?.content_type,
                cat_id: moreContents[i]?.cat_id,
                subcat_id: moreContents[i]?.subcat_id,
                special_cat_id: moreContents[i]?.special_cat_id,
                country_id: moreContents[i]?.country_id,
                division_id: moreContents[i]?.division_id,
                district_id: moreContents[i]?.district_id,
                upozilla_id: moreContents[i]?.upozilla_id,
                content_heading: moreContents[i]?.content_heading,
                content_sub_heading: moreContents[i]?.content_sub_heading,
                author_slugs: moreContents[i]?.author_slugs,
                content_brief: moreContents[i]?.content_brief,
                content_details: moreContents[i]?.content_details,
                img_xs_path: moreContents[i]?.img_xs_path,
                img_sm_path: moreContents[i]?.img_sm_path,
                img_sm_caption: moreContents[i]?.img_sm_caption,
                img_bg_path: moreContents[i]?.img_bg_path,
                og_image: config?.public?.apiUrl + moreContents[i]?.og_image,
                img_bg_caption: moreContents[i]?.img_bg_caption,
                tags: moreContents[i]?.tags,
                meta_keywords: moreContents[i]?.meta_keywords,
                created_at: moreContents[i]?.created_at,
                updated_at: moreContents[i]?.updated_at,
                category: {
                    cat_name_bn: getmoreContentCategory?.cat_name_bn,
                    cat_id: getmoreContentCategory?.cat_id,
                    cat_slug: getmoreContentCategory?.cat_slug
                },
                subcategory: {
                    subcat_name_bn: getmoreContentSubCategory?.subcat_name_bn,
                    subcat_id: getmoreContentSubCategory?.subcat_id,
                    subcat_slug: getmoreContentSubCategory?.subcat_slug
                },
                author: {
                    author_id: getmoreContentAuthor?.author_id,
                    author_name_bn: getmoreContentAuthor?.author_name_bn,
                    author_slug: getmoreContentAuthor?.author_slug,
                    img_path: getmoreContentAuthor?.img_path
                },
                morecatwisePost: catwisePost, // cate wise post will be added,
                morereletedcontentbelow: mrelatedPosts
            })

        }

        // return mrelatedPosts
        // =========== More 3 Three Content =========================

        // ================== First Releted Bottom 4 grid Post =============== // 
        const firstRelatedContents = []
        const frelated = await prisma.bn_contents.findMany({
            where: {
                NOT: {
                    content_id: {
                        equals: detailsContent?.content_id
                    }
                },
                deletable: 1,
                status: 1
            },
            orderBy: {
                content_id: "desc"
            },
            take: 4,
            skip: 1
        })
        for (let ft = 0; ft < frelated?.length; ft++) {


            const rfcategory = await prisma.bn_categories.findFirst({
                where: {
                    cat_id: frelated[ft]?.cat_id
                }
            })

            const rfsubcategory = await prisma.bn_subcategories.findFirst({
                where: {
                    subcat_id: frelated[ft]?.subcat_id
                }
            })

            firstRelatedContents.push({
                content_id: frelated[ft]?.content_id,
                content_type: frelated[ft]?.content_type,
                content_heading: frelated[ft]?.content_heading,
                content_sub_heading: frelated[ft]?.content_sub_heading,
                img_bg_path: frelated[ft]?.img_bg_path,
                cat_slug: rfcategory?.cat_slug,
                subcat_slug: rfsubcategory?.subcat_slug
            })
        }
        // ================== First Releted Bottom 4 grid Post =============== // 

        return {
            detailsContent: detailsContent,
            // firstrightcatcontent: firstrightcatcontent,
            moreDetailContent: moreDetailContent,
            firstRelatedContents: firstRelatedContents

        }
    }


})