<template>
    <div v-if="crimecontents?.length > 0" class="home-crime-category">
        <div class="category-header border-b-[3px] group  border-b-[#3375af] my-3">
            <NuxtLink :to="`/${crimecontents[0]?.cat_slug}`" class="flex gap-3 items-center">
                <span class="w-3 h-3 bg-[#3375af]"></span>
                <h2 class="text-[#3375af] text-[18px] group-hover:text-[#65a1d6] font-semibold">অপরাধ</h2>
            </NuxtLink>
        </div>
        <div class="home-crime-category-except-post flex flex-col">
            <!-- Loop Item -->
            <div class="grid grid-cols-12 gap-4 group h-sports-excpt border-b py-4" v-for="crimecontent in crimecontents"
                :key="crimecontent.content_id">
                <div class=" col-span-5 overflow-hidden">
                    <NuxtLink
                        :to="getPostUrl(crimecontent?.cat_slug, crimecontent?.subcat_slug, crimecontent?.content_type, crimecontent?.content_id)">
                        <nuxt-img loading="lazy"
                            :src="`${siteurl.site_url}/media/content/images/${crimecontent?.img_bg_path}`"
                            class="mx-auto w-full group-hover:scale-110 duration-300"
                            :placeholder="img(`${siteurl?.site_url}/logo/placeholder.jpg`)" />
                    </NuxtLink>
                </div>
                <div class=" col-span-7">
                    <NuxtLink
                        :to="getPostUrl(crimecontent?.cat_slug, crimecontent?.subcat_slug, crimecontent?.content_type, crimecontent?.content_id)"
                        class="flex flex-col gap-2">
                        <h4 class="text-base text-black font-semibold group-hover:text-[#ff0000]">
                            {{ crimecontent?.content_heading }}
                        </h4>
                        <p class="text-sm text-black flex gap-1 items-center">
                            <Icon name="ph:alarm-bold" />
                            <span>
                                {{ postCreatedDate(crimecontent?.created_at) }}
                            </span>
                        </p>
                    </NuxtLink>
                </div>
            </div>
            <!--/ Loop Item -->

        </div>
    </div>
</template>

<script setup>
import { postCreatedDate, getPostUrl } from '~/lib/helpers';
const img = useImage()
const siteurl = siteUrlState()
// ======== Crime Content =============== //
const crimecontents = useState(() => [])
const { data: crmct } = await useFetch("/api/prismaapi/home/crime", {
    method: 'GET',
    // cache: 'force-cache',
})
crimecontents.value = crmct
// ======== Crime Content =============== //


</script>

<style scoped>
.h-sports-excpt:first-child {
    padding-top: 0px
}
</style>