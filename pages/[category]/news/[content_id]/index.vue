<template>
    <div v-if="detailsContent" class="post-detail-page">
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

        <div v-else class=" max-w-[1280px] mx-auto detail-page px-4 md:px-4 py-4">

            <Head>
                <Title>{{ detailsContent?.content_heading }}</Title>
                <!-- Refresh Reload -->
                <Meta content="500" http-equiv="refresh" />
                <!-- Refresh Reload -->
                <Meta name="description" :content="ogDescription" />
                <Meta name="keywords" :content="metaKeywords" />
                <Meta property="og:url" :content="ogUrl" />
                <Meta property="og:title" :content="ogTitle" />
                <Meta property="og:description" :content="ogDescription" />
                <Meta property="og:image" :content="ogImage" />

                <Meta name="twitter:title" :content="ogTitle" />
                <Meta name="twitter:description" :content="ogDescription" />
                <Meta name="twitter:image" :content="ogImage" />
                <Meta name="twitter:url" :content="ogUrl" />
                <Link rel="canonical" :href="ogUrl" />
            </Head>

            <!-- <img src="http://127.0.0.1:8000/api/ogimage/get/politics?imgPath=2023November/dhaka-prokash-news-15-20231111182548.jpg" alt=""> -->
            <div class="breadcrump pb-3 md:pb-3">
                <div class="flex gap-1 justify-start items-center">
                    <NuxtLink :to="`/${detailsContent?.category?.cat_slug}`"
                        class="text-[#3375af] font-semibold border-b-2 border-b-[#3375af]">
                        <!-- {{ detailsContent?.category?.cat_name_bn }} -->
                        <h1 class="text-base md:text-xl">{{ detailsContent?.category?.cat_name_bn }}</h1>
                    </NuxtLink>

                </div>
            </div>
            <!-- :::::::::::::: Detail Page Top Ads :::::::::::::: -->
            <div v-if="DetailTopAds?.status === 1" class="pb-4 mb-4 border-b border-b-[#e2e2e2]">
                <AdsDesktopDetailTop :DetailTopAds="DetailTopAds" />
            </div>

            <!-- :::::::::::::: Detail Page Top Ads :::::::::::::: -->
            <!--========== First Details Content ============ -->

            <div class=" grid grid-cols-12 gap-5 relative d-print">
                <div class="col-span-12 md:col-span-9 solaimanlipi" id="singlepost">
                    <div class="single-post flex flex-col gap-3 md:gap-4" :data-title="detailsContent?.content_heading"
                        :data-nid="detailsContent?.content_id" :data-description="detailsContent?.content_brief"
                        :data-keywords="detailsContent?.meta_keywords"
                        :data-href="`${websiteUrl?.website_url}${getPostUrl(detailsContent?.category?.cat_slug, detailsContent?.subcategory?.subcat_slug, detailsContent?.content_type, detailsContent?.content_id)}`"
                        :data-src="detailsContent?.og_image">
                        <!-- <div class="single-post flex flex-col gap-3" :data-title="detailsContent?.content_heading"
            :data-nid="detailsContent?.content_id" :data-description="detailsContent?.content_brief"
            :data-keywords="detailsContent?.meta_keywords"
            :data-href="`${websiteUrl?.website_url}/category/${detailsContent?.category?.cat_slug}/${detailsContent?.content_id}`"
            :data-src="`${siteurl?.site_url}/api/ogimage/get/${detailsContent?.category?.cat_slug}?imgPath=${detailsContent?.img_bg_path}`"> -->
                        <div class="singlePost-heading flex flex-col gap-2 solaimanlipi">
                            <h4 v-if="detailsContent?.content_sub_heading" class="text-[20px] text-[#ff0000]">{{
        detailsContent?.content_sub_heading }}</h4>
                            <h2 class="text-3xl md:text-[40px] md:leading-[50px] print:leading-tight print:text-[32px]">
                                {{
        detailsContent?.content_heading }}
                                {{ balvalue }}
                            </h2>
                            <div class="h-2 w-12 rounded-md bg-[#3375af] print:hidden"></div>

                        </div>

                        <!-- Author Section -->
                        <!-- <div
                            class="flex flex-col gap-2 md:gap-0 md:flex-row justify-between md:items-end border-b pb-2 md:pb-3"> -->
                        <div class="grid grid-cols-1 md:grid-cols-2 content-between gap-2 border-b border-t py-2">
                            <NuxtLink v-if="detailsContent?.author"
                                :to="`/author/${detailsContent?.author?.author_slug}`"
                                class="author-details flex gap-2 group items-center border-b pb-1 md:border-b-0">
                                <div>
                                    <nuxt-img loading="lazy" v-if="detailsContent?.author?.img_path"
                                        :src="`${siteurl.site_url}/media/authorImages/${detailsContent?.author?.img_path}`"
                                        class="mx-auto rounded-full w-11 h-11 md:w-16 md:h-16"
                                        :placeholder="img(`${siteurl.site_url}/media/common/${sitesettings?.favicon}`)" />
                                    <img v-else :src="`${siteurl.site_url}/media/common/${sitesettings?.favicon}`"
                                        class="mx-auto rounded-full w-11 h-11 md:w-16 md:h-16" />
                                </div>
                                <div class="flex flex-col justify-center">
                                    <p class="group-hover:text-[#3375af] font-[600]">{{
        detailsContent?.author?.author_name_bn
    }}</p>

                                    <p>প্রকাশ: <ClientOnly><span>{{ postCreatedDateWithTime(detailsContent?.created_at)
                                                }}</span>
                                        </ClientOnly>
                                    </p>
                                </div>
                            </NuxtLink>
                            <div v-else class="author-details flex gap-2 group">
                                <div>
                                    <img :src="`${siteurl.site_url}/media/common/${sitesettings?.favicon}`"
                                        class="mx-auto rounded-full w-11 h-11 md:w-16 md:h-16" />
                                </div>
                                <div class="flex flex-col justify-center">
                                    <!-- <p v-if="detailsContent?.author"> -->
                                    <p class="group-hover:text-[#3375af] font-[600]">ঢাকাপ্রকাশ ডেস্ক</p>

                                    <p>প্রকাশ: <ClientOnly><span>{{ postCreatedDateWithTime(detailsContent?.created_at)
                                                }}</span>
                                        </ClientOnly>
                                    </p>
                                </div>
                            </div>
                            <!-- Author Section /-->

                            <!-- Social Share -->
                            <div class="social-item flex gap-0 items-center justify-center print:hidden relative">
                                <!-- ShareThis BEGIN -->
                                <div class=" flex-1">
                                    <div :data-title="`${detailsContent?.content_heading}`"
                                        :data-url="`${websiteUrl?.website_url}${getPostUrl(detailsContent?.category?.cat_slug, detailsContent?.subcategory?.subcat_slug, detailsContent?.content_type, detailsContent?.content_id)}`"
                                        :data-image="`${detailsContent?.og_image}`"
                                        :data-description="detailsContent?.content_brief"
                                        :id="`sharethis-${detailsContent?.content_id}`"
                                        class=" sharethis-inline-share-buttons"></div>
                                </div>
                                <!-- ShareThis END -->
                                <!-- Print Button -->
                                <div class="cursor-pointer printbutton absolute right-0 text-white w-[30px] h-[30px] rounded-full  bg-black"
                                    @click="printPageArea('singlepost')">
                                    <Icon name="ic:baseline-local-printshop" class="ml-[6px] mt-[1px]" />
                                </div>
                                <!-- Print Button -->
                            </div>
                            <!-- Social Share -->
                        </div>
                        <div class="feature-image border-b">
                            <nuxt-img loading="lazy"
                                :src="`${siteurl.site_url}/media/content/images/${detailsContent?.img_bg_path}`"
                                class="mx-auto w-full lead-img cursor-zoom-in"
                                :placeholder="img(`${siteurl.site_url}/logo/placeholder.jpg`)" />
                            <p v-if="detailsContent?.img_bg_caption"
                                class="feature-image-capture text-center text-sm text-slate-900 pt-2 pb-1">{{
        detailsContent?.img_bg_caption }}</p>
                        </div>
                        <div class="singlePost-detail grid grid-cols-12">
                            <div class=" hidden md:block md:col-span-2"></div>
                            <div class="col-span-12 md:col-span-8">

                                <div class="postdetails text-[19px] solaimanlipi text-[#121212] pb-4"
                                    v-html="detailsContent?.content_details">
                                </div>

                                 <div>
                                  <img
                                    class="mx-auto"
                                    src="https://admin.dhakaprokash24.com/images/single-post-anniversary.jpeg"
                                    alt="Header Ad"
                                  />
                                </div>

                                <!-- Tag Area -->
                                <div
                                    class="category-tags-area flex flex-col gap-4 border-b border-t pb-4 pt-3 print:hidden">
                                    <NuxtLink :to="`/${detailsContent?.category?.cat_slug}`" class="text-[18px] py-1">
                                        <span class=" py-1 font-semibold border-b-2 border-[#3375af] text-[#3375af]">{{
        detailsContent?.category?.cat_name_bn }}</span> থেকে আরও পড়ুন</NuxtLink>
                                    <ul class="flex flex-wrap gap-3 items-center" v-if="firstContentTags?.length > 0">

                                        <li v-for="ftag in firstContentTags"
                                            class="text-[#337ab7] bg-[#d9edf7] rounded-sm hover:bg-[#d0e6f1] font-semibold">
                                            <NuxtLink class="px-4 py-2 block" :to="`/topic/${ftag}`">{{ ftag }}
                                            </NuxtLink>
                                        </li>
                                    </ul>
                                </div>
                                <!-- Tag Area -->
                                
                                <!-- Facebook Comments System -->
                                <FbComments
                                    :url="`${websiteUrl?.website_url}${getPostUrl(detailsContent?.category?.cat_slug, detailsContent?.subcategory?.subcat_slug, detailsContent?.content_type, detailsContent?.content_id)}`" />
                                <!-- Facebook Comments System -->
                                
                                <!--:::::::::::::: Counter Ramadan ::::::::::::::-->
                                <!--<div class="counter flex flex-col gap-4 my-4">-->
                                <!--    <div class="w-[400px] mx-auto max-w-[100%]">-->
                                <!--        <Counter />-->
                                <!--    </div>-->
                        
                                <!--    <img class="hover:cursor-zoom-in"-->
                                <!--        src="https://admin.dhakaprokash24.com/media/content/images/2024March/ramadan-calendar-2024-dhakaprokash-20240310181541.jpg" />-->
                                <!--</div>-->
                                <!--:::::::::::::: Counter Ramadan ::::::::::::::-->
                            </div>
                            <div class=" hidden md:block md:col-span-2"></div>
                        </div> <!-- singlePost-details -->
                    </div> <!-- /single-post -->

                </div>

                <div class=" col-span-12 md:col-span-3">
                    <!--:::::::: Detail Page Right One Ads :::::::::-->
                    <div v-if="DetailRightOneAds?.status === 1" class="pb-4 mb-3 border-b border-b-[#e2e2e2]">
                        <AdsDesktopDetailRightOne :DetailRightOneAds="DetailRightOneAds" />
                    </div>
                    <!--:::::::: Detail Page Right One Ads :::::::::-->
                    <div :class="`sticky ${stickyScroll ? ' top-[164px]' : 'top-14'} duration-200`">
                        <div :class="`flex flex-col gap-2`">
                            <div class=" border-b-[3px] border-[#3375af] pb-1">
                                <h3 class="text-[#3375af] text-[18px] font-[600]">{{
        detailsContent?.category?.cat_name_bn
    }} নিয়ে আরও পড়ুন</h3>
                            </div>

                            <div class="detail-page-category-content-exept flex flex-col"
                                v-if="firstMoreContents?.contents?.length > 0">
                                <!-- Loop Item -->

                                <NuxtLink
                                    :to="getPostUrl(fmoreContent?.cat_slug, fmoreContent?.subcat_slug, fmoreContent?.content_type, fmoreContent?.content_id)"
                                    class="grid grid-cols-12 gap-4 group h-national-excpt border-b py-4"
                                    v-for="fmoreContent in firstMoreContents?.contents" :key="fmoreContent.content_id">

                                    <div class=" col-span-5 overflow-hidden">
                                        <nuxt-img loading="lazy"
                                            :src="`${siteurl.site_url}/media/content/images/${fmoreContent?.img_bg_path}`"
                                            class="mx-auto w-full group-hover:scale-110 duration-300"
                                            :placeholder="img(`${siteurl.site_url}/logo/placeholder.jpg`)" />
                                    </div>
                                    <div class=" col-span-7">
                                        <h4 class="text-base font-semibold group-hover:text-[#ff0000]">{{
        fmoreContent?.content_heading }}</h4>
                                    </div>
                                </NuxtLink>
                                <!--/ Loop Item -->
                            </div>
                        </div>
                        <!--:::::::: Detail Page Right Two Ads :::::::::-->
                        <div v-if="DetailRightTwoAds?.status === 1" class="pb-4 mb-3 border-b border-b-[#e2e2e2]">
                            <AdsDesktopDetailRightTwo :DetailRightTwoAds="DetailRightTwoAds" />
                        </div>
                        <!--:::::::: Detail Page Right Two Ads :::::::::-->
                        <!--:::::::: Detail Page Right Three Ads :::::::::-->
                        <div v-if="DetailRightThreeAds?.status === 1" class="pb-4 mb-3 border-b border-b-[#e2e2e2]">
                            <AdsDesktopDetailRightThree :DetailRightThreeAds="DetailRightThreeAds" />
                        </div>
                        <!--:::::::: Detail Page Right Three Ads :::::::::-->
                    </div>
                </div>
                <!--:::::::: Detail Page After Ads :::::::::::-->
                <div v-if="DetailAfterAds?.status === 1"
                    class="col-span-12 py-4 border-b border-t border-b-[#e2e2e2] border-t-[#e2e2e2]">
                    <AdsDesktopDetailAfter :DetailAfterAds="DetailAfterAds" />
                </div>
                <!--:::::::: Detail Page After Ads :::::::::::-->


                <!-- Read more first Releted content -->
                <div class="col-span-12" v-if="fRelatedContents?.length > 0">
                    <div class="read-more">
                        <div class="category-header border-b-4 border-b-[#3375af] my-3">
                            <div class="flex gap-3 items-center">
                                <span class="w-3 h-3 bg-[#3375af]"></span>
                                <h2 class="text-[#3375af] text-[18px] font-semibold">আরও পড়ুন</h2>
                            </div>
                        </div>
                        <div class=" grid grid-cols-2 md:grid-cols-4 gap-4">
                            <!-- Loop Item -->
                            <NuxtLink
                                :to="getPostUrl(fRelatedContent?.cat_slug, fRelatedContent?.subcat_slug, fRelatedContent?.content_type, fRelatedContent?.content_id)"
                                class="flex flex-col gap-2 group" v-for="fRelatedContent in fRelatedContents"
                                :key="fRelatedContent.content_id">
                                <div class="feature_image_readmore overflow-hidden">
                                    <nuxt-img loading="lazy"
                                        :src="`${siteurl.site_url}/media/content/images/${fRelatedContent?.img_bg_path}`"
                                        class="mx-auto w-full group-hover:scale-110 duration-300"
                                        :placeholder="img(`${siteurl.site_url}/logo/placeholder.jpg`)" />
                                </div>
                                <h5 class="text-[18px] font-semibold group-hover:text-[#ff0000]">{{
        fRelatedContent?.content_heading }}</h5>
                            </NuxtLink>
                            <!-- Loop Item -->


                        </div>
                    </div>
                </div>
                <!-- Read more first content -->



                <!--:::::::: Detail Page Bottom Ads :::::::::::-->
                <div v-if="DetailBottomAds?.status === 1"
                    class="col-span-12 py-4 border-b border-t border-b-[#e2e2e2] border-t-[#e2e2e2]">
                    <AdsDesktopDetailBottom :DetailBottomAds="DetailBottomAds" />
                </div>
                <!--:::::::: Detail Page Bottom Ads :::::::::::-->
            </div>
            <!--========== // First Details Content ============ -->

            <!--========== <3> More Details Content ============ -->
            <div v-if="moreDetailsContents?.length > 0" v-for="(moreDetailContent, mcinx) in moreDetailsContents"
                :key="moreDetailContent.content_id"
                class="border-t pt-8  mt-10 grid grid-cols-12 gap-5 relative d-print">

                <div class="col-span-12 md:col-span-9" :id="`singlepost${mcinx}`">
                    <!----- Breadcump ----->
                    <div class="breadcrump pb-3 pt-2 md:pt-0 md:pb-3">
                        <div class="flex gap-1 justify-start items-center">
                            <NuxtLink :to="`/${moreDetailContent?.category?.cat_slug}`"
                                class="text-[#3375af] font-semibold border-b-2 border-b-[#3375af]">
                                <!-- {{ detailsContent?.category?.cat_name_bn }} -->
                                <h1 class="text-base md:text-xl">{{ moreDetailContent?.category?.cat_name_bn }}</h1>
                            </NuxtLink>
                        </div>
                    </div>
                    <!----- Breadcump relatedPostOgImage ----->

                    <div class="single-post flex flex-col solaimanlipi gap-3 md:gap-4"
                        :data-title="moreDetailContent?.content_heading" :data-nid="moreDetailContent?.content_id"
                        :data-description="moreDetailContent?.content_brief"
                        :data-keywords="moreDetailContent?.meta_keywords"
                        :data-href="`${websiteUrl?.website_url}${getPostUrl(moreDetailContent?.category?.cat_slug, moreDetailContent?.subcategory?.subcat_slug, moreDetailContent?.content_type, moreDetailContent?.content_id)}`"
                        :data-src="moreDetailContent?.og_image">

                        <div class="singlePost-heading flex flex-col gap-2 solaimanlipi">
                            <h4 v-if="moreDetailContent?.content_sub_heading" class="text-[20px] text-[#ff0000]">{{
        moreDetailContent?.content_sub_heading }}</h4>
                            <h2 class="text-3xl md:text-[40px] md:leading-[50px] print:leading-tight print:text-[32px]">
                                {{
        moreDetailContent.content_heading
    }} {{ balvalue }}</h2>
                            <div class="h-2 w-12 rounded-md bg-[#3375af] print:hidden"></div>
                        </div>


                        <!-- Author Section -->
                        <div class="grid grid-cols-1 md:grid-cols-2 content-between gap-2  border-b pb-2 md:pb-3">
                            <NuxtLink v-if="moreDetailContent?.author"
                                :to="`/author/${moreDetailContent?.author?.author_slug}`"
                                class="author-details flex gap-2 group items-center border-b pb-1 md:border-b-0">
                                <div>
                                    <nuxt-img loading="lazy" v-if="moreDetailContent?.author?.img_path"
                                        :src="`${siteurl.site_url}/media/authorImages/${moreDetailContent?.author?.img_path}`"
                                        class="mx-auto rounded-full w-11 h-11 md:w-16 md:h-16"
                                        :placeholder="img(`${siteurl.site_url}/media/common/${sitesettings?.favicon}`)" />
                                    <img v-else :src="`${siteurl.site_url}/media/common/${sitesettings?.favicon}`"
                                        class="mx-auto rounded-full w-11 h-11 md:w-16 md:h-16" />
                                </div>
                                <div class="flex flex-col justify-center">
                                    <p class="group-hover:text-[#3375af] font-[600]">{{
        moreDetailContent?.author?.author_name_bn
    }}</p>

                                    <p>প্রকাশ: <ClientOnly><span>{{
            postCreatedDateWithTime(moreDetailContent?.created_at)
        }}</span>
                                        </ClientOnly>
                                    </p>
                                </div>
                            </NuxtLink>
                            <div v-else class="author-details flex gap-2 group">
                                <div>
                                    <img :src="`${siteurl.site_url}/media/common/${sitesettings?.favicon}`"
                                        class="mx-auto rounded-full w-11 h-11 md:w-16 md:h-16" />
                                </div>
                                <div class="flex flex-col justify-center">
                                    <!-- <p v-if="detailsContent?.author"> -->
                                    <p class="group-hover:text-[#3375af] font-[600]">ঢাকাপ্রকাশ ডেস্ক</p>

                                    <p>প্রকাশ: <ClientOnly><span>{{
        postCreatedDateWithTime(moreDetailContent?.created_at)
    }}</span>
                                        </ClientOnly>
                                    </p>
                                </div>
                            </div>
                            <!-- Author Section /-->

                            <!-- Social Share -->
                            <div class="social-item flex gap-0 items-center justify-center print:hidden relative">
                                <!-- ShareThis BEGIN -->

                                <div class=" flex-1">
                                    <div :data-title="`${moreDetailContent?.content_heading}`"
                                        :data-url="`${websiteUrl?.website_url}${getPostUrl(moreDetailContent?.category?.cat_slug, moreDetailContent?.subcategory?.subcat_slug, moreDetailContent?.content_type, moreDetailContent?.content_id)}`"
                                        :data-image="`${moreDetailContent?.og_image}`"
                                        :data-description="moreDetailContent?.content_brief"
                                        :id="`sharethis-${moreDetailContent?.content_id}`"
                                        class="sharethis-inline-share-buttons"></div>
                                </div>
                                <!-- ShareThis END -->
                                <!-- Print Button -->
                                <div class="cursor-pointer printbutton absolute right-0 z-10 text-white w-[30px] h-[30px] rounded-full  bg-black"
                                    @click="printPageArea(`singlepost${mcinx}`)">
                                    <Icon name="ic:baseline-local-printshop" class="ml-[6px] mt-[1px]" />
                                </div>

                                <!-- Print Button -->
                            </div>
                            <!-- Social Share -->

                        </div>
                        <div class="feature-image border-b">
                            <nuxt-img loading="lazy"
                                :src="`${siteurl.site_url}/media/content/images/${moreDetailContent?.img_bg_path}`"
                                class="mx-auto lead-img cursor-zoom-in w-full"
                                :placeholder="img(`${siteurl.site_url}/logo/placeholder.jpg`)" />
                            <p v-if="moreDetailContent?.img_bg_caption"
                                class="feature-image-capture text-center text-sm text-slate-900 pt-2 pb-1">{{
        moreDetailContent?.img_bg_caption }}</p>
                        </div>
                        <div class="singlePost-detail grid grid-cols-12">
                            <div class=" hidden md:block md:col-span-2"></div>
                            <div class="col-span-12 md:col-span-8">
                                <div :class="`postdetails postdetailinside${mcinx} text-[19px] solaimanlipi text-[#121212] pb-4`"
                                    v-html="moreDetailContent?.content_details">
                                </div>
                                
                                
                                
                                 <div>
                                  <img
                                    class="mx-auto"
                                    src="https://admin.dhakaprokash24.com/images/single-post-anniversary.jpeg"
                                    alt="Header Ad"
                                  />
                                </div>
                                
                                <!-- Tag Area -->
                                <div class="category-tags-area flex flex-col gap-4 border-b border-t pb-4 pt-3 print:hidden"
                                    v-if="moreDetailContent?.tags">
                                    <NuxtLink :to="`/${moreDetailContent?.category?.cat_slug}`"
                                        class="text-[18px] py-1">
                                        <span class=" py-1 font-semibold border-b-2 border-[#3375af] text-[#3375af]">{{
        moreDetailContent?.category?.cat_name_bn }}</span> থেকে আরও পড়ুন
                                    </NuxtLink>

                                    <ul class="flex flex-wrap gap-3 items-center">

                                        <li v-for="mtag in moreDetailContent?.tags.split(',')"
                                            class="text-[#337ab7] bg-[#d9edf7] rounded-sm hover:bg-[#d0e6f1] font-semibold">
                                            <NuxtLink class="px-4 py-2 block" :to="`/topic/${mtag}`">{{ mtag }}
                                            </NuxtLink>
                                        </li>
                                    </ul>
                                </div>
                                <!-- Tag Area -->
                                <!-- Facebook Comments System -->
                                <FbComments
                                    :url="`${websiteUrl?.website_url}${getPostUrl(moreDetailContent?.category?.cat_slug, moreDetailContent?.subcategory?.subcat_slug, moreDetailContent?.content_type, moreDetailContent?.content_id)}`" />
                                <!-- Facebook Comments System -->
                                
                            </div>
                            <div class="hidden md:block md:col-span-2"></div>
                        </div> <!-- singlePost-details -->
                    </div> <!-- /single-post -->

                </div>
                <div class="col-span-12 md:col-span-3">
                    <!--:::::::: Detail Page Right One Ads :::::::::-->
                    <div v-if="DetailRightOneAds?.status === 1" class="pb-4 mb-3 border-b border-b-[#e2e2e2]">
                        <AdsDesktopDetailRightOne :DetailRightOneAds="DetailRightOneAds" />
                    </div>
                    <!--:::::::: Detail Page Right One Ads :::::::::-->
                    <div :class="`sticky ${stickyScroll ? ' top-[164px]' : 'top-14'} duration-200`">

                        <div :class="`flex flex-col gap-2`" v-if="moreDetailsContents?.length > 0">
                            <div class=" border-b-[3px] border-[#3375af] pb-1">
                                <h3 class="text-[#3375af] text-[18px] font-[600]">{{
        moreDetailContent?.category?.cat_name_bn }}
                                    নিয়ে আরও পড়ুন</h3>
                            </div>
                            <div class="detail-page-category-content-exept flex flex-col">
                                <!-- {{ moreDetailCatWisePost[mcinx] }} -->
                                <!-- Loop Item -->
                                <NuxtLink
                                    :to="getPostUrl(moreDetCatCon?.cat_slug, moreDetCatCon?.subcat_slug, moreDetCatCon?.content_type, moreDetCatCon?.content_id)"
                                    class="grid grid-cols-12 gap-4 group h-national-excpt border-b py-4"
                                    v-for="moreDetCatCon in moreDetailContent?.morecatwisePost"
                                    :key="moreDetCatCon.content_id">
                                    <div class=" col-span-5 overflow-hidden">
                                        <nuxt-img loading="lazy"
                                            :src="`${siteurl.site_url}/media/content/images/${moreDetCatCon?.img_bg_path}`"
                                            class="mx-auto w-full group-hover:scale-110 duration-300"
                                            :placeholder="img(`${siteurl.site_url}/logo/placeholder.jpg`)" />
                                    </div>
                                    <div class=" col-span-7">
                                        <h4 class="text-base font-semibold group-hover:text-[#ff0000]">{{
        moreDetCatCon?.content_heading }}</h4>
                                    </div>
                                </NuxtLink>
                                <!--/ Loop Item -->
                            </div>
                        </div>
                        <!--:::::::: Detail Page Right Two Ads :::::::::-->
                        <div v-if="DetailRightTwoAds?.status === 1" class="pb-4 mb-3 border-b border-b-[#e2e2e2]">
                            <AdsDesktopDetailRightTwo :DetailRightTwoAds="DetailRightTwoAds" />
                        </div>
                        <!--:::::::: Detail Page Right Two Ads :::::::::-->
                        <!--:::::::: Detail Page Right Three Ads :::::::::-->
                        <div v-if="DetailRightThreeAds?.status === 1" class="pb-4 mb-3 border-b border-b-[#e2e2e2]">
                            <AdsDesktopDetailRightThree :DetailRightThreeAds="DetailRightThreeAds" />
                        </div>
                        <!--:::::::: Detail Page Right Three Ads :::::::::-->
                    </div>
                </div>
                <!--:::::::: Detail Page After Ads :::::::::::-->
                <div v-if="DetailAfterAds?.status === 1"
                    class="col-span-12 py-4 border-b border-t border-b-[#e2e2e2] border-t-[#e2e2e2]">
                    <AdsDesktopDetailAfter :DetailAfterAds="DetailAfterAds" />
                </div>
                <!--:::::::: Detail Page After Ads :::::::::::-->
                <!-- Three More Content Releted -->
                <div class="col-span-12" v-if="moreDetailContent?.morereletedcontentbelow?.length > 0 && mcinx !== 2">

                    <div class="read-more">
                        <div class="category-header border-b-4 border-b-[#3375af] my-3">
                            <div class="flex gap-3 items-center">
                                <span class="w-3 h-3 bg-[#3375af]"></span>
                                <h2 class="text-[#3375af] text-[18px] font-semibold">আরও পড়ুন</h2>
                            </div>
                        </div>
                        <div class=" grid grid-cols-2 md:grid-cols-4 gap-4">

                            <NuxtLink
                                :to="getPostUrl(relDetailContent?.cat_slug, relDetailContent?.subcat_slug, relDetailContent?.content_type, relDetailContent?.content_id)"
                                class="flex flex-col gap-2 group"
                                v-for="relDetailContent in moreDetailContent?.morereletedcontentbelow[mcinx]"
                                :key="relDetailContent.content_id">
                                <div class="feature_image_readmore overflow-hidden">
                                    <nuxt-img loading="lazy"
                                        :src="`${siteurl.site_url}/media/content/images/${relDetailContent?.img_bg_path}`"
                                        class="mx-auto w-full group-hover:scale-110 duration-300"
                                        :placeholder="img(`${siteurl.site_url}/logo/placeholder.jpg`)" />
                                </div>
                                <h5 class="text-[18px] font-semibold group-hover:text-[#ff0000]">{{
        relDetailContent?.content_heading }}</h5>
                            </NuxtLink>

                        </div>
                    </div>
                </div>
                <!-- Three More Content Releted -->

                <!-- Latest 20 Posts content -->
                <div class="col-span-12" v-else>
                    <div class="read-more">
                        <div class="category-header border-b-4 border-b-[#3375af] my-3">
                            <div class="flex gap-3 items-center">
                                <span class="w-3 h-3 bg-[#3375af]"></span>
                                <h2 class="text-[#3375af] text-[18px] font-semibold">সর্বশেষ সংবাদ</h2>
                            </div>
                        </div>
                        <div class=" grid grid-cols-2 md:grid-cols-4 gap-4">
                            <!-- {{ moreDetailCatWisePost[mcinx] }} -->
                            <!-- Loop Item -->
                            <NuxtLink
                                :to="getPostUrl(latestPostC?.cat_slug, latestPostC?.subcat_slug, latestPostC?.content_type, latestPostC?.content_id)"
                                class="flex flex-col gap-2 group" v-for="latestPostC in latestPostsDpage"
                                :key="latestPostC.content_id">
                                <div class="feature_image_readmore overflow-hidden">
                                    <nuxt-img loading="lazy"
                                        :src="`${siteurl.site_url}/media/content/images/${latestPostC?.img_bg_path}`"
                                        class="mx-auto w-full group-hover:scale-110 duration-300"
                                        :placeholder="img(`${siteurl.site_url}/logo/placeholder.jpg`)" />
                                </div>
                                <h5 class="text-[18px] font-semibold group-hover:text-[#ff0000]">{{
        latestPostC?.content_heading
    }}</h5>
                            </NuxtLink>
                            <!-- Loop Item -->


                        </div>
                    </div>
                </div>
                <!-- Latest 20 Posts content -->
                <!--:::::::: Detail Page Bottom Ads :::::::::::-->
                <div v-if="DetailBottomAds?.status === 1"
                    class="col-span-12 py-4 border-b border-t border-b-[#e2e2e2] border-t-[#e2e2e2]">
                    <AdsDesktopDetailBottom :DetailBottomAds="DetailBottomAds" />
                </div>
                <!--:::::::: Detail Page Bottom Ads :::::::::::-->
            </div>
            <!--========== // <3> More Details Content ============ -->
        </div>
    </div>
    

    
    <div v-else class="errorNotfound">

        <Head>
            <Title>404 Not Found | ঢাকাপ্রকাশ</Title>
        </Head>
        <Errorpage />
    </div>
    <div id="postimagePopup"
        :class="` hidden cursor-zoom-out fixed inset-0 bg-black overflow-y-hidden overflow--hidden h-screen z-[999999999] items-center justify-center`">
        <div class="flex nuxtPartha relative h-screen w-full justify-center items-center duration-1000">
            <span :class="`absolute right-0 top-0 cursor-pointer bg-red-600 pl-4 pr-2 pt-1 pb-2 rounded-bl-[50px]`">
                <Icon name="material-symbols:close" class="text-xl cursor-pointer text-white" />
            </span>
            <img id="nuxtpopupImage" :class="`max-h-full md:h-full max-w-full duration-700`" src="" alt="">
        </div>
    </div>
    
    
    
     <!-- Fireworks container -->
              <!--<div id="fireworks-container" class="absolute top-0 left-0 w-full h-full z-10"></div>-->
        
        
         <!-- Popup -->
            <!--<div v-if="showPopup" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ">-->
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
    
    
</template>

