<template>
    <div v-if="data?.categoryBottomAds?.status === 1" class="ad-container">
        <div class="ad-section bg-[#f7f7f7]">
            <a :href="data?.categoryBottomAds?.external_link" target="_blank" rel="nofollow" v-if="data?.categoryBottomAds?.type === 3">
                <img class="mx-auto" :src="`${siteurl.site_url}/media/advertisement/${data?.categoryBottomAds?.desktop_image_path}`"
                    alt="Header Ad" />
            </a>
            <div v-else v-html="data?.categoryBottomAds?.code"></div>
        </div>
    </div>
</template>

<script setup>
const siteurl = siteUrlState()
const data = defineProps(['categoryBottomAds'])

</script>

<style lang="scss" scoped></style>