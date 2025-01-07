<template>
    <div v-if="data?.homeMiddleSevenAds?.status === 1" class="ad-container">
        <div class="ad-section bg-[#f7f7f7]">
            <a :href="data?.homeMiddleSevenAds?.external_link" target="_blank" rel="nofollow" v-if="data?.homeMiddleSevenAds?.type === 3">
                <img class="mx-auto" :src="`${siteurl.site_url}/media/advertisement/${data?.homeMiddleSevenAds?.desktop_image_path}`"
                    alt="Header Ad" />
            </a>
            <div v-else v-html="data?.homeMiddleSevenAds?.code"></div>
        </div>
    </div>
</template>

<script setup>
const siteurl = siteUrlState()
const data = defineProps(['homeMiddleSevenAds'])

</script>

<style lang="scss" scoped></style>