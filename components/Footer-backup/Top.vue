<template>
    <div class="footerTop grid grid-cols-1 place-items-center md:place-items-start gap-6 md:gap-0 md:flex md:justify-between pb-8">
        <div class="flex flex-col gap-3 text-center md:text-left">
            <NuxtLink to="/">
                <nuxt-img class="mx-auto md:mx-0" :src="`${siteConfig.public.apiUrl}/media/common/${sitesettings?.logo}`" width="220"
                    alt="Dhaka Prokash" />
            </NuxtLink>
            <p class="text-[16px] text-[#2a2a2a]">৯৩, কাজী নজরুল ইসলাম এভিনিউ, (ষষ্ঠ তলা)<br>কারওয়ান বাজার, ঢাকা-১২১৫।</p>
        </div>
        <div class="flex flex-col gap-4 text-center md:text-left">
            <div class="flex flex-col gap-0">
                <h6 class="text-[#00427A] text-[24px]">নিউজরুম</h6>
                <NuxtLink to="tel:+8809613331010" class="hover:text-[#ff0000] text-[#2a2a2a]">+৮৮০ ৯৬১ ৩৩৩ ১০১০</NuxtLink>
                <NuxtLink to="mailto:newsroom@dhakaprokash24.com" class="hover:text-[#ff0000] text-[#2a2a2a]">
                    newsroom@dhakaprokash24.com</NuxtLink>
            </div>
            <div class="flex flex-col gap-0">
                <h6 class="text-[#00427A] text-[24px]">মার্কেটিং</h6>
                <NuxtLink to="tel:+8809613332020" class="hover:text-[#ff0000] text-[#2a2a2a]">+৮৮০ ৯৬১ ৩৩৩ ২০২০</NuxtLink>
                <NuxtLink to="mailto:marketking@dhakaprokash24.com" class="hover:text-[#ff0000] text-[#2a2a2a]">marketking@dhakaprokash24.com</NuxtLink>
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