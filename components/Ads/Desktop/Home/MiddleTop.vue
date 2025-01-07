<template>
    <div v-if="data?.homeMiddleAds?.status === 1" class="ad-container">
        <div class="ad-section bg-[#f7f7f7]">
            <a :href="data?.homeMiddleAds?.external_link" target="_blank" rel="nofollow" v-if="data?.homeMiddleAds?.type === 3">
                <img class="mx-auto" :src="`${siteurl.site_url}/media/advertisement/${data?.homeMiddleAds?.desktop_image_path}`"
                    alt="Header Ad" />
            </a>
            <div v-else v-html="data?.homeMiddleAds?.code"></div>
        </div>
    </div>
</template>

<script setup>
const siteurl = siteUrlState()
const data = defineProps(['homeMiddleAds'])

</script>

<style lang="scss" scoped></style>