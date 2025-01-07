<template>
    <div v-if="data?.homeRightThreeAds?.status === 1" class="ad-container">
        <div class="ad-section bg-[#f7f7f7]">
            <a :href="data?.homeRightThreeAds?.external_link" target="_blank" rel="nofollow" v-if="data?.homeRightThreeAds?.type === 3">
                <img class="mx-auto" :src="`${siteurl.site_url}/media/advertisement/${data?.homeRightThreeAds?.desktop_image_path}`"
                    alt="Header Ad" />
                <!--<img class="mx-auto" src="https://szamantech.com/assets/img/3rd-borsoborti-sidebar.png"-->
                <!--    alt="Header Ad" />-->
            </a>
            <div v-else v-html="data?.homeRightThreeAds?.code"></div>
        </div>
    </div>
</template>

<script setup>
const siteurl = siteUrlState()
const data = defineProps(['homeRightThreeAds'])

</script>

<style lang="scss" scoped></style>