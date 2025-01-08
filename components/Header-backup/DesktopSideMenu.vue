<template>
    <div id="desktopSidebar"
        :class="`${desktopMenuStatus ? '-left-0' : '-left-72'} fixed inset-0 w-64 shadow-[#ddd_4px_3px_4px_2px] flex flex-col gap-2 duration-500 bg-white h-screen z-10`">

        <div class="desktopLogo px-5 py-5 flex justify-between items-center">
            <NuxtLink to="/"><nuxt-img src="https://www.dhakaprokash24.com/media/common/logo1672518180.png" class=" w-40" /></NuxtLink>
            <Icon name="material-symbols:close" @click="desktopMenuCloseHandler" class="text-3xl cursor-pointer hover:bg-[#f7f7f7]" />
        </div>
        <div class="overflow-y-auto pb-16">
            <div class="desktopSideMenus  flex flex-col  px-5 py-5 text-[1rem]">
                <NuxtLink @click="desktopMenuCloseHandler" class="py-2 border-b px-2 hover:bg-gray-100" to="/collection/latest">সর্বশেষ</NuxtLink>
                <NuxtLink @click="desktopMenuCloseHandler" v-for="(cat, cindex) in allCategory" :key="cindex" :to="`/${cat?.cat_slug}`" class="py-2 hover:bg-gray-100 border-b px-2">{{ cat?.cat_name_bn }}</NuxtLink>
                <NuxtLink @click="desktopMenuCloseHandler" class="py-2 border-b px-2 hover:bg-gray-100" to="/video">ভিজ্যুয়াল মিডিয়া</NuxtLink>
                <NuxtLink to="/" @click="desktopMenuCloseHandler" class="py-2 border-b px-2 hover:bg-gray-100">ইপেপার</NuxtLink>

            </div>
            <div class="social_media flex flex-col gap-2 px-7">
                <p class="text-sm">অনুসরণ করুন</p>
                <div class="flex gap-6">
        
                    <NuxtLink target="_blank" :to="siteSetting?.facebook">
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
                    <NuxtLink target="_blank" :to="siteSetting?.twitter">
                        <img src="/assets/img/social/x.png" width="28" height="28" alt="x" class="rounded-full" />
                    </NuxtLink>
                    <NuxtLink target="_blank" :to="siteSetting?.instagram">
                        <img src="/assets/img/social/instagram.png" width="28" height="28" alt="instagram" />
                    </NuxtLink>
                    <NuxtLink target="_blank" :to="siteSetting?.youtube">
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
            </div>
        </div>
    </div>
</template>

<script setup>

// Site Setting Global State
const siteSetting = sitesettingsState()

// Desktop Menu Status 
const desktopMenuStatus = desktopMenuState()
// All Category
const allCategory = allCategoryState()
// Desktop Menu Handler
const desktopMenuCloseHandler = () => {
    desktopMenuStatus.value = false
}

</script>

<style scoped>
/* width */
::-webkit-scrollbar {
    width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
    background: #fff;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #c9c3c3;
    border-radius: 5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #bdb8b8;
}
</style>