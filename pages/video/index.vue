<template>
    <div class="video-page">

        <Head>
            <Title>ভিডিও | ঢাকাপ্রকাশ</Title>
        </Head>
        <!-- Space For Ads -->
        <!-- <div class="category-ads-section border-b border-b-[#dee2e6] py-4 ">
            <div class="bg-[#f7f7f7]">
                <a target="_blank" href="/">
                    <img class="mx-auto" src="/assets/img/bar-ads.gif" alt="">
                </a>
            </div>
        </div> -->
        <!-- Space For Ads -->
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

        <div v-else class=" category-content px-4 md:px-0 py-4 relative">
            <!-- Breadcrump Section -->
            <div class="max-w-[1280px] px-4 mx-auto">
                <div class="breadcrump  pb-2 flex flex-col gap-2 md:gap-2">
                    <div class="flex flex-col gap-4">
                        <div class="subcategory flex flex-wrap gap-3" v-if="allCategory?.length > 1">
                            <div class="subcategoryLink" v-for="(getcat, vcatidx) in allCategory" :key="vcatidx">
                                <NuxtLink :to="`/video/${getcat?.slug}`"
                                    :class="`${cat_slug === getcat?.slug && 'text-[#3375af]'} text-[#121212] font-[600] text-sm md:text-[17px] hover:text-[#3375af]`">
                                    {{ getcat.name_bn }}
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--/ Breadcrump Section -->

            <!--=============== Special Top Video ===============-->
            <div class="bg-[#00427A] mt-2">
                <div class="max-w-[1280px] mx-auto px-4 md:px-4 py-6 md:py-10">

                    <div class=" grid grid-cols-12 gap-6">
                        <div class=" col-span-12 md:col-span-3">
                            <div class="flex flex-col gap-10">
                                <NuxtLink :to="`/video/${specialTopVideos[1]?.cat_slug}/${specialTopVideos[1]?.id}`"
                                    class="flex flex-col gap-2 group">
                                    <div class=" overflow-hidden relative">
                                        <nuxt-img loading="lazy"
                                            :src="`${siteurl?.site_url}/media/videoImages/${specialTopVideos[1]?.img_bg_path}`"
                                            class="mx-auto w-full group-hover:scale-110 duration-300"
                                            :placeholder="img(`${siteurl?.site_url}/logo/placeholder.jpg`)" />
                                        <div class="play-icon absolute left-[45%] top-[40%]">
                                            <Icon name="simple-icons:youtubemusic"
                                                class=" col-span-2 md:col-span-2 text-4xl group-hover:text-[#3375af] text-[#ff0000]" />
                                        </div>
                                    </div>
                                </NuxtLink>
                                <NuxtLink :to="`/video/${specialTopVideos[2]?.cat_slug}/${specialTopVideos[2]?.id}`"
                                    class="flex flex-col gap-2 group">
                                    <div class=" overflow-hidden relative">
                                        <nuxt-img loading="lazy"
                                            :src="`${siteurl?.site_url}/media/videoImages/${specialTopVideos[2]?.img_bg_path}`"
                                            class="mx-auto w-full group-hover:scale-110 duration-300"
                                            :placeholder="img(`${siteurl?.site_url}/logo/placeholder.jpg`)" />
                                        <div class="play-icon absolute left-[45%] top-[40%]">
                                            <Icon name="simple-icons:youtubemusic"
                                                class=" col-span-2 md:col-span-2 text-4xl group-hover:text-[#3375af] text-[#ff0000]" />
                                        </div>
                                    </div>
                                </NuxtLink>
                            </div>
                        </div>
                        <div class="col-span-12 md:col-span-6">
                            <div class="special-feature_video">
                                <div v-if="specialTopVideos[0]?.is_live === 1">
                                    <iframe v-if="specialTopVideos[0]?.type === 1" width="620" height="352"
                                        :src="`https://www.youtube.com/embed/${specialTopVideos[0]?.code}?enablejsapi=1&autoplay=1&mute=1&rel=0&showinfo=1&controls=1&loop=1&playlist=${specialTopVideos[0]?.code}`"
                                        frameborder="0" allowfullscreen style="width: 100%!important;"></iframe>
                                    <div v-else class="fb-video"
                                        :data-href="`https://www.facebook.com/watch/?v=${specialTopVideos[0]?.code}`"
                                        data-width="auto" data-autoplay="true" data-show-captions="false"></div>
                                </div>
                                <div v-else>
                                    <NuxtLink v-if="specialTopVideos[0]?.type == 1" class="group mb-[20px] cursor-pointer"
                                        :to="`https://www.youtube.com/watch?v=${specialTopVideos[0]?.code}`" target="_blank"
                                        rel="nofollow">
                                        <div class="notliveimage relative">
                                            <img :src="`${siteurl?.site_url}/media/videoImages/${specialTopVideos[0]?.img_bg_path}`"
                                                :alt="specialTopVideos[0]?.title" style="width: 100%" />
                                            <Icon name="simple-icons:youtubemusic"
                                                class=" absolute top-[40%] left-[40%] col-span-2 md:col-span-3 text-6xl group-hover:text-[#3375af] text-[#ff0000]" />

                                            <h4 class="text-center bg-[#3375af] py-2 text-white group-hover:bg-red-600">
                                                {{ specialTopVideos[0]?.title }}
                                            </h4>
                                        </div>
                                    </NuxtLink>
                                    <NuxtLink v-else-if="specialTopVideos[0]?.type == 2"
                                        class="group mb-[20px] cursor-pointer"
                                        :to="`https://www.facebook.com/dhakaprokash24/videos/${specialTopVideos[0]?.code}`"
                                        target="_blank" rel="nofollow">
                                        <div class="notliveimage relative">
                                            <img :src="`${siteurl?.site_url}/media/videoImages/${specialTopVideos[0]?.img_bg_path}`"
                                                :alt="specialTopVideos[0]?.title" style="width: 100%" />
                                            <Icon name="simple-icons:youtubemusic"
                                                class=" absolute top-[40%] left-[40%] col-span-2 md:col-span-3 text-6xl group-hover:text-[#3375af] text-[#ff0000]" />

                                            <h4 class="text-center bg-[#3375af] py-2 text-white group-hover:bg-red-600">
                                                {{ specialTopVideos[0]?.title }}
                                            </h4>
                                        </div>
                                    </NuxtLink>
                                    <NuxtLink v-else class="group mb-[20px] cursor-pointer"
                                        :to="`/video/${specialTopVideos[0]?.slug}/${specialTopVideos[0]?.id}`"
                                        rel="nofollow">
                                        <div class="notliveimage relative">
                                            <img :src="`${siteurl?.site_url}/media/videoImages/${specialTopVideos[0]?.img_bg_path}`"
                                                :alt="specialTopVideos[0]?.title" style="width: 100%" />
                                            <Icon name="simple-icons:youtubemusic"
                                                class=" absolute top-[40%] left-[40%] col-span-2 md:col-span-3 text-6xl group-hover:text-[#3375af] text-[#ff0000]" />

                                            <h4 class="text-center bg-[#3375af] py-2 text-white group-hover:bg-red-600">
                                                {{ specialTopVideos[0]?.title }}
                                            </h4>
                                        </div>
                                    </NuxtLink>
                                </div>
                                <!-- <iframe width="518" height="292" src="https://www.youtube.com/embed/{{$spTopFirstVideo->code}}?enablejsapi=1&autoplay=1&mute=1&rel=0&showinfo=1&controls=1&loop=1&playlist={{$spTopFirstVideo->code}}" frameborder="0" allowfullscreen style="width: 100%!important;"></iframe> -->

                            </div>
                            <!-- <NuxtLink to="/" class="flex flex-col gap-5 group">
                                <div class=" overflow-hidden">

                                    <nuxt-img
                                        src="https://www.dhakaprokash24.com/media/content/images/2023October/SM/gaja-2-20231008122635.jpg"
                                        class="mx-auto w-full group-hover:scale-110 duration-300"
                                        :placeholder="img(`${siteurl?.site_url}/logo/placeholder.jpg`)" />

                                </div>
                              {{ specialTopVideos[0]?.title }}
                            </NuxtLink> -->
                        </div>
                        <div class="col-span-12 md:col-span-3">
                            <div class="flex flex-col gap-10">
                                <NuxtLink :to="`/video/${specialTopVideos[3]?.cat_slug}/${specialTopVideos[3]?.id}`"
                                    class="flex flex-col gap-2 group">
                                    <div class=" overflow-hidden relative">
                                        <nuxt-img loading="lazy"
                                            :src="`${siteurl?.site_url}/media/videoImages/${specialTopVideos[3]?.img_bg_path}`"
                                            class="mx-auto w-full group-hover:scale-110 duration-300"
                                            :placeholder="img(`${siteurl?.site_url}/logo/placeholder.jpg`)" />
                                        <div class="play-icon absolute left-[45%] top-[40%]">
                                            <Icon name="simple-icons:youtubemusic"
                                                class=" col-span-2 md:col-span-2 text-4xl group-hover:text-[#3375af] text-[#ff0000]" />
                                        </div>
                                    </div>
                                </NuxtLink>
                                <NuxtLink :to="`/video/${specialTopVideos[4]?.cat_slug}/${specialTopVideos[4]?.id}`"
                                    class="flex flex-col gap-2 group">
                                    <div class=" overflow-hidden relative">
                                        <nuxt-img loading="lazy"
                                            :src="`${siteurl?.site_url}/media/videoImages/${specialTopVideos[4]?.img_bg_path}`"
                                            class="mx-auto w-full group-hover:scale-110 duration-300"
                                            :placeholder="img(`${siteurl?.site_url}/logo/placeholder.jpg`)" />
                                        <div class="play-icon absolute left-[45%] top-[40%]">
                                            <Icon name="simple-icons:youtubemusic"
                                                class=" col-span-2 md:col-span-2 text-4xl group-hover:text-[#3375af] text-[#ff0000]" />
                                        </div>
                                    </div>
                                </NuxtLink>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--=============== Special Top Video ===============-->

            <div class="max-w-[1280px] mx-auto px-4 mt-6" v-if="categoryVideos?.length > 0">
                <div class="category-wise-videos mb-3" v-for="(catVideo, cvindxs) in categoryVideos" :key="cvindxs">
                    <div class="category-header border-b-4 border-b-[#3375af] my-3">
                        <NuxtLink :to="`/video/${catVideo?.category?.slug}`" class="flex gap-3 items-center">
                            <span class="w-3 h-3 bg-[#3375af]"></span>
                            <h2 class="text-[#3375af] text-[18px] font-semibold">{{ catVideo?.category?.name_bn }}</h2>
                        </NuxtLink>
                    </div>
                    <div class="grid grid-cols-12 gap-8 md:gap-3">
                        <div class="col-span-12 md:col-span-12">
                            <div class="grid grid-cols-12 gap-5 pb-4">
                                <NuxtLink v-for="(videocont, vcbc) in catVideo?.videos" :key="vcbc"
                                    :to="`/video/${catVideo?.category?.slug}/${videocont?.id}`"
                                    class="cat-box group shadow-md shadow-[#ddd] col-span-12 md:col-span-3 rounded-md bg-[#f5f5f5]">
                                    <div class="cat-box-image overflow-hidden relative">
                                        <nuxt-img loading="lazy"
                                            :src="`${siteurl.site_url}/media/videoImages/${videocont?.img_bg_path}`"
                                            class="mx-auto w-full h-full"
                                            :placeholder="img(`${siteurl.site_url}/logo/placeholder.jpg`)" />
                                        <div class="play-icon absolute left-[45%] top-[40%]">
                                            <Icon name="simple-icons:youtubemusic"
                                                class=" col-span-2 md:col-span-2 text-4xl group-hover:text-[#3375af] text-[#ff0000]" />
                                        </div>
                                    </div>
                                    <div class="px-4 py-4">
                                        <h3
                                            class="cat-postheading text-xl group-hover:text-[#ff0000] leading-[24px] text-[#121212]">
                                            {{ videocont?.title }}
                                        </h3>

                                    </div>
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>

