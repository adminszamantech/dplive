<template>
    <div class="home-page">
        <!-- Home Middle Top Ads -->
        <div v-if="homeMiddleAds?.status === 1" class="py-4 border-b border-b-[#e2e2e2] mt-6 md:mt-0">
            <AdsDesktopHomeMiddleTop :homeMiddleAds="homeMiddleAds" />
        </div>
        <!-- Home Middle Top Ads -->
        <!-- Page Loader -->
        <div v-if="pending" class="bg-white min-h-screen hidden md:block ">
            <div class="flex justify-center items-center pt-32">
                <img width="60" src="/assets/img/loader.gif" alt="">
                <h3 class="text-2xl text-black">লোড হচ্ছে...</h3>
            </div>
        </div>
        <div v-if="pending" class=" fixed bg-white h-screen  inset-0  flex items-center justify-center md:hidden">
            <div class="flex items-center gap-1">
                <img width="60" src="/assets/img/loader.gif" alt="">
                <h3 class="text-2xl text-black">লোড হচ্ছে...</h3>
            </div>
        </div>
        <!-- Page Loader -->

        <div v-else class="py-2 md:px-4 max-w-[1280px] mx-auto px-4">
            <!-- Headline Component -->
            <Headline v-if="allHeadline?.length > 0" :breakingNews="allHeadline" />
            <!--/ Headline Component -->
            <!-- Special Top Content Component -->
            <HomeSpecialTopContent />
            <!--/ Special Top Content Component -->

            <div class=" grid grid-cols-12 gap-4">
                <div class="col-span-12 md:col-span-9">
                    <!-- Home Middle One Ads -->
                    <div v-if="homeMiddleOneAds?.status === 1"
                        class="py-4 border-b border-t border-b-[#e2e2e2] border-t-[#e2e2e2]">
                        <AdsDesktopHomeMiddleOne :homeMiddleOneAds="homeMiddleOneAds" />
                    </div>
                    <!-- Home Middle One Ads -->
                    <!-- Special Top Content Component -->
                    <HomeSpecialBottomContent />
                    <!--/ Special Top Content Component -->
                    <!-- Home Middle Two Ads -->
                    <div v-if="homeMiddleTwoAds?.status === 1"
                        class="py-4 border-b border-t border-b-[#e2e2e2] border-t-[#e2e2e2]">
                        <AdsDesktopHomeMiddleTwo :homeMiddleTwoAds="homeMiddleTwoAds" />
                    </div>
                    <!-- Home Middle Two Ads -->
                    <!-- National Category Component -->
                    <HomeCategoryNational />
                    <!--/ National Category Component -->
                    <!-- Home Middle Three Ads -->
                    <div v-if="homeMiddleThreeAds?.status === 1"
                        class="py-4 border-b border-t border-b-[#e2e2e2] border-t-[#e2e2e2]">
                        <AdsDesktopHomeMiddleThree :homeMiddleThreeAds="homeMiddleThreeAds" />
                    </div>
                    <!-- Home Middle Three Ads -->
                    <!-- National Category Component -->
                    <HomeCategoryPoliticsEconomyInternational />
                    <!--/ National Category Component -->
                    <!-- Home Middle Four Ads -->
                    <div v-if="homeMiddleFourAds?.status === 1"
                        class="py-4 border-b border-t border-b-[#e2e2e2] border-t-[#e2e2e2]">
                        <AdsDesktopHomeMiddleFour :homeMiddleFourAds="homeMiddleFourAds" />
                    </div>
                    <!-- Home Middle Four Ads -->
                </div>

                <div class="col-span-12 md:col-span-3">
                    <Counter />
                    <!-- Home Right One Ads -->
                    <div v-if="homeRightOneAds?.status === 1"
                        class="py-4 border-b border-t border-b-[#e2e2e2] border-t-[#e2e2e2]">
                        <AdsDesktopHomeRightOne :homeRightOneAds="homeRightOneAds" />
                    </div>
                    <!-- Home Right One Ads -->
                    <!-- Home Right Two Ads -->
                    <div v-if="homeRightTwoAds?.status === 1"
                        class="py-4 border-b border-t border-b-[#e2e2e2] border-t-[#e2e2e2]">
                        <AdsDesktopHomeRightTwo :homeRightTwoAds="homeRightTwoAds" />
                    </div>
                    <!-- Home Right Two Ads -->
                    <!-- Home Right Sidebar -->
                    <HomePostTabs class="my-4" />
                    <FacebookPage />
                    <!-- <Tabs /> -->
                    <!--/ Home Right Sidebar -->
                    <!-- Home Right Three Ads -->
                    <div v-if="homeRightThreeAds?.status === 1"
                        class="py-4 border-b border-t border-b-[#e2e2e2] border-t-[#e2e2e2]">
                        <AdsDesktopHomeRightThree :homeRightThreeAds="homeRightThreeAds" />
                    </div>
                    <!-- Home Right Three Ads -->
                    <!-- Home Right Four Ads -->
                    <div v-if="homeRightFourAds?.status === 1"
                        class="py-4 border-b border-t border-b-[#e2e2e2] border-t-[#e2e2e2]">
                        <AdsDesktopHomeRightFour :homeRightFourAds="homeRightFourAds" />
                    </div>
                    <!-- Home Right Four Ads -->
                    <!-- Home Right Five Ads -->
                    <div v-if="homeRightFiveAds?.status === 1"
                        class="py-4 border-b border-t border-b-[#e2e2e2] border-t-[#e2e2e2]">
                        <AdsDesktopHomeRightFive :homeRightFiveAds="homeRightFiveAds" />
                    </div>
                    <!-- Home Right Five Ads -->
                    <!-- Home Right Six Ads -->
                    <div v-if="homeRightSixAds?.status === 1"
                        class="py-4 border-b border-t border-b-[#e2e2e2] border-t-[#e2e2e2]">
                        <AdsDesktopHomeRIghtSix :homeRightSixAds="homeRightSixAds" />
                    </div>
                    <!-- Home Right Six Ads -->
                    <!-- Home Right Seven Ads -->
                    <div v-if="homeRightSevenAds?.status === 1"
                        class="py-4 border-b border-t border-b-[#e2e2e2] border-t-[#e2e2e2]">
                        <AdsDesktopHomeRightSeven :homeRightSevenAds="homeRightSevenAds" />
                    </div>
                    <!-- Home Right Seven Ads -->
                </div>
            </div>

            <!-- Special Top Content Component -->
            <HomeCategorySpecialReport />
            <!--/ Special Top Content Component -->

            <!-- Sports -->
            <HomeCategorySports />
            <!-- Sports -->
            <!-- Home Middle Five Ads -->
            <div v-if="homeMiddleFiveAds?.status === 1"
                class="py-4 border-b border-t border-b-[#e2e2e2] border-t-[#e2e2e2]">
                <AdsDesktopHomeMiddleFive :homeMiddleFiveAds="homeMiddleFiveAds" />
            </div>
            <!-- Home Middle Five Ads -->
            <!-- Entertainment Category Component -->
            <HomeCategoryEntertainment />
            <!-- Entertainment Category Component -->
            <div class="grid grid-cols-12 gap-4">
                <div class="col-span-12 md:col-span-4">
                    <FacebookPage />
                </div>
                <div class="col-span-12 md:col-span-8">
                        <!-- Home Middle Six Ads -->
        <div v-if="homeMiddleSixAds?.status === 1" class="py-4 border-b border-t border-b-[#e2e2e2] border-t-[#e2e2e2]">
            <AdsDesktopHomeMiddleSix :homeMiddleSixAds="homeMiddleSixAds" />
        </div>
        <!-- Home Middle Six Ads -->
                </div>
            </div>
            <HomeCategorySaradesh />

        </div>
    
        <!-- English Content Area -->
        <!-- <div class="english-content-except bg-[#fff4e6] my-6"> -->
            <!-- English Component -->
            <!-- <HomeEnglishContent /> -->
            <!-- English Component -->
        <!-- </div> -->
        <!-- English Content Area -->
        <!-- Home Middle Seven Ads -->
        <div v-if="homeMiddleSevenAds?.status === 1" class="py-4 border-b border-t border-b-[#e2e2e2] border-t-[#e2e2e2]">
            <AdsDesktopHomeMiddleSeven :homeMiddleSevenAds="homeMiddleSevenAds" />
        </div>
        <!-- Home Middle Seven Ads -->
        <div class="py-2 md:px-4 max-w-[1280px] mx-auto px-4">

            <div class=" grid grid-cols-12 gap-6 mb-4">
                <div class=" col-span-12 md:col-span-9">
                    <!-- Law Court Component -->
                    <HomeCategoryLawCourt />
                    <!-- Law Court Component -->
                </div>
                <div class=" col-span-12 md:col-span-3">
                    <!-- Crime Component -->
                    <HomeCategoryCrime />
                    <!-- Crime Component -->
                </div>
            </div>

            <div class="grid grid-cols-12 gap-4 py-4">
                <div class="col-span-12 md:col-span-9">
                    <!-- Saradesh Category Component -->
                    <HomeCategoryLifestyle />
                    <!--/ Saradesh Category Component -->
                </div>
                <div class="col-span-12 md:col-span-3">
                    <!-- Lifestyle Category Component -->
                    <HomeCategoryReligion />
                    <!--/ Lifestyle Category Component -->
                </div>
            </div>

            <div class=" grid grid-cols-12 gap-6 py-4">
                <div class=" col-span-12 md:col-span-6">
                    <!-- Health Component -->
                    <HomeCategoryHealth />
                    <!-- Health Component -->
                </div>
                <div class=" col-span-12 md:col-span-3">
                    <!-- Education Component -->
                    <HomeCategoryEducation />
                    <!-- Education Component -->
                </div>
                <div class=" col-span-12 md:col-span-3">
                    <!-- Art Culture Component -->
                    <HomeCategoryArtCulture />
                    <!-- Art Culture Component -->
                </div>

            </div>
            <!-- Home Middle Eight Ads -->
            <div v-if="homeMiddleEightAds?.status === 1"
                class="py-4 border-b border-t border-b-[#e2e2e2] border-t-[#e2e2e2]">
                <AdsDesktopHomeMiddleEight :homeMiddleEightAds="homeMiddleEightAds" />
            </div>
            <!-- Home Middle Eight Ads -->

            <div class=" grid grid-cols-12 gap-6 py-4">
                <div class=" col-span-12 md:col-span-6">
                    <!-- Technology Component -->
                    <HomeCategoryTechnology />
                    <!-- Technology Component -->
                </div>
                <div class=" col-span-12 md:col-span-3">
                    <!-- Career Component -->
                    <HomeCategoryCareer />
                    <!-- Career Component -->
                </div>
                <div class=" col-span-12 md:col-span-3">
                    <!-- Campus Component -->
                    <HomeCategoryCampus />
                    <!-- Campus Component -->
                </div>
            </div>
            <div class=" grid grid-cols-12 gap-6 py-4">
                <div class=" col-span-12 md:col-span-3">
                    <!-- Child Adolescent Component -->
                    <HomeCategoryChildAdolescent />
                    <!-- Child Adolescent Component -->
                </div>
                <div class=" col-span-12 md:col-span-3">
                    <!-- Motivation Component -->
                    <HomeCategoryMotivation />
                    <!-- Motivation Component -->
                </div>
                <div class=" col-span-12 md:col-span-3">
                    <!-- Probash Component -->
                    <HomeCategoryProbash />
                    <!-- Probash Component -->
                </div>
                <div class=" col-span-12 md:col-span-3">
                    <!-- Corporate Component -->
                    <HomeCategoryCorporate />
                    <!-- Corporate Component -->
                </div>
            </div>

            <div class=" grid grid-cols-12 gap-6 py-4">
                <div class=" col-span-12 md:col-span-6">
                    <!-- Literature Component -->
                    <HomeCategoryLiterature />
                    <!-- Literature Component -->
                </div>
                <div class=" col-span-12 md:col-span-3">
                    <!-- Opinion Component -->
                    <HomeCategoryOpinion />
                    <!-- Opinion Component -->
                </div>
                <div class=" col-span-12 md:col-span-3">
                    <!-- Special Article Component -->
                    <HomeCategorySpecialArticle />
                    <!-- Special Article Component -->
                </div>
            </div>
        </div>
        <!-- Home Nine Eight Ads -->
        <div v-if="homeMiddleNineAds?.status === 1" class="py-4 border-b border-t border-b-[#e2e2e2] border-t-[#e2e2e2]">
            <AdsDesktopHomeMiddleNine :homeMiddleNineAds="homeMiddleNineAds" />
        </div>
        <!-- Home Nine Eight Ads -->

        <!-- Gallery Content Area -->
        <div class="gallery-content-except bg-[#00427A] mt-6 text-white">
            <!-- Gallery Component -->
            <HomeGallery />
            <!-- Gallery Component -->
        </div>
        <!-- Gallery Content Area -->
        
        
         <!-- Fireworks container -->
              <!--<div id="fireworks-container" class="absolute top-0 left-0 w-full h-full z-10"></div>-->
        
        
         <!-- Popup -->
            <!--<div v-if="showPopup" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">-->
            <!--  <div -->
            <!--    class="relative w-full max-w-[90%] sm:max-w-[350px] md:max-w-[370px] bg-center bg-no-repeat"-->
            <!--    :style="{ backgroundImage: `url('https://szamantech.com/assets/img/central-popup.png')`, backgroundSize: 'contain' }"-->
            <!--  >-->
            <!--    <img -->
            <!--      src="https://szamantech.com/assets/img/central-popup.png" -->
            <!--      alt="Popup Image" -->
            <!--      class="block w-full"-->
            <!--    />-->
            <!--    <button -->
            <!--      @click="closePopup" -->
            <!--      class="absolute -right-1 -top-2 text-white bg-red-600 hover:bg-red-700 rounded-full w-8 h-8 flex items-center justify-center"-->
            <!--      aria-label="Close"-->
            <!--    >-->
            <!--      X-->
            <!--    </button>-->
            <!--  </div>-->
            <!--</div>-->
        
        
       
    </div>
