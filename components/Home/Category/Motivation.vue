<template>
    <div class="home-motivation-category" v-if="motivationContents?.length > 0">
        <div class="category-header border-b-[3px] group border-b-[#3375af] my-3">
            <NuxtLink :to="`/${motivationContents[0]?.cat_slug}`" class="flex gap-3 items-center">
                <span class="w-3 h-3 bg-[#3375af]"></span>
                <h2 class="text-[#3375af] text-[18px] group-hover:text-[#65a1d6] font-semibold">মোটিভেশন</h2>
            </NuxtLink>
        </div>
        <div class="home-int-c-content flex flex-col gap-3">
            <!-- Motivation Feature Content -->
            <NuxtLink
                :to="getPostUrl(motivationContents[0]?.cat_slug, motivationContents[0]?.subcat_slug, motivationContents[0]?.content_type, motivationContents[0]?.content_id)"
                class="flex flex-col gap-2 group border-b pb-1">
                <div class=" overflow-hidden">
                    <nuxt-img loading="lazy"
                        :src="`${siteurl.site_url}/media/content/images/${motivationContents[0]?.img_bg_path}`"
                        class="mx-auto w-full group-hover:scale-110 duration-300"
                        :placeholder="img(`${siteurl?.site_url}/logo/placeholder.jpg`)" />
                </div>
                <h3 class="text-[19px] text-black font-semibold group-hover:text-[#ff0000]">
                    {{ motivationContents[0]?.content_heading }}
                </h3>
                <!-- <p class="text-sm text-black flex gap-1 items-center">
                    <Icon name="ph:alarm-bold" />
                    <span>
                        {{ postCreatedDate(motivationContents[0]?.created_at) }}
                    </span>
                </p> -->
            </NuxtLink>
            <!--/ Motivation Feature Content -->

            <div class="h-p-c-excpt flex flex-col">
                <!-- Loop Item -->
                <NuxtLink
                    :to="getPostUrl(motivationContent?.cat_slug, motivationContent?.subcat_slug, motivationContent?.content_type, motivationContent?.content_id)"
                    class=" border-b py-3" v-for="motivationContent in motivationContents.slice(1, 5)"
                    :key="motivationContent.content_id">
                    <h4 class="text-base hover:text-[#ff0000] text-black font-semibold">{{
                        motivationContent?.content_heading }}</h4>
                </NuxtLink>
                <!--/ Loop Item -->
            </div>

        </div>
    </div>
</template>

<script setup>
import { postCreatedDate, getPostUrl } from '~/lib/helpers';
const img = useImage()
const siteurl = siteUrlState()
// ======== Motivation Content =============== //
const motivationContents = useState(() => [])
const { data: hmotivation } = await useFetch("/api/prismaapi/home/motivation", {
    method: 'GET',
    // cache: 'force-cache',
})
motivationContents.value = hmotivation
// ======== Motivation Content =============== //

</script>

<style lang="scss" scoped></style>