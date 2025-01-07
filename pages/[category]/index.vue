<template>
    <div class="category-page" v-if="categoryContent">

        <Head>
            <Title>{{ categoryContent ? category?.cat_name_bn : '404 Not Found' }} | ঢাকাপ্রকাশ</Title>
        </Head>
        <!-- Category Top Ads -->
        <div v-if="categoryTopAds?.status === 1" class="py-4 mt-2 border-b border-t border-b-[#e2e2e2] border-t-[#e2e2e2]">
            <AdsDesktopCategoryTop :categoryTopAds="categoryTopAds" />
        </div>
        <!-- Category Top Ads -->
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
            <div class="breadcrump border-b border-b-[#dee2e6] pb-2 mb-5 flex flex-col gap-0 md:gap-2">
                <div class="flex gap-1 justify-start items-center">
                    <NuxtLink :to="`/${category?.cat_slug}`" class="text-[#3375af] font-semibold">
                        <!-- {{ detailsContent?.category?.cat_name_bn }} -->
                        <h1 class="text-xl md:text-3xl">{{ category?.cat_name_bn }}</h1>
                    </NuxtLink>
                </div>
                <div>
                    <div class="subcategory flex flex-wrap gap-3" v-if="subcategory?.length > 0">
                        <!-- <Icon v-if="detailsContent?.subcategory" name="ic:outline-keyboard-arrow-right" /> -->
                        <div class="subcategoryLink" v-for="subcat in subcategory">
                            <NuxtLink :to="`/${category?.cat_slug}/${subcat?.subcat_slug}`"
                                class="text-[000000] font-[600] text-sm md:text-[16px] hover:text-[#3375af]">
                                {{ subcat?.subcat_name_bn }}
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
            <!--/ Breadcrump Section -->

            <div class="grid grid-cols-12 gap-8 md:gap-3">
                <div class="col-span-12 md:col-span-9 md:border-r md:pr-3" v-if="categoryContent?.length > 0">
                    <!-- Category Lead Section -->
                    <div class="grid grid-cols-12 border-b border-b-[#dee2e6] pb-4">
                        <div class="col-span-12 md:col-span-8 md:pr-3 mb-1 md:mb-0">
                            <div class="lead-post md:h-[328px] group overflow-hidden">
                                <NuxtLink
                                    :to="getPostUrl(categoryContent[0]?.cat_slug, categoryContent[0]?.subcat_slug, categoryContent[0]?.content_type, categoryContent[0]?.content_id)"
                                    class="relative">
                                    <nuxt-img loading="lazy"
                                        :src="`${siteurl.site_url}/media/content/images/${categoryContent[0]?.img_bg_path}`"
                                        class="mx-auto w-full group-hover:scale-110 duration-300 md:h-full"
                                        :placeholder="img(`${siteurl.site_url}/logo/placeholder.jpg`)" />
                                    <div class="lead-overly absolute h-full w-full block top-0">
                                        <h5
                                            class="img-title text-white  font-semibold group-hover:text-[#ff0000] pr-5 text-[18px] md:text-[24px] absolute bottom-4 left-6">
                                            {{ categoryContent[0]?.content_heading }}</h5>
                                    </div>
                                </NuxtLink>
                            </div>
                        </div>
                        <div v-if="categoryContent[1]"
                            class="col-span-12 md:col-span-4  border-t mt-2 md:mt-0 pt-3 md:pt-0 md:border-t-0 md:pl-3 md:border-l border-l-[#dee2e6]">
                            <NuxtLink
                                :to="getPostUrl(categoryContent[1]?.cat_slug, categoryContent[1]?.subcat_slug, categoryContent[1]?.content_type, categoryContent[1]?.content_id)"
                                class="categorypost-2 group">
                                <div class="cat-feature-image overflow-hidden">
                                    <nuxt-img loading="lazy"
                                        :src="`${siteurl.site_url}/media/content/images/${categoryContent[1]?.img_bg_path}`"
                                        class="mx-auto w-full group-hover:scale-110 duration-300 h-full"
                                        :placeholder="img(`${siteurl.site_url}/logo/placeholder.jpg`)" />
                                </div>
                                <div class="flex flex-col gap-3 mt-2">
                                    <h3
                                        class="cat-postheading text-xl group-hover:text-[#ff0000] font-semibold text-[#121212]">
                                        {{ categoryContent[1]?.content_heading }}
                                    </h3>
                                    <ClientOnly>
                                        <div class="cat-postdesc text-base text-black font-[300]"
                                            v-html="`${categoryContent[1]?.content_details.substring(0, 155)}...`"></div>
                                    </ClientOnly>
                                    <small class="cat-postdate">
                                        <!-- প্রকাশ: {{ postCreatedDate(categoryContent[1]?.created_at) }} -->
                                        <span class="text-sm text-black">
                                            {{ postCreatedDateWithTime(categoryContent[1]?.created_at) }}
                                        </span>
                                    </small>
                                </div>
                            </NuxtLink>
                        </div>
                    </div>
                    <!--/ Category Lead Section -->
                    <!-- Category Bottom Lead -->
                    <div v-if="categoryContent[2]"
                        :class="`grid grid-cols-12 gap-4 md:gap-0 py-4 ${categoryBottomAds?.status === 1 ? '' : 'border-b border-b-[#dee2e6]'} `">
                        <NuxtLink
                            :to="getPostUrl(categoryContent[2]?.cat_slug, categoryContent[2]?.subcat_slug, categoryContent[2]?.content_type, categoryContent[2]?.content_id)"
                            class="cat-box group md:pr-3 md:border-r border-r-[#dee2e6] col-span-12 md:col-span-4">
                            <div class="cat-box-image overflow-hidden">
                                <nuxt-img loading="lazy"
                                    :src="`${siteurl.site_url}/media/content/images/${categoryContent[2]?.img_bg_path}`"
                                    class="mx-auto w-full group-hover:scale-110 duration-300 h-full"
                                    :placeholder="img(`${siteurl.site_url}/logo/placeholder.jpg`)" />
                            </div>
                            <div class="flex flex-col gap-3 mt-2">
                                <h3 class="cat-postheading text-xl group-hover:text-[#ff0000] font-semibold text-[#121212]">
                                    {{ categoryContent[2]?.content_heading }}
                                </h3>
                                <ClientOnly>
                                    <div class="cat-postdesc text-base text-black font-[300]"
                                        v-html="`${categoryContent[2]?.content_details.substring(0, 155)}...`"></div>
                                </ClientOnly>
                                <small class="cat-postdate">
                                    <span class="text-sm text-black">
                                        {{ postCreatedDateWithTime(categoryContent[2]?.created_at) }}
                                    </span>
                                </small>
                            </div>
                        </NuxtLink>
                        <NuxtLink v-if="categoryContent[3]"
                            :to="getPostUrl(categoryContent[3]?.cat_slug, categoryContent[3]?.subcat_slug, categoryContent[3]?.content_type, categoryContent[3]?.content_id)"
                            class="cat-box group md:px-3 md:border-r border-r-[#dee2e6] col-span-12 md:col-span-4">
                            <div class="cat-box-image overflow-hidden">
                                <nuxt-img loading="lazy"
                                    :src="`${siteurl.site_url}/media/content/images/${categoryContent[3]?.img_bg_path}`"
                                    class="mx-auto w-full group-hover:scale-110 duration-300 h-full"
                                    :placeholder="img(`${siteurl.site_url}/logo/placeholder.jpg`)" />
                            </div>
                            <div class="flex flex-col gap-3 mt-2">
                                <h3 class="cat-postheading text-xl group-hover:text-[#ff0000] font-semibold text-[#121212]">
                                    {{ categoryContent[3]?.content_heading }}
                                </h3>
                                <ClientOnly>
                                    <div class="cat-postdesc text-base font-[300] text-black"
                                        v-html="`${categoryContent[3]?.content_details.substring(0, 155)}...`"></div>
                                </ClientOnly>
                                <small class="cat-postdate">
                                    <span class="text-sm text-black">
                                        {{ postCreatedDateWithTime(categoryContent[3]?.created_at) }}
                                    </span>
                                </small>
                            </div>
                        </NuxtLink>
                        <NuxtLink v-if="categoryContent[4]"
                            :to="getPostUrl(categoryContent[4]?.cat_slug, categoryContent[4]?.subcat_slug, categoryContent[4]?.content_type, categoryContent[4]?.content_id)"
                            class="cat-box group md:pl-3 col-span-12 md:col-span-4">
                            <div class="cat-box-image overflow-hidden">
                                <nuxt-img loading="lazy"
                                    :src="`${siteurl.site_url}/media/content/images/${categoryContent[4]?.img_bg_path}`"
                                    class="mx-auto w-full group-hover:scale-110 duration-300 h-full"
                                    :placeholder="img(`${siteurl.site_url}/logo/placeholder.jpg`)" />
                            </div>
                            <div class="flex flex-col gap-3 mt-2">
                                <h3 class="cat-postheading text-xl group-hover:text-[#ff0000] font-semibold text-[#121212]">
                                    {{ categoryContent[4]?.content_heading }}
                                </h3>
                                <ClientOnly>
                                    <div class="cat-postdesc text-base font-[300] text-black"
                                        v-html="`${categoryContent[4]?.content_details.substring(0, 155)}...`"></div>
                                </ClientOnly>
                                <small class="cat-postdate text-black">
                                    {{ postCreatedDateWithTime(categoryContent[4]?.created_at) }}
                                </small>
                            </div>
                        </NuxtLink>
                        <!--::::::::::::::::::: Ads Section :::::::::::::::::::::::: -->
                        <div class=" col-span-12 cat-inside-ads">
                            <!-- Category Bottom Ads -->
                            <div v-if="categoryBottomAds?.status === 1"
                                class="py-4 mt-16 border-b border-t border-b-[#e2e2e2] border-t-[#e2e2e2]">
                                <AdsDesktopCategoryBottom :categoryBottomAds="categoryBottomAds" />
                            </div>
                            <!-- Category Bottom Ads -->
                            <!-- <NuxtLink to="/">
                                <nuxt-img :src="`/assets/img/cat-ads.gif`"
                                    class="mx-auto w-full group-hover:scale-110 duration-300 px-2 mt-6 mb-2"
                                    :placeholder="img(`${siteurl.site_url}/logo/placeholder.jpg`)" />
                            </NuxtLink> -->
                        </div>
                        <!--::::::::::::::::::: Ads Section :::::::::::::::::::::::: -->
                    </div>
                    <!--/ Category Bottom Lead -->
                    <!-- Loop Category Post Section -->
                    <div class="category-post-list grid grid-cols-12 mt-4">
                        <div class="col-span-2 hidden md:block"></div>
                        <div class="col-span-12 md:col-span-8">
                            <!-- Loop Item -->

                            <div class="cat-post-item py-4 border-b" v-for="(catPost, cpInx) in categoryContentExcept"
                                :key="cpInx">
                                <NuxtLink
                                    :to="getPostUrl(catPost?.cat_slug, catPost?.subcat_slug, catPost?.content_type, catPost?.content_id)"
                                    class=" grid grid-cols-12 gap-3 group">
                                    <div class=" col-span-7 flex flex-col gap-3">
                                        <h3
                                            class="cat-title text-[18px] md:text-[20px] font-semibold group-hover:text-[#ff0000]">
                                            {{
                                                catPost?.content_heading }}</h3>
                                        <ClientOnly>
                                            <div class="cat-desc text-black text-base font-[300] hidden md:block"
                                                v-html="`${catPost?.content_details.substring(0, 155)}...`"></div>
                                        </ClientOnly>
                                        <span class="post-date md:flex flex-col gap-1 hidden text-base text-black">
                                            <!-- <small>আপডেট: {{
                                                postCreatedDateWithTime(catPost?.updated_at) }}</small> -->
                                            <small>{{
                                                postCreatedDateWithTime(catPost?.created_at) }}</small>
                                        </span>
                                        <p class="text-sm text-black flex gap-1 items-center md:hidden">
                                            <Icon name="ph:alarm-bold" />
                                            <span>
                                                {{ postCreatedDate(catPost?.created_at) }}
                                            </span>
                                        </p>
                                    </div>
                                    <div class=" col-span-5 category-post-image overflow-hidden">
                                        <nuxt-img loading="lazy"
                                            :src="`${siteurl.site_url}/media/content/images/${catPost?.img_bg_path}`"
                                            class="mx-auto w-full group-hover:scale-110 duration-300"
                                            :placeholder="img(`${siteurl.site_url}/logo/placeholder.jpg`)" />
                                    </div>
                                </NuxtLink>
                            </div>

                            <!--/ Loop Item -->

                        </div>
                        <div class="col-span-2 hidden md:block"></div>
                    </div>
                    <div class="flex justify-center items-center py-6" v-if="categoryContent?.length > 10">
                        <button @click="loadMoreButtonHandler"
                            class="border border-[#dee2e6] text-[#3375af] px-8 py-2 rounded-sm mt-5 hover:border-[#3375af]"><b>আরও</b></button>
                    </div>
                    <!-- Loop Category Post Section -->
                </div>
                <div class="col-span-12 md:col-span-9 md:border-r md:pr-3" v-else>
                    <h2 class="text-2xl text-center py-8">আপনি যে বিষয়টি অনুসন্ধান করছেন তা খুজে পাওয়া যায়নি</h2>
                </div>
                <div class=" col-span-12 md:col-span-3">
                    <!-- Category Right One Ads -->
                    <div v-if="categoryRightOneAds?.status === 1" class="py-4 border-b border-b-[#e2e2e2] mb-3">
                        <AdsDesktopCategoryRightOne :categoryRightOneAds="categoryRightOneAds" />
                    </div>
                    <!-- Category Right One Ads -->
                    <div :class="`sticky ${stickyScroll ? ' top-44' : 'top-16'} duration-200`">
                        <!-- <Tabs class="hidden md:block" /> -->
                        <HomePostTabs class="hidden md:block" />
                        <!-- Category Right Two Ads -->
                        <div v-if="categoryRightTwoAds?.status === 1"
                            class="py-4 border-b border-b-[#e2e2e2] border-t border-t-[#e2e2e2] mt-4">
                            <AdsDesktopCategoryRightTwo :categoryRightTwoAds="categoryRightTwoAds" />
                        </div>
                        <!-- Category Right Two Ads -->
                        <!-- Category Right Three Ads -->
                        <div v-if="categoryRightThreeAds?.status === 1"
                            class="py-4 border-b border-b-[#e2e2e2] border-t border-t-[#e2e2e2] mt-4">
                            <AdsDesktopCategoryRightThree :categoryRightThreeAds="categoryRightThreeAds" />
                        </div>
                        <!-- Category Right Three Ads -->
                    </div>

                </div>
            </div>
            <!-- Category Bottom Ads -->
            <div v-if="categoryBottomAds?.status === 1"
                class="py-4 mt-16 border-b border-t border-b-[#e2e2e2] border-t-[#e2e2e2]">
                <AdsDesktopCategoryBottom :categoryBottomAds="categoryBottomAds" />
            </div>
            <!-- Category Bottom Ads -->
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
import { postCreatedDateWithTime, postCreatedDate, getPostUrl } from '~/lib/helpers';