</template>

<script setup>

// import { ref, onMounted } from "vue";
// import Fireworks from "fireworks-js";

// const showPopup = ref(false);


// onMounted(() => {
    
//   startFireworks();
   
//   showPopup.value = true;
//   setTimeout(() => {
//     showPopup.value = false;
//   }, 5000);
// });

// const closePopup = () => {
//   showPopup.value = false;
// };

// Fireworks Function
// const startFireworks = () => {
//   const container = document.getElementById("fireworks-container");

//   const fireworks = new Fireworks(container, {
//     autoresize: true,
//     opacity: 0.5,
//     acceleration: 1.05,
//     friction: 0.97,
//     gravity: 1.5,
//     particles: 50,
//     traceLength: 3,
//     traceSpeed: 10,
//     explosion: 5,
//     intensity: 30,
//     flickering: 50,
//     lineStyle: "round",
//     hue: {
//       min: 0,
//       max: 360,
//     },
//     delay: {
//       min: 30,
//       max: 60,
//     },
//     rocketsPoint: {
//       min: 50,
//       max: 50,
//     },
//     lineWidth: {
//       explosion: {
//         min: 1,
//         max: 3,
//       },
//       trace: {
//         min: 1,
//         max: 2,
//       },
//     },
//     brightness: {
//       min: 50,
//       max: 80,
//     },
//     decay: {
//       min: 0.015,
//       max: 0.03,
//     },
//     mouse: {
//       click: false,
//       move: false,
//       max: 1,
//     },
//   });