<script setup>
import { postCreatedDateWithTime, getPostUrl } from '~/lib/helpers';

// import Fireworks from "fireworks-js";
// const showPopup = ref(false);




const siteurl = siteUrlState()
const websiteUrl = websiteUrlState()
const img = useImage()
// single Page sticky
const singlePageSticky = singlePageStickyState()
const stickyScroll = computed(() =>
    singlePageSticky.value
)
// Sitesetting - logo, social media
const sitesettings = sitesettingsState()

const category_slug = useRoute().params.category_slug
const content_id = useRoute().params.content_id


const { data: pdailts, pending } = await useFetch('/api/prismaapi/detail/postdetail', {
    method: 'POST',
    body: {
        // category_slug: category_slug,
        content_id: content_id
    }
})
// ========== First Details Content ======= // 
const detailsContent = useState(() => [])
detailsContent.value = pdailts?.value?.detailsContent

// ========== First Details Content ======= // 

// ============== First Related Content ================//
const fRelatedContents = useState(() => [])

fRelatedContents.value = pdailts?.value?.firstRelatedContents
// ============== First Related Content ================//

// ================  OG - Open Graph ====================// 
const ogUrl = ref(null);
// const okImage = `${websiteUrl?.value?.website_url}/category/${detailsContent?.value?.category?.cat_slug}/${detailsContent?.value?.content_id}`
ogUrl.value = `${websiteUrl?.value?.website_url}${getPostUrl(detailsContent?.value?.category?.cat_slug, detailsContent?.value?.subcategory?.subcat_slug, detailsContent?.value?.content_type, detailsContent?.value?.content_id)}`
const ogTitle = ref(null);
ogTitle.value = detailsContent?.value?.content_heading
const ogDescription = ref(null);
ogDescription.value = detailsContent?.value?.content_brief
const metaKeywords = ref(null);
metaKeywords.value = detailsContent?.value?.meta_keywords
ogDescription.value = detailsContent?.value?.content_brief
const ogImage = ref(null);
ogImage.value = detailsContent?.value?.og_image

