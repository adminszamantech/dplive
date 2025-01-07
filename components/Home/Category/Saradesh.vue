<template>
    <div v-if="saradeshcontents?.length > 0" class="home-saradesh-category">
        <div class="category-header border-b-[3px] group border-b-[#3375af] my-3">
            <NuxtLink :to="`/${saradeshcontents[0]?.cat_slug}`" class="flex gap-3 items-center">
                <span class="w-3 h-3 bg-[#3375af]"></span>
                <h2 class="text-[#3375af] text-[18px] group-hover:text-[#65a1d6] font-semibold">সারাদেশ</h2>
            </NuxtLink>
        </div>
        <div class="grid grid-cols-12 gap-4">
            <div class="col-span-12 md:col-span-4">
                <NuxtLink
                    :to="getPostUrl(saradeshcontents[0]?.cat_slug, saradeshcontents[0]?.subcat_slug, saradeshcontents[0]?.content_type, saradeshcontents[0]?.content_id)"
                    class="flex flex-col group gap-2">
                    <div class="intertainment-feature-image overflow-hidden">
                        <nuxt-img loading="lazy"
                            :src="`${siteurl.site_url}/media/content/images/${saradeshcontents[0]?.img_bg_path}`"
                            class="mx-auto w-full group-hover:scale-110 duration-300"
                            :placeholder="img(`${siteurl.site_url}/media/common/logo1672518180.png`, { height: 300 })" />
                    </div>
                    <div class="intertainment-feature-description flex flex-col gap-2">
                        <h3 class="text-[25px] text-black font-semibold group-hover:text-[#ff0000]">{{
                            saradeshcontents[0]?.content_heading }}</h3>
                        <ClientOnly>
                            <div class="text-base font-[300] text-black" v-html="`${saradeshcontents[0]?.content_details?.substring(0,
                                250)} ...`"></div>
                        </ClientOnly>
                        <p class="text-sm text-black mt-1 flex gap-1 items-center">
                            <Icon name="ph:alarm-bold" />
                            <span>
                                {{ postCreatedDate(saradeshcontents[0]?.created_at) }}
                            </span>
                        </p>
                    </div>
                </NuxtLink>
            </div>
            <div class="col-span-12 md:col-span-8">

                <div class="desktop-version hidden md:block">
                    <!-- Desktop Version -->
                    <div class="md:grid grid-cols-3 gap-4 mb-2">
                        <NuxtLink
                            :to="getPostUrl(saradeshcontents[1]?.cat_slug, saradeshcontents[1]?.subcat_slug, saradeshcontents[1]?.content_type, saradeshcontents[1]?.content_id)"
                            class="group">
                            <div class=" overflow-hidden">
                                <nuxt-img loading="lazy"
                                    :src="`${siteurl?.site_url}/media/content/images/${saradeshcontents[1]?.img_bg_path}`"
                                    class="mx-auto w-full group-hover:scale-110 duration-300"
                                    :placeholder="img(`${siteurl?.site_url}/logo/placeholder.jpg`)" />
                            </div>
                        </NuxtLink>
                        <NuxtLink class="group"
                            :to="getPostUrl(saradeshcontents[2]?.cat_slug, saradeshcontents[2]?.subcat_slug, saradeshcontents[2]?.content_type, saradeshcontents[2]?.content_id)">
                            <div class=" overflow-hidden">
                                <nuxt-img loading="lazy"
                                    :src="`${siteurl?.site_url}/media/content/images/${saradeshcontents[2]?.img_bg_path}`"
                                    class="mx-auto w-full group-hover:scale-110 duration-300"
                                    :placeholder="img(`${siteurl?.site_url}/logo/placeholder.jpg`)" />
                            </div>
                        </NuxtLink>
                        <NuxtLink class="group"
                            :to="getPostUrl(saradeshcontents[3]?.cat_slug, saradeshcontents[3]?.subcat_slug, saradeshcontents[3]?.content_type, saradeshcontents[3]?.content_id)">
                            <div class=" overflow-hidden">
                                <nuxt-img loading="lazy"
                                    :src="`${siteurl?.site_url}/media/content/images/${saradeshcontents[3]?.img_bg_path}`"
                                    class="mx-auto w-full group-hover:scale-110 duration-300"
                                    :placeholder="img(`${siteurl?.site_url}/logo/placeholder.jpg`)" />
                            </div>
                        </NuxtLink>
                    </div>
                    <div class="grid grid-cols-3 gap-4">
                        <NuxtLink class="group"
                            :to="getPostUrl(saradeshcontents[1]?.cat_slug, saradeshcontents[1]?.subcat_slug, saradeshcontents[1]?.content_type, saradeshcontents[1]?.content_id)">
                            <h4 class=" text-base text-black group-hover:text-[#ff0000] font-semibold">{{
                                saradeshcontents[1]?.content_heading
                            }}</h4>
                        </NuxtLink>
                        <NuxtLink class="group"
                            :to="getPostUrl(saradeshcontents[2]?.cat_slug, saradeshcontents[2]?.subcat_slug, saradeshcontents[2]?.content_type, saradeshcontents[2]?.content_id)">
                            <h4 class=" text-base text-black group-hover:text-[#ff0000] font-semibold ">{{
                                saradeshcontents[2]?.content_heading
                            }}</h4>
                        </NuxtLink>
                        <NuxtLink class="group"
                            :to="getPostUrl(saradeshcontents[3]?.cat_slug, saradeshcontents[3]?.subcat_slug, saradeshcontents[3]?.content_type, saradeshcontents[3]?.content_id)">
                            <h4 class=" text-base text-black group-hover:text-[#ff0000] font-semibold ">{{
                                saradeshcontents[3]?.content_heading
                            }}</h4>
                        </NuxtLink>
                    </div>

                    <div class="grid grid-cols-3 gap-4">
                        <NuxtLink
                            :to="getPostUrl(saradeshcontents[1]?.cat_slug, saradeshcontents[1]?.subcat_slug, saradeshcontents[1]?.content_type, saradeshcontents[1]?.content_id)"
                            class="text-sm text-black mt-1 flex gap-1 items-center">
                            <Icon name="ph:alarm-bold" />
                            <span>
                                {{ postCreatedDate(saradeshcontents[1]?.created_at) }}
                            </span>
                        </NuxtLink>
                        <NuxtLink
                            :to="getPostUrl(saradeshcontents[2]?.cat_slug, saradeshcontents[2]?.subcat_slug, saradeshcontents[2]?.content_type, saradeshcontents[2]?.content_id)"
                            class="text-sm text-black mt-1 flex gap-1 items-center">
                            <Icon name="ph:alarm-bold" />
                            <span>
                                {{ postCreatedDate(saradeshcontents[2]?.created_at) }}
                            </span>
                        </NuxtLink>
                        <NuxtLink
                            :to="getPostUrl(saradeshcontents[3]?.cat_slug, saradeshcontents[3]?.subcat_slug, saradeshcontents[3]?.content_type, saradeshcontents[3]?.content_id)"
                            class="text-sm text-black mt-1 flex gap-1 items-center">
                            <Icon name="ph:alarm-bold" />
                            <span>
                                {{ postCreatedDate(saradeshcontents[3]?.created_at) }}
                            </span>
                        </NuxtLink>

                    </div>


                    <div class="grid grid-cols-3 gap-4 mb-2 mt-4">
                        <NuxtLink
                            :to="getPostUrl(saradeshcontents[4]?.cat_slug, saradeshcontents[4]?.subcat_slug, saradeshcontents[4]?.content_type, saradeshcontents[4]?.content_id)"
                            class="group">
                            <div class=" overflow-hidden">
                                <nuxt-img loading="lazy"
                                    :src="`${siteurl?.site_url}/media/content/images/${saradeshcontents[4]?.img_bg_path}`"
                                    class="mx-auto w-full group-hover:scale-110 duration-300"
                                    :placeholder="img(`${siteurl?.site_url}/logo/placeholder.jpg`)" />
                            </div>
                        </NuxtLink>
                        <NuxtLink class="group"
                            :to="getPostUrl(saradeshcontents[5]?.cat_slug, saradeshcontents[5]?.subcat_slug, saradeshcontents[5]?.content_type, saradeshcontents[5]?.content_id)">
                            <div class=" overflow-hidden">
                                <nuxt-img loading="lazy"
                                    :src="`${siteurl?.site_url}/media/content/images/${saradeshcontents[5]?.img_bg_path}`"
                                    class="mx-auto w-full group-hover:scale-110 duration-300"
                                    :placeholder="img(`${siteurl?.site_url}/logo/placeholder.jpg`)" />
                            </div>
                        </NuxtLink>
                        <NuxtLink class="group"
                            :to="getPostUrl(saradeshcontents[6]?.cat_slug, saradeshcontents[6]?.subcat_slug, saradeshcontents[6]?.content_type, saradeshcontents[6]?.content_id)">
                            <div class=" overflow-hidden">
                                <nuxt-img loading="lazy"
                                    :src="`${siteurl?.site_url}/media/content/images/${saradeshcontents[6]?.img_bg_path}`"
                                    class="mx-auto w-full group-hover:scale-110 duration-300"
                                    :placeholder="img(`${siteurl?.site_url}/logo/placeholder.jpg`)" />
                            </div>
                        </NuxtLink>
                    </div>
                    <div class="grid grid-cols-3 gap-4">
                        <NuxtLink class="group"
                            :to="getPostUrl(saradeshcontents[4]?.cat_slug, saradeshcontents[4]?.subcat_slug, saradeshcontents[4]?.content_type, saradeshcontents[4]?.content_id)">
                            <h4 class=" text-base text-black group-hover:text-[#ff0000] font-semibold">{{
                                saradeshcontents[4]?.content_heading
                            }}</h4>
                        </NuxtLink>
                        <NuxtLink class="group"
                            :to="getPostUrl(saradeshcontents[5]?.cat_slug, saradeshcontents[5]?.subcat_slug, saradeshcontents[5]?.content_type, saradeshcontents[5]?.content_id)">
                            <h4 class=" text-base text-black group-hover:text-[#ff0000] font-semibold ">{{
                                saradeshcontents[5]?.content_heading
                            }}</h4>
                        </NuxtLink>
                        <NuxtLink class="group"
                            :to="getPostUrl(saradeshcontents[6]?.cat_slug, saradeshcontents[6]?.subcat_slug, saradeshcontents[6]?.content_type, saradeshcontents[6]?.content_id)">
                            <h4 class=" text-base text-black group-hover:text-[#ff0000] font-semibold ">{{
                                saradeshcontents[6]?.content_heading
                            }}</h4>
                        </NuxtLink>
                    </div>

                    <div class="grid grid-cols-3 gap-4">
                        <NuxtLink
                            :to="getPostUrl(saradeshcontents[4]?.cat_slug, saradeshcontents[4]?.subcat_slug, saradeshcontents[4]?.content_type, saradeshcontents[4]?.content_id)"
                            class="text-sm text-black mt-1 flex gap-1 items-center">
                            <Icon name="ph:alarm-bold" />
                            <span>
                                {{ postCreatedDate(saradeshcontents[4]?.created_at) }}
                            </span>
                        </NuxtLink>
                        <NuxtLink
                            :to="getPostUrl(saradeshcontents[5]?.cat_slug, saradeshcontents[5]?.subcat_slug, saradeshcontents[5]?.content_type, saradeshcontents[5]?.content_id)"
                            class="text-sm text-black mt-1 flex gap-1 items-center">
                            <Icon name="ph:alarm-bold" />
                            <span>
                                {{ postCreatedDate(saradeshcontents[5]?.created_at) }}
                            </span>
                        </NuxtLink>
                        <NuxtLink
                            :to="getPostUrl(saradeshcontents[6]?.cat_slug, saradeshcontents[6]?.subcat_slug, saradeshcontents[6]?.content_type, saradeshcontents[6]?.content_id)"
                            class="text-sm text-black mt-1 flex gap-1 items-center">
                            <Icon name="ph:alarm-bold" />
                            <span>
                                {{ postCreatedDate(saradeshcontents[6]?.created_at) }}
                            </span>
                        </NuxtLink>
                    </div>
                    <!-- Desktop Version -->
                </div>


                <div class="mobile-version md:hidden block">

                    <!-- Mobile Version -->
                    <div class="grid grid-cols-2 gap-4 mb-2">
                        <NuxtLink
                            :to="getPostUrl(saradeshcontents[1]?.cat_slug, saradeshcontents[1]?.subcat_slug, saradeshcontents[1]?.content_type, saradeshcontents[1]?.content_id)"
                            class="group">
                            <div class=" overflow-hidden">
                                <nuxt-img loading="lazy"
                                    :src="`${siteurl?.site_url}/media/content/images/${saradeshcontents[1]?.img_bg_path}`"
                                    class="mx-auto w-full group-hover:scale-110 duration-300"
                                    :placeholder="img(`${siteurl?.site_url}/logo/placeholder.jpg`)" />
                            </div>
                        </NuxtLink>
                        <NuxtLink class="group"
                            :to="getPostUrl(saradeshcontents[2]?.cat_slug, saradeshcontents[2]?.subcat_slug, saradeshcontents[2]?.content_type, saradeshcontents[2]?.content_id)">
                            <div class=" overflow-hidden">
                                <nuxt-img loading="lazy"
                                    :src="`${siteurl?.site_url}/media/content/images/${saradeshcontents[2]?.img_bg_path}`"
                                    class="mx-auto w-full group-hover:scale-110 duration-300"
                                    :placeholder="img(`${siteurl?.site_url}/logo/placeholder.jpg`)" />
                            </div>
                        </NuxtLink>

                    </div>
                    <div class="grid grid-cols-2 gap-4">
                        <NuxtLink class="group"
                            :to="getPostUrl(saradeshcontents[1]?.cat_slug, saradeshcontents[1]?.subcat_slug, saradeshcontents[1]?.content_type, saradeshcontents[1]?.content_id)">
                            <h4 class=" text-base text-black group-hover:text-[#ff0000] font-semibold">{{
                                saradeshcontents[1]?.content_heading
                            }}</h4>
                        </NuxtLink>
                        <NuxtLink class="group"
                            :to="getPostUrl(saradeshcontents[2]?.cat_slug, saradeshcontents[2]?.subcat_slug, saradeshcontents[2]?.content_type, saradeshcontents[2]?.content_id)">
                            <h4 class=" text-base text-black group-hover:text-[#ff0000] font-semibold ">{{
                                saradeshcontents[2]?.content_heading
                            }}</h4>
                        </NuxtLink>

                    </div>

                    <div class="grid grid-cols-2 gap-4">
                        <NuxtLink
                            :to="getPostUrl(saradeshcontents[1]?.cat_slug, saradeshcontents[1]?.subcat_slug, saradeshcontents[1]?.content_type, saradeshcontents[1]?.content_id)"
                            class="text-sm text-black mt-1 flex gap-1 items-center">
                            <Icon name="ph:alarm-bold" />
                            <span>
                                {{ postCreatedDate(saradeshcontents[1]?.created_at) }}
                            </span>
                        </NuxtLink>
                        <NuxtLink
                            :to="getPostUrl(saradeshcontents[2]?.cat_slug, saradeshcontents[2]?.subcat_slug, saradeshcontents[2]?.content_type, saradeshcontents[2]?.content_id)"
                            class="text-sm text-black mt-1 flex gap-1 items-center">
                            <Icon name="ph:alarm-bold" />
                            <span>
                                {{ postCreatedDate(saradeshcontents[2]?.created_at) }}
                            </span>
                        </NuxtLink>


                    </div>


                    <div class="grid grid-cols-2 gap-4 mb-2 mt-4">
                        <NuxtLink class="group"
                            :to="getPostUrl(saradeshcontents[3]?.cat_slug, saradeshcontents[3]?.subcat_slug, saradeshcontents[3]?.content_type, saradeshcontents[3]?.content_id)">
                            <div class=" overflow-hidden">
                                <nuxt-img loading="lazy"
                                    :src="`${siteurl?.site_url}/media/content/images/${saradeshcontents[3]?.img_bg_path}`"
                                    class="mx-auto w-full group-hover:scale-110 duration-300"
                                    :placeholder="img(`${siteurl?.site_url}/logo/placeholder.jpg`)" />
                            </div>
                        </NuxtLink>
                        <NuxtLink
                            :to="getPostUrl(saradeshcontents[4]?.cat_slug, saradeshcontents[4]?.subcat_slug, saradeshcontents[4]?.content_type, saradeshcontents[4]?.content_id)"
                            class="group">
                            <div class=" overflow-hidden">
                                <nuxt-img loading="lazy"
                                    :src="`${siteurl?.site_url}/media/content/images/${saradeshcontents[4]?.img_bg_path}`"
                                    class="mx-auto w-full group-hover:scale-110 duration-300"
                                    :placeholder="img(`${siteurl?.site_url}/logo/placeholder.jpg`)" />
                            </div>
                        </NuxtLink>
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                        <NuxtLink class="group"
                            :to="getPostUrl(saradeshcontents[3]?.cat_slug, saradeshcontents[3]?.subcat_slug, saradeshcontents[3]?.content_type, saradeshcontents[3]?.content_id)">
                            <h4 class=" text-base text-black group-hover:text-[#ff0000] font-semibold ">{{
                                saradeshcontents[3]?.content_heading
                            }}</h4>
                        </NuxtLink>
                        <NuxtLink class="group"
                            :to="getPostUrl(saradeshcontents[4]?.cat_slug, saradeshcontents[4]?.subcat_slug, saradeshcontents[4]?.content_type, saradeshcontents[4]?.content_id)">
                            <h4 class=" text-base text-black group-hover:text-[#ff0000] font-semibold">{{
                                saradeshcontents[4]?.content_heading
                            }}</h4>
                        </NuxtLink>

                    </div>

                    <div class="grid grid-cols-2 gap-4">
                        <NuxtLink
                            :to="getPostUrl(saradeshcontents[3]?.cat_slug, saradeshcontents[3]?.subcat_slug, saradeshcontents[3]?.content_type, saradeshcontents[3]?.content_id)"
                            class="text-sm text-black mt-1 flex gap-1 items-center">
                            <Icon name="ph:alarm-bold" />
                            <span>
                                {{ postCreatedDate(saradeshcontents[3]?.created_at) }}
                            </span>
                        </NuxtLink>
                        <NuxtLink
                            :to="getPostUrl(saradeshcontents[4]?.cat_slug, saradeshcontents[4]?.subcat_slug, saradeshcontents[4]?.content_type, saradeshcontents[4]?.content_id)"
                            class="text-sm text-black mt-1 flex gap-1 items-center">
                            <Icon name="ph:alarm-bold" />
                            <span>
                                {{ postCreatedDate(saradeshcontents[4]?.created_at) }}
                            </span>
                        </NuxtLink>

                    </div>


                    <div class="grid grid-cols-2 gap-4 mb-2 mt-4">
                        <NuxtLink class="group"
                            :to="getPostUrl(saradeshcontents[5]?.cat_slug, saradeshcontents[5]?.subcat_slug, saradeshcontents[5]?.content_type, saradeshcontents[5]?.content_id)">
                            <div class=" overflow-hidden">
                                <nuxt-img loading="lazy"
                                    :src="`${siteurl?.site_url}/media/content/images/${saradeshcontents[5]?.img_bg_path}`"
                                    class="mx-auto w-full group-hover:scale-110 duration-300"
                                    :placeholder="img(`${siteurl?.site_url}/logo/placeholder.jpg`)" />
                            </div>
                        </NuxtLink>
                        <NuxtLink
                            :to="getPostUrl(saradeshcontents[6]?.cat_slug, saradeshcontents[6]?.subcat_slug, saradeshcontents[6]?.content_type, saradeshcontents[6]?.content_id)"
                            class="group">
                            <div class=" overflow-hidden">
                                <nuxt-img loading="lazy"
                                    :src="`${siteurl?.site_url}/media/content/images/${saradeshcontents[6]?.img_bg_path}`"
                                    class="mx-auto w-full group-hover:scale-110 duration-300"
                                    :placeholder="img(`${siteurl?.site_url}/logo/placeholder.jpg`)" />
                            </div>
                        </NuxtLink>
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                        <NuxtLink class="group"
                            :to="getPostUrl(saradeshcontents[5]?.cat_slug, saradeshcontents[5]?.subcat_slug, saradeshcontents[5]?.content_type, saradeshcontents[5]?.content_id)">
                            <h4 class=" text-base text-black group-hover:text-[#ff0000] font-semibold ">{{
                                saradeshcontents[5]?.content_heading
                            }}</h4>
                        </NuxtLink>
                        <NuxtLink class="group"
                            :to="getPostUrl(saradeshcontents[6]?.cat_slug, saradeshcontents[6]?.subcat_slug, saradeshcontents[6]?.content_type, saradeshcontents[6]?.content_id)">
                            <h4 class=" text-base text-black group-hover:text-[#ff0000] font-semibold">{{
                                saradeshcontents[6]?.content_heading
                            }}</h4>
                        </NuxtLink>

                    </div>

                    <div class="grid grid-cols-2 gap-4">
                        <NuxtLink
                            :to="getPostUrl(saradeshcontents[5]?.cat_slug, saradeshcontents[5]?.subcat_slug, saradeshcontents[5]?.content_type, saradeshcontents[5]?.content_id)"
                            class="text-sm text-black mt-1 flex gap-1 items-center">
                            <Icon name="ph:alarm-bold" />
                            <span>
                                {{ postCreatedDate(saradeshcontents[6]?.created_at) }}
                            </span>
                        </NuxtLink>
                        <NuxtLink
                            :to="getPostUrl(saradeshcontents[6]?.cat_slug, saradeshcontents[6]?.subcat_slug, saradeshcontents[6]?.content_type, saradeshcontents[6]?.content_id)"
                            class="text-sm text-black mt-1 flex gap-1 items-center">
                            <Icon name="ph:alarm-bold" />
                            <span>
                                {{ postCreatedDate(saradeshcontents[6]?.created_at) }}
                            </span>
                        </NuxtLink>

                    </div>
                </div>
                <!-- Desktop Version -->

                <!-- <div class="home-intertainment-category-except-post grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div class="flex flex-col gap-4 group h-sports-excpt"
                        v-for="saradeshcontent in saradeshcontents.slice(1, 7)" :key="saradeshcontent.content_id">
                        <div class=" col-span-5 overflow-hidden">
                            <NuxtLink
                                :to="getPostUrl(saradeshcontent?.cat_slug, saradeshcontent?.subcat_slug, saradeshcontent?.content_type, saradeshcontent?.content_id)">
                                <nuxt-img loading="lazy"
                                    :src="`${siteurl.site_url}/media/content/images/${saradeshcontent?.img_bg_path}`"
                                    class="mx-auto w-full group-hover:scale-110 duration-300"
                                    :placeholder="img(`${siteurl?.site_url}/logo/placeholder.jpg`)" />
                            </NuxtLink>
                        </div>
                        <div class=" col-span-7">
                            <NuxtLink
                                :to="getPostUrl(saradeshcontent?.cat_slug, saradeshcontent?.subcat_slug, saradeshcontent?.content_type, saradeshcontent?.content_id)"
                                class="flex flex-col gap-2">
                                <h4 class="text-base text-black font-semibold group-hover:text-[#ff0000]">{{
                                    saradeshcontent?.content_heading }}</h4>
                                <p class="text-sm text-black mt-1 flex gap-1 items-center">
                                    <Icon name="ph:alarm-bold" />
                                    <span>
                                        {{ postCreatedDate(saradeshcontent?.created_at) }}
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
const saradeshcontents = useState(() => [])
const { data: hsradesh } = await useFetch('/api/prismaapi/home/saradesh', {
    method: 'GET',
    // cache: 'force-cache',

})
saradeshcontents.value = hsradesh

</script>

<style scoped>
.h-sports-excpt:first-child {
    padding-top: 0px
}
</style>