<template>
    <div v-if="data?.homeMiddleTwoAds?.status === 1" class="ad-container">
        <div class="ad-section bg-[#f7f7f7]">
            <a :href="data?.homeMiddleTwoAds?.external_link" target="_blank" rel="nofollow" v-if="data?.homeMiddleTwoAds?.type === 3">
                <img class="mx-auto" :src="`${siteurl.site_url}/media/advertisement/${data?.homeMiddleTwoAds?.desktop_image_path}`"
                    alt="Header Ad" />
            </a>
            <div v-else v-html="data?.homeMiddleTwoAds?.code"></div>
        </div>
    </div>
</template>

<script setup>
const siteurl = siteUrlState()
const data = defineProps(['homeMiddleTwoAds'])

</script>

<style lang="scss" scoped></style>