//   fireworks.start(); // Start the fireworks animation

//   setTimeout(() => {
//     fireworks.stop(); // Stop after 6 seconds
//     container.style.display = "none";
//   }, 6000);
// };



// ======== Breaking News =========//
const allHeadline = useState(() => [])
const { data: allhead } = await useFetch(`/api/prismaapi/breakingnews/breaking`, {
    method: 'GET',
})
allHeadline.value = allhead.value
// ======== Breaking News =========//

// =============== Special Content Fetching ====================//
const specialTopContents = specialTopContentState()

const { data: spTopCon, pending } = await useFetch('/api/prismaapi/home/specialtopcontent', {
    method: "GET",
    // cache: 'force-cache'
})
// const { data: spTopCon } = await useFetch("/api/home/specialtopcontent", {
//     method: 'GET'
// })
specialTopContents.value = spTopCon.value
// =============== Special Content Fetching ====================//


//========== Home Page Middle Top Ads ==========//
// Page 1 = Common, 2 = Home Page, 3 = Category Page, 4 = Details Page
const homeMiddleAds = useState(() => '')
const { data: hmads } = await useFetch('/api/prismaapi/adsmanager/commonads', {
    method: "POST",
    body: {
        page: 2,
        position: 1
    },
    cache: 'force-cache'
})
homeMiddleAds.value = hmads?.value
//========== Home Page Middle Top Ads ==========//

