<template>
    <div v-if="data?.homeMiddleFiveAds?.status === 1" class="ad-container">
        <div class="ad-section bg-[#f7f7f7]">
            <a :href="data?.homeMiddleFiveAds?.external_link" target="_blank" rel="nofollow" v-if="data?.homeMiddleFiveAds?.type === 3">
                <img class="mx-auto" :src="`${siteurl.site_url}/media/advertisement/${data?.homeMiddleFiveAds?.desktop_image_path}`"
                    alt="Header Ad" />
            </a>
            <div v-else v-html="data?.homeMiddleFiveAds?.code"></div>
        </div>
    </div>
</template>

<script setup>
const siteurl = siteUrlState()
const data = defineProps(['homeMiddleFiveAds'])

</script>

<style lang="scss" scoped></style>