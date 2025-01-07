<template>
    <div :class="`${bottomAdsBox ? '-bottom-[100px] left-0 right-0' : 'bottom-0 left-0 right-0'} fixed duration-700`">
        <div class="bg-[#eee] h-[100px] flex flex-col justify-center items-center relative">
            <div @click="bottomAdsToggle"
                class="bg-[#eee] w-8 h-8 px-2 absolute right-0 -top-6 rounded-l-lg cursor-pointer">
                <Icon name="material-symbols:close" />
            </div>
            <div v-if="footerAds?.status === 1" class="ad-container py-2 border-b ">
                <div class="ad-section bg-[#f7f7f7]">
                    <a :href="footerAds?.external_link" target="_blank" rel="nofollow"
                        v-if="footerAds?.type === 3">
                        <img class="mx-auto"
                            :src="`${siteurl.site_url}/media/advertisement/${footerAds?.desktop_image_path}`"
                            alt="Footer Ad" />
                    </a>
                    <div v-else v-html="footerAds?.code"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const siteurl = siteUrlState()
const bottomAdsBox = ref(false)
const bottomAdsToggle = () => {
    if (bottomAdsBox.value === true) {
        bottomAdsBox.value = false

    } else {
        bottomAdsBox.value = true

    }
}

const { adsBottomStatus, footerAds } = defineProps(['adsBottomStatus', 'footerAds'])

</script>

<style lang="scss" scoped></style>