<template>
    <div class="home-sports-category py-4" v-if="sportscontent?.length > 0">
        <div class="category-header border-b-4 border-b-[#3375af] my-3">
            <NuxtLink :to="`/${sportscontent[0]?.cat_slug}`" class="flex gap-3 items-center">
                <span class="w-3 h-3 bg-[#3375af]"></span>
                <h2 class="text-[#3375af] text-[18px] font-semibold">খেলা</h2>
            </NuxtLink>
        </div>
        <div class=" grid grid-cols-12 gap-6 mt-4">
            <div class=" col-span-12 md:col-span-4">
                <div class="flex flex-col gap-3">
                    <NuxtLink v-for="(leftsport, lidx) in sportscontent?.slice(1, 4)" :key="lidx"
                        :to="getPostUrl(leftsport?.cat_slug, leftsport?.subcat_slug, leftsport?.content_type, leftsport?.content_id)"
                        class="grid grid-cols-2 gap-2 group">
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
                </div>
            </div>
            <div class="col-span-12 md:col-span-4">
                <NuxtLink
                    :to="getPostUrl(sportscontent[0]?.cat_slug, sportscontent[0]?.subcat_slug, sportscontent[0]?.content_type, sportscontent[0]?.content_id)"
                    class="flex flex-col gap-2 group">
                    <div class=" overflow-hidden">
                        <nuxt-img loading="lazy"
                            :src="`${siteUrl.site_url}/media/content/images/${sportscontent[0]?.img_bg_path}`"
                            class="mx-auto w-full group-hover:scale-110 duration-300"
                            :placeholder="img(`${siteUrl.site_url}/media/common/logo1672518180.png`, { height: 300 })" />
                    </div>
                    <div class="flex flex-col">
                        <h3 class="text-[25px] group-hover:text-[#ff0000] font-semibold">
                            {{ sportscontent[0]?.content_heading }}</h3>
                        <ClientOnly>
                            <div class="text-base font-[300] text-black" v-html="`${sportscontent[0]?.content_details?.substring(0,
                                155)} ...`"></div>
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
            <div class="col-span-12 md:col-span-4">
                <div class="flex flex-col gap-3">
                    <NuxtLink v-for="(rtsport, rtidx) in sportscontent?.slice(4, 7)" :key="rtidx"
                        :to="getPostUrl(rtsport?.cat_slug, rtsport?.subcat_slug, rtsport?.content_type, rtsport?.content_id)"
                        class="grid grid-cols-2 gap-2 group">
                        <div class="flex flex-col gap-2">
                            <h3 class="text-base group-hover:text-[#ff0000] font-semibold">
                                {{ rtsport?.content_heading }}</h3>
                            <p class="text-sm text-black mt-1 flex gap-1 items-center">
                                <Icon name="ph:alarm-bold" />
                                <span>
                                    {{ postCreatedDate(rtsport?.created_at) }}
                                </span>
                            </p>
                        </div>
                        <div class=" overflow-hidden">
                            <nuxt-img loading="lazy"
                                :src="`${siteUrl.site_url}/media/content/images/${rtsport?.img_bg_path}`"
                                class="mx-auto w-full group-hover:scale-110 duration-300"
                                :placeholder="img(`${siteUrl.site_url}/media/common/logo1672518180.png`, { height: 300 })" />
                        </div>
                    </NuxtLink>

                </div>
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

