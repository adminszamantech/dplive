<template>
    <div class="bg-white" id="darkMode">
        <HeaderDateTop />
        <div class="max-w-[1280px] mx-auto px-4 py-6 bg-white" id="darkMode">
            <div :class="` hidden md:block `">
                <!--flex justify-between gap-10-->
                <div class="header_logo flex justify-between gap-10" id="darkMode">
                    <!--<div>-->
                    <!--    <img class="mx-auto w-[350px] h-[80px]" src="https://szamantech.com/assets/img/logo-banner.gif" alt="banner"/>-->
                    <!--</div>-->
                    <h1 class="w-[400px] mx-auto">
                        <a :href="website_url?.website_url">
                            <nuxt-img class="mx-auto" width="350" :src="`${siteurl.site_url}/media/common/${headerSiteSettings?.logo}`" alt="Dhaka Prokash" />
                        </a>
                    </h1>
                    <!--<div>-->
                    <!--    <img class="mx-auto w-[350px] h-[80px]" src="https://szamantech.com/assets/img/logo-banner.gif" alt="banner"/>-->
                    <!--</div>-->
                </div>
                <HeaderDesktopSideMenu :desktopMenuStatus="desktopMenuStatus" />
            </div>

        </div>
    </div>
</template>

<script setup>


const { scrollDown, counter } = defineProps(['scrollDown', 'LogoHeaderScollUp'])

// ================ Get Bangla Date ============== //
const getDate = new Intl.DateTimeFormat('bn-bd', { weekday: 'long', year: 'numeric', month: 'long', day: "numeric" })
const todayDate = getDate.format(new Date())
// ================ Get Bangla Date ============== //
const img = useImage()
const website_url = websiteUrlState()
// ===== Search Box ==== //
const keyword = useState(() => '');
const searchPageRedirect = () => {
    if (keyword.value !== '') {
        // globalKeyword.value = keyword.value
        navigateTo(`/search?q=${keyword.value}`)
        keyword.value = ''
    } else {
        alert('Please type something to search!')
    }
}
// ===== Search Box ==== //

// ========== Desktop Sidebar menu Action Handler ============== //
const desktopMenuStatus = desktopMenuState()
const desktopMenuOpenHandler = () => {
    desktopMenuStatus.value = true
}
const desktopMenuCloseHandler = () => {
    desktopMenuStatus.value = false
}
// ========== Desktop Sidebar menu Action Handler ============== //

const searchStatus = ref(false)
const searchBoxHandler = () => {
    if (searchStatus.value === true) {
        searchStatus.value = false
        keyword.value = ''
    } else {
        searchStatus.value = true
    }
}

// ==================== Global Site Setting State ====================
const siteurl = siteUrlState()
const headerSiteSettings = sitesettingsState()
// ==================== Logo ====================
</script>

<style lang="scss" scoped></style>