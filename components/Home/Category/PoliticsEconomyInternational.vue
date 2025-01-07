<template>
    <div class="grid grid-cols-12 gap-4 py-4">
        <div v-if="politics?.length > 0" class=" col-span-12 md:col-span-4">
            <div class="home-politic-category ">
                <div class="category-header border-b-[3px] group border-b-[#3375af] my-3">
                    <NuxtLink :to="`/${politics[0]?.cat_slug}`" class="flex gap-3 items-center">
                        <span class="w-3 h-3 bg-[#3375af] "></span>
                        <h2 class="text-[#3375af] group-hover:text-[#65a1d6] text-[18px] font-semibold">রাজনীতি</h2>

                    </NuxtLink>
                </div>
                <div class="home-p-c-ontent flex flex-col gap-3">
                    <!-- Politic Feature Content -->
                    <NuxtLink
                        :to="getPostUrl(politics[0]?.cat_slug, politics[0]?.subcat_slug, politics[0]?.content_type, politics[0]?.content_id)"
                        class="flex flex-col gap-2 group border-b pb-1">
                        <div class=" overflow-hidden">
                            <nuxt-img loading="lazy"
                                :src="`${siteurl.site_url}/media/content/images/${politics[0]?.img_bg_path}`"
                                class="mx-auto w-full group-hover:scale-110 duration-300"
                                :placeholder="img(`${siteurl?.site_url}/logo/placeholder.jpg`)" />
                        </div>
                        <h3 class="text-[19px] text-black font-semibold group-hover:text-[#ff0000]">{{
                            politics[0]?.content_heading }}
                        </h3>
                        <p class="text-sm text-black flex gap-1 items-center">
                            <Icon name="ph:alarm-bold" />
                            <span>
                                {{ postCreatedDate(politics[0]?.created_at) }}
                            </span>
                        </p>
                    </NuxtLink>
                    <!--/ Politic Feature Content -->

                    <div class="h-p-c-excpt flex flex-col">
                        <!-- Loop Item -->
                        <NuxtLink
                            :to="getPostUrl(hpolitic?.cat_slug, hpolitic?.subcat_slug, hpolitic?.content_type, hpolitic?.content_id)"
                            class=" border-b py-3" v-for="hpolitic in politics.slice(1, 6)" :key="hpolitic.content_id">
                            <h4 class="text-base text-black font-semibold hover:text-[#ff0000]">{{ hpolitic.content_heading
                            }}</h4>
                        </NuxtLink>
                        <!--/ Loop Item -->

                    </div>

                </div>
            </div>
        </div>
        <div class=" col-span-12 md:col-span-4">
            <div class="home-economy-category" v-if="economycontent?.length > 0">
                <div class="category-header border-b-[3px] group border-b-[#3375af] my-3">
                    <NuxtLink :to="`/${economycontent[0]?.cat_slug}`" class="flex gap-3 items-center">
                        <span class="w-3 h-3 bg-[#3375af]"></span>
                        <h2 class="text-[#3375af] text-[18px] group-hover:text-[#65a1d6] font-semibold">অর্থনীতি</h2>
                    </NuxtLink>
                </div>
                <div class="home-econ-c-ontent flex flex-col gap-3">
                    <!-- Economy Feature Content -->
                    <NuxtLink
                        :to="getPostUrl(economycontent[0]?.cat_slug, economycontent[0]?.subcat_slug, economycontent[0]?.content_type, economycontent[0]?.content_id)"
                        class="flex flex-col gap-2 group border-b pb-1">
                        <div class=" overflow-hidden">
                            <nuxt-img loading="lazy"
                                :src="`${siteurl.site_url}/media/content/images/${economycontent[0]?.img_bg_path}`"
                                class="mx-auto w-full group-hover:scale-110 duration-300"
                                :placeholder="img(`${siteurl?.site_url}/logo/placeholder.jpg`)" />
                        </div>
                        <h3 class="text-[19px] text-black font-semibold group-hover:text-[#ff0000]">{{
                            economycontent[0]?.content_heading }}</h3>
                         <p class="text-sm text-black flex gap-1 items-center">
                            <Icon name="ph:alarm-bold" />
                            <span>
                                {{ postCreatedDate(economycontent[0]?.created_at) }}
                            </span>
                        </p>
                    </NuxtLink>
                    <!--/ Economy Feature Content -->

                    <div class="h-p-c-excpt flex flex-col">
                        <!-- Loop Item -->
                        <NuxtLink
                            :to="getPostUrl(heconmy?.cat_slug, heconmy?.subcat_slug, heconmy?.content_type, heconmy?.content_id)"
                            class=" border-b py-3" v-for="heconmy in economycontent.slice(1, 6)" :key="heconmy.content_id">
                            <h4 class="text-base text-black font-semibold hover:text-[#ff0000]">{{ heconmy.content_heading
                            }}</h4>
                        </NuxtLink>
                        <!--/ Loop Item -->

                    </div>

                </div>
            </div>
        </div>
        <div class=" col-span-12 md:col-span-4">
            <div class="home-international-category " v-if="internationalcontent?.length > 0">
                <div class="category-header border-b-[3px] group border-b-[#3375af] my-3">
                    <NuxtLink :to="`/${internationalcontent[0]?.cat_slug}`" class="flex gap-3 items-center">
                        <span class="w-3 h-3 bg-[#3375af]"></span>
                        <h2 class="text-[#3375af] text-[18px] group-hover:text-[#65a1d6] font-semibold">সারাবিশ্ব</h2>
                    </NuxtLink>
                </div>
                <div class="home-int-c-content flex flex-col gap-3">
                    <!-- International Feature Content -->
                    <NuxtLink
                        :to="getPostUrl(internationalcontent[0]?.cat_slug, internationalcontent[0]?.subcat_slug, internationalcontent[0]?.content_type, internationalcontent[0]?.content_id)"
                        class="flex flex-col gap-2 group border-b pb-1">
                        <div class=" overflow-hidden">
                            <nuxt-img loading="lazy"
                                :src="`${siteurl.site_url}/media/content/images/${internationalcontent[0]?.img_bg_path}`"
                                class="mx-auto w-full group-hover:scale-110 duration-300"
                                :placeholder="img(`${siteurl?.site_url}/logo/placeholder.jpg`)" />
                        </div>
                        <h3 class="text-[19px] text-black font-semibold group-hover:text-[#ff0000]">{{
                            internationalcontent[0]?.content_heading }}</h3>
                        <!-- <span class="text-sm text-black">{{ postCreatedDate(internationalcontent[0]?.created_at) }}</span> -->
                        <p class="text-sm text-black flex gap-1 items-center">
                            <Icon name="ph:alarm-bold" />
                            <span>
                                {{ postCreatedDate(internationalcontent[0]?.created_at) }}
                            </span>
                        </p>

                    </NuxtLink>
                    <!--/ International Feature Content -->

                    <div class="h-p-c-excpt flex flex-col">
                        <!-- Loop Item -->
                        <NuxtLink
                            :to="getPostUrl(hinternatcon?.cat_slug, hinternatcon?.subcat_slug, hinternatcon?.content_type, hinternatcon?.content_id)"
                            class=" border-b py-3" v-for="hinternatcon in internationalcontent.slice(1, 6)"
                            :key="hinternatcon.content_id">
                            <h4 class="text-base font-semibold hover:text-[#ff0000] text-black">{{
                                hinternatcon.content_heading }}
                            </h4>
                        </NuxtLink>
                        <!--/ Loop Item -->
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { postCreatedDate, getPostUrl } from '~/lib/helpers';
const img = useImage()
const siteurl = siteUrlState()

// ======== Politics Content =============== //
const politics = useState(() => [])
const { data: homePoliticsss } = await useFetch("/api/prismaapi/home/politics", {
    method: 'GET',
    // cache: 'force-cache'

})
politics.value = homePoliticsss.value
// ======== Politics Content =============== //

// ======== Economy Content =============== //
const economycontent = useState(() => [])
const { data: econssssssss } = await useFetch("/api/prismaapi/home/economy", {
    method: 'GET',
    // cache: 'force-cache'

})
economycontent.value = econssssssss.value
// ======== Economy Content =============== //

// ======== International Content =============== //
const internationalcontent = useState(() => [])
const { data: intntnalsssss } = await useFetch("/api/prismaapi/home/international", {
    method: 'GET',
    // cache: 'force-cache'
})
internationalcontent.value = intntnalsssss.value
// ======== International Content =============== //




</script>

<style lang="scss" scoped></style>