<template>
    <div class="specialContent py-1 md:py-3">
        <div class=" grid grid-cols-12 gap-5">
            <div class="col-span-12 md:col-span-7">
                <div class="grid grid-cols-12 gap-4">
                    <div class="col-span-12 md:col-span-7 group">
                        <!-- Special First Content -->
                        <!-- <NuxtLink :to="`/category/${specialTopContents[0]?.cat_slug}/${specialTopContents[0]?.content_id}`" -->
                        <NuxtLink
                            :to="getPostUrl(specialTopContents[0]?.cat_slug, specialTopContents[0]?.subcat_slug, specialTopContents[0]?.content_type, specialTopContents[0]?.content_id)"
                            class="flex flex-col gap-3">
                            <div class="overflow-hidden">
                                <nuxt-img loading="lazy"
                                    :src="`${siteurl.site_url}/media/content/images/${specialTopContents[0]?.img_bg_path}`"
                                    class="mx-auto w-full group-hover:scale-110 duration-300"
                                    :placeholder="img(`${siteurl.site_url}/logo/placeholder.jpg`)" />
                            </div>
                            <h2 class="text-[#ff0000] text-[32px] siyamLipiFont">{{ specialTopContents[0]?.content_heading
                            }}</h2>
                            <!-- <p class="text-[18px]">{{ specialTopContents[0]?.content_details?.substring(0,
                                165)?.toString().replace(/(<([^>]+)>)/ig, '') }}...</p> -->
                            <ClientOnly>
                                <div v-if="specialTopContents[0]?.content_heading?.length > 60"
                                    class=" font-[300] text-base text-[#000]" v-html="`${specialTopContents[0]?.content_details?.substring(0,
                                        165)} ...`"></div>
                                <div v-else class=" font-[300] text-base text-[#000]" v-html="`${specialTopContents[0]?.content_details?.substring(0,
                                    225)} ...`"></div>
                            </ClientOnly>
                            <span class="text-sm text-black">
                                {{ specialTopContents[0]?.bn_cat_name }} | {{
                                    postCreatedDate(specialTopContents[0]?.created_at) }}
                            </span>
                        </NuxtLink>
                        <!-- Special First Content -->
                    </div>
                    <div class="col-span-12 md:col-span-5">
                        <div class="flex flex-col gap-2">
                            <!-- ========== Loop Item =========== -->
                            <NuxtLink
                                :to="getPostUrl(topcontent?.cat_slug, topcontent?.subcat_slug, topcontent?.content_type, topcontent?.content_id)"
                                class=" grid grid-cols-12 gap-4 group py-1 border-b specialMiddleTop"
                                v-for="topcontent in specialTopContents?.slice(1, 5)" :key="topcontent?.content_id">
                                <div class="col-span-5">
                                    <div class="overflow-hidden">
                                        <nuxt-img loading="lazy" :alt="topcontent?.content_heading"
                                            :src="`${siteurl?.site_url}/media/content/images/${topcontent?.img_bg_path}`"
                                            class="mx-auto w-full group-hover:scale-110 duration-300"
                                            :placeholder="img(`${siteurl?.site_url}/logo/placeholder.jpg`)" />
                                    </div>
                                </div>
                                <div class="col-span-7 flex flex-col gap-2">
                                    <h4 v-if="topcontent?.content_sub_heading"
                                        class="text-[18px] font-semibold group-hover:text-[#ff0000]"><span
                                            class="text-[#ff0000]">{{
                                                topcontent?.content_sub_heading }}</span>/ {{
        topcontent?.content_heading }} </h4>
                                    <h4 v-else
                                        class="text-[18px] font-semibold group-hover:text-[#ff0000]">{{
        topcontent?.content_heading }} </h4>
                                    <span class="text-sm text-black">{{ topcontent?.bn_cat_name }} | {{
                                        postCreatedDate(topcontent?.created_at) }}</span>
                                </div>
                            </NuxtLink>
                            <!-- ========== Loop Item =========== -->
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-span-12 md:col-span-5">
                <HomeSpecialTopVideos />
            </div>
        </div>
    </div>
</template>

<script setup>
import { postCreatedDate, getPostUrl } from '~/lib/helpers';
// const nuxtApp = useNuxtApp()
const img = useImage()
const siteurl = siteUrlState()

// =============== Special Content Fetching ====================//
const specialTopContents = specialTopContentState()
// =============== Special Content Fetching ====================//

</script>

<style scoped>.specialMiddleTop:first-child {
    padding-top: 0;
}</style>