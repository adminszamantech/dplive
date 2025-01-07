<template>
    <div v-if="moreVideos" class="single-video-page">

        <Head>
            <Title>{{ videoDetail?.title }}</Title>
            <!-- Refresh Reload -->
            <!-- <Meta content="500" http-equiv="refresh" /> -->
            <!-- Refresh Reload -->
            <!-- <Meta name="description" :content="ogDescription" /> -->
            <!-- <Meta name="keywords" :content="metaKeywords" /> -->
            <Meta property="og:url" :content="`${websiteUrl.website_url}/video/${videocat_slug}/${video_id}`" />
            <Meta property="og:title" :content="videoDetail?.title" />
            <!-- <Meta property="og:description" :content="ogDescription" /> -->
            <!-- <Meta property="og:image" :content="ogImage" /> -->

            <Meta name="twitter:title" :content="videoDetail?.title" />
            <!-- <Meta name="twitter:description" :content="ogDescription" /> -->
            <!-- <Meta name="twitter:image" :content="ogImage" /> -->
            <Meta name="twitter:url" :content="`${websiteUrl.website_url}/video/${videocat_slug}/${video_id}`" />
            <!-- <Link rel="canonical" :href="ogUrl" /> -->
        </Head>

        <!-- Page Loader -->
        <!-- Page Loader -->
        <div v-if="pending" class="bg-white min-h-screen hidden md:block ">
            <div class="flex justify-center items-center pt-32">
                <img width="60" src="/assets/img/loader.gif" alt="">
                <h3 class="text-2xl text-black">লোড হচ্ছে...</h3>
            </div>
        </div>
        <div v-if="pending" class=" fixed bg-white h-screen  inset-0  flex items-center justify-center md:hidden">
            <div class="flex items-center gap-1">
                <img width="60" src="/assets/img/loader.gif" alt="">
                <h3 class="text-2xl text-black">লোড হচ্ছে...</h3>
            </div>
        </div>
        <!-- Page Loader -->

        <div v-else class=" max-w-[1280px] mx-auto detail-page px-4 md:px-4 py-4">

            <!-- <img src="http://127.0.0.1:8000/api/ogimage/get/politics?imgPath=2023November/dhaka-prokash-news-15-20231111182548.jpg" alt=""> -->
            <div class="breadcrump border-b pb-1 mb-5">
                <div class="flex gap-1 justify-start items-center">
                    <NuxtLink :to="`/video/${videoDetail?.cat_slug}`" class="text-[#3375af] font-semibold">
                        <!-- {{ detailsContent?.category?.cat_name_bn }} -->
                        <h1 class="text-xl md:text-3xl">{{ videoDetail?.cat_name_bn }}</h1>
                    </NuxtLink>
                </div>
            </div>

            <!--========== First Details Content ============ -->
            <div class=" grid grid-cols-12 gap-5 relative d-print">
                <div class="col-span-12 md:col-span-9">
                    <div class="video-details">
                        <div v-if="videoDetail?.type == 1" class="play-video">
                            <iframe width="100%" class=" md:h-[530px] h-[215px]"
                                :src="`https://www.youtube.com/embed/${videoDetail?.code}?rel=0&enablejsapi=1&autoplay=1&mute=1&showinfo=1&controls=1`"
                                frameborder="0" allowfullscreen></iframe>
                        </div>
                        <div v-else-if="videoDetail?.type == 2" class="play-video">
                            <!-- <div class="fb-video" :data-href="`https://www.facebook.com/watch/?v=${videoDetail?.code}`"
                    data-width="auto" data-autoplay="true" data-show-captions="false"> </div> -->
                            <div class="facebookvideo overflow-hidden">
                                <a :href="`https://www.facebook.com/watch/?v=${videoDetail?.code}`" class=" relative group">
                                    <nuxt-img loading="lazy" :alt="videoDetail?.title"
                                        :src="`${siteurl?.site_url}/media/videoImages/${videoDetail?.img_bg_path}`"
                                        class="mx-auto w-full"
                                        :placeholder="img(`${siteurl?.site_url}/logo/placeholder.jpg`)" />
                                    <Icon name="simple-icons:youtubemusic"
                                        class=" text-6xl group-hover:text-[#3375af] text-[#ff0000] absolute top-[44%] left-[48%]" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="video-title pt-2">
                        <h1 class="text-[18px] md:text-[28px]">{{ videoDetail?.title }}</h1>
                        <small class="text-[#555555] text-[14px]">প্রকাশ: {{
                            postCreatedDate(videoDetail?.created_at) }}</small>
                    </div>
                </div>

                <div class=" col-span-12 md:col-span-3">

                    <!--:::::::: Detail Page Right One Ads :::::::::-->
                    <div :class="`sticky ${stickyScroll ? ' top-[164px]' : 'top-14'} duration-200`">
                        <div :class="`flex flex-col gap-2`">
                            <div class=" border-b-[3px] border-[#3375af] pb-1 flex items-center gap-3">
                                <span class="w-3 h-3 bg-[#3375af]"></span>
                                <h3 class="text-[#3375af] text-[18px] font-[600]">আরও ভিডিও</h3>
                            </div>
                            <div class="video-detail-page flex flex-col" v-if="moreVideos?.length > 0">
                                <!-- Loop Item -->
                                <NuxtLink v-for="(moreVideo, mvinx) in moreVideos" :key="mvinx"
                                    :to="`/video/${moreVideo?.cat_slug}/${moreVideo?.id}`"
                                    class="grid grid-cols-12 gap-4 group border-b py-2 items-center">
                                    <div class=" col-span-2">
                                        <Icon name="simple-icons:youtubemusic"
                                            class=" col-span-2 md:col-span-2 text-4xl group-hover:text-[#3375af] text-[#ff0000]" />
                                    </div>
                                    <div class=" col-span-10">
                                        <h4 class="text-[18px] leading-tight group-hover:text-[#ff0000]">{{ moreVideo?.title
                                        }}
                                        </h4>
                                    </div>
                                </NuxtLink>

                                <!--/ Loop Item -->
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <!--========== // First Details Content ============ -->
        </div>
    </div>
    <div v-else class="errorNotfound">
      <Head>
         <Title>404 Not Found | ঢাকাপ্রকাশ</Title>
      </Head>
      <Errorpage />
   </div>