//========== Home Page Middle One Ads ==========//
// Page 1 = Common, 2 = Home Page, 3 = Category Page, 4 = Details Page
const homeMiddleOneAds = useState(() => '')
const { data: hmoneads } = await useFetch('/api/prismaapi/adsmanager/commonads', {
    method: "POST",
    body: {
        page: 2,
        position: 2
    },
    cache: 'force-cache'
})
homeMiddleOneAds.value = hmoneads?.value
//========== Home Page Middle One Ads ==========//

//========== Home Page Middle Two Ads ==========//
// Page 1 = Common, 2 = Home Page, 3 = Category Page, 4 = Details Page
const homeMiddleTwoAds = useState(() => '')
const { data: hmtwoads } = await useFetch('/api/prismaapi/adsmanager/commonads', {
    method: "POST",
    body: {
        page: 2,
        position: 3
    },
    cache: 'force-cache'
})
homeMiddleTwoAds.value = hmtwoads?.value
//========== Home Page Middle Two Ads ==========//

//========== Home Page Middle Three Ads ==========//
// Page 1 = Common, 2 = Home Page, 3 = Category Page, 4 = Details Page
const homeMiddleThreeAds = useState(() => '')
const { data: hmthreeads } = await useFetch('/api/prismaapi/adsmanager/commonads', {
    method: "POST",
    body: {
        page: 2,
        position: 4
    },
    cache: 'force-cache'
})
homeMiddleThreeAds.value = hmthreeads?.value
//========== Home Page Middle Three Ads ==========//

