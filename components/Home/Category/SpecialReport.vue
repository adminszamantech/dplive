<template>
    <div class="home-special-report-category mb-6" v-if="specialreports?.length > 0">
        <div class="category-header border-b-[3px] group border-b-red-500 my-3">
            <NuxtLink :to="`/${specialreports[0]?.cat_slug}`" class="flex gap-3 items-center">
                <span class="w-3 h-3 bg-[#3375af]"></span>
                <h2 class="text-[#3375af] text-[18px] group-hover:text-[#65a1d6] font-semibold">বিশেষ প্রতিবেদন</h2>
            </NuxtLink>
        </div>

        <div class=" grid grid-cols-12 gap-4">
            <!-- Loop Item -->
            <div class=" col-span-12 md:col-span-3" v-for="hspecialreport in specialreports"
                :key="hspecialreport.content_id">
                <NuxtLink
                    :to="getPostUrl(hspecialreport?.cat_slug, hspecialreport?.subcat_slug, hspecialreport?.content_type, hspecialreport?.content_id)"
                    class="flex flex-col gap-2 group">
                    <div class=" overflow-hidden">
                        <nuxt-img loading="lazy"
                            :src="`${siteUrl.site_url}/media/content/images/${hspecialreport?.img_bg_path}`"
                            class="mx-auto w-full group-hover:scale-110 duration-300"
                            :placeholder="img(`${siteUrl?.site_url}/logo/placeholder.jpg`)" />
                    </div>
                    <h3 class="text-[19px] font-semibold leading-tight group-hover:text-[#ff0000]">{{
                        hspecialreport?.content_heading
                    }}</h3>
                </NuxtLink>
            </div>
            <!-- Loop Item -->

        </div>
    </div>
</template>

<script setup>

const img = useImage()
const siteUrl = siteUrlState()
const specialreports = useState(() => [])
const { data: hsreportssssssss } = await useFetch('/api/prismaapi/home/specialreport', {
    method: 'GET',
    // cache: 'force-cache',
})
specialreports.value = hsreportssssssss.value

// ======== Post Url Generate ============ //
const getPostUrl = (category_slug, subcategory_slug, content_type, content_id) => {
    return `/${category_slug}/${subcategory_slug ? subcategory_slug : (content_type === 1 ? 'news' : 'article')}/${content_id}`
}
// ======== Post Url Generate ============ //

</script>

<style lang="scss" scoped></style>