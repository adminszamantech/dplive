<template>
    <div v-if="corporateContents?.length > 0" class="home-corporate-category ">
        <div class="category-header border-b-[3px] group border-b-[#3375af] my-3">
            <NuxtLink :to="`/${corporateContents[0]?.cat_slug}`" class="flex gap-3 items-center">
                <span class="w-3 h-3 bg-[#3375af]"></span>
                <h2 class="text-[#3375af] text-[18px] group-hover:text-[#65a1d6] font-semibold">করপোরেট কর্নার</h2>
            </NuxtLink>
        </div>
        <div class="home-int-c-content flex flex-col gap-3">
            <!-- Corporate Feature Content -->
            <NuxtLink
                :to="getPostUrl(corporateContents[0]?.cat_slug, corporateContents[0]?.subcat_slug, corporateContents[0]?.content_type, corporateContents[0]?.content_id)"
                class="flex flex-col gap-2 group border-b pb-1">
                <div class=" overflow-hidden">
                    <nuxt-img loading="lazy"
                        :src="`${siteurl.site_url}/media/content/images/${corporateContents[0]?.img_bg_path}`"
                        class="mx-auto w-full group-hover:scale-110 duration-300"
                        :placeholder="img(`${siteurl?.site_url}/logo/placeholder.jpg`)" />
                </div>
                <h3 class="text-[19px] text-black font-semibold group-hover:text-[#ff0000]">
                    {{ corporateContents[0]?.content_heading }}
                </h3>
                <!-- <span class="text-sm text-black">{{ postCreatedDate(corporateContents[0]?.created_at) }}</span> -->
            </NuxtLink>
            <!--/ Corporate Feature Content -->

            <div class="h-p-c-excpt flex flex-col">
                <!-- Loop Item -->
                <NuxtLink
                    :to="getPostUrl(corporateContent?.cat_slug, corporateContent?.subcat_slug, corporateContent?.content_type, corporateContent?.content_id)"
                    class=" border-b py-3" v-for="corporateContent in corporateContents.slice(1, 5)"
                    :key="corporateContent.content_id">
                    <h4 class="text-base hover:text-[#ff0000] text-black font-semibold">{{ corporateContent?.content_heading
                    }}</h4>
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

// ======== Probash Content =============== //
const corporateContents = useState(() => [])
const { data: hcorporate } = await useFetch("/api/prismaapi/home/corporate", {
    method: 'GET',
    // cache: 'force-cache'
})
corporateContents.value = hcorporate
// ======== Probash Content =============== //

</script>

<style lang="scss" scoped></style>