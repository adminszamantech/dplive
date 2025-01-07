<template>
    <div class="home-campus-category " v-if="campuses?.length > 0">
        <div class="category-header border-b-[3px] group border-b-[#3375af] my-3">
            <NuxtLink :to="`/${campuses[0]?.cat_slug}`" class="flex gap-3 items-center">
                <span class="w-3 h-3 bg-[#3375af]"></span>
                <h2 class="text-[#3375af] text-[18px] group-hover:text-[#65a1d6] font-semibold">ক্যাম্পাস</h2>
            </NuxtLink>
        </div>
        <div class="home-campus-c-content flex flex-col gap-3">
            <!-- Campus Feature Content -->
            <NuxtLink
                :to="getPostUrl(campuses[0]?.cat_slug, campuses[0]?.subcat_slug, campuses[0]?.content_type, campuses[0]?.content_id)"
                class="flex flex-col gap-2 group border-b pb-1">
                <div class=" overflow-hidden">
                    <nuxt-img loading="lazy" :src="`${siteurl.site_url}/media/content/images/${campuses[0]?.img_bg_path}`"
                        class="mx-auto w-full group-hover:scale-110 duration-300"
                        :placeholder="img(`${siteurl?.site_url}/logo/placeholder.jpg`)" />
                </div>
                <h3 class="text-[19px] text-black font-semibold group-hover:text-[#ff0000]">{{ campuses[0]?.content_heading
                }}</h3>
                <p class="text-sm text-black flex gap-1 items-center">
                    <Icon name="ph:alarm-bold" />
                    <span>
                        {{ postCreatedDate(campuses[0]?.created_at) }}
                    </span>
                </p>
            </NuxtLink>
            <!--/ Campus Feature Content -->

            <div class="h-p-c-excpt flex flex-col">
                <!-- Loop Item -->
                <NuxtLink :to="getPostUrl(campus?.cat_slug, campus?.subcat_slug, campus?.content_type, campus?.content_id)"
                    class=" border-b py-3" v-for="campus in campuses.slice(1, 8)" :key="campus.content_id">
                    <h4 class="text-base text-black font-semibold hover:text-[#ff0000]">{{ campus?.content_heading }}</h4>
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
// ======== Career Content =============== //
const campuses = useState(() => [])
const { data: dcampus } = await useFetch("/api/prismaapi/home/campus", {
    method: 'GET',
    // cache: 'force-cache',

})
campuses.value = dcampus
// ======== Career Content =============== //

</script>

<style lang="scss" scoped></style>