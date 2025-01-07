<template>
    <div v-if="data?.homeRightFourAds?.status === 1" class="ad-container">
        <div class="ad-section bg-[#f7f7f7]">
            <a :href="data?.homeRightFourAds?.external_link" target="_blank" rel="nofollow" v-if="data?.homeRightFourAds?.type === 3">
                <img class="mx-auto" :src="`${siteurl.site_url}/media/advertisement/${data?.homeRightFourAds?.desktop_image_path}`"
                    alt="Header Ad" />
            </a>
            <div v-else v-html="data?.homeRightFourAds?.code"></div>
        </div>
    </div>
</template>

<script setup>
const siteurl = siteUrlState()
const data = defineProps(['homeRightFourAds'])

</script>

<style lang="scss" scoped></style>