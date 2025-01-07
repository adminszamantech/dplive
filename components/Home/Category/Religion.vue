<template>
    <div class="home-religion-category " v-if="religioncontents?.length > 0">
        <div class="category-header border-b-[3px] group border-b-[#3375af] my-3">
            <NuxtLink :to="`/${religioncontents[0]?.cat_slug}`" class="flex gap-3 items-center">
                <span class="w-3 h-3 bg-[#3375af]"></span>
                <h2 class="text-[#3375af] text-[18px] group-hover:text-[#65a1d6] font-semibold">ধর্ম</h2>
            </NuxtLink>
        </div>
        <div class="home-int-c-content flex flex-col gap-3">
            <!-- Religion Feature Content -->
            <NuxtLink
                :to="getPostUrl(religioncontents[0]?.cat_slug, religioncontents[0]?.subcat_slug, religioncontents[0]?.content_type, religioncontents[0]?.content_id)"
                class="flex flex-col gap-2 group border-b pb-1">
                <div class=" overflow-hidden">
                    <nuxt-img loading="lazy"
                        :src="`${siteurl.site_url}/media/content/images/${religioncontents[0]?.img_bg_path}`"
                        class="mx-auto w-full group-hover:scale-110 duration-300"
                        :placeholder="img(`${siteurl?.site_url}/logo/placeholder.jpg`)" />
                </div>
                <h3 class="text-[19px] text-black font-semibold group-hover:text-[#ff0000]">
                    {{ religioncontents[0]?.content_heading }}
                </h3>
                <p class="text-sm text-black flex gap-1 items-center">
                    <Icon name="ph:alarm-bold" />
                    <span>
                        {{ postCreatedDate(religioncontents[0]?.created_at) }}
                    </span>
                </p>
            </NuxtLink>
            <!--/ Religion Feature Content -->

            <div class="h-p-c-excpt flex flex-col">
                <!-- Loop Item -->
                <NuxtLink
                    :to="getPostUrl(religioncontent?.cat_slug, religioncontent?.subcat_slug, religioncontent?.content_type, religioncontent?.content_id)"
                    class=" border-b py-3" v-for="religioncontent in religioncontents.slice(1, 5)"
                    :key="religioncontent.content_id">
                    <h4 class="text-base hover:text-[#ff0000] text-black font-semibold">{{ religioncontent?.content_heading
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
const nuxtApp = useNuxtApp()
// ======== Religion Content =============== //
const religioncontents = useState(() => [])
const { data: hreligion } = await useFetch("/api/prismaapi/home/religion", {
    method: 'GET',
    // cache: 'force-cache',
})
religioncontents.value = hreligion
// ======== Religion Content =============== //

</script>

<style lang="scss" scoped></style>