//========== Home Page Middle Four Ads ==========//
// Page 1 = Common, 2 = Home Page, 3 = Category Page, 4 = Details Page
const homeMiddleFourAds = useState(() => '')
const { data: hmfourads } = await useFetch('/api/prismaapi/adsmanager/commonads', {
    method: "POST",
    body: {
        page: 2,
        position: 5
    },
    cache: 'force-cache'
})
homeMiddleFourAds.value = hmfourads?.value
//========== Home Page Middle Four Ads ==========//

//========== Home Page Middle Five Ads ==========//
// Page 1 = Common, 2 = Home Page, 3 = Category Page, 4 = Details Page
const homeMiddleFiveAds = useState(() => '')
const { data: hmfiveads } = await useFetch('/api/prismaapi/adsmanager/commonads', {
    method: "POST",
    body: {
        page: 2,
        position: 6
    },
    cache: 'force-cache'
})
homeMiddleFiveAds.value = hmfiveads?.value
//========== Home Page Middle Five Ads ==========//

//========== Home Page Middle Six Ads ==========//
// Page 1 = Common, 2 = Home Page, 3 = Category Page, 4 = Details Page
const homeMiddleSixAds = useState(() => '')
const { data: hmsixads } = await useFetch('/api/prismaapi/adsmanager/commonads', {
    method: "POST",
    body: {
        page: 2,
        position: 7
    },
    cache: 'force-cache'
})
homeMiddleSixAds.value = hmsixads?.value
//========== Home Page Middle Six Ads ==========//

//========== Home Page Middle Seven Ads ==========//
// Page 1 = Common, 2 = Home Page, 3 = Category Page, 4 = Details Page
const homeMiddleSevenAds = useState(() => '')
const { data: hmsevenads } = await useFetch('/api/prismaapi/adsmanager/commonads', {
    method: "POST",
    body: {
        page: 2,
        position: 8
    },
    cache: 'force-cache'
})
homeMiddleSevenAds.value = hmsevenads?.value
//========== Home Page Middle Seven Ads ==========//

//========== Home Page Middle Eight Ads ==========//
// Page 1 = Common, 2 = Home Page, 3 = Category Page, 4 = Details Page
const homeMiddleEightAds = useState(() => '')
const { data: hmeightads } = await useFetch('/api/prismaapi/adsmanager/commonads', {
    method: "POST",
    body: {
        page: 2,
        position: 9
    },
    cache: 'force-cache'
})
homeMiddleEightAds.value = hmeightads.value
//========== Home Page Middle Seven Ads ==========//