</template>

<script setup>
useHead({
    script: [
        {
            src: 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2',
            async: 'true',
            defer: 'true',
            tagPosition: "bodyClose"
        }
    ]
})

const img = useImage()

// ================ Get Bangla Date ============== //
const getDate = new Intl.DateTimeFormat('bn-bd', { year: 'numeric', month: 'long', day: "numeric", hour: "numeric", minute: 'numeric' })
// const postDate = getDate.format(new Date(detailsContent.value.created_at)).replace('এ', '|').replace('PM', 'পিএম').replace('AM', 'এএম')
const postCreatedDate = (date) => {
    // If date value has
    if (date) {
        return getDate.format(new Date(date)).replace('এ', '|').replace('PM', 'পিএম').replace('AM', 'এএম')
    }
}
// ================ Get Bangla Date ============== //

// single Page sticky
const singlePageSticky = singlePageStickyState()
const siteurl = siteUrlState()
const websiteUrl = websiteUrlState()
const stickyScroll = computed(() =>
    singlePageSticky.value
)
const video_id = useRoute().params.video_id
const videocat_slug = useRoute().params.videocat_slug

const videoDetail = useState(() => "")
const moreVideos = useState(() => [])
const { data: vdtail, pending } = await useFetch(`/api/prismaapi/video/singlevideo`, {
    method: "POST",
    body: {
        id: video_id
    }
})
videoDetail.value = vdtail?.value?.currentVideo
moreVideos.value = vdtail?.value?.getVideos

</script>

<style lang="scss" scoped></style>