const twitterTitle = ref(null);
twitterTitle.value = detailsContent?.value?.content_heading
const twitterDescription = ref(null);
twitterDescription.value = detailsContent?.value?.content_brief
// ================//  OG - Open Graph ====================// 

// ============ Latest 20 Posts ===============//
const latestPostsDpage = useState(() => [])
const { data: allLatestPost } = await useFetch('/api/prismaapi/detail/alllatestpost', {
    method: 'GET'
})
latestPostsDpage.value = allLatestPost.value
// latestPostsDpage.value = pdailts?.value?.allLatestPost
// ============ Latest 20 Posts ===============//

// ========== First Detail Right Side Category Content ======= //
const firstMoreContents = useState(() => [])
const { data: ftrightctcontent } = await useFetch('/api/prismaapi/detail/firstrightcatcontent', {
    method: 'POST',
    body: {
        cat_id: detailsContent?.value?.cat_id,
        content_id: content_id
    }
})
firstMoreContents.value = ftrightctcontent.value

// ========== More Details Contents ======= //
const moreDetailsContents = useState(() => [])
moreDetailsContents.value = pdailts?.value?.moreDetailContent
// ========== More Details Contents ======= //


//===== First Detail Inside More News =====//
// const firstInsideMoreNews = useState(() => [])
// const { data: dinsidemorenews } = await useFetch("/api/prismaapi/detail/getinsidemorenews", {
//     method: "POST",
//     body: {
//         cat_id: detailsContent?.value?.cat_id,
//         content_id: detailsContent?.value?.content_id
//     }
// })
// firstInsideMoreNews.value = dinsidemorenews?.value
//===== First Detail Inside More News =====//