const img = useImage()
const siteurl = siteUrlState()

// Sticky Status
const singlePageSticky = singlePageStickyState()
const stickyScroll = computed(() =>
    singlePageSticky.value
)
//
const cat_slug = useRoute().params.category

//================== Category Content fetching =============== //
// Category State
const category = ref('')
const subcategory = useState(() => [])
//Category Content State
const categoryContent = useState(() => [])
const categoryContentExcept = useState(() => [])
const take = ref(15)

// Leading Post 
const { data: catcont, pending } = await useFetch('/api/prismaapi/category/categorycontent', {
    method: "POST",
    body: {
        cat_slug: cat_slug,
        take: take.value,
        skip: 0
    }
})
// Category Content Assign
categoryContent.value = catcont?.value?.contents
// Leading Post 
// console.log(categoryContent.value)
// Category Assign
category.value = catcont?.value?.category
subcategory.value = catcont?.value?.subcat
// Category Assign

// Except Content more 
const { data: excptcatcont } = await useFetch('/api/prismaapi/category/categorycontent', {
    method: "POST",
    body: {
        cat_slug: cat_slug,
        take: 10,
        skip: 5
    }
})

categoryContentExcept.value = excptcatcont?.value?.contents
// Except Content more 

// console.log(catcont?.value?.category)
//================== Category Content fetching =============== //

