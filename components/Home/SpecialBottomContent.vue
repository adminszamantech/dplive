<template>
    <div class="hidden md:block desktopSpecialContent special-bottom-content mt-4 mb-8">
        <div class="grid grid-cols-3 gap-4 mb-2">
            <NuxtLink
                :to="getPostUrl(spTopContent[5]?.category?.cat_slug, spTopContent[5]?.subcategory?.subcat_slug, spTopContent[5]?.content_type, spTopContent[5]?.content_id)"
                class=" group/partha">
                <div class=" overflow-hidden">
                    <nuxt-img loading="lazy"
                        :src="`${siteurl?.site_url}/media/content/images/${spTopContent[5]?.img_bg_path}`"
                        class="mx-auto w-full group-hover/partha:scale-110 duration-300"
                        :placeholder="img(`${siteurl?.site_url}/logo/placeholder.jpg`)" />
                </div>
            </NuxtLink>
            <NuxtLink
                :to="getPostUrl(spTopContent[6]?.category?.cat_slug, spTopContent[6]?.subcategory?.subcat_slug, spTopContent[6]?.content_type, spTopContent[6]?.content_id)"
                class=" group/partha">
                <div class=" overflow-hidden">
                    <nuxt-img loading="lazy"
                        :src="`${siteurl?.site_url}/media/content/images/${spTopContent[6]?.img_bg_path}`"
                        class="mx-auto w-full group-hover/partha:scale-110 duration-300"
                        :placeholder="img(`${siteurl?.site_url}/logo/placeholder.jpg`)" />
                </div>
            </NuxtLink>
            <NuxtLink
                :to="getPostUrl(spTopContent[7]?.category?.cat_slug, spTopContent[7]?.subcategory?.subcat_slug, spTopContent[7]?.content_type, spTopContent[7]?.content_id)"
                class=" group/partha">
                <div class=" overflow-hidden">
                    <nuxt-img loading="lazy"
                        :src="`${siteurl?.site_url}/media/content/images/${spTopContent[7]?.img_bg_path}`"
                        class="mx-auto w-full group-hover/partha:scale-110 duration-300"
                        :placeholder="img(`${siteurl?.site_url}/logo/placeholder.jpg`)" />
                </div>
            </NuxtLink>
        </div>
        <div class="grid grid-cols-3 gap-4">
            <NuxtLink
                :to="getPostUrl(spTopContent[5]?.category?.cat_slug, spTopContent[5]?.subcategory?.subcat_slug, spTopContent[5]?.content_type, spTopContent[5]?.content_id)"
                class="group">
                <h4 class=" text-[18px] font-semibold mb-1 group-hover:text-[#ff0000]">{{
                    spTopContent[5]?.content_heading
                }}</h4>
            </NuxtLink>
            <NuxtLink
                :to="getPostUrl(spTopContent[6]?.category?.cat_slug, spTopContent[6]?.subcategory?.subcat_slug, spTopContent[6]?.content_type, spTopContent[6]?.content_id)"
                class="group">
                <h4 class=" text-[18px] font-semibold mb-1 group-hover:text-[#ff0000] ">{{
                    spTopContent[6]?.content_heading
                }}</h4>
            </NuxtLink>
            <NuxtLink
                :to="getPostUrl(spTopContent[7]?.category?.cat_slug, spTopContent[7]?.subcategory?.subcat_slug, spTopContent[7]?.content_type, spTopContent[7]?.content_id)"
                class="group">
                <h4 class=" text-[18px] font-semibold mb-1 group-hover:text-[#ff0000]">{{
                    spTopContent[7]?.content_heading
                }}</h4>
            </NuxtLink>

        </div>
        <div class="grid grid-cols-3 gap-4 mb-2">
            <ClientOnly>
                <NuxtLink
                    :to="getPostUrl(spTopContent[5]?.category?.cat_slug, spTopContent[5]?.subcategory?.subcat_slug, spTopContent[5]?.content_type, spTopContent[5]?.content_id)">
                    <div class="text-base font-[300] text-black"
                        v-html="`${spTopContent[5]?.content_details?.substring(0, 150)} ...`"></div>
                </NuxtLink>
            </ClientOnly>
            <ClientOnly>
                <NuxtLink
                    :to="getPostUrl(spTopContent[6]?.category?.cat_slug, spTopContent[6]?.subcategory?.subcat_slug, spTopContent[6]?.content_type, spTopContent[6]?.content_id)">
                    <div class="text-base font-[300] text-black"
                        v-html="`${spTopContent[6]?.content_details?.substring(0, 150)} ...`"></div>
                </NuxtLink>
            </ClientOnly>
            <ClientOnly>
                <NuxtLink
                    :to="getPostUrl(spTopContent[7]?.category?.cat_slug, spTopContent[7]?.subcategory?.subcat_slug, spTopContent[7]?.content_type, spTopContent[7]?.content_id)">
                    <div class="text-base font-[300] text-black"
                        v-html="`${spTopContent[7]?.content_details?.substring(0, 150)} ...`"></div>
                </NuxtLink>
            </ClientOnly>

        </div>
        <div class="grid grid-cols-3 gap-4">
            <NuxtLink
                :to="getPostUrl(spTopContent[5]?.category?.cat_slug, spTopContent[5]?.subcategory?.subcat_slug, spTopContent[5]?.content_type, spTopContent[5]?.content_id)"
                class="text-sm text-black">{{ spTopContent[5]?.category?.cat_name_bn }} | {{
                    postCreatedDate(spTopContent[5]?.created_at) }}</NuxtLink>
            <NuxtLink
                :to="getPostUrl(spTopContent[6]?.category?.cat_slug, spTopContent[6]?.subcategory?.subcat_slug, spTopContent[6]?.content_type, spTopContent[6]?.content_id)"
                class="text-sm text-black">{{ spTopContent[6]?.category?.cat_name_bn }} | {{
                    postCreatedDate(spTopContent[5]?.created_at) }}</NuxtLink>
            <NuxtLink
                :to="getPostUrl(spTopContent[7]?.category?.cat_slug, spTopContent[7]?.subcategory?.subcat_slug, spTopContent[7]?.content_type, spTopContent[7]?.content_id)"
                class="text-sm text-black">{{ spTopContent[7]?.category?.cat_name_bn }} | {{
                    postCreatedDate(spTopContent[5]?.created_at) }}</NuxtLink>
        </div>

        <div class="grid grid-cols-3 gap-4 mb-2 mt-6">
            <NuxtLink
                :to="getPostUrl(spTopContent[8]?.category?.cat_slug, spTopContent[8]?.subcategory?.subcat_slug, spTopContent[8]?.content_type, spTopContent[8]?.content_id)"
                class="group/partha">
                <div class=" overflow-hidden">
                    <nuxt-img loading="lazy"
                        :src="`${siteurl?.site_url}/media/content/images/${spTopContent[8]?.img_bg_path}`"
                        class="mx-auto w-full group-hover/partha:scale-110 duration-300"
                        :placeholder="img(`${siteurl?.site_url}/logo/placeholder.jpg`)" />
                </div>
            </NuxtLink>
            <NuxtLink
                :to="getPostUrl(spTopContent[9]?.category?.cat_slug, spTopContent[9]?.subcategory?.subcat_slug, spTopContent[9]?.content_type, spTopContent[9]?.content_id)"
                class="group/partha">
                <div class=" overflow-hidden">
                    <nuxt-img loading="lazy"
                        :src="`${siteurl?.site_url}/media/content/images/${spTopContent[9]?.img_bg_path}`"
                        class="mx-auto w-full group-hover/partha:scale-110 duration-300"
                        :placeholder="img(`${siteurl?.site_url}/logo/placeholder.jpg`)" />
                </div>
            </NuxtLink>
            <NuxtLink
                :to="getPostUrl(spTopContent[10]?.category?.cat_slug, spTopContent[10]?.subcategory?.subcat_slug, spTopContent[10]?.content_type, spTopContent[10]?.content_id)"
                class="group/partha">
                <div class=" overflow-hidden">
                    <nuxt-img loading="lazy"
                        :src="`${siteurl?.site_url}/media/content/images/${spTopContent[10]?.img_bg_path}`"
                        class="mx-auto w-full group-hover/partha:scale-110 duration-300"
                        :placeholder="img(`${siteurl?.site_url}/logo/placeholder.jpg`)" />
                </div>
            </NuxtLink>
        </div>
        <div class="grid grid-cols-3 gap-4">
            <NuxtLink
                :to="getPostUrl(spTopContent[8]?.category?.cat_slug, spTopContent[7]?.subcategory?.subcat_slug, spTopContent[8]?.content_type, spTopContent[8]?.content_id)"
                class="group">
                <h4 class=" text-[18px] font-semibold mb-1 group-hover:text-[#ff0000]">{{
                    spTopContent[8]?.content_heading
                }}</h4>
            </NuxtLink>
            <NuxtLink
                :to="getPostUrl(spTopContent[9]?.category?.cat_slug, spTopContent[7]?.subcategory?.subcat_slug, spTopContent[9]?.content_type, spTopContent[9]?.content_id)"
                class="group">
                <h4 class=" text-[18px] font-semibold mb-1 group-hover:text-[#ff0000] ">{{
                    spTopContent[9]?.content_heading
                }}</h4>
            </NuxtLink>
            <NuxtLink
                :to="getPostUrl(spTopContent[10]?.category?.cat_slug, spTopContent[7]?.subcategory?.subcat_slug, spTopContent[10]?.content_type, spTopContent[10]?.content_id)"
                class="group">
                <h4 class=" text-[18px] font-semibold mb-1 group-hover:text-[#ff0000]">{{
                    spTopContent[10]?.content_heading
                }}</h4>
            </NuxtLink>

        </div>
        <div class="grid grid-cols-3 gap-4 mb-2">
            <ClientOnly>
                <NuxtLink
                    :to="getPostUrl(spTopContent[8]?.category?.cat_slug, spTopContent[8]?.subcategory?.subcat_slug, spTopContent[8]?.content_type, spTopContent[8]?.content_id)">
                    <div class="text-base font-[300] text-black"
                        v-html="`${spTopContent[8]?.content_details?.substring(0, 150)} ...`"></div>
                </NuxtLink>
            </ClientOnly>
            <ClientOnly>
                <NuxtLink
                    :to="getPostUrl(spTopContent[9]?.category?.cat_slug, spTopContent[9]?.subcategory?.subcat_slug, spTopContent[9]?.content_type, spTopContent[9]?.content_id)">
                    <div class="text-base font-[300] text-black"
                        v-html="`${spTopContent[9]?.content_details?.substring(0, 150)} ...`"></div>
                </NuxtLink>
            </ClientOnly>
            <ClientOnly>
                <NuxtLink
                    :to="getPostUrl(spTopContent[10]?.category?.cat_slug, spTopContent[10]?.subcategory?.subcat_slug, spTopContent[10]?.content_type, spTopContent[10]?.content_id)">
                    <div class="text-base font-[300] text-black"
                        v-html="`${spTopContent[10]?.content_details?.substring(0, 150)} ...`"></div>
                </NuxtLink>
            </ClientOnly>

        </div>
        <div class="grid grid-cols-3 gap-4">
            <NuxtLink
                :to="getPostUrl(spTopContent[8]?.category?.cat_slug, spTopContent[8]?.subcategory?.subcat_slug, spTopContent[8]?.content_type, spTopContent[8]?.content_id)"
                class="text-sm text-black">{{ spTopContent[8]?.category?.cat_name_bn }} | {{
                    postCreatedDate(spTopContent[8]?.created_at) }}</NuxtLink>
            <NuxtLink
                :to="getPostUrl(spTopContent[9]?.category?.cat_slug, spTopContent[9]?.subcategory?.subcat_slug, spTopContent[9]?.content_type, spTopContent[9]?.content_id)"
                class="text-sm text-black">{{ spTopContent[9]?.category?.cat_name_bn }} | {{
                    postCreatedDate(spTopContent[9]?.created_at) }}</NuxtLink>
            <NuxtLink
                :to="getPostUrl(spTopContent[10]?.category?.cat_slug, spTopContent[10]?.subcategory?.subcat_slug, spTopContent[10]?.content_type, spTopContent[10]?.content_id)"
                class="text-sm text-black">{{ spTopContent[10]?.category?.cat_name_bn }} | {{
                    postCreatedDate(spTopContent[10]?.created_at) }}</NuxtLink>
        </div>

    </div>



    <div class="mobileSpecialContent block md:hidden special-bottom-content my-6">
        <div class="grid grid-cols-2 gap-4 mb-2">
            <NuxtLink
                :to="getPostUrl(spTopContent[5]?.category?.cat_slug, spTopContent[5]?.subcategory?.subcat_slug, spTopContent[5]?.content_type, spTopContent[5]?.content_id)"
                class="">
                <div class=" overflow-hidden">
                    <nuxt-img loading="lazy"
                        :src="`${siteurl?.site_url}/media/content/images/${spTopContent[5]?.img_bg_path}`"
                        class="mx-auto w-full group-hover:scale-110 duration-300"
                        :placeholder="img(`${siteurl?.site_url}/logo/placeholder.jpg`)" />
                </div>
            </NuxtLink>
            <NuxtLink
                :to="getPostUrl(spTopContent[6]?.category?.cat_slug, spTopContent[6]?.subcategory?.subcat_slug, spTopContent[6]?.content_type, spTopContent[6]?.content_id)">
                <div class=" overflow-hidden">
                    <nuxt-img loading="lazy"
                        :src="`${siteurl?.site_url}/media/content/images/${spTopContent[6]?.img_bg_path}`"
                        class="mx-auto w-full group-hover:scale-110 duration-300"
                        :placeholder="img(`${siteurl?.site_url}/logo/placeholder.jpg`)" />
                </div>
            </NuxtLink>
        </div>
        <div class="grid grid-cols-2 gap-4">
            <NuxtLink
                :to="getPostUrl(spTopContent[5]?.category?.cat_slug, spTopContent[5]?.subcategory?.subcat_slug, spTopContent[5]?.content_type, spTopContent[5]?.content_id)">
                <h4 class=" text-[18px] font-semibold mb-1 group-hover:text-[#ff0000]">{{
                    spTopContent[5]?.content_heading
                }}</h4>
            </NuxtLink>
            <NuxtLink
                :to="getPostUrl(spTopContent[6]?.category?.cat_slug, spTopContent[6]?.subcategory?.subcat_slug, spTopContent[6]?.content_type, spTopContent[6]?.content_id)">
                <h4 class=" text-[18px] font-semibold mb-1 group-hover:text-[#ff0000] ">{{
                    spTopContent[6]?.content_heading
                }}</h4>
            </NuxtLink>
        </div>
        <div class="grid grid-cols-2 gap-4 mb-2">
            <ClientOnly>
                <NuxtLink
                    :to="getPostUrl(spTopContent[5]?.category?.cat_slug, spTopContent[5]?.subcategory?.subcat_slug, spTopContent[5]?.content_type, spTopContent[5]?.content_id)">
                    <div class="text-base font-[300] text-black"
                        v-html="`${spTopContent[5]?.content_details?.substring(0, 90)} ...`"></div>
                </NuxtLink>
            </ClientOnly>
            <ClientOnly>
                <NuxtLink
                    :to="getPostUrl(spTopContent[6]?.category?.cat_slug, spTopContent[6]?.subcategory?.subcat_slug, spTopContent[6]?.content_type, spTopContent[6]?.content_id)">
                    <div class="text-base font-[300] text-black"
                        v-html="`${spTopContent[6]?.content_details?.substring(0, 90)} ...`"></div>
                </NuxtLink>
            </ClientOnly>

        </div>
        <div class="grid grid-cols-2 gap-4">
            <NuxtLink
                :to="getPostUrl(spTopContent[5]?.category?.cat_slug, spTopContent[5]?.subcategory?.subcat_slug, spTopContent[5]?.content_type, spTopContent[5]?.content_id)"
                class="text-sm text-black">{{ spTopContent[5]?.category?.cat_name_bn }} | {{
                    postCreatedDate(spTopContent[5]?.created_at) }}</NuxtLink>
            <NuxtLink
                :to="getPostUrl(spTopContent[6]?.category?.cat_slug, spTopContent[6]?.subcategory?.subcat_slug, spTopContent[6]?.content_type, spTopContent[6]?.content_id)"
                class="text-sm text-black">{{ spTopContent[6]?.category?.cat_name_bn }} | {{
                    postCreatedDate(spTopContent[5]?.created_at) }}</NuxtLink>
        </div>

        <div class="grid grid-cols-2 gap-4 mb-2 mt-4">
            <NuxtLink
                :to="getPostUrl(spTopContent[7]?.category?.cat_slug, spTopContent[7]?.subcategory?.subcat_slug, spTopContent[7]?.content_type, spTopContent[7]?.content_id)"
                class="">
                <div class=" overflow-hidden">
                    <nuxt-img loading="lazy"
                        :src="`${siteurl?.site_url}/media/content/images/${spTopContent[7]?.img_bg_path}`"
                        class="mx-auto w-full group-hover:scale-110 duration-300"
                        :placeholder="img(`${siteurl?.site_url}/logo/placeholder.jpg`)" />
                </div>
            </NuxtLink>
            <NuxtLink
                :to="getPostUrl(spTopContent[8]?.category?.cat_slug, spTopContent[8]?.subcategory?.subcat_slug, spTopContent[8]?.content_type, spTopContent[8]?.content_id)">
                <div class=" overflow-hidden">
                    <nuxt-img loading="lazy"
                        :src="`${siteurl?.site_url}/media/content/images/${spTopContent[8]?.img_bg_path}`"
                        class="mx-auto w-full group-hover:scale-110 duration-300"
                        :placeholder="img(`${siteurl?.site_url}/logo/placeholder.jpg`)" />
                </div>
            </NuxtLink>
        </div>
        <div class="grid grid-cols-2 gap-4">
            <NuxtLink
                :to="getPostUrl(spTopContent[7]?.category?.cat_slug, spTopContent[7]?.subcategory?.subcat_slug, spTopContent[7]?.content_type, spTopContent[7]?.content_id)">
                <h4 class=" text-[18px] font-semibold mb-1 group-hover:text-[#ff0000]">{{
                    spTopContent[7]?.content_heading
                }}</h4>
            </NuxtLink>
            <NuxtLink
                :to="getPostUrl(spTopContent[8]?.category?.cat_slug, spTopContent[8]?.subcategory?.subcat_slug, spTopContent[8]?.content_type, spTopContent[8]?.content_id)">
                <h4 class=" text-[18px] font-semibold mb-1 group-hover:text-[#ff0000] ">{{
                    spTopContent[8]?.content_heading
                }}</h4>
            </NuxtLink>
        </div>
        <div class="grid grid-cols-2 gap-4 mb-2">
            <ClientOnly>
                <NuxtLink
                    :to="getPostUrl(spTopContent[7]?.category?.cat_slug, spTopContent[7]?.subcategory?.subcat_slug, spTopContent[7]?.content_type, spTopContent[7]?.content_id)">
                    <div class="text-base font-[300] text-black"
                        v-html="`${spTopContent[7]?.content_details?.substring(0, 90)} ...`"></div>
                </NuxtLink>
            </ClientOnly>
            <ClientOnly>
                <NuxtLink
                    :to="getPostUrl(spTopContent[8]?.category?.cat_slug, spTopContent[8]?.subcategory?.subcat_slug, spTopContent[8]?.content_type, spTopContent[8]?.content_id)">
                    <div class="text-base font-[300] text-black"
                        v-html="`${spTopContent[8]?.content_details?.substring(0, 90)} ...`"></div>
                </NuxtLink>
            </ClientOnly>
        </div>
        <div class="grid grid-cols-2 gap-4">
            <NuxtLink
                :to="getPostUrl(spTopContent[7]?.category?.cat_slug, spTopContent[7]?.subcategory?.subcat_slug, spTopContent[7]?.content_type, spTopContent[7]?.content_id)"
                class="text-sm text-black">{{ spTopContent[7]?.category?.cat_name_bn }} | {{
                    postCreatedDate(spTopContent[7]?.created_at) }}</NuxtLink>
            <NuxtLink
                :to="getPostUrl(spTopContent[8]?.category?.cat_slug, spTopContent[8]?.subcategory?.subcat_slug, spTopContent[8]?.content_type, spTopContent[8]?.content_id)"
                class="text-sm text-black">{{ spTopContent[8]?.category?.cat_name_bn }} | {{
                    postCreatedDate(spTopContent[8]?.created_at) }}</NuxtLink>
        </div>


        <div class="grid grid-cols-2 gap-4 mb-2 mt-4">
            <NuxtLink
                :to="getPostUrl(spTopContent[9]?.category?.cat_slug, spTopContent[9]?.subcategory?.subcat_slug, spTopContent[9]?.content_type, spTopContent[9]?.content_id)"
                class="">
                <div class=" overflow-hidden">
                    <nuxt-img loading="lazy"
                        :src="`${siteurl?.site_url}/media/content/images/${spTopContent[9]?.img_bg_path}`"
                        class="mx-auto w-full group-hover:scale-110 duration-300"
                        :placeholder="img(`${siteurl?.site_url}/logo/placeholder.jpg`)" />
                </div>
            </NuxtLink>
            <NuxtLink
                :to="getPostUrl(spTopContent[10]?.category?.cat_slug, spTopContent[10]?.subcategory?.subcat_slug, spTopContent[10]?.content_type, spTopContent[10]?.content_id)">
                <div class=" overflow-hidden">
                    <nuxt-img loading="lazy"
                        :src="`${siteurl?.site_url}/media/content/images/${spTopContent[10]?.img_bg_path}`"
                        class="mx-auto w-full group-hover:scale-110 duration-300"
                        :placeholder="img(`${siteurl?.site_url}/logo/placeholder.jpg`)" />
                </div>
            </NuxtLink>
        </div>
        <div class="grid grid-cols-2 gap-4">
            <NuxtLink
                :to="getPostUrl(spTopContent[9]?.category?.cat_slug, spTopContent[9]?.subcategory?.subcat_slug, spTopContent[9]?.content_type, spTopContent[9]?.content_id)">
                <h4 class=" text-[18px] font-semibold mb-1 group-hover:text-[#ff0000]">{{
                    spTopContent[9]?.content_heading
                }}</h4>
            </NuxtLink>
            <NuxtLink
                :to="getPostUrl(spTopContent[10]?.category?.cat_slug, spTopContent[10]?.subcategory?.subcat_slug, spTopContent[10]?.content_type, spTopContent[10]?.content_id)">
                <h4 class=" text-[18px] font-semibold mb-1 group-hover:text-[#ff0000] ">{{
                    spTopContent[10]?.content_heading
                }}</h4>
            </NuxtLink>
        </div>
        <div class="grid grid-cols-2 gap-4 mb-2">
            <ClientOnly>
                <NuxtLink
                    :to="getPostUrl(spTopContent[9]?.category?.cat_slug, spTopContent[9]?.subcategory?.subcat_slug, spTopContent[9]?.content_type, spTopContent[9]?.content_id)">
                    <div class="text-base font-[300] text-black"
                        v-html="`${spTopContent[9]?.content_details?.substring(0, 90)} ...`"></div>
                </NuxtLink>
            </ClientOnly>
            <ClientOnly>
                <NuxtLink
                    :to="getPostUrl(spTopContent[10]?.category?.cat_slug, spTopContent[10]?.subcategory?.subcat_slug, spTopContent[10]?.content_type, spTopContent[10]?.content_id)">
                    <div class="text-base font-[300] text-black"
                        v-html="`${spTopContent[10]?.content_details?.substring(0, 90)} ...`"></div>
                </NuxtLink>
            </ClientOnly>
        </div>
        <div class="grid grid-cols-2 gap-4">
            <NuxtLink
                :to="getPostUrl(spTopContent[9]?.category?.cat_slug, spTopContent[9]?.subcategory?.subcat_slug, spTopContent[9]?.content_type, spTopContent[9]?.content_id)"
                class="text-sm text-black">{{ spTopContent[9]?.category?.cat_name_bn }} | {{
                    postCreatedDate(spTopContent[9]?.created_at) }}</NuxtLink>
            <NuxtLink
                :to="getPostUrl(spTopContent[10]?.category?.cat_slug, spTopContent[10]?.subcategory?.subcat_slug, spTopContent[10]?.content_type, spTopContent[10]?.content_id)"
                class="text-sm text-black">{{ spTopContent[10]?.category?.cat_name_bn }} | {{
                    postCreatedDate(spTopContent[10]?.created_at) }}</NuxtLink>
        </div>

    </div>
</template>

<script setup>
import { postCreatedDate, getPostUrl } from '~/lib/helpers';
const img = useImage()

// Global Special Top Content State Composables
const spTopContent = specialTopContentState()
const siteurl = siteUrlState()

</script>

<style lang="scss" scoped></style>