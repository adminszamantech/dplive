<template>
    <div v-if="data?.DetailRightTwoAds?.status === 1" class="ad-container">
        <div class="ad-section bg-[#f7f7f7]">
            <a :href="data?.DetailRightTwoAds?.external_link" target="_blank" rel="nofollow" v-if="data?.DetailRightTwoAds?.type === 3">
                <img class="mx-auto" :src="`${siteurl.site_url}/media/advertisement/${data?.DetailRightTwoAds?.desktop_image_path}`"
                    alt="Header Ad" />
            </a>
            <div v-else v-html="data?.DetailRightTwoAds?.code"></div>
        </div>
    </div>
</template>

<script setup>
const siteurl = siteUrlState()
const data = defineProps(['DetailRightTwoAds'])

</script>

<style lang="scss" scoped></style>