//================ Load More Category Content Button =================//
const loadMoreButtonHandler = async () => {
    take.value += 10
    const { data: loadCtP } = await useFetch('/api/prismaapi/category/categorycontent', {
        method: "POST",
        body: {
            cat_slug: cat_slug,
            take: take.value,
            skip: 5
        }
    })
    categoryContentExcept.value = loadCtP?.value?.contents
}
//================ Load More Category Content Button =================//

//========== Category Page Top Ads ==========//
// Page 1 = Common, 2 = Home Page, 3 = Category Page, 4 = Details Page
const categoryTopAds = useState(() => '')
const { data: catTpAds } = await useFetch('/api/prismaapi/adsmanager/commonads', {
    method: "POST",
    body: {
        page: 3,
        position: 1
    }
})
categoryTopAds.value = catTpAds?.value
//========== Category Page Top Ads ==========//

//========== Category Page Bottom Ads ==========//
// Page 1 = Common, 2 = Home Page, 3 = Category Page, 4 = Details Page
const categoryBottomAds = useState(() => '')
const { data: catBtmAds } = await useFetch('/api/prismaapi/adsmanager/commonads', {
    method: "POST",
    body: {
        page: 3,
        position: 2
    }
})
categoryBottomAds.value = catBtmAds?.value
//========== Category Page Bottom Ads ==========//

