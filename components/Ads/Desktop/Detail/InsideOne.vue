<template>
    <div v-if="data?.DetailInsideOneAds?.status === 1" class="ad-container">
        <div class="ad-section bg-[#f7f7f7]">
            <a :href="data?.DetailInsideOneAds?.external_link" target="_blank" rel="nofollow" v-if="data?.DetailInsideOneAds?.type === 3">
                <img class="mx-auto" :src="`${siteurl.site_url}/media/advertisement/${data?.DetailInsideOneAds?.desktop_image_path}`"
                    alt="Header Ad" />
            </a>
            <div v-else v-html="data?.DetailInsideOneAds?.code"></div>
        </div>
    </div>
</template>

<script setup>
const siteurl = siteUrlState()
const data = defineProps(['DetailInsideOneAds'])

</script>

<style lang="scss" scoped></style>