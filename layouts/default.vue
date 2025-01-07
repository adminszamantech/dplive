<template>
    <div ref="el">

        <Head>
            <Title>{{ sitesettings?.title }}</Title>
            <Meta name="description" :content="sitesettings?.meta_description" />
            <Meta name="Developed By" content="Dhaka Prokash Developer" />
            <Meta name="keywords" :content="sitesettings?.meta_keywords" />
            <Meta name="distribution" content="Global" />
            <Meta property="og:type" content="website" />
            <Meta property="og:site_name" content="ঢাকাপ্রকাশ" />
            <Meta property="og:title" :content="sitesettings?.title" />
            <Meta property="og:description" :content="sitesettings?.meta_description" />
            <Meta name="twitter:title" :content="sitesettings?.title" />
            <Meta name="twitter:description" :content="sitesettings?.meta_description" />
            <Meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:domain" content="https://www.dhakaprokash24.com">
            <Meta name="twitter:site" content="@dhakaprokash24" />
            <Meta name="twitter:creator" content="ঢাকাপ্রকাশ | বাংলা নিউজ পেপার" />
            <Meta property="fb:app_id" content="270848064771492" />
            <!-- <Meta property="fb:pages" content="100063660752112" /> -->
            <Meta name="googlebot" content="index, follow" />
            <Meta name="robots" content="index, follow" />
            <Meta content="ALL" name="robots" />
            <!-- <Meta content="500" http-equiv="refresh" /> -->
            <!-- <Meta name="robots" content="index, follow" /> -->

        </Head>
        <!-- Header Top Ads Page=1, Position=1 -->
        <AdsDesktopCommonHeaderBannerTop v-if="topBannerAd?.status === 1" :topBannerAd="topBannerAd" />
        
        <div :class="`logoHeader duration-300 z-[9999999]`">
            <!-- <div :class="`${LogoHeaderScollUp ? 'fixed  top-0 left-0 right-0' : '' } logoHeader duration-300`"> -->
            <!-- <div class="header-container max-w-[1280px] mx-auto "> -->
            <!-- Top Header -->
            <HeaderTop :scrollDown="scrollDown" :LogoHeaderScollUp="LogoHeaderScollUp" />
            <!-- Mobile Header -->
            <!-- Top Header -->
            <HeaderTopMenu 
                :scrollDown="scrollDown" 
                :darkMode="darkMode" 
                @toggle-dark-mode="toggleDarkMode"
            />

            <!-- </div> -->
        </div>
        <MobileHeaderTop />
        <div @scroll="scrollHandler" class="main-container duration-900 mt-10 md:mt-12">

            <slot />

        </div>
        <FooterContent />
        <!-- Footer Ads Sticky -->
        <AdsDesktopCommonFooterStickyAds v-if="footerAds?.status === 1" :footerAds="footerAds" />
        <!-- Footer Ads Sticky -->

        <Icon @click="scrollTop" id="scrollTOP" name="material-symbols:arrow-upward-alt"
            class="text-4xl invisible duration-300 cursor-pointer rounded-full bg-[#3375af] text-white fixed bottom-20 right-8 shadow-md shadow-slate-950" />
    </div>
     <!-- Ads Site Block Popup -->
     <AdsDesktopCommonSiteBlock v-if="siteblockAds?.status === 1" :siteblockAds="siteblockAds" />
    <!-- Ads Site Block Popup -->
    <!--<FacebookBottom />-->
</template>

<script setup>


import { ref, watch } from 'vue';
const darkMode = ref(false);

watch(darkMode, (isDark) => {
    const body = document.body;
    if (isDark) {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    }
});

const toggleDarkMode = () => {
    darkMode.value = !darkMode.value;
};

// Initialize theme on mount
onMounted(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        darkMode.value = true;
    } else {
        darkMode.value = false;
    }
});







const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })

}

// ==================== Title & Favicon ====================

const DsiteConfig = useRuntimeConfig()

// Sitesetting - logo, social media
const sitesettings = sitesettingsState()

const { data: ssetting } = await useFetch("/api/prismaapi/sitesetting/sitesetting", {
    method: "get",
    cache: 'force-cache'
})

sitesettings.value = ssetting?.value
// ==================== Title & Favicon ====================

useHead({
    bodyAttrs: {
        id: "bodyWrapper"
    },
    link: [
        {
            rel: 'icon',
            type: 'image/png',
            href: DsiteConfig.public.apiUrl + `/media/common/${sitesettings?.value?.favicon}`
        }
    ],
    script: [
        {
            src: 'https://platform-api.sharethis.com/js/sharethis.js#property=651137566b9a9300123b73f3&product=inline-share-buttons',
            tagPosition: 'bodyClose',
            async: "true"
        },
        {
            src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7072011042484597',
            tagPosition: 'head',
            async: "true",
            crossorigin: "anonymous"
        },
        {
            src: 'https://cdn.jsdelivr.net/gh/AhmedMRaihan/BanglaDateJS@master/src/buetDateTime.js'
        },
        {
            src: 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v20.0',
            async:'true',
            defer: 'true',
            crossorigin: 'anonymous',
            nonce: 'NdbzXnrP'
        }
    ]
})
const { isDesktop } = useDevice();
const prevScrollPosition = ref(0)
const currentScrollPosition = ref(0)
const LogoHeaderScollUp = ref(false)
const scrollDown = ref(false)
const scrollPostion = ref(120)

