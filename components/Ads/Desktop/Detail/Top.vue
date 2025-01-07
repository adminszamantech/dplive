<template>
    <div v-if="data?.DetailTopAds?.status === 1" class="ad-container">
        <div class="ad-section bg-[#f7f7f7]">
            <a :href="data?.DetailTopAds?.external_link" target="_blank" rel="nofollow" v-if="data?.DetailTopAds?.type === 3">
                <img class="mx-auto" :src="`${siteurl.site_url}/media/advertisement/${data?.DetailTopAds?.desktop_image_path}`"
                    alt="Header Ad" />
            </a>
            <div v-else v-html="data?.DetailTopAds?.code"></div>
        </div>
    </div>
</template>

<script setup>
const siteurl = siteUrlState()
const data = defineProps(['DetailTopAds'])

</script>

<style lang="scss" scoped></style>