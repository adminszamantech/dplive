<template>
    <ClientOnly>
        <div class=" border border-red-900">
            <div class="flex items-center gap-1">
                <div class="bg-red-900 md:w-[130px] w-[100px] px-2 border border-red-900 py-1">
                    <h2 class="text-[12px] md:text-[16px] text-white">প্রধান শিরোনাম </h2>
                </div>
                <marquee-text :duration="35" :paused="false" :reverse="false" class="flex-1" :repeat="1">
                    <div class="flex items-center gap-3">

                        <!-- Breaking News Item -->
                        <div class="breaking-headline flex gap-1 items-center" v-for="news in breakingNews" :key="news.id">
                          
                                <span class="relative flex h-2 w-2">
                                    <span
                                        class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                    <span class="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                                </span>
                                <span>  <NuxtLink :to="news?.news_link">{{ news.news_title }}</NuxtLink></span>
                        </div>
                        <!-- Breaking News Item -->

                    </div>
                </marquee-text>

            </div>
        </div>
    </ClientOnly>
</template>

<script setup>
import MarqueeText from 'vue-marquee-text-component'
const {breakingNews} = defineProps(['breakingNews'])
// const config = useRuntimeConfig()
// const breakingNews = useState(() => [])
// const {data:Headline} = await useFetch(`${config.public.apiUrl}/api/breaking-news`,{
//     method: 'GET'
// })
// breakingNews.value = Headline

</script>

<style lang="scss" scoped></style>