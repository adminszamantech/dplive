// import { Prisma, PrismaClient } from '@prisma/client'
import { join } from "@prisma/client/runtime/library"
import { prisma } from "~/lib/prisma"
export default defineEventHandler(async (event) => {

    
    // National Video
    const nationalVideos = await prisma.bn_videos.findMany({
        where: {
            cat_id: 1,
            status: 1,
            deletable: 1
        },
        select: {
            id:true,
            title: true,
            code:true,
            img_bg_path: true,
            created_at: true
        },
        orderBy: {
            id: "desc"
        },
        take: 5
    })
    // Saradesh Video
    const saradeshVideos = await prisma.bn_videos.findMany({
        where: {
            cat_id: 2,
            status: 1,
            deletable: 1
        },
        select: {
            id:true,
            title: true,
            code:true,
            img_bg_path: true,
            created_at: true
        },
        orderBy: {
            id: "desc"
        },
        take: 5
    })

    // Entertainment Video
    const entertainmentVideos = await prisma.bn_videos.findMany({
        where: {
            cat_id: 4,
            status: 1,
            deletable: 1
        },
        select: {
            id:true,
            title: true,
            code:true,
            img_bg_path: true,
            created_at: true
        },
        orderBy: {
            id: "desc"
        },
        take: 5
    })

    // International Video
    const internationalVideos = await prisma.bn_videos.findMany({
        where: {
            cat_id: 3,
            status: 1,
            deletable: 1
        },
        select: {
            id:true,
            title: true,
            code:true,
            img_bg_path: true,
            created_at: true
        },
        orderBy: {
            id: "desc"
        },
        take: 5
    })

    // Lifestyle Video
    const lifestyleVideos = await prisma.bn_videos.findMany({
        where: {
            cat_id: 7,
            status: 1,
            deletable: 1
        },
        select: {
            id:true,
            title: true,
            code:true,
            img_bg_path: true,
            created_at: true
        },
        orderBy: {
            id: "desc"
        },
        take: 5
    })

     // Sport Video
     const sportVideos = await prisma.bn_videos.findMany({
        where: {
            cat_id: 5,
            status: 1,
            deletable: 1
        },
        select: {
            id:true,
            title: true,
            code:true,
            img_bg_path: true,
            created_at: true
        },
        orderBy: {
            id: "desc"
        },
        take: 5
    })

     // Tourism Video
     const tourismVideos = await prisma.bn_videos.findMany({
        where: {
            cat_id: 6,
            status: 1,
            deletable: 1
        },
        select: {
            id:true,
            title: true,
            code:true,
            img_bg_path: true,
            created_at: true
        },
        orderBy: {
            id: "desc"
        },
        take: 5
    })

     // Art Culture Video
     const artcultureVideos = await prisma.bn_videos.findMany({
        where: {
            cat_id: 8,
            status: 1,
            deletable: 1
        },
        select: {
            id:true,
            title: true,
            code:true,
            img_bg_path: true,
            created_at: true
        },
        orderBy: {
            id: "desc"
        },
        take: 5
    })
    

    const data = [
        {
            id:nationalVideos[0].id,
            title:nationalVideos[0].title,
            code:nationalVideos[0].code,
            img_bg_path:nationalVideos[0].img_bg_path,
            created_at:nationalVideos[0].created_at,
        },
        {
            id:nationalVideos[1].id,
            title:nationalVideos[1].title,
            code:nationalVideos[1].code,
            img_bg_path:nationalVideos[1].img_bg_path,
            created_at:nationalVideos[1].created_at,
        },
        {
            id:nationalVideos[2].id,
            title:nationalVideos[2].title,
            code:nationalVideos[2].code,
            img_bg_path:nationalVideos[2].img_bg_path,
            created_at:nationalVideos[2].created_at,
        },
        {
            id:nationalVideos[3].id,
            title:nationalVideos[3].title,
            code:nationalVideos[3].code,
            img_bg_path:nationalVideos[3].img_bg_path,
            created_at:nationalVideos[3].created_at,
        },
        {
            id:nationalVideos[4].id,
            title:nationalVideos[4].title,
            code:nationalVideos[4].code,
            img_bg_path:nationalVideos[4].img_bg_path,
            created_at:nationalVideos[4].created_at,
        },
        {
            id:saradeshVideos[0].id,
            title:saradeshVideos[0].title,
            code:saradeshVideos[0].code,
            img_bg_path:saradeshVideos[0].img_bg_path,
            created_at:saradeshVideos[0].created_at,
        },
        {
            id:saradeshVideos[1].id,
            title:saradeshVideos[1].title,
            code:saradeshVideos[1].code,
            img_bg_path:saradeshVideos[1].img_bg_path,
            created_at:saradeshVideos[1].created_at,
        },
        {
            id:saradeshVideos[2].id,
            title:saradeshVideos[2].title,
            code:saradeshVideos[2].code,
            img_bg_path:saradeshVideos[2].img_bg_path,
            created_at:saradeshVideos[2].created_at,
        },
        {
            id:saradeshVideos[3].id,
            title:saradeshVideos[3].title,
            code:saradeshVideos[3].code,
            img_bg_path:saradeshVideos[3].img_bg_path,
            created_at:saradeshVideos[3].created_at,
        },
        {
            id:saradeshVideos[4].id,
            title:saradeshVideos[4].title,
            code:saradeshVideos[4].code,
            img_bg_path:saradeshVideos[4].img_bg_path,
            created_at:saradeshVideos[4].created_at,
        },
        {
            id:entertainmentVideos[0].id,
            title:entertainmentVideos[0].title,
            code:entertainmentVideos[0].code,
            img_bg_path:entertainmentVideos[0].img_bg_path,
            created_at:entertainmentVideos[0].created_at,
        },
        {
            id:entertainmentVideos[1].id,
            title:entertainmentVideos[1].title,
            code:entertainmentVideos[1].code,
            img_bg_path:entertainmentVideos[1].img_bg_path,
            created_at:entertainmentVideos[1].created_at,
        },
        {
            id:entertainmentVideos[2].id,
            title:entertainmentVideos[2].title,
            code:entertainmentVideos[2].code,
            img_bg_path:entertainmentVideos[2].img_bg_path,
            created_at:entertainmentVideos[2].created_at,
        },
        {
            id:entertainmentVideos[3].id,
            title:entertainmentVideos[3].title,
            code:entertainmentVideos[3].code,
            img_bg_path:entertainmentVideos[3].img_bg_path,
            created_at:entertainmentVideos[3].created_at,
        },
        {
            id:entertainmentVideos[4].id,
            title:entertainmentVideos[4].title,
            code:entertainmentVideos[4].code,
            img_bg_path:entertainmentVideos[4].img_bg_path,
            created_at:entertainmentVideos[4].created_at,
        },
        {
            id:internationalVideos[0].id,
            title:internationalVideos[0].title,
            code:internationalVideos[0].code,
            img_bg_path:internationalVideos[0].img_bg_path,
            created_at:internationalVideos[0].created_at,
        },
        {
            id:internationalVideos[1].id,
            title:internationalVideos[1].title,
            code:internationalVideos[1].code,
            img_bg_path:internationalVideos[1].img_bg_path,
            created_at:internationalVideos[1].created_at,
        },
        {
            id:internationalVideos[2].id,
            title:internationalVideos[2].title,
            code:internationalVideos[2].code,
            img_bg_path:internationalVideos[2].img_bg_path,
            created_at:internationalVideos[2].created_at,
        },
        {
            id:internationalVideos[3].id,
            title:internationalVideos[3].title,
            code:internationalVideos[3].code,
            img_bg_path:internationalVideos[3].img_bg_path,
            created_at:internationalVideos[3].created_at,
        },
        {
            id:internationalVideos[4].id,
            title:internationalVideos[4].title,
            code:internationalVideos[4].code,
            img_bg_path:internationalVideos[4].img_bg_path,
            created_at:internationalVideos[4].created_at,
        },
        {
            id:lifestyleVideos[0].id,
            title:lifestyleVideos[0].title,
            code:lifestyleVideos[0].code,
            img_bg_path:lifestyleVideos[0].img_bg_path,
            created_at:lifestyleVideos[0].created_at,
        },
        {
            id:lifestyleVideos[1].id,
            title:lifestyleVideos[1].title,
            code:lifestyleVideos[1].code,
            img_bg_path:lifestyleVideos[1].img_bg_path,
            created_at:lifestyleVideos[1].created_at,
        },
        {
            id:lifestyleVideos[2].id,
            title:lifestyleVideos[2].title,
            code:lifestyleVideos[2].code,
            img_bg_path:lifestyleVideos[2].img_bg_path,
            created_at:lifestyleVideos[2].created_at,
        },
        {
            id:lifestyleVideos[3].id,
            title:lifestyleVideos[3].title,
            code:lifestyleVideos[3].code,
            img_bg_path:lifestyleVideos[3].img_bg_path,
            created_at:lifestyleVideos[3].created_at,
        },
        {
            id:lifestyleVideos[4].id,
            title:lifestyleVideos[4].title,
            code:lifestyleVideos[4].code,
            img_bg_path:lifestyleVideos[4].img_bg_path,
            created_at:lifestyleVideos[4].created_at,
        },
        {
            id:sportVideos[0].id,
            title:sportVideos[0].title,
            code:sportVideos[0].code,
            img_bg_path:sportVideos[0].img_bg_path,
            created_at:sportVideos[0].created_at,
        },
        {
            id:sportVideos[1].id,
            title:sportVideos[1].title,
            code:sportVideos[1].code,
            img_bg_path:sportVideos[1].img_bg_path,
            created_at:sportVideos[1].created_at,
        },
        {
            id:sportVideos[2].id,
            title:sportVideos[2].title,
            code:sportVideos[2].code,
            img_bg_path:sportVideos[2].img_bg_path,
            created_at:sportVideos[2].created_at,
        },
        {
            id:sportVideos[3].id,
            title:sportVideos[3].title,
            code:sportVideos[3].code,
            img_bg_path:sportVideos[3].img_bg_path,
            created_at:sportVideos[3].created_at,
        },
        {
            id:sportVideos[4].id,
            title:sportVideos[4].title,
            code:sportVideos[4].code,
            img_bg_path:sportVideos[4].img_bg_path,
            created_at:sportVideos[4].created_at,
        },
        {
            id:tourismVideos[0].id,
            title:tourismVideos[0].title,
            code:tourismVideos[0].code,
            img_bg_path:tourismVideos[0].img_bg_path,
            created_at:tourismVideos[0].created_at,
        },
        {
            id:tourismVideos[1].id,
            title:tourismVideos[1].title,
            code:tourismVideos[1].code,
            img_bg_path:tourismVideos[1].img_bg_path,
            created_at:tourismVideos[1].created_at,
        },
        {
            id:tourismVideos[2].id,
            title:tourismVideos[2].title,
            code:tourismVideos[2].code,
            img_bg_path:tourismVideos[2].img_bg_path,
            created_at:tourismVideos[2].created_at,
        },
        {
            id:tourismVideos[3].id,
            title:tourismVideos[3].title,
            code:tourismVideos[3].code,
            img_bg_path:tourismVideos[3].img_bg_path,
            created_at:tourismVideos[3].created_at,
        },
        {
            id:tourismVideos[4].id,
            title:tourismVideos[4].title,
            code:tourismVideos[4].code,
            img_bg_path:tourismVideos[4].img_bg_path,
            created_at:tourismVideos[4].created_at,
        },
        {
            id:artcultureVideos[0].id,
            title:artcultureVideos[0].title,
            code:artcultureVideos[0].code,
            img_bg_path:artcultureVideos[0].img_bg_path,
            created_at:artcultureVideos[0].created_at,
        },
        {
            id:artcultureVideos[1].id,
            title:artcultureVideos[1].title,
            code:artcultureVideos[1].code,
            img_bg_path:artcultureVideos[1].img_bg_path,
            created_at:artcultureVideos[1].created_at,
        },
        {
            id:artcultureVideos[2].id,
            title:artcultureVideos[2].title,
            code:artcultureVideos[2].code,
            img_bg_path:artcultureVideos[2].img_bg_path,
            created_at:artcultureVideos[2].created_at,
        },
        {
            id:artcultureVideos[3].id,
            title:artcultureVideos[3].title,
            code:artcultureVideos[3].code,
            img_bg_path:artcultureVideos[3].img_bg_path,
            created_at:artcultureVideos[3].created_at,
        },
        {
            id:artcultureVideos[4].id,
            title:artcultureVideos[4].title,
            code:artcultureVideos[4].code,
            img_bg_path:artcultureVideos[4].img_bg_path,
            created_at:artcultureVideos[4].created_at,
        }

    ]

    return {
        videos: data,
        total: data?.length
    }

})