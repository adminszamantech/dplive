<template>
    <div v-if="data?.homeMiddleSixAds?.status === 1" class="ad-container">
        <div class="ad-section bg-[#f7f7f7]">
            <a :href="data?.homeMiddleSixAds?.external_link" target="_blank" rel="nofollow" v-if="data?.homeMiddleSixAds?.type === 3">
                <img class="mx-auto" :src="`${siteurl.site_url}/media/advertisement/${data?.homeMiddleSixAds?.desktop_image_path}`"
                    alt="Header Ad" />
            </a>
            <div v-else v-html="data?.homeMiddleSixAds?.code"></div>
        </div>
    </div>
</template>

<script setup>
const siteurl = siteUrlState()
const data = defineProps(['homeMiddleSixAds'])

</script>

<style lang="scss" scoped></style>