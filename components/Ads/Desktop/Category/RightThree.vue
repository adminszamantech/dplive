<template>
    <div v-if="data?.categoryRightThreeAds?.status === 1" class="ad-container">
        <div class="ad-section bg-[#f7f7f7]">
            <a :href="data?.categoryRightThreeAds?.external_link" target="_blank" rel="nofollow" v-if="data?.categoryRightThreeAds?.type === 3">
                <img class="mx-auto" :src="`${siteurl.site_url}/media/advertisement/${data?.categoryRightThreeAds?.desktop_image_path}`"
                    alt="Header Ad" />
            </a>
            <div v-else v-html="data?.categoryRightThreeAds?.code"></div>
        </div>
    </div>
</template>

<script setup>
const siteurl = siteUrlState()
const data = defineProps(['categoryRightThreeAds'])

</script>

<style lang="scss" scoped></style>