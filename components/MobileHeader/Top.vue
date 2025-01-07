<template>
    <div>
        <div class=" md:hidden shadow-md fixed bg-white top-0 left-0 right-0 z-[999999]">
            <div class="bg-[#3375af] px-4 text-white flex justify-between items-center py-1">
                <div class="text-xs">
                    <span>{{ EnglishDate() }} | {{ BanglaDate() }}</span>
                </div>
                <span id="realtime" class="text-xs">{{ banglaTime}}</span>
            </div>
            <div class="flex justify-between items-center px-2">
                <!--<div class="flex gap-16 px-2 py-2 items-center justify-center">-->
                <!--    <Icon v-if="!mobileMenuStatus" @click="mobileMenuToggle"-->
                <!--        class="text-3xl cursor-pointer hover:bg-[#f7f7f7]" name="ic:outline-menu" />-->
                <!--    <Icon v-else name="material-symbols:close" @click="mobileMenuToggle"-->
                <!--        class="text-3xl cursor-pointer hover:bg-[#f7f7f7]" />-->
                <!--    <a :href="website_url?.website_url">-->
                <!--        <nuxt-img class="mx-auto" :src="`${siteurl.site_url}/media/common/${headerSiteSettings?.logo}`"-->
                <!--            alt="Dhaka Prokash" />-->
                <!--    </a>-->
                <!--</div>-->



                <div class="flex gap-16 px-2 py-2 items-center justify-between relative w-full">
                    <!-- Left Icon (fixed position) -->
                    <Icon v-if="!mobileMenuStatus" @click="mobileMenuToggle"
                            class="text-3xl cursor-pointer hover:bg-[#f7f7f7]" name="ic:outline-menu" />
                    <Icon v-else name="material-symbols:close" @click="mobileMenuToggle"
                            class="text-3xl cursor-pointer hover:bg-[#f7f7f7]" />

                    <!-- Centered Logo (absolute position) -->
                    <a v-if="siteurl?.site_url" :href="website_url?.website_url" class="absolute left-1/2 transform -translate-x-1/2">
                        <nuxt-img class="mx-auto" :src="`${siteurl.site_url}/media/common/${headerSiteSettings?.logo}`"
                                alt="Dhaka Prokash" />
                    </a>
                </div>



                <!-- <div class="flex gap-2 px-1 text-[12px]">
                    <NuxtLink class="border py-1 px-2 bg-[#124d80] text-white siyamLipiFont" to="/">EN</NuxtLink>
                    <NuxtLink to="/" class="border py-1 bg-[#124d80] px-2 text-white siyamLipiFont">e-P</NuxtLink>
                </div> -->
            </div>

        </div>
        <MobileHeaderDropdown :mobileMenuStatus="mobileMenuStatus" />
        <!-- <MobileHeaderDropdown :mobileMenuStatus="mobileMenuStatus" /> -->
    </div>
</template>

<script setup>
import { BanglaDate, EnglishDate } from '~/lib/helpers';
const website_url = websiteUrlState()
const mobileMenuStatus = mobileMenuState()
const mobileMenuToggle = () => {
    if (mobileMenuStatus.value === true) {
        mobileMenuStatus.value = false
    } else {
        mobileMenuStatus.value = true
    }
}

//========== Real time Status =========== //
// const realTimeStatus = () => {
//     let data = new buetDateConverter().convert("A g:i:s");

//     document.getElementById("realtime").innerHTML = data;
// }
// setInterval(realTimeStatus, 1000)

const banglaTime = useState(() => '');
const {data:btime, refresh} = await useFetch("/api/prismaapi/header/banglatime", {
    method: 'GET'
})

const realTimeStatus = () => {
    refresh()
    banglaTime.value = btime.value
}
setInterval(realTimeStatus, 1000)


//========== Real time Status =========== //

// ==================== Global Site Setting State ====================
const siteurl = siteUrlState()
const headerSiteSettings = sitesettingsState()
// ==================== Global Site Setting State ====================
</script>

<style lang="scss" scoped></style>