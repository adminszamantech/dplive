vba<template>
    <div v-if="data?.homeRightSixAds?.status === 1" class="ad-container">
        <div class="ad-section bg-[#f7f7f7]">
            <a :href="data?.homeRightSixAds?.external_link" target="_blank" rel="nofollow" v-if="data?.homeRightSixAds?.type === 3">
                <img class="mx-auto" :src="`${siteurl.site_url}/media/advertisement/${data?.homeRightSixAds?.desktop_image_path}`"
                    alt="Header Ad" />
            </a>
            <div v-else v-html="data?.homeRightSixAds?.code"></div>
        </div>
    </div>
</template>

<script setup>
const siteurl = siteUrlState()
const data = defineProps(['homeRightSixAds'])

</script>

<style lang="scss" scoped></style>