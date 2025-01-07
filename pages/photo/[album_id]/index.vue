<template>
    <div class="category-page">

        <Head>
            <Title>{{ albumCatData?.cat_name_bn }} | ঢাকাপ্রকাশ</Title>
        </Head>

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
            <div class="breadcrump border-b border-b-[#dee2e6] pb-2 mb-5 flex flex-col gap-2 md:gap-1">

                <div class="flex gap-1 justify-start items-center">
                    <NuxtLink :to="`/photo/${albumCatData?.cat_slug}`" class="text-[#3375af] font-semibold">
                        <h1 class="text-xl md:text-2xl">{{ albumCatData?.cat_name_bn }}</h1>
                    </NuxtLink>
                </div>

            </div>
            <!--/ Breadcrump Section -->
            <div class="grid grid-cols-12 md:gap-6">

                <div class="col-span-12">
                    <!-- Category Lead Section -->
                    <div v-if="albumCatData?.catalbums?.length > 0" class="grid grid-cols-12 gap-4 pb-4">

                        <!-- Loop photo gallery -->
                        <NuxtLink v-for="(albcat, acdkey) in albumCatData?.catalbums" :key="acdkey"
                            :to="`/photo/${albcat?.cat_slug}/album/${albcat?.album_id}`"
                            class="col-span-12 md:col-span-3 mb-6 bg-[#efefef]">
                            <div class="lead-post group overflow-hidden">
                                <div class="relative">
                                    <nuxt-img loading="lazy"
                                        :src="`${siteurl.site_url}/media/photoAlbum/${albcat?.photo_path}`"
                                        class="mx-auto w-full group-hover:scale-110 duration-300"
                                        :placeholder="img(`${siteurl.site_url}/logo/placeholder.jpg`)" />
                                </div>
                            </div>
                            <div class="image-caption px-4 py-4">
                                <h4 class="text-xl">{{ albcat?.album_name }}</h4>
                            </div>
                        </NuxtLink>

                    </div>

                </div>


            </div>

        </div>
    </div>
</template>

<script setup>
const nuxtApp = useNuxtApp()

const album_id = useRoute().params.album_id

// ================ Get Bangla Date ============== //
const getDate = new Intl.DateTimeFormat('bn-bd', { year: 'numeric', month: 'long', day: "numeric", hour: "numeric", minute: 'numeric' })
// const postDate = getDate.format(new Date(detailsContent.value.created_at)).replace('এ', '|').replace('PM', 'পিএম').replace('AM', 'এএম')
const postCreatedDate = (date) => {
    // If date value has
    if (date) {
        return getDate.format(new Date(date)).replace(' এ ', ' | ').replace('PM', 'পিএম').replace('AM', 'এএম')
    }
}
// ================ Get Bangla Date ============== //

const img = useImage()
const siteurl = siteUrlState()

// Sticky Status
const singlePageSticky = singlePageStickyState()
const stickyScroll = computed(() =>
    singlePageSticky.value
)

const albumCatData = useState(() => [])

const { data: albumcatd, pending } = await useFetch(`/api/prismaapi/gallery/albumcategoryphotos`, {
    method: "POST",
    body: {
        album_id: album_id
    },
    // transform(input) {
    //     return {
    //         ...input,
    //         fetchedAt: new Date()
    //     }
    // },
    // key: `gpalphotkey-${album_id}`,
    // cache: 'force-cache',
    // getCachedData(keys) {
    //     const data = nuxtApp.payload.data[keys] || nuxtApp.static.data[keys]
    //     // If data is not fetched yet
    //     if (!data) {
    //         // Fetch the first time
    //         return
    //     }

    //     // Is the data too old?
    //     const expirationDate = new Date(data.fetchedAt)

    //     // expirationDate.getTime() + [second amount] * 1000
    //     expirationDate.setTime(expirationDate.getTime() + 50 * 1000)
    //     const isExpired = expirationDate.getTime() < Date.now()
    //     if (isExpired) {
    //         // Refetch the data
    //         return
    //     }

    //     return data
    // },
})

albumCatData.value = albumcatd.value

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
</style>