<script setup>
const cat_slug = useRoute().params.videocat_slug

const nuxtApp = useNuxtApp()
const img = useImage()
const siteurl = siteUrlState()
// Sticky Status
const singlePageSticky = singlePageStickyState()
const stickyScroll = computed(() =>
    singlePageSticky.value
)

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

// ================== Subcategory Content ============= //

const specialTopVideos = useState(() => [])
const allCategory = useState(() => [])
const categoryVideos = useState(() => [])

const { data: dallvideo, pending } = await useFetch('/api/prismaapi/video/allvideo', {
    method: "GET",
    // transform(input) {
    //     return {
    //         ...input,
    //         fetchedAt: new Date()
    //     }
    // },
    // cache: 'force-cache',
    // getCachedData(allv) {
    //     const data = nuxtApp.payload.data[allv] || nuxtApp.static.data[allv]
    //     // If data is not fetched yet
    //     if (!data) {
    //         // Fetch the first time
    //         return
    //     }
    //     // Is the data too old?
    //     const expirationDate = new Date(data.fetchedAt)
    //     expirationDate.setTime(expirationDate.getTime() + 30 * 1000)
    //     const isExpired = expirationDate.getTime() < Date.now()
    //     if (isExpired) {
    //         // Refetch the data
    //         return
    //     }

    //     return data
    // },
})

specialTopVideos.value = dallvideo?.value?.specialTopVideos
allCategory.value = dallvideo?.value?.allCategory
categoryVideos.value = dallvideo?.value?.categoryVideos

</script>

<style scoped>
.subcategory .subcategoryLink:not(:last-child)::after {
    content: "";
    width: 7px;
    height: 7px;
    background: #3375af;
    display: inline-block;
    border-radius: 100%;
    margin-bottom: 3px;
    margin-left: 10px;
}

.cat-box:last-child {
    border-right: 0px !important;
}

.lead-overly {
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(53, 50, 50, 0.9) 75%, rgb(0, 0, 0) 100%);
}
</style>