//========== Home Page Nine Eight Ads ==========//
// Page 1 = Common, 2 = Home Page, 3 = Category Page, 4 = Details Page
const homeMiddleNineAds = useState(() => '')
const { data: hmninetads } = await useFetch('/api/prismaapi/adsmanager/commonads', {
    method: "POST",
    body: {
        page: 2,
        position: 10
    },
    cache: 'force-cache'
})
homeMiddleNineAds.value = hmninetads?.value
//========== Home Page Middle Seven Ads ==========//

//========== Home Page Right One Ads ==========//
// Page 1 = Common, 2 = Home Page, 3 = Category Page, 4 = Details Page
const homeRightOneAds = useState(() => '')
const { data: hmnroneads } = await useFetch('/api/prismaapi/adsmanager/commonads', {
    method: "POST",
    body: {
        page: 2,
        position: 11
    },
    cache: 'force-cache'
})
homeRightOneAds.value = hmnroneads?.value
//========== Home Page Right One Ads ==========//

//========== Home Page Right Two Ads ==========//
// Page 1 = Common, 2 = Home Page, 3 = Category Page, 4 = Details Page
const homeRightTwoAds = useState(() => '')
const { data: hmnrtwoads } = await useFetch('/api/prismaapi/adsmanager/commonads', {
    method: "POST",
    body: {
        page: 2,
        position: 12
    },
    cache: 'force-cache'
})
homeRightTwoAds.value = hmnrtwoads?.value
//========== Home Page Right Two Ads ==========//

//========== Home Page Right Three Ads ==========//
// Page 1 = Common, 2 = Home Page, 3 = Category Page, 4 = Details Page
const homeRightThreeAds = useState(() => '')
const { data: hmnrthreeads } = await useFetch('/api/prismaapi/adsmanager/commonads', {
    method: "POST",
    body: {
        page: 2,
        position: 13
    },
    cache: 'force-cache'
})
homeRightThreeAds.value = hmnrthreeads?.value
//========== Home Page Right Three Ads ==========//

//========== Home Page Right Four Ads ==========//
// Page 1 = Common, 2 = Home Page, 3 = Category Page, 4 = Details Page
const homeRightFourAds = useState(() => '')
const { data: hmnrfourads } = await useFetch('/api/prismaapi/adsmanager/commonads', {
    method: "POST",
    body: {
        page: 2,
        position: 14
    },
    cache: 'force-cache'
})
homeRightFourAds.value = hmnrfourads?.value
//========== Home Page Right Four Ads ==========//

//========== Home Page Right Five Ads ==========//
// Page 1 = Common, 2 = Home Page, 3 = Category Page, 4 = Details Page
const homeRightFiveAds = useState(() => '')
const { data: hmnrfiveads } = await useFetch('/api/prismaapi/adsmanager/commonads', {
    method: "POST",
    body: {
        page: 2,
        position: 15
    },
    cache: 'force-cache'
})
homeRightFiveAds.value = hmnrfiveads?.value
//========== Home Page Right Five Ads ==========//

//========== Home Page Right Six Ads ==========//
// Page 1 = Common, 2 = Home Page, 3 = Category Page, 4 = Details Page
const homeRightSixAds = useState(() => '')
const { data: hmnrsixads } = await useFetch('/api/prismaapi/adsmanager/commonads', {
    method: "POST",
    body: {
        page: 2,
        position: 16
    },
    cache: 'force-cache'
})
homeRightSixAds.value = hmnrsixads?.value
//========== Home Page Right Six Ads ==========//

//========== Home Page Right Seven Ads ==========//
// Page 1 = Common, 2 = Home Page, 3 = Category Page, 4 = Details Page
const homeRightSevenAds = useState(() => '')
const { data: hmnrsevenads } = await useFetch('/api/prismaapi/adsmanager/commonads', {
    method: "POST",
    body: {
        page: 2,
        position: 17
    },
    cache: 'force-cache'
})
homeRightSevenAds.value = hmnrsevenads?.value
//========== Home Page Right Seven Ads ==========//

</script>

<style lang="scss" scoped></style>