<template>
    <div
        class="footerTop grid grid-cols-1 place-items-center md:place-items-start gap-6 md:gap-0 md:flex md:justify-between pb-8">
        <div class="flex flex-col gap-4 text-center md:text-left">
            <NuxtLink to="/">
                <nuxt-img class="mx-auto md:mx-0" :src="`${siteConfig.public.apiUrl}/media/common/${sitesettings?.logo}`"
                    width="220" alt="Dhaka Prokash" />
            </NuxtLink>
            <div>
                <p class="text-[16px] text-black">ভারপ্রাপ্ত সম্পাদক: <b>রবিউল ইসলাম</b></p>
                
            </div>
            <p class="text-[16px] text-black">৯৩, কাজী নজরুল ইসলাম এভিনিউ, (ষষ্ঠ তলা)<br>কারওয়ান বাজার, ঢাকা-১২১৫।</p>
            
        </div>
        <div class="flex flex-col gap-4 text-center md:text-left">
            <div class="flex flex-col gap-0">
                <h6 class="text-[#00427A] text-[24px] font-semibold">নিউজরুম</h6>
                <NuxtLink to="tel:+8809613331010" class="hover:text-[#ff0000] text-black">+৮৮০ ৯৬১ ৩৩৩ ১০১০</NuxtLink>
                <NuxtLink to="mailto:newsroom@dhakaprokash24.com" class="hover:text-[#ff0000] text-black">
                    newsroom@dhakaprokash24.com</NuxtLink>
            </div>
            <div class="flex flex-col gap-0">
                <h6 class="text-[#00427A] text-[24px] font-semibold">মার্কেটিং</h6>
                <NuxtLink to="tel:+8809613332020" class="hover:text-[#ff0000] text-black">+৮৮০ ৯৬১ ৩৩৩ ২০২০</NuxtLink>
                <NuxtLink to="mailto:marketking@dhakaprokash24.com" class="hover:text-[#ff0000] text-black">
                    marketking@dhakaprokash24.com</NuxtLink>
            </div>
            <div class="social_media flex flex-col gap-2">
                <h6 class="text-[#00427A] text-[24px] font-semibold">অনুসরণ করুন</h6>
            
                <div class="flex gap-4 justify-center md:justify-start">

                    <NuxtLink target="_blank" :to="sitesettings?.facebook">
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
                    <NuxtLink target="_blank" :to="sitesettings?.instagram">
                        <img src="/assets/img/social/instagram.png" width="28" height="28" alt="instagram" />
                    </NuxtLink>
                    <NuxtLink target="_blank" :to="sitesettings?.twitter">
                        <img src="/assets/img/social/x.svg" width="28" height="28" alt="instagram" />
                    </NuxtLink>
           
                    <NuxtLink target="_blank" :to="sitesettings?.youtube">
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
        <div class="flex flex-col gap-4 text-center md:text-left">
            <div class="flex flex-col gap-3">
                <NuxtLink to="#" class="hover:text-[#ff0000] text-black ">গোপনীয়তার নীতি</NuxtLink>
                <NuxtLink to="#" class="hover:text-[#ff0000] text-black">ব্যবহারের শর্তাবলি</NuxtLink>
                <NuxtLink to="#" class="hover:text-[#ff0000] text-black">আমাদের সম্পর্কে</NuxtLink>
                <NuxtLink to="#" class="hover:text-[#ff0000] text-black">যোগাযোগ</NuxtLink>
                <NuxtLink to="#" class="hover:text-[#ff0000] text-black">আর্কাইভ</NuxtLink>
                <a href="https://admin.dhakaprokash24.com/converter" target="_blank" class="hover:text-[#ff0000] text-black">কনভার্টার</a>
            </div>
        </div>
        <div>
            <nuxt-img :src="`${siteConfig.public.apiUrl}/media/common/contact-barcode.png`" width="220"
                alt="Dhaka Prokash" />
        </div>
    </div>
</template>

<script setup>
// ==================== Logo ====================
const siteConfig = useRuntimeConfig()
// Sitesetting - logo, social media
const sitesettings = sitesettingsState()
// const siteSettings = useState(() => [])
// const { data: siteset } = await useFetch(`${siteConfig.public.apiUrl}/api/site-setting`, {
//     method: 'GET'
// })
// siteSettings.value = siteset
// ==================== Logo ====================
</script>

<style lang="scss" scoped></style>