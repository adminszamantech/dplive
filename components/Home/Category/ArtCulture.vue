<template>
    <div class="home-art-culture-category " v-if="artscontents?.length > 0">
        <div class="category-header border-b-[3px] group border-b-[#3375af] my-3">
            <NuxtLink :to="`/${artscontents[0]?.cat_slug}`" class="flex gap-3 items-center">
                <span class="w-3 h-3 bg-[#3375af]"></span>
                <h2 class="text-[#3375af] text-[18px] group-hover:text-[#65a1d6] font-semibold">শিল্প-সংস্কৃতি</h2>
            </NuxtLink>
        </div>
        <div class="home-int-c-content flex flex-col gap-3">
            <!-- Art Culture Feature Content -->
            <NuxtLink
                :to="getPostUrl(artscontents[0]?.cat_slug, artscontents[0]?.subcat_slug, artscontents[0]?.content_type, artscontents[0]?.content_id)"
                class="flex flex-col gap-2 group border-b pb-1">
                <div class=" overflow-hidden">
                    <nuxt-img loading="lazy"
                        :src="`${siteurl.site_url}/media/content/images/${artscontents[0]?.img_bg_path}`"
                        class="mx-auto w-full group-hover:scale-110 duration-300"
                        :placeholder="img(`${siteurl?.site_url}/logo/placeholder.jpg`)" />
                </div>
                <h3 class="text-[19px] text-black font-semibold group-hover:text-[#ff0000]">
                    {{ artscontents[0]?.content_heading }}
                </h3>
                <p class="text-sm text-black flex gap-1 items-center">
                    <Icon name="ph:alarm-bold" />
                    <span>
                        {{ postCreatedDate(artscontents[0]?.created_at) }}
                    </span>
                </p>
            </NuxtLink>
            <!--/ Art Culture  Feature Content -->

            <div class="h-p-c-excpt flex flex-col">
                <!-- Loop Item -->
                <NuxtLink
                    :to="getPostUrl(artscontent?.cat_slug, artscontent?.subcat_slug, artscontent?.content_type, artscontent?.content_id)"
                    class=" border-b py-3" v-for="artscontent in artscontents.slice(1, 8)" :key="artscontent.content_id">
                    <h4 class="text-base text-black font-semibold hover:text-[#ff0000]">{{ artscontent?.content_heading }}
                    </h4>
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
// ======== Arts Content =============== //
const artscontents = useState(() => [])
const { data: harts } = await useFetch("/api/prismaapi/home/art", {
    method: 'GET',
    // cache: 'force-cache',
})
artscontents.value = harts
// ======== Arts Content =============== //


</script>

<style lang="scss" scoped></style>