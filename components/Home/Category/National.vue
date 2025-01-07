
<template>
    <div class="home-national-category" v-if="nationalHCon?.length > 0">
        <div class="category-header border-b-[3px] group border-b-[#3375af] my-3">
            <NuxtLink :to="`/${nationalHCon[0]?.cat_slug}`" class="flex gap-3 items-center">
                <span class="w-3 h-3 bg-[#3375af]"></span>
                <h2 class="text-[#3375af] text-[18px] group-hover:text-[#65a1d6] font-semibold">জাতীয়</h2>
            </NuxtLink>
        </div>
        <div class="grid grid-cols-12 gap-4">
            <div class="col-span-12 md:col-span-7">
                <NuxtLink
                    :to="getPostUrl(nationalHCon[0]?.cat_slug, nationalHCon[0]?.subcat_slug, nationalHCon[0]?.content_type, nationalHCon[0]?.content_id)"
                    class="flex flex-col group gap-2">
                    <div class="national-feature-image overflow-hidden">
                        <nuxt-img loading="lazy"
                            :src="`${siteurl.site_url}/media/content/images/${nationalHCon[0]?.img_bg_path}`"
                            class="mx-auto w-full group-hover:scale-110 duration-300"
                            :placeholder="img(`${siteurl?.site_url}/logo/placeholder.jpg`)" />
                    </div>
                    <div class="national-feature-description flex flex-col gap-2">
                        <h3 class="text-[25px] leading-tight font-semibold group-hover:text-[#ff0000]">{{
                            nationalHCon[0]?.content_heading
                        }}</h3>
                        <ClientOnly>
                            <!-- <p class="text-md">{{ nationalHCon[0]?.content_details?.substring(0,
                                200)?.toString().replace(/(<([^>]+)>)/ig, '') }}...</p> -->
                            <div class="text-[16px] font-[300] text-black" v-html="`${nationalHCon[0]?.content_details?.substring(0,
                                        220)} ...`"></div>
                        </ClientOnly>
                        <p class="text-sm text-black flex gap-1 items-center">
                            <Icon name="ph:alarm-bold" />
                            <span>
                                {{ postCreatedDate(nationalHCon[0]?.created_at) }}
                            </span>
                        </p>

                    </div>
                </NuxtLink>
            </div>
            <div class="col-span-12 md:col-span-5">
                <div class="home-national-category-except-post flex flex-col">
                    <!-- Loop Item -->
                    <div v-for="nationalcntent in nationalHCon.slice(1, 5)" :key="nationalcntent.content_id"
                        class="grid grid-cols-12 gap-4 group h-national-excpt border-b py-4">
                        <div class=" col-span-5 overflow-hidden">
                            <NuxtLink
                                :to="getPostUrl(nationalcntent?.cat_slug, nationalcntent?.subcat_slug, nationalcntent?.content_type, nationalcntent?.content_id)">
                                <nuxt-img loading="lazy"
                                    :src="`${siteurl.site_url}/media/content/images/${nationalcntent?.img_bg_path}`"
                                    class="mx-auto w-full group-hover:scale-110 duration-300"
                                    :placeholder="img(`${siteurl?.site_url}/logo/placeholder.jpg`)" />
                            </NuxtLink>
                        </div>
                        <div class=" col-span-7">
                            <NuxtLink class="flex flex-col gap-2"
                                :to="getPostUrl(nationalcntent?.cat_slug, nationalcntent?.subcat_slug, nationalcntent?.content_type, nationalcntent?.content_id)">
                                <h4 class="text-base font-semibold group-hover:text-[#ff0000]">{{
                                    nationalcntent?.content_heading }}</h4>
                                <p class="text-sm text-black flex gap-1 items-center">
                                    <Icon name="ph:alarm-bold" />
                                    <span>
                                        {{ postCreatedDate(nationalcntent?.created_at) }}
                                    </span>
                                </p>
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
import { postCreatedDate, getPostUrl } from '~/lib/helpers';
const siteurl = siteUrlState()
const img = useImage()
const nationalHCon = NationalHomeContentState()
const { data: nationalhc } = await useFetch('/api/prismaapi/home/national', {
    method: "GET",
    // cache: 'force-cache',
})
nationalHCon.value = nationalhc


</script>

<style scoped>
.h-national-excpt:first-child {
    padding-top: 0px
}
</style>