// ==================== First Details Tags ======================= //
const firstContentTags = useState(() => [])
const firstsplittag = detailsContent?.value?.tags?.split(',')
if (firstsplittag) {
    firstsplittag.forEach(tagval => {
        firstContentTags.value.push(tagval)
    })
    firstContentTags.value = [...new Map(firstContentTags.value.map(fvl => [fvl, fvl])).values()]
}
// ==================== First Details Tags ======================= //



// =============== Print Script ======================= //
// const printArea = () => {
//     var prtContent = document.getElementsByClassName("d-print")[0];
//     var WinPrint = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');
//     WinPrint.document.write(prtContent.innerHTML);
//     WinPrint.document.close();
//     WinPrint.focus();
//     WinPrint.print();
//     WinPrint.close();
// }

const printPageArea = (areaID) => {

    let printContent = document.getElementById(areaID).innerHTML;
    printContent += `</br></br></br><hr><div><img style='margin-bottom: 20px; margin-top: 10px' src='${siteurl?.value?.site_url}/media/common/${sitesettings?.value?.logo}' alt='dfd' /></br><h3 style='margin: 0;  padding: 0'>যোগাযোগ: +৮৮০ ৯৬১ ৩৩৩ ১০১০</h3></br><h3 style='margin: 0;  padding: 0'>ইমেইল: info@dhakaprokash24.com</h3></br><h3 style='margin: 0; padding: 0'>ঠিকানা: ৯৩, কাজী নজরুল ইসলাম এভিনিউ, (ষষ্ঠ তলা) </br>কারওয়ান বাজার, ঢাকা-১২১৫।</h3></div>`;
    let originalContent = document.body.innerHTML;
    let logo = `<img style='margin-bottom: 20px; margin-top: 10px;' src='${siteurl?.value?.site_url}/media/common/${sitesettings?.value?.logo}' alt='dfd' />`
    logo += printContent
    document.body.innerHTML = logo;

    window.print();
    document.body.innerHTML = originalContent;
    location.reload()
    // navigateTo(`/category/${category_slug}/${content_id}`)

}

