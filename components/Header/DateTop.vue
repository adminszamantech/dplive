<template>
    <div class="bg-[#EEEEEE] hidden md:block py-1" id="navBar">
        <div class="max-w-[1280px] mx-auto px-4">
            <div class=" justify-between flex items-center">
                <div class="flex gap-2 siyamLipiFont text-black text-sm">
                    <div class="flex gap-1 items-center justify-center">
                        <Icon name="ic:baseline-location-on" />
                        <span>ঢাকা</span>
                    </div>
                    <div class="flex gap-1 items-center justify-center">
                        <Icon name="ic:baseline-calendar-month" />
                        <span>{{ EnglishDate() }} | {{ BanglaDate() }}</span>
                    </div>
                </div>
                <div class="flex gap-4 justify-center items-center">
                    <div class="top-search-box relative flex items-center">
                        <input type="text" placeholder="অনুসন্ধানের জন্য লিখুন..."  @keyup.enter="searchPageRedirect" v-model="keyword"
                            class="bg-[#e0e0e0] text-black focus:outline-none px-3 w-72 placeholder-black">
                        <span @click="searchPageRedirect" class="text-base cursor-pointer absolute right-0 top-0 px-2">
                            <Icon name="tabler:search" />
                        </span>
                    </div>
                    <div class="flex gap-4 justify-center items-center">
                        <NuxtLink target="_blank" :to="headerSiteSettings?.facebook">
                            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 32 32"
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
                            <img src="/assets/img/social/instagram.png" width="20" height="20" alt="instagram" />
                        </NuxtLink>
                        <NuxtLink target="_blank" :to="headerSiteSettings?.twitter">
                            <img src="/assets/img/social/x.svg" width="20" height="20" alt="x" />
                        </NuxtLink>
                       
                        <NuxtLink target="_blank" :to="headerSiteSettings?.youtube">
                            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 32 32"
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
    </div>
</template>

<script setup>
import { BanglaDate, EnglishDate } from '~/lib/helpers';

const { scrollDown, counter } = defineProps(['scrollDown', 'LogoHeaderScollUp'])

// ==================== Global Site Setting State ====================
const siteurl = siteUrlState()
const headerSiteSettings = sitesettingsState()
// ==================== Logo ====================

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

</script>

<style lang="scss" scoped></style>