<template>
    <div v-if="data?.homeMiddleEightAds?.status === 1" class="ad-container">
        <div class="ad-section bg-[#f7f7f7]">
            <a :href="data?.homeMiddleEightAds?.external_link" target="_blank" rel="nofollow" v-if="data?.homeMiddleEightAds?.type === 3">
                <img class="mx-auto" :src="`${siteurl.site_url}/media/advertisement/${data?.homeMiddleEightAds?.desktop_image_path}`"
                    alt="Header Ad" />
            </a>
            <div v-else v-html="data?.homeMiddleEightAds?.code"></div>
        </div>
    </div>
</template>

<script setup>
const siteurl = siteUrlState()
const data = defineProps(['homeMiddleEightAds'])

</script>

<style lang="scss" scoped></style>