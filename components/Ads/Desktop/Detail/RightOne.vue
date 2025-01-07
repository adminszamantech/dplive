<template>
    <div v-if="data?.DetailRightOneAds?.status === 1" class="ad-container">
        <div class="ad-section bg-[#f7f7f7]">
            <a :href="data?.DetailRightOneAds?.external_link" target="_blank" rel="nofollow" v-if="data?.DetailRightOneAds?.type === 3">
                <img class="mx-auto" :src="`${siteurl.site_url}/media/advertisement/${data?.DetailRightOneAds?.desktop_image_path}`"
                    alt="Header Ad" />
            </a>
            <div v-else v-html="data?.DetailRightOneAds?.code"></div>
        </div>
    </div>
</template>

<script setup>
const siteurl = siteUrlState()
const data = defineProps(['DetailRightOneAds'])

</script>

<style lang="scss" scoped></style>