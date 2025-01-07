<template>
    <div v-if="data?.homeRightTwoAds?.status === 1" class="ad-container">
        <div class="ad-section bg-[#f7f7f7]">
            <a :href="data?.homeRightTwoAds?.external_link" target="_blank" rel="nofollow" v-if="data?.homeRightTwoAds?.type === 3">
                <img class="mx-auto" :src="`${siteurl.site_url}/media/advertisement/${data?.homeRightTwoAds?.desktop_image_path}`"
                    alt="Header Ad" />
            </a>
            <div v-else v-html="data?.homeRightTwoAds?.code"></div>
        </div>
    </div>
</template>

<script setup>
const siteurl = siteUrlState()
const data = defineProps(['homeRightTwoAds'])

</script>

<style lang="scss" scoped></style>