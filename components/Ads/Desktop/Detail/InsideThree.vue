<template>
    <div v-if="data?.DetailInsideThreeAds?.status === 1" class="ad-container">
        <div class="ad-section bg-[#f7f7f7]">
            <a :href="data?.DetailInsideThreeAds?.external_link" target="_blank" rel="nofollow" v-if="data?.DetailInsideThreeAds?.type === 3">
                <img class="mx-auto" :src="`${siteurl.site_url}/media/advertisement/${data?.DetailInsideThreeAds?.desktop_image_path}`"
                    alt="Header Ad" />
            </a>
            <div v-else v-html="data?.DetailInsideThreeAds?.code"></div>
        </div>
    </div>
</template>

<script setup>
const siteurl = siteUrlState()
const data = defineProps(['DetailInsideThreeAds'])

</script>

<style lang="scss" scoped></style>