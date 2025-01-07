<template>
    <div
        :class="`${mobileMenuStatus ? 'left-0 fixed' : 'fixed -left-[815px]'} duration-200 bg-white max-w-full md:hidden right-0 top-12 z-[99999]`">
        <div class="px-8 pb-8 pt-16 flex flex-col gap-4  overflow-y-scroll h-screen">
            <div class="flex items-center">
                <input type="text" placeholder="খুঁজুন" v-model="mobileMekeyword" class=" focus:outline-none border px-2 py-2 w-full">
                <div @click="mobileSearchPageRedirect" class=" bg-gray-200 px-2 py-2  cursor-pointer">
                    <Icon class="text-2xl " name="tabler:search" />
                </div>
            </div>
            <div class="">
                <div class="grid grid-cols-2 gap-2 font-[400]">
                    <NuxtLink @click="menuClicked" to="/collection/latest" class="py-2 border-b">সর্বশেষ</NuxtLink>
                    <NuxtLink @click="menuClicked" v-for="(cat, cindex) in allCats" :key="cindex" :to="`/${cat?.cat_slug}`"
                        class="py-2 border-b">{{ cat?.cat_name_bn }}</NuxtLink>
                    <NuxtLink @click="menuClicked" to="/video" class="py-2 border-b">ভিজ্যুয়াল মিডিয়া</NuxtLink>
                    <NuxtLink @click="menuClicked" to="/" class="py-2 border-b">ইপেপার</NuxtLink>
                </div>
            </div>
            <div class="social_media flex flex-col gap-2 mt-3 pb-12 px-8">
                <p class="text-xl text-center">অনুসরণ করুন</p>
                <div class="flex gap-6 justify-between items-center">

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
                    <NuxtLink target="_blank" :to="headerSiteSettings?.instagram">
                        <img src="/assets/img/social/instagram.png" width="28" height="28" alt="instagram" />
                    </NuxtLink>
                    <NuxtLink target="_blank" :to="headerSiteSettings?.twitter">
                        <img src="/assets/img/social/x.svg" width="28" height="28" alt="instagram" />
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
            </div>

        </div>
    </div>
</template>

<script setup>
// const { mobileMenuStatus } = defineProps(['mobileMenuStatus'])
const mobileMenuStatus = mobileMenuState()
// const mobileMe = computed(() => {
//     mobileMenuStatus 
// })
const menuClicked = () => {
    mobileMenuStatus.value = false
}


// ===== Search Box ==== //
const mobileMekeyword = useState(() => '');
const mobileSearchPageRedirect = () => {
    if (mobileMekeyword.value !== '') {
        // globalKeyword.value = keyword.value
        navigateTo(`/search?q=${mobileMekeyword.value}`)
        mobileMekeyword.value = ''
        mobileMenuStatus.value = false
    } else {
        alert('Please type something to search!')
    }
}
// ===== Search Box ==== //

// ================ Get Bangla Date ============== //
const getDate = new Intl.DateTimeFormat('bn-bd', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
const todayDate = getDate.format(new Date())
// ================ Get Bangla Date ============== //

const allCats = allCategoryState()

// ==================== Global Site Setting State ====================
// const siteurl = siteUrlState()
const headerSiteSettings = sitesettingsState()
// ==================== Global Site Setting State ====================

</script>

<style scoped></style>