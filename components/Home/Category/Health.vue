<template>
    <div class="home-health-category " v-if="healthcontents?.length > 0">
        <div class="category-header border-b-[3px] group border-b-[#3375af] my-3">
            <NuxtLink :to="`/${healthcontents[0]?.cat_slug}`" class="flex gap-3 items-center">
                <span class="w-3 h-3 bg-[#3375af]"></span>
                <h2 class="text-[#3375af] text-[18px] group-hover:text-[#65a1d6] font-semibold">স্বাস্থ্য</h2>
            </NuxtLink>
        </div>
        <div class="flex flex-col gap-4">
            <div class="">
                <NuxtLink
                    :to="getPostUrl(healthcontents[0]?.cat_slug, healthcontents[0]?.subcat_slug, healthcontents[0]?.content_type, healthcontents[0]?.content_id)"
                    class="grid grid-cols-1 md:grid-cols-2 group gap-4">
                    <div class="intertainment-feature-image overflow-hidden">
                        <nuxt-img loading="lazy"
                            :src="`${siteurl.site_url}/media/content/images/${healthcontents[0]?.img_bg_path}`"
                            class="mx-auto w-full group-hover:scale-110 duration-300"
                            :placeholder="img(`${siteurl.site_url}/media/common/logo1672518180.png`, { height: 300 })" />
                    </div>
                    <div class="intertainment-feature-description flex flex-col gap-1">
                        <h3 class="text-[25px] text-black font-semibold group-hover:text-[#ff0000]">{{
                            healthcontents[0]?.content_heading }}</h3>
                        <ClientOnly>
                            <div class="text-base font-[300] text-black" v-html="`${healthcontents[0]?.content_details?.substring(0,
                                165)} ...`"></div>
                        </ClientOnly>
                        <p class="text-sm text-black flex gap-1 items-center">
                            <Icon name="ph:alarm-bold" />
                            <span>
                                {{ postCreatedDate(healthcontents[0]?.created_at) }}
                            </span>
                        </p>
                    </div>
                </NuxtLink>
            </div>
            <div class="col-span-12 md:col-span-6">


                <!-- Mobile Version -->
                <div class="grid grid-cols-2 gap-4 mb-2">
                    <NuxtLink
                        :to="getPostUrl(healthcontents[1]?.cat_slug, healthcontents[1]?.subcat_slug, healthcontents[1]?.content_type, healthcontents[1]?.content_id)"
                        class="group">
                        <div class=" overflow-hidden">
                            <nuxt-img loading="lazy"
                                :src="`${siteurl?.site_url}/media/content/images/${healthcontents[1]?.img_bg_path}`"
                                class="mx-auto w-full group-hover:scale-110 duration-300"
                                :placeholder="img(`${siteurl?.site_url}/logo/placeholder.jpg`)" />
                        </div>
                    </NuxtLink>
                    <NuxtLink class="group"
                        :to="getPostUrl(healthcontents[2]?.cat_slug, healthcontents[2]?.subcat_slug, healthcontents[2]?.content_type, healthcontents[2]?.content_id)">
                        <div class=" overflow-hidden">
                            <nuxt-img loading="lazy"
                                :src="`${siteurl?.site_url}/media/content/images/${healthcontents[2]?.img_bg_path}`"
                                class="mx-auto w-full group-hover:scale-110 duration-300"
                                :placeholder="img(`${siteurl?.site_url}/logo/placeholder.jpg`)" />
                        </div>
                    </NuxtLink>
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <NuxtLink class="group"
                        :to="getPostUrl(healthcontents[1]?.cat_slug, healthcontents[1]?.subcat_slug, healthcontents[1]?.content_type, healthcontents[1]?.content_id)">
                        <h4 class=" text-base text-black group-hover:text-[#ff0000] font-semibold">{{
                            healthcontents[1]?.content_heading
                        }}</h4>
                    </NuxtLink>
                    <NuxtLink class="group"
                        :to="getPostUrl(healthcontents[2]?.cat_slug, healthcontents[2]?.subcat_slug, healthcontents[2]?.content_type, healthcontents[2]?.content_id)">
                        <h4 class=" text-base text-black group-hover:text-[#ff0000] font-semibold ">{{
                            healthcontents[2]?.content_heading
                        }}</h4>
                    </NuxtLink>
                </div>

                <div class="grid grid-cols-2 gap-4">
                    <NuxtLink
                        :to="getPostUrl(healthcontents[1]?.cat_slug, healthcontents[1]?.subcat_slug, healthcontents[1]?.content_type, healthcontents[1]?.content_id)"
                        class="text-sm text-black mt-1 flex gap-1 items-center">
                        <Icon name="ph:alarm-bold" />
                        <span>
                            {{ postCreatedDate(healthcontents[1]?.created_at) }}
                        </span>
                    </NuxtLink>
                    <NuxtLink
                        :to="getPostUrl(healthcontents[2]?.cat_slug, healthcontents[2]?.subcat_slug, healthcontents[2]?.content_type, healthcontents[2]?.content_id)"
                        class="text-sm text-black mt-1 flex gap-1 items-center">
                        <Icon name="ph:alarm-bold" />
                        <span>
                            {{ postCreatedDate(healthcontents[2]?.created_at) }}
                        </span>
                    </NuxtLink>

                </div>


                <div class="grid grid-cols-2 gap-4 mb-2 mt-4">
                    <NuxtLink
                        :to="getPostUrl(healthcontents[3]?.cat_slug, healthcontents[3]?.subcat_slug, healthcontents[3]?.content_type, healthcontents[3]?.content_id)"
                        class="group">
                        <div class=" overflow-hidden">
                            <nuxt-img loading="lazy"
                                :src="`${siteurl?.site_url}/media/content/images/${healthcontents[3]?.img_bg_path}`"
                                class="mx-auto w-full group-hover:scale-110 duration-300"
                                :placeholder="img(`${siteurl?.site_url}/logo/placeholder.jpg`)" />
                        </div>
                    </NuxtLink>
                    <NuxtLink class="group"
                        :to="getPostUrl(healthcontents[4]?.cat_slug, healthcontents[4]?.subcat_slug, healthcontents[4]?.content_type, healthcontents[4]?.content_id)">
                        <div class=" overflow-hidden">
                            <nuxt-img loading="lazy"
                                :src="`${siteurl?.site_url}/media/content/images/${healthcontents[4]?.img_bg_path}`"
                                class="mx-auto w-full group-hover:scale-110 duration-300"
                                :placeholder="img(`${siteurl?.site_url}/logo/placeholder.jpg`)" />
                        </div>
                    </NuxtLink>
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <NuxtLink class="group"
                        :to="getPostUrl(healthcontents[3]?.cat_slug, healthcontents[3]?.subcat_slug, healthcontents[3]?.content_type, healthcontents[3]?.content_id)">
                        <h4 class=" text-base text-black group-hover:text-[#ff0000] font-semibold">{{
                            healthcontents[3]?.content_heading
                        }}</h4>
                    </NuxtLink>
                    <NuxtLink class="group"
                        :to="getPostUrl(healthcontents[4]?.cat_slug, healthcontents[4]?.subcat_slug, healthcontents[4]?.content_type, healthcontents[4]?.content_id)">
                        <h4 class=" text-base text-black group-hover:text-[#ff0000] font-semibold ">{{
                            healthcontents[4]?.content_heading
                        }}</h4>
                    </NuxtLink>
                </div>

                <div class="grid grid-cols-2 gap-4">
                    <NuxtLink
                        :to="getPostUrl(healthcontents[3]?.cat_slug, healthcontents[3]?.subcat_slug, healthcontents[3]?.content_type, healthcontents[3]?.content_id)"
                        class="text-sm text-black mt-1 flex gap-1 items-center">
                        <Icon name="ph:alarm-bold" />
                        <span>
                            {{ postCreatedDate(healthcontents[3]?.created_at) }}
                        </span>
                    </NuxtLink>
                    <NuxtLink
                        :to="getPostUrl(healthcontents[4]?.cat_slug, healthcontents[4]?.subcat_slug, healthcontents[4]?.content_type, healthcontents[4]?.content_id)"
                        class="text-sm text-black mt-1 flex gap-1 items-center">
                        <Icon name="ph:alarm-bold" />
                        <span>
                            {{ postCreatedDate(healthcontents[4]?.created_at) }}
                        </span>
                    </NuxtLink>

                </div>
                <!-- Mobile Version -->
                <!-- <div class="home-intertainment-category-except-post grid grid-cols-2 gap-4">
                    <div class="flex flex-col gap-4 group h-sports-excpt"
                        v-for="healthcontent in healthcontents.slice(1, 5)" :key="healthcontent.content_id">
                        <div class=" col-span-5 overflow-hidden">
                            <NuxtLink
                                :to="getPostUrl(healthcontent?.cat_slug, healthcontent?.subcat_slug, healthcontent?.content_type, healthcontent?.content_id)">
                                <nuxt-img loading="lazy"
                                    :src="`${siteurl.site_url}/media/content/images/${healthcontent?.img_bg_path}`"
                                    class="mx-auto w-full group-hover:scale-110 duration-300"
                                    :placeholder="img(`${siteurl?.site_url}/logo/placeholder.jpg`)" />
                            </NuxtLink>
                        </div>
                        <div class=" col-span-7">
                            <NuxtLink
                                :to="getPostUrl(healthcontent?.cat_slug, healthcontent?.subcat_slug, healthcontent?.content_type, healthcontent?.content_id)"
                                class="flex flex-col gap-2">
                                <h4 class="text-base text-black font-semibold group-hover:text-[#ff0000]">
                                    {{ healthcontent?.content_heading }}
                                </h4>
                                <p class="text-sm text-black mt-1 flex gap-1 items-center">
                                    <Icon name="ph:alarm-bold" />
                                    <span>
                                        {{ postCreatedDate(healthcontent?.created_at) }}
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
// ======== Health Content =============== //
const healthcontents = useState(() => [])
const { data: chealth } = await useFetch("/api/prismaapi/home/health", {
    method: 'GET',
    // cache: 'force-cache',
})
healthcontents.value = chealth
// ======== Health Content =============== //

</script>

<style lang="scss" scoped></style>