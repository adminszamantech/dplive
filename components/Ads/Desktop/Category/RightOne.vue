<template>
    <div v-if="data?.categoryRightOneAds?.status === 1" class="ad-container">
        <div class="ad-section bg-[#f7f7f7]">
            <a :href="data?.categoryRightOneAds?.external_link" target="_blank" rel="nofollow" v-if="data?.categoryRightOneAds?.type === 3">
                <img class="mx-auto" :src="`${siteurl.site_url}/media/advertisement/${data?.categoryRightOneAds?.desktop_image_path}`"
                    alt="Header Ad" />
            </a>
            <div v-else v-html="data?.categoryRightOneAds?.code"></div>
        </div>
    </div>
</template>

<script setup>
const siteurl = siteUrlState()
const data = defineProps(['categoryRightOneAds'])

</script>

<style lang="scss" scoped></style>