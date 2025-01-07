vba<template>
    <div v-if="data?.homeRightSevenAds?.status === 1" class="ad-container">
        <div class="ad-section bg-[#f7f7f7]">
            <a :href="data?.homeRightSevenAds?.external_link" target="_blank" rel="nofollow" v-if="data?.homeRightSevenAds?.type === 3">
                <img class="mx-auto" :src="`${siteurl.site_url}/media/advertisement/${data?.homeRightSevenAds?.desktop_image_path}`"
                    alt="Header Ad" />
            </a>
            <div v-else v-html="data?.homeRightSevenAds?.code"></div>
        </div>
    </div>
</template>

<script setup>
const siteurl = siteUrlState()
const data = defineProps(['homeRightSevenAds'])

</script>

<style lang="scss" scoped></style>