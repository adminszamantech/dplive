<template>
    <div v-if="data?.DetailInsideTwoAds?.status === 1" class="ad-container">
        <div class="ad-section bg-[#f7f7f7]">
            <a :href="data?.DetailInsideTwoAds?.external_link" target="_blank" rel="nofollow" v-if="data?.DetailInsideTwoAds?.type === 3">
                <img class="mx-auto" :src="`${siteurl.site_url}/media/advertisement/${data?.DetailInsideTwoAds?.desktop_image_path}`"
                    alt="Header Ad" />
            </a>
            <div v-else v-html="data?.DetailInsideTwoAds?.code"></div>
        </div>
    </div>
</template>

<script setup>
const siteurl = siteUrlState()
const data = defineProps(['DetailInsideTwoAds'])

</script>

<style lang="scss" scoped></style>