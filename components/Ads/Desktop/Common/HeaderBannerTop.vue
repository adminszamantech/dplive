<template>
    <div v-if="data?.topBannerAd?.status === 1" class="ad-container py-2 border-b ">
        <div class="ad-section bg-[#f7f7f7]">
            <a :href="data?.topBannerAd?.external_link" target="_blank" rel="nofollow" v-if="data?.topBannerAd?.type === 3">
                <img class="mx-auto" :src="`${siteurl.site_url}/media/advertisement/${data?.topBannerAd?.desktop_image_path}`"
                    alt="Header Ad" />
            </a>
            <div v-else v-html="data?.topBannerAd?.code"></div>
        </div>
    </div>
</template>

<script setup>
const siteurl = siteUrlState()
const data = defineProps(['topBannerAd'])

</script>

<style lang="scss" scoped></style>