// =============== Print Script ===================== //

//================= Inside More Detail Post Except Read More ===================//
// const insideMoreExceptPost = useState(() => [])
// for (let m = 0; m < moreDetailsContents?.value?.length; m++) {

//     const { data: insidempect } = await useFetch("/api/prismaapi/detail/moreinsidemorenews", {
//         method: 'POST',
//         body: {
//             currentPostDetailId: detailsContent?.value?.content_id,
//             morePostId: moreDetailsContents?.value[m]?.content_id,
//             cat_id: moreDetailsContents?.value[m]?.cat_id
//         }
//     })
//     let insidePost = insidempect.value
//     insideMoreExceptPost.value.push(insidePost)
// }
// insideMoreExceptPost.value = [...new Set(insideMoreExceptPost.value)]
// console.log(insideMoreExceptPost.value)
//================= Inside More Detail Post Except Read More ===================//

const pvScrollPosi = ref(0)
const currScrollPosi = ref(0)
const balvalue = ref(null)

onMounted(() => {
    
    
//      startFireworks();
   
//   showPopup.value = true;
//   setTimeout(() => {
//     showPopup.value = false;
//   }, 5000);

    // =========== Popup Image ============== //
    const postimagePopup = document.querySelector('#postimagePopup')
    const bodyWrapper = document.querySelector('#bodyWrapper')
    // ======== Open Popup =============== //
    const singleImage = document.querySelectorAll('.detail-page .single-post img')
    singleImage.forEach(siglImg => {
        siglImg.addEventListener('click', (sevent) => {
            postimagePopup.classList.remove('hidden')
            // ok.value = true
            const img = document.querySelector('.nuxtPartha #nuxtpopupImage')
            img.src = sevent.target.src
            bodyWrapper.classList.add('overflow-hidden')
        })
    })
    // ======== Open Popup =============== //

    // Close Popup Image
    postimagePopup.addEventListener('click', () => {
        postimagePopup.classList.add('hidden')
        bodyWrapper.classList.remove('overflow-hidden')
    })
    // Close Popup Image
    // =========== Popup Image ============== //


    // ======== Share This Button Refetch global code ====== //
    // const st = window.__sharethis__
    // if (!st) {
    //     const script = document.createElement('script')
    //     script.src =
    //         'https://platform-api.sharethis.com/js/sharethis.js#property=651137566b9a9300123b73f3&product=inline-share-buttons'
    //     document.body.appendChild(script)
    // } else if (typeof st.initialize === 'function') {
    //     st.href = window.location.href
    //     st.initialize()
    // }
    // ======== Share This Button Refetch global code ====== //


    // ================ Share This Social Icon Refetch for First Detail Content =================== //
    window.__sharethis__.load('inline-share-buttons', {
        alignment: 'right',
        id: `sharethis-${detailsContent?.value?.content_id}`,
        enabled: true,
        font_size: 11,
        padding: 8,
        radius: 45,
        min_count: 0,
        networks: ['facebook', 'messenger', 'whatsapp', 'twitter', 'linkedin', 'print'],
        size: 30,
        show_mobile_buttons: true,
        spacing: 10, // custom url
        title: detailsContent?.value?.content_heading,
        language: "en",
        show_total: true,
        url: `${websiteUrl?.value?.website_url}${getPostUrl(detailsContent?.value?.category?.cat_slug, detailsContent?.value?.subcategory?.subcat_slug, detailsContent?.value?.content_type, detailsContent?.value?.content_id)}`,
        image: detailsContent?.value?.og_image, // useful for pinterest sharing buttons
        description: detailsContent?.value?.content_brief
        // username: "ShareThis" // custom @username for twitter sharing
    });
    // ================ Share This Social Icon Refetch for First Detail Content =================== //
    // ================ Share This Social Icon Refetch for 3 More Detail Content =================== //
    for (let stbtn = 0; stbtn < moreDetailsContents?.value?.length; stbtn++) {
        window.__sharethis__.load('inline-share-buttons', {
            alignment: 'right',
            id: `sharethis-${moreDetailsContents?.value[stbtn]?.content_id}`,
            enabled: true,
            font_size: 11,
            padding: 8,
            radius: 45,
            min_count: 0,
            networks: ['facebook', 'messenger', 'whatsapp', 'twitter', 'linkedin', 'print'],
            size: 30,
            show_mobile_buttons: true,
            spacing: 10, // custom url
            title: moreDetailsContents[stbtn]?.value?.content_heading,
            language: "en",
            show_total: true,
            url: `${websiteUrl?.value?.website_url}${getPostUrl(moreDetailsContents?.value[stbtn]?.category?.cat_slug, moreDetailsContents?.value[stbtn]?.subcategory?.subcat_slug, moreDetailsContents?.value[stbtn]?.content_type, moreDetailsContents?.value[stbtn]?.content_id)}`,
            image: moreDetailsContents?.value[stbtn]?.og_image, // useful for pinterest sharing buttons
            description: moreDetailsContents?.value[stbtn]?.content_brief
            // username: "ShareThis" // custom @username for twitter sharing
        });
    }
    // ================ Share This Social Icon Refetch for 3 More Detail Content =================== //


    pvScrollPosi.value = window.scrollY
    // ============= Scolling ===============
    window.addEventListener("scroll", function () {

        const contentSections = document.querySelectorAll('.single-post');

        currScrollPosi.value = window.scrollY

        if (pvScrollPosi?.value > currScrollPosi?.value) {
            // Scroll Up
            for (let i = 0; i < contentSections?.length; i++) {
                const rect = contentSections[i].getBoundingClientRect();
                // if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                //     console.log(`Element is partially visible in screen top ${contentSections[i].id}`);
                // }

                // checking for partial visibility
                if (rect.top < window.innerHeight && rect.bottom >= 0) {
                    // console.log(`Element is partially visible in screen top ${contentSections[i].getAttribute('data-title')}`);

                    document.querySelector('title').textContent = contentSections[i].getAttribute('data-title');
                    document.querySelector('meta[name="keywords"]').setAttribute("content", contentSections[i].getAttribute('data-keywords'));
                    document.querySelector('meta[property="og:title"]').setAttribute("content", contentSections[i].getAttribute('data-title'));
                    document.querySelector('meta[property="og:description"]').setAttribute("content", contentSections[i].getAttribute('data-description'));
                    document.querySelector('meta[property="og:image"]').setAttribute("content", contentSections[i].getAttribute('data-src'));
                    document.querySelector('meta[property="og:url"]').setAttribute("content", contentSections[i].getAttribute('data-href'));
                    document.querySelector('meta[name="twitter:title"]').setAttribute("content", contentSections[i].getAttribute('data-title'));
                    document.querySelector('meta[name="twitter:description"]').setAttribute("content", contentSections[i].getAttribute('data-description'));
                    document.querySelector('meta[name="twitter:image"]').setAttribute("content", contentSections[i].getAttribute('data-src'));
                    document.querySelector('meta[name="twitter:url"]').setAttribute("content", contentSections[i].getAttribute('data-href'));
                    // history.replaceState(contentSections[i].getAttribute('data-nid'), contentSections[i].getAttribute('data-title'), contentSections[i].getAttribute('data-href'));
                    // history.pushState({}, null, contentSections[i].getAttribute('data-href'));
                    // router.replace({ hash: `${contentSections[i].getAttribute('data-href')}` })
                    // document.querySelector('meta[property="og:title"]').setAttribute("content", contentSections[i].title)
                }

            }

        } else {

            // Scroll down

            for (let p = 0; p < contentSections?.length; p++) {
                const rect = contentSections[p]?.getBoundingClientRect();
                // if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                //     console.log(`Element is partially visible in screen top ${contentSections[i].id}`);
                // }

                // checking for partial visibility
                if (rect.top < window.innerHeight && rect.bottom >= 0) {
                    // console.log(`Element is partially visible in screen bottom ${contentSections[p].getAttribute('data-title')}`);

                    document.querySelector('title').textContent = contentSections[p].getAttribute('data-title');
                    document.querySelector('meta[name="keywords"]').setAttribute("content", contentSections[p].getAttribute('data-keywords'));
                    document.querySelector('meta[property="og:title"]').setAttribute("content", contentSections[p].getAttribute('data-title'));
                    document.querySelector('meta[property="og:description"]').setAttribute("content", contentSections[p].getAttribute('data-description'));
                    document.querySelector('meta[property="og:image"]').setAttribute("content", contentSections[p].getAttribute('data-src'));
                    document.querySelector('meta[property="og:url"]').setAttribute("content", contentSections[p].getAttribute('data-href'));
                    document.querySelector('meta[name="twitter:title"]').setAttribute("content", contentSections[p].getAttribute('data-title'));
                    document.querySelector('meta[name="twitter:description"]').setAttribute("content", contentSections[p].getAttribute('data-description'));
                    document.querySelector('meta[name="twitter:image"]').setAttribute("content", contentSections[p].getAttribute('data-src'));
                    document.querySelector('meta[name="twitter:url"]').setAttribute("content", contentSections[p].getAttribute('data-href'));
                    // history.replaceState(contentSections[p].getAttribute('data-nid'), contentSections[p].getAttribute('data-title'), contentSections[p].getAttribute('data-href'));
                    // history.pushState({}, null, contentSections[p].getAttribute('data-href'));
                    // document.querySelector('title').value("content", ok)
                    // router.addRoute({ path: `/sdfsdf` })
                }
            }


        }
        pvScrollPosi.value = currScrollPosi?.value

    })
    // ============= Scolling =============== //


    // ================== First Post Detail Content Inside Element Added =============== //

    // Select First Post detail Class Name
    const firstDetail = document.getElementsByClassName('postdetails')
    // console.log(ok.querySelectorAll('p').length)
    // Select All P Tag
    let descParam = firstDetail[0]?.querySelectorAll('p');
    // ==== Gooogle news Link === //
    let googleNewses = () => {
        let link = document.createElement(`a`);
        link.className = 'text-center border border-[#d3d3d3] bg-[#b5d3f366] py-2 my-4 group hover:bg-[#3375af] print:py-0 print:my-1 print:hidden print:border-none';
        link.style.cssText = `text-decoration:none; display:flex; justify-content:center`;
        link.href = `https://news.google.com/publications/CAAqBwgKMNq9sgsw59jJAw?ceid=BD:bn&oc=3&hl=bn&gl=BD`;
        link.target = `_blank`;

        let img = document.createElement(`img`);
        img.className = 'print:hidden'
        img.src = `https://cdn-icons-png.flaticon.com/512/2702/2702605.png`;
        img.style.cssText = `width: 25px; margin-right: 8px`;

        let h4 = document.createElement(`h4`);
        h4.className = 'text-[#337ab7] group-hover:text-[#ffffff] print:hidden';
        h4.style.cssText = `font-weight: bold`;
        h4.innerText = `সর্বশেষ খবর পেতে ঢাকাপ্রকাশ এর গুগল নিউজ চ্যানেলটি সাবস্ক্রাইব করুন ।`;
        link.append(img);
        link.append(h4);

        return link;
    }
    if (descParam?.length > 1) {
        descParam[0].parentNode.insertBefore(googleNewses(), descParam[0].nextSibling);
    }
    // ==== Gooogle news Link === //

    // if (firstInsideMoreNews?.value?.length > 0) {
    //     let insertRelatedNewses = (title, href) => {

    //         let relatedNews = document.createElement('div');
    //         relatedNews.className = 'inside-news my-4 print:hidden';

    //         let h5 = document.createElement('h5');
    //         // h5.style.fontSize = '16px';
    //         h5.className = 'text-[16px] text-black font-bold'
    //         // h5.style.fontWeight = 'bold';
    //         h5.innerText = 'আরও পড়ুন';
    //         relatedNews.append(h5);

    //         let containerFluid = document.createElement('div');
    //         containerFluid.className = 'container-fluid border border-[#e2e2e2] mt-1 group';
    //         // containerFluid.style.border = '1px solid #575757';
    //         relatedNews.append(containerFluid);

    //         // let link = document.createElement('a');
    //         // link.href = href;
    //         // containerFluid.append(link);

    //         let headline = document.createElement('div');
    //         headline.className = 'headline py-2 px-4 my-1 text-[#121212] text-[16px] font-bold group-hover:text-[#3375af] cursor-pointer';
    //         // headline.style.cssText = 'font-size:19px;font-weight: bold; width: 65%; float: left';
    //         // headline.style.cssText = 'font-size:16px;font-weight: bold;';
    //         headline.innerText = title;
    //         // link.append(headline);
    //         containerFluid.append(headline);
    //         headline.addEventListener('click', function handleClick(event) {
    //             navigateTo(`/${href}`)
    //         });
    //         // let img = document.createElement('img');
    //         // img.className = 'marginTop10 marginBottom10';
    //         // img.style.cssText = 'width: 85px;float: right';
    //         // img.src = src;
    //         // img.title = title;
    //         // img.alt = title;
    //         // link.append(img);

    //         return relatedNews;
    //     }

    //     function fJsNewsURLs(cat_slug, subcat_slug, content_type, content_id) {
    //         return `${cat_slug}/${subcat_slug ? subcat_slug : (content_type === 1 ? 'news' : 'article')}/${content_id}`;
    //         // return location.origin + '/category/' + cat_slug + '/' + content_id;
    //         // return location.origin+'/'+cat_slug+(subcat_slug ? subcat_slug : '')+'/news/'+content_id;
    //     }


    //     let itemIncrement = 0;

    //     descParam.forEach((item, i) => {

    //         if (i > 0 && i % 3 === 0 && firstInsideMoreNews?.value[itemIncrement]) {
    //             descParam[i].parentNode.insertBefore(insertRelatedNewses(firstInsideMoreNews?.value[itemIncrement]?.content_heading, fJsNewsURLs(firstInsideMoreNews?.value[itemIncrement].cat_slug, firstInsideMoreNews?.value[itemIncrement].subcat_slug, firstInsideMoreNews?.value[itemIncrement].content_type, firstInsideMoreNews?.value[itemIncrement].content_id)), descParam[i - 1].nextSibling);
    //             itemIncrement++;
    //         }
    //     })
    // }

    // ================== End First Post Detail Content Inside Element Added =============== //

    // ================== More Post Details Inside Element Added ==========================// 

    // Start For loop
    try {

        // for (let i = 0; i < insideMoreExceptPost?.value?.length; i++) {
        for (let i = 0; i < 3; i++) {

            // let insideMoreNews = insideMoreExceptPost?.value[i];
            let desc = document.getElementsByClassName('postdetailinside' + i)
            let descParas = desc[0]?.querySelectorAll("p")
            // ==== Gooogle news Link === //
            let googleNews = () => {
                let link = document.createElement(`a`);
                link.className = `text-center border border-[#d3d3d3] bg-[#b5d3f366] py-2 my-4 group hover:bg-[#3375af] print:py-0 print:my-1 print:hidden print:border-none`;
                link.style.cssText = `text-decoration:none; display:flex; justify-content:center`;
                link.href = `https://news.google.com/publications/CAAqBwgKMNq9sgsw59jJAw?ceid=BD:bn&oc=3&hl=bn&gl=BD`;
                link.target = `_blank`;

                let img = document.createElement(`img`);
                img.className = 'print:hidden'
                img.src = `https://cdn-icons-png.flaticon.com/512/2702/2702605.png`;
                img.style.cssText = `width: 25px; margin-right: 8px`;

                let h4 = document.createElement(`h4`);
                h4.className = 'text-[#337ab7] group-hover:text-[#ffffff] print:hidden';
                h4.style.cssText = `font-weight: bold`;
                h4.innerText = `সর্বশেষ খবর পেতে ঢাকাপ্রকাশ এর গুগল নিউজ চ্যানেলটি সাবস্ক্রাইব করুন ।`;
                link.append(img);
                link.append(h4);

                return link;
            }
            if (descParas?.length > 1) {
                descParas[0].parentNode.insertBefore(googleNews(), descParas[0].nextSibling);
            }
            // ==== Gooogle news Link === //

            // let insertRelatedNews = (title, href) => {

            //     let relatedNews = document.createElement('div');
            //     relatedNews.className = 'inside-news my-4 print:hidden';

            //     let h5 = document.createElement('h5');

            //     h5.className = 'text-[16px] text-black font-bold'

            //     h5.innerText = 'আরও পড়ুন';
            //     relatedNews.append(h5);

            //     let containerFluid = document.createElement('div');
            //     containerFluid.className = 'container-fluid border border-[#e2e2e2] mt-1 group';

            //     relatedNews.append(containerFluid);
            //     // let link = document.createElement('a');
            //     // link.href = href;
            //     // containerFluid.append(link);

            //     let headline = document.createElement('div');
            //     headline.className = 'headline py-2 px-4 my-1 text-[#121212] text-[16px] font-bold group-hover:text-[#3375af] cursor-pointer';
            //     // headline.style.cssText = 'font-size:19px;font-weight: bold; width: 65%; float: left';
            //     // headline.style.cssText = 'font-size:16px;font-weight: bold;';
            //     headline.innerText = title;
            //     // link.append(headline);
            //     containerFluid.append(headline);
            //     headline.addEventListener('click', function handleClick(event) {
            //         navigateTo(`/${href}`)
            //     });

            //     return relatedNews;
            // }

            // let itemIncrement = 0;
            // descParas?.forEach((item, i) => {

            //     if (i > 0 && i % 3 === 0 && insideMoreNews[itemIncrement]) {
            //         descParas[0].parentNode.insertBefore(insertRelatedNews(insideMoreNews[itemIncrement]?.content_heading, fJsNewsURL(insideMoreNews[itemIncrement].cat_slug, insideMoreNews[itemIncrement].subcat_slug, insideMoreNews[itemIncrement].content_type, insideMoreNews[itemIncrement].content_id)), descParas[i - 1].nextSibling);
            //         itemIncrement++;
            //     }
            // })

            // function fJsNewsURL(cat_slug, subcat_slug, content_type, content_id) {
            //     return `${cat_slug}/${subcat_slug ? subcat_slug : (content_type === 1 ? 'news' : 'article')}/${content_id}`;
            //     // return location.origin+'/'+cat_slug+(subcat_slug ? subcat_slug : '')+'/news/'+content_id;
            // }

        }
        // End For loop
    } catch (e) {
        console.log(e)
    }

    // ================= END More Post Details Inside Element Added =======================// 
})

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
//     fireworks.stop(); // Stop after 5 seconds
//     container.style.display = "none";
//   }, 5000);
// };

