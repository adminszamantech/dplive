<template>
    <div class="category-page">

        <Head>
            <Title>আর্কাইভ</Title>
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
            <div class="breadcrump border-b border-b-[#dee2e6] pb-2 mb-5 flex flex-col gap-2 md:gap-4">

                <div class="tag-title md:py-6 flex gap-3 items-center">
                    <Icon name="ri:archive-2-fill" class="text-[#3375af] text-3xl" />
                    <h1 class="text-xl md:text-3xl text-[#3375af] font-semibold">আর্কাইভ</h1>
                </div>

            </div>
            <!--/ Breadcrump Section -->

            <div class="grid grid-cols-12 gap-8 md:gap-3">
                <div class="col-span-12 md:col-span-9 md:border-r md:pr-3">

                    <!-- Loop Category Post Section -->
                    <div class="category-post-list grid grid-cols-12">
                        <div class="col-span-2 hidden md:block"></div>
                        <div class="col-span-12 md:col-span-8">
                            <!-- Loop Item -->

                            <div v-if="archiveContents?.length > 0" class="cat-post-item py-4 border-b"
                                v-for="(archiveContent, cpInx) in archiveContents" :key="cpInx">

                                <NuxtLink
                                    :to="`/category/${archiveContent?.category?.cat_slug}/${archiveContent?.content_id}`"
                                    class=" grid grid-cols-12 gap-3 group">
                                    <h3 class="cat-title col-span-12 text-[20px] group-hover:text-[#ff0000]">{{
                                        archiveContent?.content_heading }}</h3>
                                    <div class=" col-span-7 flex flex-col gap-3">
                                        <ClientOnly>
                                            <div class="cat-desc text-[#555555] text-[15px] font-[300]"
                                                v-html="archiveContent?.content_details.substring(0, 160)"></div>
                                        </ClientOnly>

                                        <span class="post-date flex flex-col gap-1">
                                            <small class="text-[#555555]">আপডেট: {{
                                                postCreatedDate(archiveContent?.updated_at) }}</small>
                                            <small class="text-[#555555]">প্রকাশ: {{
                                                postCreatedDate(archiveContent?.created_at) }}</small>
                                        </span>
                                    </div>
                                    <div class=" col-span-5 category-post-image overflow-hidden">
                                        <nuxt-img loading="lazy"
                                            :src="`${siteurl.site_url}/media/content/images/${archiveContent?.img_bg_path}`"
                                            class="mx-auto w-full group-hover:scale-110 duration-300"
                                            :placeholder="img(`${siteurl.site_url}/logo/placeholder.jpg`)" />
                                    </div>
                                </NuxtLink>
                            </div>
                            <div v-else>
                                <h2 class="text-4xl">কোনো তথ্য পাওয়া যায়নি</h2>
                            </div>

                            <!--/ Loop Item -->

                        </div>
                        <div class="col-span-2 hidden md:block"></div>
                    </div>
                    <div v-if="archiveContents?.length > 0" class="flex justify-center items-center">
                        <button @click="loadMoreButtonHandler"
                            class="border border-[#dee2e6] text-[#3375af] px-8 py-2 rounded-sm mt-5 hover:border-[#3375af]"><b>আরও</b></button>
                    </div>
                    <!-- Loop Category Post Section -->
                </div>
                <div class=" col-span-12 md:col-span-3">
                    <div :class="`sticky ${stickyScroll ? ' top-44' : 'top-16'}`">
                        <client-only>
                            <VDatePicker @click="onClickDate" v-model="archiveDate" :attributes="attrs" />
                        </client-only>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
 
<script setup>
import { ref } from '#imports'
const img = useImage()
const siteurl = siteUrlState()
const archiveDate = ref(new Date())
const attrs = ref([
    {
        key: 'today',
        highlight: {
            color: '#284f81',
            fillMode: 'solid'
        },

    }
])
// Sticky Status
const singlePageSticky = singlePageStickyState()
const stickyScroll = computed(() =>
    singlePageSticky.value
)
// Sticky Status

// ================ Get Bangla Date ============== //
const getDate = new Intl.DateTimeFormat('bn-bd', { year: 'numeric', month: 'long', day: "numeric", hour: "numeric", minute: 'numeric' })
// const postDate = getDate.format(new Date(detailsContent.value.created_at)).replace('এ', '|').replace('PM', 'পিএম').replace('AM', 'এএম')
const postCreatedDate = (date) => {
    return getDate.format(new Date(date)).replace('এ', '|').replace('PM', 'পিএম').replace('AM', 'এএম')
}
// ================ Get Bangla Date ============== //

//================== Tag Content fetching =============== //

//Archive Content State
const firstLoad = ref(true)
const isArchiveClickedDate = ref(false)
const archiveContents = useState(() => [])
const take = ref(10)
const { data: arcvCon, pending } = await useFetch('/api/archive/getarchive', {
    method: "POST",
    body: {
        date: '',
        take: take.value
    }
})
// Tag Content Assign
archiveContents.value = arcvCon


//================== Tag Content fetching =============== //

const onClickDate = async () => {
    firstLoad.value = false
    isArchiveClickedDate.value = true
    take.value = 10
    const { data: dcont } = await useFetch('/api/archive/getarchive', {
        method: "POST",
        body: {
            date: archiveDate.value,
            take: take.value
        }
    })
    archiveContents.value = dcont
    console.log(archiveContents.value)
}

//================ Load More Tag Content Button =================//
const loadMoreButtonHandler = async () => {
    take.value += 10
    if (firstLoad.value === true && isArchiveClickedDate.value === false) {
        const { data: lodarch } = await useFetch('/api/archive/getarchive', {
            method: "POST",
            body: {
                date: '',
                take: take.value
            }
        })
        archiveContents.value = lodarch
    } else {
        const { data: lodarch } = await useFetch('/api/archive/getarchive', {
            method: "POST",
            body: {
                date: archiveDate.value,
                take: take.value
            }
        })
        archiveContents.value = lodarch

    }


}
//================ Load More Tag Content Button =================//


</script>
 
<style scoped></style>