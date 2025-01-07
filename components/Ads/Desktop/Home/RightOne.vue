<template>
    <div v-if="data?.homeRightOneAds?.status === 1" class="ad-container">
        <div class="ad-section bg-[#f7f7f7]">
            <a :href="data?.homeRightOneAds?.external_link" target="_blank" rel="nofollow" v-if="data?.homeRightOneAds?.type === 3">
                <img class="mx-auto" :src="`${siteurl.site_url}/media/advertisement/${data?.homeRightOneAds?.desktop_image_path}`"
                    alt="Header Ad" />
            </a>
            <div v-else v-html="data?.homeRightOneAds?.code"></div>
        </div>
    </div>
</template>

<script setup>
const siteurl = siteUrlState()
const data = defineProps(['homeRightOneAds'])

</script>

<style lang="scss" scoped></style>