//========== Detail Page Top Ads ==========//
// Page 1 = Common, 2 = Home Page, 3 = Category Page, 4 = Details Page
const DetailTopAds = useState(() => '')
const { data: detTpAds } = await useFetch('/api/prismaapi/adsmanager/commonads', {
    method: "POST",
    body: {
        page: 4,
        position: 1
    }

})
DetailTopAds.value = detTpAds?.value
//========== Detail Page Top Ads ==========//

//========== Detail Page After Ads ==========//
// Page 1 = Common, 2 = Home Page, 3 = Category Page, 4 = Details Page
const DetailAfterAds = useState(() => '')
const { data: detaftAds } = await useFetch('/api/prismaapi/adsmanager/commonads', {
    method: "POST",
    body: {
        page: 4,
        position: 5
    }
})
DetailAfterAds.value = detaftAds?.value
//========== Detail Page After Ads ==========//

//========== Detail Page Bottom Ads ==========//
// Page 1 = Common, 2 = Home Page, 3 = Category Page, 4 = Details Page
const DetailBottomAds = useState(() => '')
const { data: detbtmAds } = await useFetch('/api/prismaapi/adsmanager/commonads', {
    method: "POST",
    body: {
        page: 4,
        position: 6
    }
})
DetailBottomAds.value = detbtmAds?.value
//========== Detail Page Bottom Ads ==========//

