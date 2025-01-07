<template>
    <div class="home-technology-category" v-if="technologycontents?.length > 0">
        <div class="category-header border-b-[3px] group border-b-[#3375af] my-3">
            <NuxtLink :to="`/${technologycontents[0]?.category?.cat_slug}`" class="flex gap-3 items-center">
                <span class="w-3 h-3 bg-[#3375af]"></span>
                <h2 class="text-[#3375af] text-[18px] group-hover:text-[#65a1d6] font-semibold">বিজ্ঞান-তথ্যপ্রযুক্তি</h2>
            </NuxtLink>
        </div>
        <div class="flex flex-col gap-4">
            <div class="">
                <NuxtLink
                    :to="getPostUrl(technologycontents[0]?.cat_slug, technologycontents[0]?.subcat_slug, technologycontents[0]?.content_type, technologycontents[0]?.content_id)"
                    class="grid grid-cols-1 md:grid-cols-2 group gap-4">
                    <div class="intertainment-feature-image overflow-hidden">
                        <nuxt-img loading="lazy"
                            :src="`${siteurl.site_url}/media/content/images/${technologycontents[0]?.img_bg_path}`"
                            class="mx-auto w-full group-hover:scale-110 duration-300"
                            :placeholder="img(`${siteurl.site_url}/media/common/logo1672518180.png`, { height: 300 })" />
                    </div>
                    <div class="intertainment-feature-description flex flex-col gap-1">
                        <h3 class="text-[25px] text-black font-semibold group-hover:text-[#ff0000]">{{
                            technologycontents[0]?.content_heading }}</h3>
                        <ClientOnly>
                            <div class="text-base font-[300] text-black" v-html="`${technologycontents[0]?.content_details?.substring(0,
                                165)} ...`"></div>
                        </ClientOnly>
                        <p class="text-sm text-black flex gap-1 items-center">
                            <Icon name="ph:alarm-bold" />
                            <span>
                                {{ postCreatedDate(technologycontents[0]?.created_at) }}
                            </span>
                        </p>
                    </div>
                </NuxtLink>
            </div>
            <div class="col-span-12 md:col-span-6">

                <!-- Mobile Version -->
                <div class="grid grid-cols-2 gap-4 mb-2">
                    <NuxtLink
                        :to="getPostUrl(technologycontents[1]?.cat_slug, technologycontents[1]?.subcat_slug, technologycontents[1]?.content_type, technologycontents[1]?.content_id)"
                        class="group">
                        <div class=" overflow-hidden">
                            <nuxt-img loading="lazy"
                                :src="`${siteurl?.site_url}/media/content/images/${technologycontents[1]?.img_bg_path}`"
                                class="mx-auto w-full group-hover:scale-110 duration-300"
                                :placeholder="img(`${siteurl?.site_url}/logo/placeholder.jpg`)" />
                        </div>
                    </NuxtLink>
                    <NuxtLink class="group"
                        :to="getPostUrl(technologycontents[2]?.cat_slug, technologycontents[2]?.subcat_slug, technologycontents[2]?.content_type, technologycontents[2]?.content_id)">
                        <div class=" overflow-hidden">
                            <nuxt-img loading="lazy"
                                :src="`${siteurl?.site_url}/media/content/images/${technologycontents[2]?.img_bg_path}`"
                                class="mx-auto w-full group-hover:scale-110 duration-300"
                                :placeholder="img(`${siteurl?.site_url}/logo/placeholder.jpg`)" />
                        </div>
                    </NuxtLink>
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <NuxtLink class="group"
                        :to="getPostUrl(technologycontents[1]?.cat_slug, technologycontents[1]?.subcat_slug, technologycontents[1]?.content_type, technologycontents[1]?.content_id)">
                        <h4 class=" text-base text-black group-hover:text-[#ff0000] font-semibold">{{
                            technologycontents[1]?.content_heading
                        }}</h4>
                    </NuxtLink>
                    <NuxtLink class="group"
                        :to="getPostUrl(technologycontents[2]?.cat_slug, technologycontents[2]?.subcat_slug, technologycontents[2]?.content_type, technologycontents[2]?.content_id)">
                        <h4 class=" text-base text-black group-hover:text-[#ff0000] font-semibold ">{{
                            technologycontents[2]?.content_heading
                        }}</h4>
                    </NuxtLink>
                </div>

                <div class="grid grid-cols-2 gap-4">
                    <NuxtLink
                        :to="getPostUrl(technologycontents[1]?.cat_slug, technologycontents[1]?.subcat_slug, technologycontents[1]?.content_type, technologycontents[1]?.content_id)"
                        class="text-sm text-black mt-1 flex gap-1 items-center">
                        <Icon name="ph:alarm-bold" />
                        <span>
                            {{ postCreatedDate(technologycontents[1]?.created_at) }}
                        </span>
                    </NuxtLink>
                    <NuxtLink
                        :to="getPostUrl(technologycontents[2]?.cat_slug, technologycontents[2]?.subcat_slug, technologycontents[2]?.content_type, technologycontents[2]?.content_id)"
                        class="text-sm text-black mt-1 flex gap-1 items-center">
                        <Icon name="ph:alarm-bold" />
                        <span>
                            {{ postCreatedDate(technologycontents[2]?.created_at) }}
                        </span>
                    </NuxtLink>

                </div>


                <div class="grid grid-cols-2 gap-4 mb-2 mt-4">
                    <NuxtLink
                        :to="getPostUrl(technologycontents[3]?.cat_slug, technologycontents[3]?.subcat_slug, technologycontents[3]?.content_type, technologycontents[3]?.content_id)"
                        class="group">
                        <div class=" overflow-hidden">
                            <nuxt-img loading="lazy"
                                :src="`${siteurl?.site_url}/media/content/images/${technologycontents[3]?.img_bg_path}`"
                                class="mx-auto w-full group-hover:scale-110 duration-300"
                                :placeholder="img(`${siteurl?.site_url}/logo/placeholder.jpg`)" />
                        </div>
                    </NuxtLink>
                    <NuxtLink class="group"
                        :to="getPostUrl(technologycontents[4]?.cat_slug, technologycontents[4]?.subcat_slug, technologycontents[4]?.content_type, technologycontents[4]?.content_id)">
                        <div class=" overflow-hidden">
                            <nuxt-img loading="lazy"
                                :src="`${siteurl?.site_url}/media/content/images/${technologycontents[4]?.img_bg_path}`"
                                class="mx-auto w-full group-hover:scale-110 duration-300"
                                :placeholder="img(`${siteurl?.site_url}/logo/placeholder.jpg`)" />
                        </div>
                    </NuxtLink>
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <NuxtLink class="group"
                        :to="getPostUrl(technologycontents[3]?.cat_slug, technologycontents[3]?.subcat_slug, technologycontents[3]?.content_type, technologycontents[3]?.content_id)">
                        <h4 class=" text-base text-black group-hover:text-[#ff0000] font-semibold">{{
                            technologycontents[3]?.content_heading
                        }}</h4>
                    </NuxtLink>
                    <NuxtLink class="group"
                        :to="getPostUrl(technologycontents[4]?.cat_slug, technologycontents[4]?.subcat_slug, technologycontents[4]?.content_type, technologycontents[4]?.content_id)">
                        <h4 class=" text-base text-black group-hover:text-[#ff0000] font-semibold ">{{
                            technologycontents[4]?.content_heading
                        }}</h4>
                    </NuxtLink>
                </div>

                <div class="grid grid-cols-2 gap-4">
                    <NuxtLink
                        :to="getPostUrl(technologycontents[3]?.cat_slug, technologycontents[3]?.subcat_slug, technologycontents[3]?.content_type, technologycontents[3]?.content_id)"
                        class="text-sm text-black mt-1 flex gap-1 items-center">
                        <Icon name="ph:alarm-bold" />
                        <span>
                            {{ postCreatedDate(technologycontents[3]?.created_at) }}
                        </span>
                    </NuxtLink>
                    <NuxtLink
                        :to="getPostUrl(technologycontents[4]?.cat_slug, technologycontents[4]?.subcat_slug, technologycontents[4]?.content_type, technologycontents[4]?.content_id)"
                        class="text-sm text-black mt-1 flex gap-1 items-center">
                        <Icon name="ph:alarm-bold" />
                        <span>
                            {{ postCreatedDate(technologycontents[4]?.created_at) }}
                        </span>
                    </NuxtLink>

                </div>
                <!-- Mobile Version -->
                <!-- <div class="home-intertainment-category-except-post grid grid-cols-2 gap-4">
                    <div class="flex flex-col gap-4 group h-sports-excpt"
                        v-for="technologycontent in technologycontents.slice(1, 5)" :key="technologycontent.content_id">
                        <div class=" col-span-5 overflow-hidden">
                            <NuxtLink
                                :to="getPostUrl(technologycontent?.cat_slug, technologycontent?.subcat_slug, technologycontent?.content_type, technologycontent?.content_id)">
                                <nuxt-img loading="lazy"
                                    :src="`${siteurl.site_url}/media/content/images/${technologycontent?.img_bg_path}`"
                                    class="mx-auto w-full group-hover:scale-110 duration-300"
                                    :placeholder="img(`${siteurl?.site_url}/logo/placeholder.jpg`)" />
                            </NuxtLink>
                        </div>
                        <div class=" col-span-7">
                            <NuxtLink
                                :to="getPostUrl(technologycontent?.cat_slug, technologycontent?.subcat_slug, technologycontent?.content_type, technologycontent?.content_id)"
                                class="flex flex-col gap-2">
                                <h4 class="text-base text-black font-semibold group-hover:text-[#ff0000]">
                                    {{ technologycontent?.content_heading }}
                                </h4>
                                <p class="text-sm text-black mt-1 flex gap-1 items-center">
                                    <Icon name="ph:alarm-bold" />
                                    <span>
                                        {{ postCreatedDate(technologycontent?.created_at) }}
                                    </span>
                                </p>
                            </NuxtLink>
                        </div>
                    </div>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script setup>
import { postCreatedDate, getPostUrl } from '~/lib/helpers';
const img = useImage()
const siteurl = siteUrlState()
// ======== Technology Content =============== //
const technologycontents = useState(() => [])
const { data: technologyc } = await useFetch("/api/prismaapi/home/technology", {
    method: 'GET',
    // cache: 'force-cache',

})
technologycontents.value = technologyc
// ======== Technology Content =============== //


</script>

<style lang="scss" scoped></style>