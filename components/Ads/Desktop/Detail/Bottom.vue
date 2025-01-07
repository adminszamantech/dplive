<template>
    <div v-if="data?.DetailBottomAds?.status === 1" class="ad-container">
        <div class="ad-section bg-[#f7f7f7]">
            <a :href="data?.DetailBottomAds?.external_link" target="_blank" rel="nofollow" v-if="data?.DetailBottomAds?.type === 3">
                <img class="mx-auto" :src="`${siteurl.site_url}/media/advertisement/${data?.DetailBottomAds?.desktop_image_path}`"
                    alt="Header Ad" />
            </a>
            <div v-else v-html="data?.DetailBottomAds?.code"></div>
        </div>
    </div>
</template>

<script setup>
const siteurl = siteUrlState()
const data = defineProps(['DetailBottomAds'])

</script>

<style lang="scss" scoped></style>