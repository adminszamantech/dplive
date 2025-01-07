<template>
    <div class="category-page">

        <Head>
            <Title>{{ headerTitle }} - অনুসন্ধান | ঢাকা প্রকাশ</Title>
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
            <div class="breadcrump border-b border-b-[#dee2e6] pb-2 mb-5 grid grid-cols-12 items-center gap-4 md:gap-4">

                <div class="col-span-12 md:col-span-3">
                    <div class="tag-title md:py-6 md:flex gap-3 items-center hidden">
                        <Icon name="ph:magnifying-glass" class="text-[#3375af] text-4xl" />
                        <h1 class="text-xl md:text-3xl text-[#3375af] font-semibold">অনুসন্ধান</h1>
                    </div>
                    <div class="tag-title py-1 md:py-6 text-center md:hidden">
                        <h1 class="text-2xl md:text-3xl text-[#3375af] font-semibold">অনুসন্ধান</h1>
                    </div>
                </div>
                <div class="col-span-12 md:col-span-6">
                    <div class="searchbox-page relative">
                        <input type="text" placeholder="খুঁজুন" @keyup.enter="searchButtonHandler" v-model="inputKeyword" @change="onChangeKeyword"
                            class=" focus:outline-none border border-[#cccccc] text-xl md:text-2xl rounded-[4px] pl-4 pr-10 py-2 w-full">
                        <div @click="searchButtonHandler" class="  px-2 py-2  cursor-pointer absolute top-1 right-0">
                            <Icon class="text-2xl group-hover:text-white" name="tabler:search" />
                        </div>
                    </div>
                </div>
                <div class=" hidden md:block md:col-span-3"></div>
            </div>
            <!--/ Breadcrump Section -->

            <div class="grid grid-cols-12 gap-0 md:gap-3">
                <div class="col-span-12 md:col-span-2 ">
                </div>
                <div class="col-span-12 md:col-span-8">

                    <!-- Loop Category Post Section -->
                    <div class="category-post-list grid grid-cols-12">
                        <div class="col-span-2 hidden md:block"></div>
                        <div class="col-span-12 md:col-span-8">


                            <div v-if="searchResults?.length > 0" class="cat-post-item py-4 border-b"
                                v-for="(searchResult, seaInx) in searchResults" :key="seaInx">

                                <NuxtLink
                                    :to="getPostUrl(searchResult?.cat_slug, searchResult?.subcat_slug, searchResult?.content_type, searchResult?.content_id)"
                                    class=" grid grid-cols-12 gap-3 group">

                                    <div class=" col-span-7 flex flex-col gap-2 md:gap-3">
                                        <h3
                                            class="cat-title col-span-12 font-semibold text-[18px] md:text-[20px] group-hover:text-[#ff0000]">
                                            {{ searchResult?.content_heading }}</h3>
                                        <ClientOnly>
                                            <div class="cat-desc text-black text-base font-[300] hidden md:block"
                                                v-html="`${searchResult?.content_details.substring(0, 160)}...`"></div>
                                        </ClientOnly>

                                        <span class="post-date text-black md:flex flex-col gap-1 text-base hidden">
                                            <small>আপডেট: {{
                                                postCreatedDateWithTime(searchResult?.updated_at) }}</small>
                                            <small>প্রকাশ: {{
                                                postCreatedDateWithTime(searchResult?.created_at) }}</small>
                                        </span>
                                        <p class="text-sm text-black flex gap-1 items-center md:hidden">
                                            <Icon name="ph:alarm-bold" />
                                            <span>
                                                {{ postCreatedDate(searchResult?.created_at) }}
                                            </span>
                                        </p>
                                    </div>
                                    <div class=" col-span-5 category-post-image overflow-hidden">
                                        <nuxt-img loading="lazy"
                                            :src="`${siteurl.site_url}/media/content/images/${searchResult?.img_bg_path}`"
                                            class="mx-auto w-full group-hover:scale-110 duration-300"
                                            :placeholder="img(`${siteurl.site_url}/logo/placeholder.jpg`)" />

                                    </div>
                                </NuxtLink>
                            </div>

                            <div v-else class="flex items-center justify-center py-32">
                                <h2 class="text-center text-3xl font-semibold text-black">কিছু পাওয়া যায়নি</h2>
                            </div>
                        </div>
                        <div class="col-span-2 hidden md:block"></div>
                    </div>
                    <!-- Loop Category Post Section -->

                    <!-- Read More Button -->
                    <div class="flex justify-center items-center" v-if="searchResults?.length > 9">
                        <button @click="loadMoreButtonHandler"
                            class="border border-[#dee2e6] text-[#3375af] px-8 py-2 rounded-sm mt-5 hover:border-[#3375af]"><b>আরও</b></button>
                    </div>
                    <!-- Read More Button -->
                </div>
                <div class=" col-span-12 md:col-span-2">

                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { postCreatedDateWithTime, postCreatedDate, getPostUrl } from '~/lib/helpers';
const img = useImage()
const siteurl = siteUrlState()
const headerTitle = computed(() => useRoute().query.q)

const inputKeyword = useState(() => '')

inputKeyword.value = computed({
    // getter
    get() {
        return useRoute().query.q
    },
    //   // setter
    set(newValue) {
        // Note: we are using destructuring assignment syntax here.
        return newValue
    }
})

// =========== Input Search Field On Change Event ============= //
const onChangeKeyword = (event) => {
    inputKeyword.value = computed({
        // getter
        get() {
            return event.target.value
        },
        //   // setter
        set(newValue) {
            // Note: we are using destructuring assignment syntax here.
            return newValue
        }
    })
}
// =========== Input Search Field On Change Event ============= //

//================== Get Search Content fetching =============== //
//Search Content State
const searchResults = useState(() => [])
const take = ref(10)

const { data: sresult, pending } = await useFetch('/api/prismaapi/search/search', {
    method: "POST",
    body: {
        keyword: headerTitle,
        take: take.value
    }
})
searchResults.value = computed(() => sresult?.value)
//================== Get Search Content fetching =============== //

// ====== Search Button Handler ===== //
const searchButtonHandler = async () => {
    take.value = 10
    // redirect to 
    navigateTo(`/search?q=${inputKeyword.value}`)

    // useRoute().path(`/search?q=${inputKeyword.value}`)
    searchResults.value = computed(() => '')
    const { data: ssssresult } = await useFetch('/api/prismaapi/search/search', {
        method: "POST",
        body: {
            keyword: inputKeyword.value,
            take: take.value
        }
    })
    // Search Result Content Assign
    searchResults.value = computed(() => ssssresult?.value)
}
// ====== Search Button Handler ===== //

//================ Load More Search Content Button =================//
const loadMoreButtonHandler = async () => {
    take.value += 10
    const { data: searchMorecont } = await useFetch('/api/prismaapi/search/search', {
        method: "POST",
        body: {
            keyword: inputKeyword.value,
            take: take.value
        }
    })
    searchResults.value = computed(() => searchMorecont?.value)
}
//================ Load More Search Content Button =================//


</script>
  
<style scoped></style>