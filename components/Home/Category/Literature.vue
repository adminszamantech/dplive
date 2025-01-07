<template>
    <div class="home-literature-category" v-if="literatureContents?.length > 0">
        <div class="category-header border-b-[3px] group border-b-[#3375af] my-3">
            <NuxtLink :to="`/${literatureContents[0]?.cat_slug}`" class="flex gap-3 items-center">
                <span class="w-3 h-3 bg-[#3375af]"></span>
                <h2 class="text-[#3375af] text-[18px] group-hover:text-[#65a1d6] font-semibold">সাহিত্য</h2>
            </NuxtLink>
        </div>
        <div class="flex flex-col gap-4">
            <div class="">
                <NuxtLink
                    :to="getPostUrl(literatureContents[0]?.cat_slug, literatureContents[0]?.subcat_slug, literatureContents[0]?.content_type, literatureContents[0]?.content_id)"
                    class="grid grid-cols-1 md:grid-cols-2 group gap-4">
                    <div class="intertainment-feature-image overflow-hidden">
                        <nuxt-img loading="lazy"
                            :src="`${siteurl.site_url}/media/content/images/${literatureContents[0]?.img_bg_path}`"
                            class="mx-auto w-full group-hover:scale-110 duration-300"
                            :placeholder="img(`${siteurl?.site_url}/logo/placeholder.jpg`)" />
                    </div>
                    <div class="intertainment-feature-description flex flex-col gap-1">
                        <h3 class="text-[25px] text-black font-semibold group-hover:text-[#ff0000]">{{
                            literatureContents[0]?.content_heading }}</h3>
                        <ClientOnly>
                            <div class="text-base font-[300] text-black" v-html="`${literatureContents[0]?.content_details?.substring(0,
                                150)} ...`"></div>
                        </ClientOnly>
                    </div>
                </NuxtLink>
            </div>
            <div class="col-span-12 md:col-span-6">
                <div class="home-intertainment-category-except-post grid grid-cols-2 gap-4">
                    <!-- Loop Item -->
                    <div class="flex flex-col gap-4 group h-sports-excpt"
                        v-for="literatureContent in literatureContents.slice(1, 5)" :key="literatureContent.content_id">
                        <div class=" col-span-5 overflow-hidden">
                            <NuxtLink
                                :to="getPostUrl(literatureContent?.cat_slug, literatureContent?.subcat_slug, literatureContent?.content_type, literatureContent?.content_id)">
                                <nuxt-img loading="lazy"
                                    :src="`${siteurl.site_url}/media/content/images/${literatureContent?.img_bg_path}`"
                                    class="mx-auto w-full group-hover:scale-110 duration-300"
                                    :placeholder="img(`${siteurl?.site_url}/logo/placeholder.jpg`)" />
                            </NuxtLink>
                        </div>
                        <div class=" col-span-7">
                            <NuxtLink
                                :to="getPostUrl(literatureContent?.cat_slug, literatureContent?.subcat_slug, literatureContent?.content_type, literatureContent?.content_id)">
                                <h4 class="text-base text-black font-semibold group-hover:text-[#ff0000]">{{
                                    literatureContent?.content_heading }}</h4>
                            </NuxtLink>
                        </div>
                    </div>
                    <!--/ Loop Item -->
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const img = useImage()
const siteurl = siteUrlState()
// ======== Literature Content =============== //
const literatureContents = useState(() => [])
const { data: hmliterature } = await useFetch("/api/prismaapi/home/literature", {
    method: 'GET',
    // cache: 'force-cache',

})
literatureContents.value = hmliterature
// ======== Literature Content =============== //

// ======== Post Url Generate ============ //
const getPostUrl = (category_slug, subcategory_slug, content_type, content_id) => {
    return `/${category_slug}/${subcategory_slug ? subcategory_slug : (content_type === 1 ? 'news' : 'article')}/${content_id}`
}
// ======== Post Url Generate ============ //
</script>

<style lang="scss" scoped></style>