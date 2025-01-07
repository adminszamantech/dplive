<template>
    <div v-if="data?.homeRightFiveAds?.status === 1" class="ad-container">
        <div class="ad-section bg-[#f7f7f7]">
            <a :href="data?.homeRightFiveAds?.external_link" target="_blank" rel="nofollow" v-if="data?.homeRightFiveAds?.type === 3">
                <img class="mx-auto" :src="`${siteurl.site_url}/media/advertisement/${data?.homeRightFiveAds?.desktop_image_path}`"
                    alt="Header Ad" />
            </a>
            <div v-else v-html="data?.homeRightFiveAds?.code"></div>
        </div>
    </div>
</template>

<script setup>
const siteurl = siteUrlState()
const data = defineProps(['homeRightFiveAds'])

</script>

<style lang="scss" scoped></style>