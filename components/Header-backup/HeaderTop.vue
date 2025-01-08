<template>
    <div class="bg-white py-4">
        <div class="max-w-[1280px] mx-auto px-4 bg-white">
            <div :class="` hidden md:grid grid-cols-3  bg-white justify-between items-center `">
                <div class="flex gap-3 flex-col">
                    <div class="flex gap-3 items-center h-8">
                        <div>
                            <Icon @click="desktopMenuOpenHandler" class="text-3xl cursor-pointer hover:bg-[#f7f7f7]"
                                name="ic:outline-menu" />
                            <!-- <Icon v-else @click="desktopMenuCloseHandler" name="material-symbols:close" class="text-3xl cursor-pointer hover:bg-[#f7f7f7]" /> -->
                        </div>
                        <div v-if="!searchStatus">
                            <Icon @click="searchBoxHandler" class="text-2xl cursor-pointer" name="tabler:search" />
                        </div>
                        <div v-else :class="` flex items-center duration-500`">
                            <input type="text" placeholder="খুঁজুন" v-model="keyword"
                                class=" focus:outline-none border px-2 py-2">
                            <div @click="searchPageRedirect"
                                class=" bg-gray-200 px-2 py-2  cursor-pointer hover:bg-[#3375af] group">
                                <Icon class="text-2xl group-hover:text-white" name="tabler:search" />
                            </div>
                            <div @click="searchBoxHandler"
                                class=" bg-gray-200 px-2 py-2 border-l border-l-gray-400 cursor-pointer hover:bg-red-600 group">
                                <Icon name="material-symbols:close" class="text-2xl group-hover:text-white" />
                            </div>
                        </div>
                    </div>
                    <div class="today_date text-base text-black">

                        {{ todayDate }}

                    </div>
                </div>
                <div class="header_logo">
                    <!-- <nuxt-img class="mx-auto" src="/assets/img/logo.png" height="56" alt="Dhaka Prokash"
                :placeholder="img('/assets/img/logo.png', { h: 56, blur: 2, q: 50 })" /> -->
                    <NuxtLink to="/">
                        <nuxt-img class="mx-auto" :src="`${siteurl.site_url}/media/common/${headerSiteSettings?.logo}`"
                            width="300" alt="Dhaka Prokash" />
                    </NuxtLink>
                </div>
                <div class="flex gap-4 flex-col">
                    <div class="flex gap-4 items-center place-self-end">

                        <NuxtLink target="_blank" :to="headerSiteSettings?.facebook">
                            <svg xmlns="http://www.w3.org/2000/svg" height="28" width="28" viewBox="0 0 32 32"
                                enable-background="new 0 0 32 32" xml:space="preserve">
                                <path fill="#1877F2"
                                    d="M16,0L16,0c8.837,0,16,7.163,16,16l0,0c0,8.837-7.163,16-16,16l0,0C7.163,32,0,24.837,0,16l0,0 C0,7.163,7.163,0,16,0z">
                                </path>
                                <path fill="#FFFFFF"
                                    d="M18,17.5h2.5l1-4H18v-2c0-1.03,0-2,2-2h1.5V6.14C21.174,6.097,19.943,6,18.643,6C15.928,6,14,7.657,14,10.7 v2.8h-3v4h3V26h4V17.5z">
                                </path>
                            </svg>
                        </NuxtLink>
                        <NuxtLink target="_blank" :to="headerSiteSettings?.twitter">
                            <img src="/assets/img/social/x.png" width="28" height="28" alt="x" class="rounded-full" />
                        </NuxtLink>
                        <NuxtLink target="_blank" :to="headerSiteSettings?.instagram">
                            <img src="/assets/img/social/instagram.png" width="28" height="28" alt="instagram" />
                        </NuxtLink>
                        <NuxtLink target="_blank" :to="headerSiteSettings?.youtube">
                            <svg xmlns="http://www.w3.org/2000/svg" height="28" width="28" viewBox="0 0 32 32"
                                enable-background="new 0 0 32 32" xml:space="preserve">
                                <path fill="#FF0000"
                                    d="M16,0L16,0c8.837,0,16,7.163,16,16l0,0c0,8.837-7.163,16-16,16l0,0C7.163,32,0,24.837,0,16l0,0 C0,7.163,7.163,0,16,0z">
                                </path>
                                <path fill="#FFFFFF"
                                    d="M25.543,10.498C26,12.28,26,16,26,16s0,3.72-0.457,5.502c-0.254,0.985-0.997,1.76-1.938,2.022 C21.896,24,16,24,16,24s-5.893,0-7.605-0.476c-0.945-0.266-1.687-1.04-1.938-2.022C6,19.72,6,16,6,16s0-3.72,0.457-5.502 c0.254-0.985,0.997-1.76,1.938-2.022C10.107,8,16,8,16,8s5.896,0,7.605,0.476C24.55,8.742,25.292,9.516,25.543,10.498L25.543,10.498 z M14,19.5l6-3.5l-6-3.5V19.5z">
                                </path>
                            </svg>
                        </NuxtLink>

                    </div>
                    <div class="today_date place-self-end flex gap-2">
             
                        <div class="px-3 py-1 border cursor-pointer">ইপেপার</div>
                        <div class="px-3 py-1 border cursor-pointer">English</div>
                    </div>
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