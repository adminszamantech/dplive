<template>
  <div v-if="authorContents" class="category-page">

    <Head>
      <Title>{{ author?.author_name_bn }}</Title>
    </Head>
    <!-- Space For Ads -->
    <!-- <div class="category-ads-section border-b border-b-[#dee2e6] py-4 ">
      <div class="bg-[#f7f7f7]">
        <a target="_blank" href="/">
          <img class="mx-auto" src="/assets/img/bar-ads.gif" alt="">
        </a>
      </div>
    </div> -->
    <!-- Space For Ads -->

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

    <div v-else class=" max-w-[1280px] mx-auto category-content px-4 md:px-4 py-4 relative">
      <!-- Breadcrump Section -->
      <div class="breadcrump border-b border-b-[#dee2e6] pb-2 mb-5 flex flex-col gap-2 md:gap-4">

        <div class="tag-title md:py-6 flex gap-3 items-center">
          <Icon name="mdi:fountain-pen-tip" class="text-[#3375af] text-4xl" />
          <h1 class="text-xl md:text-3xl text-[#3375af] font-semibold">{{ author?.author_name_bn }}</h1>
        </div>

      </div>
      <!--/ Breadcrump Section -->

      <div class="grid grid-cols-12 gap-8 md:gap-3">
        <div class="col-span-12 md:col-span-9 md:border-r md:pr-3">

          <!-- Loop Category Post Section -->
          <div class="category-post-list grid grid-cols-12">
            <div class="col-span-2 hidden md:block"></div>
            <div class="col-span-12 md:col-span-8">
              <!-- Loop Item -->

              <div class="cat-post-item py-4 border-b" v-for="(authorContent, autInx) in authorContents" :key="autInx">

                <NuxtLink
                  :to="getPostUrl(authorContent?.cat_slug, authorContent?.subcat_slug, authorContent?.content_type, authorContent?.content_id)"
                  class=" grid grid-cols-12 gap-3 group">
                  <div class=" col-span-7 flex flex-col gap-3">
                    <h3 class="cat-title col-span-12 font-semibold text-[18px] md:text-[20px] group-hover:text-[#ff0000]">
                      {{
                        authorContent?.content_heading }}</h3>
                    <ClientOnly>
                      <div class="cat-desc text-base font-[300] text-black hidden md:block"
                        v-html="`${authorContent?.content_details.substring(0, 160)}...`"></div>
                    </ClientOnly>

                    <span class="post-date md:flex flex-col gap-1 text-base hidden text-black">
                      <small>আপডেট: {{
                        postCreatedDateWithTime(authorContent?.updated_at) }}</small>
                      <small>প্রকাশ: {{
                        postCreatedDateWithTime(authorContent?.created_at) }}</small>
                    </span>
                    <p class="text-sm text-black flex gap-1 items-center md:hidden">
                      <Icon name="ph:alarm-bold" />
                      <span>
                        {{ postCreatedDate(authorContent?.created_at) }}
                      </span>
                    </p>
                  </div>
                  <div class=" col-span-5 category-post-image overflow-hidden">
                    <!-- <nuxt-img :src="`${siteurl.site_url}/media/content/images/${tagContent?.img_bg_path}`"
                                class="mx-auto w-full group-hover:scale-110 duration-300"
                                :placeholder="img('https://www.dhakaprokash24.com/media/common/logo1672518180.png', { height: 300 })" /> -->
                    <nuxt-img loading="lazy"
                      :src="`${siteurl.site_url}/media/content/images/${authorContent?.img_bg_path}`"
                      class="mx-auto w-full group-hover:scale-110 duration-300"
                      :placeholder="img(`${siteurl.site_url}/logo/placeholder.jpg`)" />

                  </div>
                </NuxtLink>
              </div>

              <!--/ Loop Item -->

            </div>
            <div class="col-span-2 hidden md:block"></div>
          </div>
          <div class="flex justify-center items-center py-6" v-if="authorContents?.length > 9">
            <button @click="loadMoreButtonHandler"
              class="border border-[#dee2e6] text-[#3375af] px-8 py-2 rounded-sm mt-5 hover:border-[#3375af]"><b>আরও</b></button>
          </div>
          <!-- Loop Category Post Section -->
        </div>
        <div class=" col-span-12 md:col-span-3">
          <!-- <Tabs :class="`sticky ${stickyScroll ? ' top-44' : 'top-16'} duration-200`" /> -->
          <HomePostTabs :class="`sticky ${stickyScroll ? ' top-56' : 'top-16'} duration-200 hidden md:block`" />
        </div>
      </div>
    </div>
  </div>
  <div v-else class="errorNotfound">

    <Head>
      <Title>404 Not Found | ঢাকাপ্রকাশ</Title>
    </Head>
    <Errorpage />
  </div>
</template>

<script setup>
import { postCreatedDateWithTime, postCreatedDate, getPostUrl } from '~/lib/helpers';
const img = useImage()
const siteurl = siteUrlState()

// Sticky Status
const singlePageSticky = singlePageStickyState()
const stickyScroll = computed(() =>
  singlePageSticky.value
)
// Get Author Slug
const author_slug = useRoute().params.author_slug

//================== Get Author Content fetching =============== //
// Author State 
const author = ref(null)
//Author Content State
const authorContents = useState(() => [])
const take = ref(10)

const { data: authorcont, pending } = await useFetch('/api/prismaapi/author/getauthorpost', {
  method: "POST",
  body: {
    author_slug: author_slug,
    take: take.value
  }
})
// Author Content Assign
authorContents.value = authorcont?.value?.content
// Author Assign
author.value = authorcont?.value?.author
//================== Get Author Content fetching =============== //

//================ Load More Author Content Button =================//
const loadMoreButtonHandler = async () => {
  take.value += 10
  const { data: authorMorecont } = await useFetch('/api/prismaapi/author/getauthorpost', {
    method: "POST",
    body: {
      author_slug: author_slug,
      take: take.value
    }
  })
  authorContents.value = authorMorecont?.value?.content
  author.value = authorMorecont?.value?.author
}
//================ Load More Author Content Button =================//

</script>

<style scoped></style>