//========== Category Page Right One Ads ==========//
// Page 1 = Common, 2 = Home Page, 3 = Category Page, 4 = Details Page
const categoryRightOneAds = useState(() => '')
const { data: catRoneAds } = await useFetch('/api/prismaapi/adsmanager/commonads', {
    method: "POST",
    body: {
        page: 3,
        position: 3
    }
})
categoryRightOneAds.value = catRoneAds?.value
//========== Category Page Right One Ads ==========//

//========== Category Page Right Two Ads ==========//
// Page 1 = Common, 2 = Home Page, 3 = Category Page, 4 = Details Page
const categoryRightTwoAds = useState(() => '')
const { data: catRtwoAds } = await useFetch('/api/prismaapi/adsmanager/commonads', {
    method: "POST",
    body: {
        page: 3,
        position: 4
    }
})
categoryRightTwoAds.value = catRtwoAds?.value
//========== Category Page Right Two Ads ==========//

//========== Category Page Right Three Ads ==========//
// Page 1 = Common, 2 = Home Page, 3 = Category Page, 4 = Details Page
const categoryRightThreeAds = useState(() => '')
const { data: catRthreeAds } = await useFetch('/api/prismaapi/adsmanager/commonads', {
    method: "POST",
    body: {
        page: 3,
        position: 5
    }
})
categoryRightThreeAds.value = catRthreeAds?.value
//========== Category Page Right Three Ads ==========//

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