const detailPageSticky = singlePageStickyState()


onMounted(() => {
    // counter.value = document.getElementsByTagName('body')[0].scrollHeight 


    if (isDesktop) {

        // ============== Desktop ===================
        prevScrollPosition.value = window.scrollY
        // ============= Scolling ===============
        window.addEventListener("scroll", function () {
            // counter.value = document.documentElement.clientHeight - document.documentElement.scrollTop
            // counter.value = counter.value - document.documentElement.scrollTop


            // ====== Scroll Top button =========
            const scrollerElement = document.querySelector("#scrollTOP")
            if (window.scrollY > 300) {
                scrollerElement.classList.remove('invisible')
            } else {
                scrollerElement.classList.add('invisible')
            }
            // ====== Scroll Top button =========

            currentScrollPosition.value = window.scrollY

            if (document.documentElement.scrollTop >= scrollPostion.value) {
                scrollDown.value = true

            } else {
                scrollDown.value = false
                // const adsBottomStatus = ref(false)
            }

            if (prevScrollPosition.value > currentScrollPosition.value) {
                // Scroll Up
                scrollDown.value = false
                LogoHeaderScollUp.value = true
                // const classes = document.getElementsByClassName("logoHeader")[0].style.display = "none";
                const classes = document.getElementsByClassName("logoHeader")[0]
                classes.classList.remove('fixed', '-top-[117px]', 'left-0', 'right-0')
                classes.classList.add('fixed', '-top-0', 'left-0', 'right-0')


                // Blog Detail page
                detailPageSticky.value = true

            } else {

                // Scroll down
                LogoHeaderScollUp.value = false
                // const classes = document.getElementsByClassName("logoHeader")[0].style.display = "none";
                const classes = document.getElementsByClassName("logoHeader")[0]
                classes.classList.add('fixed', '-top-[117px]', 'left-0', 'right-0')

                document.getElementsByClassName("main-container")[0].style.marginTop = "204px";

                // Blog Detail page
                detailPageSticky.value = false

            }
            prevScrollPosition.value = currentScrollPosition.value


        })
        // ============= Scolling =============== //
        // ============== Desktop ===================

    } else {
        
        window.addEventListener("scroll", function () {
            // ====== Scroll Top button =========
            const scrollerElement = document.querySelector("#scrollTOP")
            if (window.scrollY > 300) {
                scrollerElement.classList.remove('invisible')
            } else {
                scrollerElement.classList.add('invisible')
            }
            // ====== Scroll Top button =========
        })

    }

})

// ==================== All Category ====================
// const catConfig = useRuntimeConfig()
const allCategory = allCategoryState()
// const {data:cats} = await useFetch(`${catConfig.public.apiUrl}/api/allcat`,{
//     method: 'GET'
// })
const { data: cats } = await useFetch(`/api/prismaapi/header/allcategory`, {
    method: 'GET'
})
allCategory.value = cats
// ==================== Logo ====================

//============= Header Banner Top Ads ===========//
const topBannerAd = useState(() => '')
const { data: topbA } = await useFetch('/api/prismaapi/adsmanager/commonads', {
    method: "POST",
    body: {
        page: 1,
        position: 1
    }
})
topBannerAd.value = topbA.value
//============= Header Banner Top Ads ===========//
//============= Footer Banner Top Ads ===========//
const footerAds = useState(() => '')
const { data: fAds } = await useFetch('/api/prismaapi/adsmanager/commonads', {
    method: "POST",
    body: {
        page: 1,
        position: 3
    }
})
footerAds.value = fAds.value
//============= Footer Banner Top A ===========//

//============= Site Block Ads  ===========//
const siteblockAds = useState(() => '')
const { data: sbAds } = await useFetch('/api/prismaapi/adsmanager/commonads', {
    method: "POST",
    body: {
        page: 1,
        position: 4
    }
})
siteblockAds.value = sbAds.value
//============= Site Block Ads ===========//


</script>

<style>

    /* Light Mode */
    body {
        background-color: #ffffff;
    }




    /*Dark Mode */
    body.dark-mode {
        background-color: #192132;
        color: #ffffff;
    }
    
    body.dark-mode #darkMode,
    body.dark-mode .ad-section {
        background-color: #192132 !important;
    }
    body.dark-mode #navBar,
    body.dark-mode .gallery-content-except {
        background-color: #26334d !important;
    }
    body.dark-mode #HeaderTopBar {
        background-color: #26334d !important;
        box-shadow: none !important;
    }
    
    body.dark-mode ul li  {
        background-color: #26334d !important;
    }
    
    body.dark-mode p,
    body.dark-mode svg {
        color: #ffffff !important; 
    }

    body.dark-mode a h3, 
    body.dark-mode a h4,
    body.dark-mode span,
    body.dark-mode a,
    body.dark-mode h1,
    body.dark-mode h2 {
        color: #ffffff !important; 
    }


</style>