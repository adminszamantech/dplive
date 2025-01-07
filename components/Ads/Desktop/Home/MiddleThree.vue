<template>
    <div v-if="data?.homeMiddleThreeAds?.status === 1" class="ad-container">
        <div class="ad-section bg-[#f7f7f7]">
            <a :href="data?.homeMiddleThreeAds?.external_link" target="_blank" rel="nofollow" v-if="data?.homeMiddleThreeAds?.type === 3">
                <img class="mx-auto" :src="`${siteurl.site_url}/media/advertisement/${data?.homeMiddleThreeAds?.desktop_image_path}`"
                    alt="Header Ad" />
            </a>
            <div v-else v-html="data?.homeMiddleThreeAds?.code"></div>
        </div>
    </div>
</template>

<script setup>
const siteurl = siteUrlState()
const data = defineProps(['homeMiddleThreeAds'])

</script>

<style lang="scss" scoped></style>