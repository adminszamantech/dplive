<template>
    <div v-if="data?.categoryRightTwoAds?.status === 1" class="ad-container">
        <div class="ad-section bg-[#f7f7f7]">
            <a :href="data?.categoryRightTwoAds?.external_link" target="_blank" rel="nofollow" v-if="data?.categoryRightTwoAds?.type === 3">
                <img class="mx-auto" :src="`${siteurl.site_url}/media/advertisement/${data?.categoryRightTwoAds?.desktop_image_path}`"
                    alt="Header Ad" />
            </a>
            <div v-else v-html="data?.categoryRightTwoAds?.code"></div>
        </div>
    </div>
</template>

<script setup>
const siteurl = siteUrlState()
const data = defineProps(['categoryRightTwoAds'])

</script>

<style lang="scss" scoped></style>