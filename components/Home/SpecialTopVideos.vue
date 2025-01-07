<template>
    <div class="flex flex-col gap-1" v-if="specialVideoTop?.length > 0">

        <div class="special-feature_video">
            
            <div v-if="specialVideoTop[0]?.is_live === 1">
                <iframe v-if="specialVideoTop[0]?.type === 1" width="518" height="292"
                    :src="`https://www.youtube.com/embed/${specialVideoTop[0]?.code}?enablejsapi=1&autoplay=1&mute=1&rel=0&showinfo=1&controls=1&loop=1&playlist=${specialVideoTop[0]?.code}`"
                    frameborder="0" allowfullscreen style="width: 100%!important;"></iframe>
                <div v-else class="fb-video" :data-href="`https://www.facebook.com/watch/?v=${specialVideoTop[0]?.code}`"
                    data-width="auto" data-autoplay="true" data-show-captions="false"></div>
            </div>
            <div v-else>
                <NuxtLink v-if="specialVideoTop[0]?.type == 1" class="group mb-[20px] cursor-pointer"
                    :to="`https://www.youtube.com/watch?v=${specialVideoTop[0]?.code}`" target="_blank" rel="nofollow">
                    <div class="notliveimage relative">
                        <img :src="`${siteurl?.site_url}/media/videoImages/${specialVideoTop[0]?.img_bg_path}`"
                            :alt="specialVideoTop[0]?.title" style="width: 100%" />
                        <Icon name="simple-icons:youtubemusic"
                            class=" absolute top-[40%] left-[40%] col-span-2 md:col-span-3 text-6xl group-hover:text-[#3375af] text-[#ff0000]" />

                        <h4 class="text-center bg-[#3375af] font-semibold py-2 text-white group-hover:bg-red-600">
                            {{ specialVideoTop[0]?.title }}
                        </h4>
                    </div>
                </NuxtLink>
                <NuxtLink v-else-if="specialVideoTop[0]?.type == 2" class="group mb-[20px] cursor-pointer"
                    :to="`https://www.facebook.com/dhakaprokash24/videos/${specialVideoTop[0]?.code}`" target="_blank"
                    rel="nofollow">
                    <div class="notliveimage relative">
                        <img :src="`${siteurl?.site_url}/media/videoImages/${specialVideoTop[0]?.img_bg_path}`"
                            :alt="specialVideoTop[0]?.title" style="width: 100%" />
                        <Icon name="simple-icons:youtubemusic"
                            class=" absolute top-[40%] left-[40%] col-span-2 md:col-span-3 text-6xl group-hover:text-[#3375af] text-[#ff0000]" />

                        <h4 class="text-center bg-[#3375af] font-semibold py-2 text-white group-hover:bg-red-600">
                            {{ specialVideoTop[0]?.title }}
                        </h4>
                    </div>
                </NuxtLink>
                <NuxtLink v-else class="group mb-[20px] cursor-pointer"
                    :to="`/video/${specialVideoTop[0]?.slug}/${specialVideoTop[0]?.id}`" rel="nofollow">
                    <div class="notliveimage relative">
                        <img :src="`${siteurl?.site_url}/media/videoImages/${specialVideoTop[0]?.img_bg_path}`"
                            :alt="specialVideoTop[0]?.title" style="width: 100%" />
                        <Icon name="simple-icons:youtubemusic"
                            class=" absolute top-[40%] left-[40%] col-span-2 md:col-span-3 text-6xl group-hover:text-[#3375af] text-[#ff0000]" />

                        <h4 class="text-center bg-[#3375af] font-semibold py-2 text-white group-hover:bg-red-600">
                            {{ specialVideoTop[0]?.title }}
                        </h4>
                    </div>
                </NuxtLink>
            </div>
            <!-- <iframe width="518" height="292" src="https://www.youtube.com/embed/{{$spTopFirstVideo->code}}?enablejsapi=1&autoplay=1&mute=1&rel=0&showinfo=1&controls=1&loop=1&playlist={{$spTopFirstVideo->code}}" frameborder="0" allowfullscreen style="width: 100%!important;"></iframe> -->

        </div>
        <div class="grid grid-cols-1 md:grid-cols-2" v-if="specialVideoTop?.length > 2">
            <!-- Video Loop -->

            <div v-for="(specialVideo, svinx) in specialVideoTop?.slice(1, 5)" :key="svinx">
                <div v-if="specialVideo?.target === 2">
                    <NuxtLink v-if="specialVideo?.type == 1" :to="`https://www.youtube.com/watch?v=${specialVideo?.code}`"
                        target="_blank" class="grid grid-cols-12 gap-4 items-center group border-b py-4 group">
                        <Icon name="simple-icons:youtubemusic"
                            class=" col-span-2 md:col-span-2 text-4xl group-hover:text-[#3375af] text-[#ff0000]" />
                        <h4 class="text-base col-span-10 font-semibold md:col-span-10 group-hover:text-[#3375af]">{{ specialVideo?.title
                        }}
                        </h4>
                    </NuxtLink>
                    <NuxtLink v-else :to="`https://www.facebook.com/dhakaprokash24/videos/${specialVideo?.code}`"
                        target="_blank" class="grid grid-cols-12 gap-4 items-center group border-b py-4 group">
                        <Icon name="simple-icons:youtubemusic"
                            class=" col-span-2 md:col-span-2 text-4xl group-hover:text-[#3375af] text-[#ff0000]" />
                        <h4 class="text-base font-semibold col-span-10 md:col-span-10 group-hover:text-[#3375af]">{{ specialVideo?.title
                        }}
                        </h4>
                    </NuxtLink>

                </div>
                <div v-else>
                    <NuxtLink :to="`/video/${specialVideo?.slug}/${specialVideo?.id}`"
                        class="grid grid-cols-12 gap-4 items-center group border-b py-4 group">
                        <Icon name="simple-icons:youtubemusic"
                            class=" col-span-2 md:col-span-2 text-4xl group-hover:text-[#3375af] text-[#ff0000]" />
                        <h4 class="text-base font-semibold col-span-10 md:col-span-10 group-hover:text-[#3375af]">{{ specialVideo?.title
                        }}
                        </h4>
                    </NuxtLink>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
useHead({
    script: [
        {
            src: 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2',
            async: 'true',
            defer: 'true',
            tagPosition: "head"
        }
    ]
})
const siteurl = siteUrlState()
// =============== Special Top Video Fetching ====================//
const specialVideoTop = useState(() => [])
// const { data: sptpvdo } = await useFetch('/api/home/specialvideotop', {
//     method: "GET"
// })
const { data: sptpvdo } = await useFetch('/api/prismaapi/home/videofeature', {
    method: "POST",
    body: {
        take:5
    },
    cache: 'force-cache'
})
specialVideoTop.value = sptpvdo?.value
// =============== Special Top Video Fetching ====================//

</script>

<style lang="scss" scoped></style>