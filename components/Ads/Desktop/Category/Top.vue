<template>
    <div v-if="data?.categoryTopAds?.status === 1" class="ad-container">
        <div class="ad-section bg-[#f7f7f7]">
            <a :href="data?.categoryTopAds?.external_link" target="_blank" rel="nofollow" v-if="data?.categoryTopAds?.type === 3">
                <img class="mx-auto" :src="`${siteurl.site_url}/media/advertisement/${data?.categoryTopAds?.desktop_image_path}`"
                    alt="Header Ad" />
            </a>
            <div v-else v-html="data?.categoryTopAds?.code"></div>
        </div>
    </div>
</template>

<script setup>
const siteurl = siteUrlState()
const data = defineProps(['categoryTopAds'])

</script>

<style lang="scss" scoped></style>