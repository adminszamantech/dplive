<template>
    <div class="home-post-tabs">
        <div class="grid grid-cols-2 text-[20px] text-center border-b border-b-[#0000006b]">
            <div v-if="isActiveStatus === false" :class="` border-b-2 border-b-[#3375af] font-semibold`"><b>সর্বশেষ</b></div>
            <div v-else @click="tabToggleHandler" :class="`hover:border-b-[#3375af]  cursor-pointer font-semibold`"><b>সর্বশেষ</b>
            </div>

            <div v-if="isActiveStatus === true" :class="`border-b-2 border-b-[#3375af]  py-1 font-semibold`">
                <b>সর্বাধিক পঠিত</b>
            </div>
            <div v-else @click="tabToggleHandler" :class="`hover:border-b-[#3375af] cursor-pointer py-1 font-semibold`">
                <b>সর্বাধিক পঠিত</b>
            </div>
        </div>

        <!-- Latest Post -->
        <div v-if="isActiveStatus === false" class="latest-post px-1 h-[430px] overflow-y-auto mt-2">
            <NuxtLink
                :to="getPostUrl(latstpost?.cat_slug, latstpost?.subcat_slug, latstpost?.content_type, latstpost?.content_id)"
                class="latest-post-loop py-3 flex gap-2 border-b border-b-[#e2e2e2] group"
                v-for="(latstpost, Linx) in latestposts" :key="latstpost?.content_id">
                <span class="number-count text-[26px] text-[#949494]"><b>{{ toBn(`${Linx + 1}`) }}.</b> </span>
                <h4 class="text-base group-hover:text-[#ff0000] text-[#333] font-semibold"> {{ latstpost?.content_heading
                }}</h4>

            </NuxtLink>

        </div>
        <!--/ Latest Post -->
        <!-- Popular Post -->
        <div v-else class="latest-post px-1 h-[430px] overflow-y-auto mt-2">
            <NuxtLink
                :to="getPostUrl(poplarpost?.cat_slug, poplarpost?.subcat_slug, poplarpost?.content_type, poplarpost?.content_id)"
                class="latest-post-loop py-3 flex gap-2 border-b border-b-[#e2e2e2] group"
                v-for="(poplarpost, Pinx) in popularposts" :key="poplarpost?.content_id">
                <span class="number-count text-[26px] text-[#949494]"><b>{{ toBn(`${Pinx + 1}`) }}.</b> </span>
                <h4 class="text-base group-hover:text-[#ff0000] text-[#333] font-semibold"> {{ poplarpost?.content_heading
                }}</h4>
            </NuxtLink>


        </div>
        <!--/ Popular Post -->
    </div>
</template>

<script setup>
const img = useImage()

// English To Bangla Convert 



const isActiveStatus = ref(false)
const tabToggleHandler = () => {
    if (isActiveStatus.value === true) {
        isActiveStatus.value = false
    } else {
        isActiveStatus.value = true
    }
}

const siteurl = siteUrlState()

// ======== Latest Posts Content =============== //
const latestposts = useState(() => [])

const { data: latpost } = await useFetch('/api/prismaapi/tabs/latestpost', {
    method: "POST",
    body: {
        take: 10 // How many post you want to fetch. just assign the number
    },
    cache: 'force-cache'
})
latestposts.value = latpost
// ======== Latest Posts Content =============== //

// ======== Popular Posts Content =============== //
const popularposts = useState(() => [])

const { data: hplpost } = await useFetch('/api/prismaapi/tabs/popularpost', {
    method: "POST",
    body: {
        take: 10 // How many post you want to fetch. just assign the number
    },
    cache: 'force-cache'
})
popularposts.value = hplpost
// ======== Popular Posts Content =============== //
const toBn = n => n.replace(/\d/g, d => "০১২৩৪৫৬৭৮৯"[d])

// ======== Post Url Generate ============ //
const getPostUrl = (category_slug, subcategory_slug, content_type, content_id) => {
    return `/${category_slug}/${subcategory_slug ? subcategory_slug : (content_type === 1 ? 'news' : 'article')}/${content_id}`
}
// ======== Post Url Generate ============ //


</script>

<style scoped>
/* width */
::-webkit-scrollbar {
    width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
    background: #ddd;
}

/* Handle */
::-webkit-scrollbar-thumb {
    /* background: #c9c3c3; */
    background: #3375af;
    border-radius: 5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #bdb8b8;
}

.latest-post-loop:last-child {
    border-bottom: 0 !important;
}</style>