//========== Detail Page Right One Ads ==========//
// Page 1 = Common, 2 = Home Page, 3 = Category Page, 4 = Details Page
const DetailRightOneAds = useState(() => '')
const { data: detrtoneAds } = await useFetch('/api/prismaapi/adsmanager/commonads', {
    method: "POST",
    body: {
        page: 4,
        position: 7
    }
})
DetailRightOneAds.value = detrtoneAds?.value
//========== Detail Page Right One Ads ==========//

//========== Detail Page Right Two Ads ==========//
// Page 1 = Common, 2 = Home Page, 3 = Category Page, 4 = Details Page
const DetailRightTwoAds = useState(() => '')
const { data: detrttwoAds } = await useFetch('/api/prismaapi/adsmanager/commonads', {
    method: "POST",
    body: {
        page: 4,
        position: 8
    }
})
DetailRightTwoAds.value = detrttwoAds?.value
//========== Detail Page Right Two Ads ==========//

//========== Detail Page Right Three Ads ==========//
// Page 1 = Common, 2 = Home Page, 3 = Category Page, 4 = Details Page
const DetailRightThreeAds = useState(() => '')
const { data: detrtthreeAds } = await useFetch('/api/prismaapi/adsmanager/commonads', {
    method: "POST",
    body: {
        page: 4,
        position: 9
    }
})
DetailRightThreeAds.value = detrtthreeAds?.value
//========== Detail Page Right Three Ads ==========//

</script>

<style scoped>
p {
    line-height: 1.7 !important;
}
</style>