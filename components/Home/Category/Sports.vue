<template>
    <div class="home-sports-category py-4" v-if="sportscontent?.length > 0">
        <div class="category-header border-b-[3px] group border-b-[#3375af] my-3">
            <NuxtLink :to="`/${sportscontent[0]?.cat_slug}`" class="flex gap-3 items-center">
                <span class="w-3 h-3 bg-[#3375af]"></span>
                <h2 class="text-[#3375af] text-[18px] group-hover:text-[#65a1d6] font-semibold">খেলা</h2>
            </NuxtLink>
        </div>
        <div class=" grid grid-cols-12 gap-4 mt-4">
            <div class=" col-span-12 md:col-span-6">
                <NuxtLink
                    :to="getPostUrl(sportscontent[0]?.cat_slug, sportscontent[0]?.subcat_slug, sportscontent[0]?.content_type, sportscontent[0]?.content_id)"
                    class="flex flex-col gap-2 group">
                    <div class=" overflow-hidden">
                        <nuxt-img loading="lazy"
                            :src="`${siteUrl.site_url}/media/content/images/${sportscontent[0]?.img_bg_path}`"
                            class="mx-auto w-full group-hover:scale-110 duration-300"
                            :placeholder="img(`${siteUrl.site_url}/media/common/logo1672518180.png`, { height: 300 })" />
                    </div>
                    <div class="flex flex-col gap-3">
                        <h3 class="text-[25px] group-hover:text-[#ff0000] font-semibold">
                            {{ sportscontent[0]?.content_heading }}</h3>
                        <ClientOnly>
                            <div class="text-base font-[300] text-black" v-html="`${sportscontent[0]?.content_details?.substring(0,
                                220)} ...`"></div>
                        </ClientOnly>
                        <p class="text-sm text-black mt-1 flex gap-1 items-center">
                            <Icon name="ph:alarm-bold" />
                            <span>
                                {{ postCreatedDate(sportscontent[0]?.created_at) }}
                            </span>
                        </p>
                    </div>
                </NuxtLink>

            </div>
            <div class="col-span-12 md:col-span-6">
                <!-- Desktop Version -->
                <!-- <div class=" md:grid grid-cols-2 gap-3 hidden">
                    <NuxtLink v-for="(leftsport, lidx) in sportscontent?.slice(1, 5)" :key="lidx"
                        :to="getPostUrl(leftsport?.cat_slug, leftsport?.subcat_slug, leftsport?.content_type, leftsport?.content_id)"
                        class=" flex flex-col gap-2 group">
                        <div class=" overflow-hidden">
                            <nuxt-img loading="lazy"
                                :src="`${siteUrl.site_url}/media/content/images/${leftsport?.img_bg_path}`"
                                class="mx-auto w-full group-hover:scale-110 duration-300"
                                :placeholder="img(`${siteUrl.site_url}/media/common/logo1672518180.png`, { height: 300 })" />
                        </div>
                        <div class="flex flex-col gap-2">
                            <h4 class="text-base text-black group-hover:text-[#ff0000] font-semibold">{{
                                leftsport?.content_heading }}</h4>
                            <p class="text-sm text-black mt-1 flex gap-1 items-center">
                                <Icon name="ph:alarm-bold" />
                                <span>
                                    {{ postCreatedDate(leftsport?.created_at) }}
                                </span>
                            </p>
                        </div>
                    </NuxtLink>
                </div> -->
                <!-- Desktop Version -->

                <!-- Mobile Version -->
                <div class="grid grid-cols-2 gap-4 mb-2">
                    <NuxtLink
                        :to="getPostUrl(sportscontent[1]?.cat_slug, sportscontent[1]?.subcat_slug, sportscontent[1]?.content_type, sportscontent[1]?.content_id)"
                        class="group">
                        <div class=" overflow-hidden">
                            <nuxt-img loading="lazy"
                                :src="`${siteUrl?.site_url}/media/content/images/${sportscontent[1]?.img_bg_path}`"
                                class="mx-auto w-full group-hover:scale-110 duration-300"
                                :placeholder="img(`${siteUrl?.site_url}/logo/placeholder.jpg`)" />
                        </div>
                    </NuxtLink>
                    <NuxtLink class="group"
                        :to="getPostUrl(sportscontent[2]?.cat_slug, sportscontent[2]?.subcat_slug, sportscontent[2]?.content_type, sportscontent[2]?.content_id)">
                        <div class=" overflow-hidden">
                            <nuxt-img loading="lazy"
                                :src="`${siteUrl?.site_url}/media/content/images/${sportscontent[2]?.img_bg_path}`"
                                class="mx-auto w-full group-hover:scale-110 duration-300"
                                :placeholder="img(`${siteUrl?.site_url}/logo/placeholder.jpg`)" />
                        </div>
                    </NuxtLink>
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <NuxtLink class="group"
                        :to="getPostUrl(sportscontent[1]?.cat_slug, sportscontent[1]?.subcat_slug, sportscontent[1]?.content_type, sportscontent[1]?.content_id)">
                        <h4 class=" text-base text-black group-hover:text-[#ff0000] font-semibold">{{
                            sportscontent[1]?.content_heading
                        }}</h4>
                    </NuxtLink>
                    <NuxtLink class="group"
                        :to="getPostUrl(sportscontent[2]?.cat_slug, sportscontent[2]?.subcat_slug, sportscontent[2]?.content_type, sportscontent[2]?.content_id)">
                        <h4 class=" text-base text-black group-hover:text-[#ff0000] font-semibold ">{{
                            sportscontent[2]?.content_heading
                        }}</h4>
                    </NuxtLink>
                </div>

                <div class="grid grid-cols-2 gap-4">
                    <NuxtLink
                        :to="getPostUrl(sportscontent[1]?.cat_slug, sportscontent[1]?.subcat_slug, sportscontent[1]?.content_type, sportscontent[1]?.content_id)"
                        class="text-sm text-black mt-1 flex gap-1 items-center">
                        <Icon name="ph:alarm-bold" />
                        <span>
                            {{ postCreatedDate(sportscontent[1]?.created_at) }}
                        </span>
                    </NuxtLink>
                    <NuxtLink
                        :to="getPostUrl(sportscontent[2]?.cat_slug, sportscontent[2]?.subcat_slug, sportscontent[2]?.content_type, sportscontent[2]?.content_id)"
                        class="text-sm text-black mt-1 flex gap-1 items-center">
                        <Icon name="ph:alarm-bold" />
                        <span>
                            {{ postCreatedDate(sportscontent[2]?.created_at) }}
                        </span>
                    </NuxtLink>

                </div>


                <div class="grid grid-cols-2 gap-4 mb-2 mt-4">
                    <NuxtLink
                        :to="getPostUrl(sportscontent[3]?.cat_slug, sportscontent[3]?.subcat_slug, sportscontent[3]?.content_type, sportscontent[3]?.content_id)"
                        class="group">
                        <div class=" overflow-hidden">
                            <nuxt-img loading="lazy"
                                :src="`${siteUrl?.site_url}/media/content/images/${sportscontent[3]?.img_bg_path}`"
                                class="mx-auto w-full group-hover:scale-110 duration-300"
                                :placeholder="img(`${siteUrl?.site_url}/logo/placeholder.jpg`)" />
                        </div>
                    </NuxtLink>
                    <NuxtLink class="group"
                        :to="getPostUrl(sportscontent[4]?.cat_slug, sportscontent[4]?.subcat_slug, sportscontent[4]?.content_type, sportscontent[4]?.content_id)">
                        <div class=" overflow-hidden">
                            <nuxt-img loading="lazy"
                                :src="`${siteUrl?.site_url}/media/content/images/${sportscontent[4]?.img_bg_path}`"
                                class="mx-auto w-full group-hover:scale-110 duration-300"
                                :placeholder="img(`${siteUrl?.site_url}/logo/placeholder.jpg`)" />
                        </div>
                    </NuxtLink>
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <NuxtLink class="group"
                        :to="getPostUrl(sportscontent[3]?.cat_slug, sportscontent[3]?.subcat_slug, sportscontent[3]?.content_type, sportscontent[3]?.content_id)">
                        <h4 class=" text-base text-black group-hover:text-[#ff0000] font-semibold">{{
                            sportscontent[3]?.content_heading
                        }}</h4>
                    </NuxtLink>
                    <NuxtLink class="group"
                        :to="getPostUrl(sportscontent[4]?.cat_slug, sportscontent[4]?.subcat_slug, sportscontent[4]?.content_type, sportscontent[4]?.content_id)">
                        <h4 class=" text-base text-black group-hover:text-[#ff0000] font-semibold ">{{
                            sportscontent[4]?.content_heading
                        }}</h4>
                    </NuxtLink>
                </div>

                <div class="grid grid-cols-2 gap-4">
                    <NuxtLink
                        :to="getPostUrl(sportscontent[3]?.cat_slug, sportscontent[3]?.subcat_slug, sportscontent[3]?.content_type, sportscontent[3]?.content_id)"
                        class="text-sm text-black mt-1 flex gap-1 items-center">
                        <Icon name="ph:alarm-bold" />
                        <span>
                            {{ postCreatedDate(sportscontent[3]?.created_at) }}
                        </span>
                    </NuxtLink>
                    <NuxtLink
                        :to="getPostUrl(sportscontent[4]?.cat_slug, sportscontent[4]?.subcat_slug, sportscontent[4]?.content_type, sportscontent[4]?.content_id)"
                        class="text-sm text-black mt-1 flex gap-1 items-center">
                        <Icon name="ph:alarm-bold" />
                        <span>
                            {{ postCreatedDate(sportscontent[4]?.created_at) }}
                        </span>
                    </NuxtLink>

                </div>
                <!-- Mobile Version -->

            </div>
        </div>
    </div>
</template>

<script setup>
import { postCreatedDate, getPostUrl } from '~/lib/helpers';
const img = useImage()
const siteUrl = siteUrlState()
const sportscontent = useState(() => [])
const { data: hsport } = await useFetch('/api/prismaapi/home/sports', {
    method: 'GET',
    // cache: 'force-cache',
})
sportscontent.value = hsport


</script>

<style scoped>
.h-sports-excpt:first-child {
    padding-top: 0px
}
</style>

