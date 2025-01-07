<template>
    <div v-if="data?.DetailRightThreeAds?.status === 1" class="ad-container">
        <div class="ad-section bg-[#f7f7f7]">
            <a :href="data?.DetailRightThreeAds?.external_link" target="_blank" rel="nofollow" v-if="data?.DetailRightThreeAds?.type === 3">
                <img class="mx-auto" :src="`${siteurl.site_url}/media/advertisement/${data?.DetailRightThreeAds?.desktop_image_path}`"
                    alt="Header Ad" />
            </a>
            <div v-else v-html="data?.DetailRightThreeAds?.code"></div>
        </div>
    </div>
</template>

<script setup>
const siteurl = siteUrlState()
const data = defineProps(['DetailRightThreeAds'])

</script>

<style lang="scss" scoped></style>