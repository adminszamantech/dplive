<template>
    <div v-if="data?.DetailAfterAds?.status === 1" class="ad-container">
        <div class="ad-section bg-[#f7f7f7]">
            <a :href="data?.DetailAfterAds?.external_link" target="_blank" rel="nofollow" v-if="data?.DetailAfterAds?.type === 3">
                <img class="mx-auto" :src="`${siteurl.site_url}/media/advertisement/${data?.DetailAfterAds?.desktop_image_path}`"
                    alt="Header Ad" />
            </a>
            <div v-else v-html="data?.DetailAfterAds?.code"></div>
        </div>
    </div>
</template>

<script setup>
const siteurl = siteUrlState()
const data = defineProps(['DetailAfterAds'])

</script>

<style lang="scss" scoped></style>