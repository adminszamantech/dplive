<template>
    <div v-if="videoContents" class="category-page">

        <Head>
            <Title>{{ category?.name_bn }} | ঢাকাপ্রকাশ</Title>
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

        <div v-else class=" max-w-[1280px] mx-auto category-content px-4 md:px-4 py-4 relative">
            <!-- Breadcrump Section -->
            <div class="breadcrump border-b border-b-[#dee2e6] pb-2 mb-5 flex flex-col gap-2 md:gap-2">
                <div class="flex gap-1 justify-start items-center">
                    <NuxtLink :to="`/video/${category?.slug}`" class=" font-semibold ">
                        <!-- {{ detailsContent?.category?.cat_name_bn }} -->
                        <h1
                            class="text-xl md:text-xl border-b text-[#3375af] hover:text-[#3375af] hover:border-b-[#3375af]">
                            {{ category?.name_bn }}</h1>
                    </NuxtLink>
                </div>

                <div class="flex flex-col gap-4">
                    <div class="subcategory flex flex-wrap gap-3" v-if="allCategory?.length > 1">
                        <!-- <Icon v-if="detailsContent?.subcategory" name="ic:outline-keyboard-arrow-right" /> -->
                        <!-- <div class="subcategoryLink" v-for="subcat in subcategory">
                            <NuxtLink :to="`/${category?.cat_slug}/${subcat?.subcat_slug}`"
                                :class="`${subcategory?.subcat_name_bn === subcat?.subcat_name_bn && 'text-[#3375af]'} text-[#121212] font-[600] text-sm md:text-[16px] hover:text-[#3375af]`">
                                {{ subcat?.subcat_name_bn }}
                            </NuxtLink>
                        </div> -->
                        <div class="subcategoryLink" v-for="(getcat, vcatidx) in allCategory" :key="vcatidx">
                            <NuxtLink :to="`/video/${getcat?.slug}`"
                                :class="`${vcat_slug === getcat?.slug && 'text-[#3375af]'} text-[#121212] font-[600] text-sm md:text-[17px] hover:text-[#3375af]`">
                                {{ getcat?.name_bn }}
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
            <!--/ Breadcrump Section -->
            <div class="grid grid-cols-12 gap-8 md:gap-3">
                <div class="col-span-12 md:col-span-12" v-if="videoContents?.length > 10">
                    <!--/ Category Lead Section -->
                    <!-- Category Bottom Lead -->
                    <div class="grid grid-cols-12 gap-5 py-4">
                        <NuxtLink v-for="(videocont, vcnt) in videoContents" :key="vcnt"
                            :to="`/video/${category?.slug}/${videocont?.id}`"
                            class="cat-box group shadow-md shadow-[#ddd] col-span-12 md:col-span-4 rounded-md bg-[#f5f5f5]">
                            <div class="cat-box-image overflow-hidden relative">
                                <nuxt-img loading="lazy"
                                    :src="`${siteurl?.site_url}/media/videoImages/${videocont?.img_bg_path}`"
                                    class="mx-auto w-full h-full"
                                    :placeholder="img(`${siteurl?.site_url}/logo/placeholder.jpg`)" />
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
                    <!--/ Category Bottom Lead -->
                    <div class="text-center" v-if="videoContents?.length > 10">
                        <button @click="loadMoreButtonHandler"
                            class="border border-[#dee2e6] text-[#3375af] px-8 py-2 rounded-sm mt-5 hover:border-[#3375af]"><b>আরও</b></button>
                    </div>

                </div>
            </div>
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
const vcat_slug = useRoute().params.videocat_slug

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

const category = ref('')
const videoContents = useState(() => [])
const allCategory = useState(() => [])

const take = ref(12)

const { data: vcatcont, pending } = await useFetch('/api/prismaapi/video/categoryvideos', {
    method: "POST",
    body: {
        cat_slug: vcat_slug,
        take: take.value
    },
    // transform(input) {
    //     return {
    //         ...input,
    //         fetchedAt: new Date()
    //     }
    // },
    // key: `videocatslug-${vcat_slug}`,
    // cache: 'force-cache',
    // getCachedData(subcat) {
    //     const data = nuxtApp.payload.data[subcat] || nuxtApp.static.data[subcat]
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

category.value = vcatcont?.value?.category
videoContents.value = vcatcont?.value?.videos
allCategory.value = vcatcont?.value?.allCategory

//================ Load More Category Video Content Button =================//
const loadMoreButtonHandler = async () => {
    take.value += 6

    const { data: morevcont } = await useFetch('/api/prismaapi/video/categoryvideos', {
        method: "POST",
        body: {
            cat_slug: vcat_slug,
            take: take.value
        },

        key: `cat-${vcat_slug}`,
    })
    videoContents.value = morevcont?.value?.videos
}
//================ Load More Category Video Content Button =================//

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