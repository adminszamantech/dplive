<template>
    <div class=" max-w-[1280px] mx-auto detail-page px-4 md:px-2 py-4">

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
        <div class="breadcrump pb-3 md:pb-1">
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
            <div class="col-span-12 md:col-span-9" id="singlepost">
                <div class="single-post flex flex-col gap-3" :data-title="detailsContent?.content_heading"
                    :data-nid="detailsContent?.content_id" :data-description="detailsContent?.content_brief"
                    :data-keywords="detailsContent?.meta_keywords"
                    :data-href="`${websiteUrl?.website_url}/category/${detailsContent?.category?.cat_slug}/${detailsContent?.content_id}`"
                    :data-src="`${siteurl?.site_url}/media/content/images/${detailsContent?.img_bg_path}`">
                    <!-- <div class="single-post flex flex-col gap-3" :data-title="detailsContent?.content_heading"
                    :data-nid="detailsContent?.content_id" :data-description="detailsContent?.content_brief"
                    :data-keywords="detailsContent?.meta_keywords"
                    :data-href="`${websiteUrl?.website_url}/category/${detailsContent?.category?.cat_slug}/${detailsContent?.content_id}`"
                    :data-src="`${siteurl?.site_url}/api/ogimage/get/${detailsContent?.category?.cat_slug}?imgPath=${detailsContent?.img_bg_path}`"> -->
                    <div class="singlePost-heading flex flex-col gap-2">
                        <h4 v-if="detailsContent?.content_sub_heading" class="text-[20px] text-[#ff0000]">{{
                            detailsContent?.content_sub_heading }}</h4>
                        <h2 class="text-3xl md:text-[32px] md:leading-[50px] print:text-[32px]">{{
                            detailsContent?.content_heading }}
                            {{ balvalue }}
                        </h2>
                        <div class="h-2 w-12 rounded-md bg-[#3375af] print:hidden"></div>

                    </div>

                    <div class="flex flex-col gap-2 md:gap-0 md:flex-row justify-between md:items-end border-b pb-3">
                        <div class="author-details flex flex-col gap-1">
                            <p v-if="detailsContent?.author">
                                <NuxtLink class="hover:text-[#3375af] font-[600]"
                                    :to="`/author/${detailsContent?.author?.author_slug}`">{{
                                        detailsContent?.author?.author_name_bn }}</NuxtLink>
                            </p>
                            <p v-else>
                                <NuxtLink class="hover:text-[#3375af] font-[600]" to="/author/dhaka-prokash-desk">ঢাকাপ্রকাশ
                                    ডেস্ক</NuxtLink>
                            </p>
                            <p>প্রকাশ: <ClientOnly><span>{{ postCreatedDate(detailsContent?.created_at) }}</span>
                                </ClientOnly>
                            </p>
                        </div>
                        <!-- Social Share -->
                        <div class="social-item flex gap-2 items-start md:justify-center print:hidden">
                            <a :href="`https://www.facebook.com/sharer.php?u=${ogUrl}`" target="_blank">
                                <svg class=" hover:scale-125 duration-200" xmlns="http://www.w3.org/2000/svg" height="28"
                                    width="28" viewBox="0 0 32 32" enable-background="new 0 0 32 32" xml:space="preserve">
                                    <path fill="#1877F2"
                                        d="M16,0L16,0c8.837,0,16,7.163,16,16l0,0c0,8.837-7.163,16-16,16l0,0C7.163,32,0,24.837,0,16l0,0 C0,7.163,7.163,0,16,0z">
                                    </path>
                                    <path fill="#FFFFFF"
                                        d="M18,17.5h2.5l1-4H18v-2c0-1.03,0-2,2-2h1.5V6.14C21.174,6.097,19.943,6,18.643,6C15.928,6,14,7.657,14,10.7 v2.8h-3v4h3V26h4V17.5z">
                                    </path>
                                </svg>
                            </a>
                            <a :href="`https://twitter.com/intent/tweet?url=${ogUrl}`" target="_blank">
                                <svg class=" hover:scale-125 duration-200" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve" height="28"
                                    width="28">
                                    <circle fill="#0F1419" cx="12" cy="12" r="12"></circle>
                                    <path fill="#FFFFFF" d="M15.531,7h1.662l-3.63,4.236L17.833,17h-3.343l-2.62-3.495L8.876,17H7.212l3.882-4.531L7,7h3.427
l2.366,3.195L15.531,7z M14.947,15.986h0.92L9.926,7.962H8.937L14.947,15.986z"></path>
                                </svg>
                            </a>
                            <!-- Social Share -->
                            <div class="cursor-pointer" @click="printPageArea('singlepost')">
                                <svg class=" hover:scale-125 duration-200" height="28" width="28"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" enable-background="new 0 0 32 32"
                                    xml:space="preserve">
                                    <path fill="#595959"
                                        d="M16,0L16,0c8.837,0,16,7.163,16,16l0,0c0,8.837-7.163,16-16,16l0,0C7.163,32,0,24.837,0,16l0,0 C0,7.163,7.163,0,16,0z">
                                    </path>
                                    <path fill="#FFFFFF"
                                        d="M12,20h8v4h-8V20z M21.6,22.4v-4H10.4v4H8.8c-0.212,0-0.416-0.084-0.566-0.234C8.084,22.016,8,21.812,8,21.6 v-8c0-0.212,0.084-0.416,0.234-0.566C8.384,12.884,8.588,12.8,8.8,12.8h14.4c0.212,0,0.416,0.084,0.566,0.234 C23.916,13.184,24,13.388,24,13.6v8c0,0.212-0.084,0.416-0.234,0.566c-0.15,0.15-0.353,0.234-0.566,0.234H21.6z M10.4,14.4V16h2.4 v-1.6H10.4z M12,8h8c0.212,0,0.416,0.084,0.566,0.234C20.716,8.384,20.8,8.588,20.8,8.8v2.4h-9.6V8.8 c0-0.212,0.084-0.416,0.234-0.566C11.584,8.084,11.788,8,12,8z">
                                    </path>
                                </svg>
                            </div>

                        </div>
                    </div>
                    <div class="feature-image border-b">
                        <nuxt-img :src="`${siteurl.site_url}/media/content/images/${detailsContent?.img_bg_path}`"
                            class="mx-auto w-full" :placeholder="img(`${siteurl.site_url}/logo/placeholder.jpg`)" />
                        <p v-if="detailsContent?.img_bg_caption" class="feature-image-capture text-center py-2">{{
                            detailsContent?.img_bg_caption }}</p>
                    </div>
                    <div class="singlePost-detail grid grid-cols-12">
                        <div class=" hidden md:block md:col-span-2"></div>
                        <div class="col-span-12 md:col-span-8">

                            <div class="postdetails text-[18px] text-gray-700 pb-4"
                                v-html="detailsContent?.content_details">
                            </div>

                            <!-- Tag Area -->
                            <div class="category-tags-area flex flex-col gap-4 border-b border-t pb-4 pt-3 print:hidden">
                                <NuxtLink :to="`/${detailsContent?.category?.cat_slug}`" class="text-[18px] py-1"> <span
                                        class=" py-1 font-semibold border-b-2 border-[#3375af] text-[#3375af]">{{
                                            detailsContent?.category?.cat_name_bn }}</span> থেকে আরও পড়ুন</NuxtLink>
                                <ul class="flex flex-wrap gap-3 items-center" v-if="firstContentTags?.length > 0">

                                    <li v-for="ftag in firstContentTags"
                                        class="text-[#337ab7] bg-[#d9edf7] rounded-sm hover:bg-[#d0e6f1]">
                                        <NuxtLink class="px-4 py-2 block" :to="`/topic/${ftag}`">{{ ftag }}</NuxtLink>
                                    </li>
                                </ul>
                            </div>
                            <!-- Tag Area -->
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
                    <div :class="`flex flex-col gap-2`" v-if="firstMoreContents?.length > 0">
                        <div class=" border-b-[3px] border-[#3375af] pb-1">
                            <h3 class="text-[#3375af] text-[18px] font-[600]">{{ detailsContent?.category?.cat_name_bn }}
                                নিয়ে
                                আরও পড়ুন</h3>
                        </div>
                        <div class="detail-page-category-content-exept flex flex-col">
                            <!-- Loop Item -->
                            <div class="grid grid-cols-12 gap-4 group h-national-excpt border-b py-4"
                                v-for="fmoreContent in firstMoreContents" :key="fmoreContent.content_id">
                                <div class=" col-span-5 overflow-hidden">
                                    <NuxtLink :to="`/category/${fmoreContent?.cat_slug}/${fmoreContent?.content_id}`">
                                        <nuxt-img
                                            :src="`${siteurl.site_url}/media/content/images/${fmoreContent?.img_bg_path}`"
                                            class="mx-auto w-full group-hover:scale-110 duration-300"
                                            :placeholder="img(`${siteurl.site_url}/logo/placeholder.jpg`)" />
                                    </NuxtLink>
                                </div>
                                <div class=" col-span-7">
                                    <NuxtLink :to="`/category/${fmoreContent?.cat_slug}/${fmoreContent?.content_id}`">
                                        <h4 class="text-[16px] leading-tight group-hover:text-[#ff0000]">{{
                                            fmoreContent?.content_heading }}</h4>
                                    </NuxtLink>
                                </div>
                            </div>
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


            <!-- Read more first content -->
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
                        <NuxtLink :to="`/category/${fRelatedContent?.category?.cat_slug}/${fRelatedContent?.content_id}`"
                            class="flex flex-col gap-2 group" v-for="fRelatedContent in fRelatedContents"
                            :key="fRelatedContent.content_id">
                            <div class="feature_image_readmore overflow-hidden">
                                <nuxt-img :src="`${siteurl.site_url}/media/content/images/${fRelatedContent?.img_bg_path}`"
                                    class="mx-auto w-full group-hover:scale-110 duration-300"
                                    :placeholder="img(`${siteurl.site_url}/logo/placeholder.jpg`)" />
                            </div>
                            <h5 class="text-[18px] group-hover:text-[#ff0000]">{{ fRelatedContent?.content_heading }}</h5>
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
            :key="moreDetailContent.content_id" class="border-t pt-8  mt-10 grid grid-cols-12 gap-5 relative d-print">

            <div class="col-span-12 md:col-span-9" :id="`singlepost${mcinx}`">
                <!----- Breadcump ----->
                <div class="breadcrump pb-3 md:pb-1">
                    <div class="flex gap-1 justify-start items-center">
                        <NuxtLink :to="`/${moreDetailContent?.category?.cat_slug}`"
                            class="text-[#3375af] font-semibold border-b-2 border-b-[#3375af]">
                            <!-- {{ detailsContent?.category?.cat_name_bn }} -->
                            <h1 class="text-base md:text-xl">{{ moreDetailContent?.category?.cat_name_bn }}</h1>
                        </NuxtLink>
                    </div>
                </div>
                <!----- Breadcump relatedPostOgImage ----->
                <!-- <div class="single-post flex flex-col gap-3" :data-title="moreDetailContent?.content_heading"
                    :data-nid="moreDetailContent?.content_id" :data-description="moreDetailContent?.content_brief"
                    :data-keywords="moreDetailContent?.meta_keywords"
                    :data-href="`${websiteUrl?.website_url}/category/${moreDetailContent?.category?.cat_slug}/${moreDetailContent?.content_id}`"
                    :data-src="`${siteurl?.site_url}/api/ogimage/get/${moreDetailContent?.category?.cat_slug}?imgPath=${moreDetailContent?.img_bg_path}`"> -->
                    <div class="single-post flex flex-col gap-3" :data-title="moreDetailContent?.content_heading"
                    :data-nid="moreDetailContent?.content_id" :data-description="moreDetailContent?.content_brief"
                    :data-keywords="moreDetailContent?.meta_keywords"
                    :data-href="`${websiteUrl?.website_url}/category/${moreDetailContent?.category?.cat_slug}/${moreDetailContent?.content_id}`"
                    :data-src="`${siteurl?.site_url}/media/content/images/${moreDetailContent?.img_bg_path}`">

                    <div class="singlePost-heading flex flex-col gap-2">
                        <h4 v-if="moreDetailContent?.content_sub_heading" class="text-[20px] text-[#ff0000]">{{
                            moreDetailContent?.content_sub_heading }}</h4>
                        <h2 class="text-3xl md:text-[32px] md:leading-[50px] print:text-[32px]">{{
                            moreDetailContent.content_heading
                        }} {{ balvalue }}</h2>
                        <div class="h-2 w-12 rounded-md bg-[#3375af] print:hidden"></div>
                    </div>

                    <div class="flex justify-between items-end border-b pb-3">
                        <div class="author-details flex flex-col gap-1" v-if="moreDetailContent?.author">
                            <p v-if="moreDetailContent?.author">
                                <NuxtLink class="hover:text-[#3375af] font-[600]"
                                    :to="`/author/${moreDetailContent?.author?.author_slug}`">{{
                                        moreDetailContent?.author?.author_name_bn }}</NuxtLink>
                            </p>
                            <p v-else>
                                <NuxtLink class="hover:text-[#3375af] font-[600]" to="/author/dhaka-prokash-desk">ঢাকাপ্রকাশ
                                    ডেস্ক</NuxtLink>
                            </p>
                            <p>প্রকাশ: <ClientOnly><span>{{ postCreatedDate(moreDetailContent.created_at) }}</span>
                                </ClientOnly>
                            </p>
                        </div>
                        <!-- Social Share -->
                        <div class="social-item flex gap-2 items-start justify-center print:hidden">
                            <a :href="`https://www.facebook.com/sharer.php?u=${websiteUrl?.website_url}/category/${moreDetailContent?.category?.cat_slug}/${moreDetailContent?.content_id}`"
                                target="_blank">
                                <svg class=" hover:scale-125 duration-200" xmlns="http://www.w3.org/2000/svg" height="28"
                                    width="28" viewBox="0 0 32 32" enable-background="new 0 0 32 32" xml:space="preserve">
                                    <path fill="#1877F2"
                                        d="M16,0L16,0c8.837,0,16,7.163,16,16l0,0c0,8.837-7.163,16-16,16l0,0C7.163,32,0,24.837,0,16l0,0 C0,7.163,7.163,0,16,0z">
                                    </path>
                                    <path fill="#FFFFFF"
                                        d="M18,17.5h2.5l1-4H18v-2c0-1.03,0-2,2-2h1.5V6.14C21.174,6.097,19.943,6,18.643,6C15.928,6,14,7.657,14,10.7 v2.8h-3v4h3V26h4V17.5z">
                                    </path>
                                </svg>
                            </a>
                            <a :href="`https://twitter.com/intent/tweet?url=${websiteUrl?.website_url}/category/${moreDetailContent?.category?.cat_slug}/${moreDetailContent?.content_id}`"
                                target="_blank">
                                <svg class=" hover:scale-125 duration-200" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve" height="28"
                                    width="28">
                                    <circle fill="#0F1419" cx="12" cy="12" r="12"></circle>
                                    <path fill="#FFFFFF" d="M15.531,7h1.662l-3.63,4.236L17.833,17h-3.343l-2.62-3.495L8.876,17H7.212l3.882-4.531L7,7h3.427
l2.366,3.195L15.531,7z M14.947,15.986h0.92L9.926,7.962H8.937L14.947,15.986z"></path>
                                </svg>
                            </a>
                            <div class=" cursor-pointer" @click="printPageArea(`singlepost${mcinx}`)">
                                <svg class=" hover:scale-125 duration-200" height="28" width="28"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" enable-background="new 0 0 32 32"
                                    xml:space="preserve">
                                    <path fill="#595959"
                                        d="M16,0L16,0c8.837,0,16,7.163,16,16l0,0c0,8.837-7.163,16-16,16l0,0C7.163,32,0,24.837,0,16l0,0 C0,7.163,7.163,0,16,0z">
                                    </path>
                                    <path fill="#FFFFFF"
                                        d="M12,20h8v4h-8V20z M21.6,22.4v-4H10.4v4H8.8c-0.212,0-0.416-0.084-0.566-0.234C8.084,22.016,8,21.812,8,21.6 v-8c0-0.212,0.084-0.416,0.234-0.566C8.384,12.884,8.588,12.8,8.8,12.8h14.4c0.212,0,0.416,0.084,0.566,0.234 C23.916,13.184,24,13.388,24,13.6v8c0,0.212-0.084,0.416-0.234,0.566c-0.15,0.15-0.353,0.234-0.566,0.234H21.6z M10.4,14.4V16h2.4 v-1.6H10.4z M12,8h8c0.212,0,0.416,0.084,0.566,0.234C20.716,8.384,20.8,8.588,20.8,8.8v2.4h-9.6V8.8 c0-0.212,0.084-0.416,0.234-0.566C11.584,8.084,11.788,8,12,8z">
                                    </path>
                                </svg>
                            </div>
                            <!-- Social Share -->
                        </div>
                    </div>
                    <div class="feature-image border-b">
                        <nuxt-img :src="`${siteurl.site_url}/media/content/images/${moreDetailContent?.img_bg_path}`"
                            class="mx-auto w-full" :placeholder="img(`${siteurl.site_url}/logo/placeholder.jpg`)" />
                        <p v-if="moreDetailContent?.img_bg_caption" class="feature-image-capture text-center py-2">{{
                            moreDetailContent?.img_bg_caption }}</p>
                    </div>
                    <div class="singlePost-detail grid grid-cols-12">
                        <div class=" hidden md:block md:col-span-2"></div>
                        <div class="col-span-12 md:col-span-8">
                            <div :class="`postdetails postdetailinside${mcinx} text-[18px] text-gray-700 pb-4`"
                                v-html="moreDetailContent?.content_details">
                            </div>
                            <!-- Tag Area -->
                            <div class="category-tags-area flex flex-col gap-4 border-b border-t pb-4 pt-3 print:hidden"
                                v-if="moreDetailContent?.tags">
                                <NuxtLink :to="`/${moreDetailContent?.category?.cat_slug}`" class="text-[18px] py-1"> <span
                                        class=" py-1 font-semibold border-b-2 border-[#3375af] text-[#3375af]">{{
                                            moreDetailContent?.category?.cat_name_bn }}</span> থেকে আরও পড়ুন</NuxtLink>

                                <ul class="flex flex-wrap gap-3 items-center">

                                    <li v-for="mtag in moreDetailContent?.tags.split(',')"
                                        class="text-[#337ab7] bg-[#d9edf7] rounded-sm hover:bg-[#d0e6f1]">
                                        <NuxtLink class="px-4 py-2 block" :to="`/topic/${mtag}`">{{ mtag }}</NuxtLink>
                                    </li>
                                </ul>
                            </div>
                            <!-- Tag Area -->
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
                            <h3 class="text-[#3375af] text-[18px] font-[600]">{{ moreDetailContent?.category?.cat_name_bn }}
                                নিয়ে
                                আরও পড়ুন</h3>
                        </div>
                        <div class="detail-page-category-content-exept flex flex-col">
                            <!-- {{ moreDetailCatWisePost[mcinx] }} -->
                            <!-- Loop Item -->
                            <div class="grid grid-cols-12 gap-4 group h-national-excpt border-b py-4"
                                v-for="moreDetCatCon in moreDetailContent?.morecatwisePost" :key="moreDetCatCon.content_id">
                                <div class=" col-span-5 overflow-hidden">

                                    <NuxtLink
                                        :to="`/category/${moreDetCatCon?.category?.cat_slug}/${moreDetCatCon?.content_id}`">
                                        <nuxt-img
                                            :src="`${siteurl.site_url}/media/content/images/${moreDetCatCon?.img_bg_path}`"
                                            class="mx-auto w-full group-hover:scale-110 duration-300"
                                            :placeholder="img(`${siteurl.site_url}/logo/placeholder.jpg`)" />
                                    </NuxtLink>
                                </div>
                                <div class=" col-span-7">
                                    <NuxtLink
                                        :to="`/category/${moreDetCatCon?.category?.cat_slug}/${moreDetCatCon?.content_id}`">
                                        <h4 class="text-[16px] leading-tight group-hover:text-[#ff0000]">{{
                                            moreDetCatCon?.content_heading }}</h4>
                                    </NuxtLink>
                                </div>
                            </div>
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
                 
                        <NuxtLink :to="`/category/${relDetailContent?.category?.cat_slug}/${relDetailContent?.content_id}`"
                            class="flex flex-col gap-2 group" v-for="relDetailContent in moreDetailContent?.morereletedcontentbelow[mcinx]"
                            :key="relDetailContent.content_id">
                            <div class="feature_image_readmore overflow-hidden">
                                <nuxt-img :src="`${siteurl.site_url}/media/content/images/${relDetailContent?.img_bg_path}`"
                                    class="mx-auto w-full group-hover:scale-110 duration-300"
                                    :placeholder="img(`${siteurl.site_url}/logo/placeholder.jpg`)" />
                            </div>
                            <h5 class="text-[18px] group-hover:text-[#ff0000]">{{ relDetailContent?.content_heading }}</h5>
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
                        <NuxtLink :to="`/category/${latestPostC?.cat_slug}/${latestPostC?.content_id}`"
                            class="flex flex-col gap-2 group" v-for="latestPostC in latestPostsDpage"
                            :key="latestPostC.content_id">
                            <div class="feature_image_readmore overflow-hidden">
                                <nuxt-img :src="`${siteurl.site_url}/media/content/images/${latestPostC?.img_bg_path}`"
                                    class="mx-auto w-full group-hover:scale-110 duration-300"
                                    :placeholder="img(`${siteurl.site_url}/logo/placeholder.jpg`)" />
                            </div>
                            <h5 class="text-[18px] group-hover:text-[#ff0000]">{{ latestPostC?.content_heading }}</h5>
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
</template>

<script setup>

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

// Category Slug & Content id pages/category/[category_slug]/[content_id].vue
const category_slug = useRoute().params.category_slug
const content_id = useRoute().params.content_id
// Category Slug & Content id pages/category/[category_slug]/[content_id].vue

// const postDetails = useState(() => [])


// const { data: pdailts } = await useFetch('/api/detailpage/detail', {
//     method: 'POST',
//     body: {
//         category_slug: category_slug,
//         content_id: content_id
//     }
// })
const { data: pdailts } = await useFetch('/api/prismaapi/detail/postdetail', {
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
// const { data: frcontent } = await useFetch('/api/detailpage/firstrelatedcontent', {
//     method: "POST",
//     body: {
//         content_id: content_id
//     }
// })
fRelatedContents.value = pdailts?.value?.firstRelatedContents

// ============== First Related Content ================//
// detailsContent?.value?.img_bg_path

// ============= detailsContent OG Image Generate ========== //
// const firstOGImage = ref('')
// const { data: dcogimage } = await useFetch("/api/prismaapi/ogimage/ogimage", {
//     method: 'POST',
//     body: {
//         img_bg_path: pdailts?.value?.detailsContent?.img_bg_path
//     }
// })
// firstOGImage.value = dcogimage?.value
// ============= detailsContent OG Image Generate ========== //

// ================  OG - Open Graph ====================// 
const ogUrl = ref(null);
// const okImage = `${websiteUrl?.value?.website_url}/category/${detailsContent?.value?.category?.cat_slug}/${detailsContent?.value?.content_id}`
ogUrl.value = `${websiteUrl?.value?.website_url}/category/${detailsContent?.value?.category?.cat_slug}/${detailsContent?.value?.content_id}`
const ogTitle = ref(null);
ogTitle.value = detailsContent?.value?.content_heading
const ogDescription = ref(null);
ogDescription.value = detailsContent?.value?.content_brief
const metaKeywords = ref(null);
metaKeywords.value = detailsContent?.value?.meta_keywords
ogDescription.value = detailsContent?.value?.content_brief
const ogImage = ref(null);
ogImage.value = `${siteurl?.value?.site_url}/media/content/images/${detailsContent?.value?.img_bg_path}`
// ogImage.value = `${siteurl?.value?.site_url}/api/ogimage/get/${detailsContent?.value?.category?.cat_slug}?imgPath=${detailsContent?.value?.img_bg_path}`
const twitterTitle = ref(null);
twitterTitle.value = detailsContent?.value?.content_heading
const twitterDescription = ref(null);
twitterDescription.value = detailsContent?.value?.content_brief
const twitterImage = ref(null);
// twitterImage.value = `${siteurl?.value?.site_url}/api/ogimage/get/${detailsContent?.value?.category?.cat_slug}?imgPath=${detailsContent?.value?.img_bg_path}`
twitterImage.value = `${siteurl?.value?.site_url}/media/content/images/${detailsContent?.value?.img_bg_path}`
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
// firstMoreContents.value = pdailts?.value?.moreContents
// ========== First Detail Right Side Category Content ======= //
// ========== First Details Content Author ======= //
// const authors = useState(() => [])
// authors.value = pdailts?.value?.authors
// ========== First Details Content Author ======= //


// ========== More Details Contents ======= //
const moreDetailsContents = useState(() => [])

// console.log(dfsdsdfs.value)

moreDetailsContents.value = pdailts?.value?.moreDetailContent

// moreDetailsContents.value = pdailts?.value?.moreDetailContent
// console.log(moreDetailsContents.value)
// ========== More Details Contents ======= //


//===== First Detail Inside More News =====//
const firstInsideMoreNews = useState(() => [])
const { data: dinsidemorenews } = await useFetch("/api/prismaapi/detail/getinsidemorenews", {
    method: "POST",
    body: {
        cat_id: detailsContent?.value?.cat_id,
        content_id: detailsContent?.value?.content_id
    }
})
firstInsideMoreNews.value = dinsidemorenews?.value
// firstInsideMoreNews.value = pdailts?.value?.insideMoreNews
// console.log(firstInsideMoreNews.value)

//===== First Detail Inside More News =====//

// ====================== RelatedContent for More <3> Three content ======================= //

// const relatedDetailContent = useState(() => [])
// const readPostsState = useState(() => [detailsContent?.value?.content_id])

// for (let s = 0; s < moreDetailsContents?.value?.length; s++) {


//     readPostsState.value.push(moreDetailsContents.value[s].content_id)

//     const { data: rlcd } = await useFetch("/api/prismaapi/detail/mreletedcontents", {
//         method: "POST",
//         body: {
//             readedids: readPostsState.value
//         }
//     })

//     relatedDetailContent?.value?.push(rlcd.value)
    

// }

// relatedDetailContent.value = [...new Map(relatedDetailContent.value.map(itemC => [itemC, itemC])).values()]
// relatedPostOgImage.value = [...new Map(relatedPostOgImage.value.map(item => [item['ogimage'], item])).values()]


// console.log(relatedDetailContent.value)
// ==================== RelatedContent for More <3> Three content  ======================= //

// ================ Get Bangla Date ============== //
const getDate = new Intl.DateTimeFormat('bn-bd', { year: 'numeric', month: 'long', day: "numeric", hour: "numeric", minute: 'numeric' })
// const postDate = getDate.format(new Date(detailsContent.value.created_at)).replace('এ', '|').replace('PM', 'পিএম').replace('AM', 'এএম')
const postCreatedDate = (date) => {
    return getDate.format(new Date(date)).replace('এ', '|').replace('PM', 'পিএম').replace('AM', 'এএম')
}
// ================ Get Bangla Date ============== //
// console.log(postDate.replace('এ', '|').replace('PM', 'পিএম').replace('AM', 'এএম'))

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
    let logo = `<img style='margin-bottom: 20px; margin-top: 10px' src='${siteurl?.value?.site_url}/media/common/${sitesettings?.value?.logo}' alt='dfd' />`
    logo += printContent
    document.body.innerHTML = logo;

    window.print();
    document.body.innerHTML = originalContent;
    location.reload()
    // navigateTo(`/category/${category_slug}/${content_id}`)

}

// =============== Print Script ===================== //
// const router = useRouter()

//================= Inside More Detail Post Except Read More ===================//
const insideMoreExceptPost = useState(() => [])

for (let m = 0; m < moreDetailsContents?.value?.length; m++) {
    // const { data: insidempect } = await useFetch("/api/detailpage/insidemoredetailexcept", {
    //     method: 'POST',
    //     body: {
    //         currentPostDetailId: detailsContent?.value?.content_id,
    //         morePostId: moreDetailsContents?.value[m]?.content_id,
    //         cat_id: moreDetailsContents?.value[m]?.cat_id
    //     }
    // })
    const { data: insidempect } = await useFetch("/api/prismaapi/detail/moreinsidemorenews", {
        method: 'POST',
        body: {
            currentPostDetailId: detailsContent?.value?.content_id,
            morePostId: moreDetailsContents?.value[m]?.content_id,
            cat_id: moreDetailsContents?.value[m]?.cat_id
        }
    })

    let insidePost = insidempect.value

    insideMoreExceptPost.value.push(insidePost)
}
insideMoreExceptPost.value = [...new Set(insideMoreExceptPost.value)]
// console.log(insideMoreExceptPost.value)
//================= Inside More Detail Post Except Read More ===================//
const pvScrollPosi = ref(0)
const currScrollPosi = ref(0)
const balvalue = ref(null)

onMounted(() => {

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
                    history.replaceState(contentSections[i].getAttribute('data-nid'), contentSections[i].getAttribute('data-title'), contentSections[i].getAttribute('data-href'));
                    // history.pushState('', contentSections[i].getAttribute('data-title'), contentSections[i].getAttribute('data-href'));

                    // document.querySelector('meta[property="og:title"]').setAttribute("content", contentSections[i].title)
                }

            }

        } else {

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
                    history.replaceState(contentSections[p].getAttribute('data-nid'), contentSections[p].getAttribute('data-title'), contentSections[p].getAttribute('data-href'));
                    // history.pushState('', contentSections[p].getAttribute('data-title'), contentSections[p].getAttribute('data-href'));
                    // document.querySelector('title').value("content", ok)
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
        h4.innerText = `সর্বশেষ খবর পেতে ঢাকা প্রকাশের গুগল নিউজ চ্যানেলটি সাবস্ক্রাইব করুন ।`;
        link.append(img);
        link.append(h4);

        return link;
    }
    if (descParam?.length > 1) {
        descParam[0].parentNode.insertBefore(googleNewses(), descParam[0].nextSibling);
    }
    // ==== Gooogle news Link === //

    let insertRelatedNewses = (title, href) => {

        let relatedNews = document.createElement('div');
        relatedNews.className = 'inside-news my-4 print:hidden';

        let h5 = document.createElement('h5');
        // h5.style.fontSize = '16px';
        h5.className = 'text-[16px] text-[#575757] font-bold'
        // h5.style.fontWeight = 'bold';
        h5.innerText = 'আরও পড়ুন';
        relatedNews.append(h5);

        let containerFluid = document.createElement('div');
        containerFluid.className = 'container-fluid border border-[#e2e2e2] mt-1 group';
        // containerFluid.style.border = '1px solid #575757';
        relatedNews.append(containerFluid);

        // let link = document.createElement('a');
        // link.href = href;
        // containerFluid.append(link);

        let headline = document.createElement('div');
        headline.className = 'headline py-2 px-4 my-1 text-[#121212] text-[16px] font-bold group-hover:text-[#3375af] cursor-pointer';
        // headline.style.cssText = 'font-size:19px;font-weight: bold; width: 65%; float: left';
        // headline.style.cssText = 'font-size:16px;font-weight: bold;';
        headline.innerText = title;
        // link.append(headline);
        containerFluid.append(headline);
        headline.addEventListener('click', function handleClick(event) {
            navigateTo(`/${href}`)
        });
        // let img = document.createElement('img');
        // img.className = 'marginTop10 marginBottom10';
        // img.style.cssText = 'width: 85px;float: right';
        // img.src = src;
        // img.title = title;
        // img.alt = title;
        // link.append(img);

        return relatedNews;
    }

    let itemIncrement = 0;
    descParam.forEach((item, i) => {

        if (i > 0 && i % 3 === 0 && firstInsideMoreNews?.value[itemIncrement]) {
            descParam[0].parentNode.insertBefore(insertRelatedNewses(firstInsideMoreNews?.value[itemIncrement]?.content_heading, fJsNewsURLs(firstInsideMoreNews?.value[itemIncrement].cat_slug, firstInsideMoreNews?.value[itemIncrement].content_id)), descParam[i - 1].nextSibling);
            itemIncrement++;
        }
    })


    function fJsNewsURLs(cat_slug, content_id) {
        return 'category/' + cat_slug + '/' + content_id;
        // return location.origin + '/category/' + cat_slug + '/' + content_id;
        // return location.origin+'/'+cat_slug+(subcat_slug ? subcat_slug : '')+'/news/'+content_id;
    }

    // function fJsNewsImgPaths(img_path) {
    //     return location.origin + '/media/content/images/' + img_path;
    // }

    // ================== End First Post Detail Content Inside Element Added =============== //

    // ================== More Post Details Inside Element Added ==========================// 


    // Start For loop
    try {

        for (let i = 0; i < insideMoreExceptPost?.value?.length; i++) {

            let insideMoreNews = insideMoreExceptPost?.value[i];
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
                h4.innerText = `সর্বশেষ খবর পেতে ঢাকা প্রকাশের গুগল নিউজ চ্যানেলটি সাবস্ক্রাইব করুন ।`;
                link.append(img);
                link.append(h4);

                return link;
            }
            if (descParas?.length > 1) {
                descParas[0].parentNode.insertBefore(googleNews(), descParas[0].nextSibling);
            }
            // ==== Gooogle news Link === //

            let insertRelatedNews = (title, href) => {

                let relatedNews = document.createElement('div');
                relatedNews.className = 'inside-news my-4 print:hidden';

                let h5 = document.createElement('h5');

                h5.className = 'text-[16px] text-[#575757] font-bold'

                h5.innerText = 'আরও পড়ুন';
                relatedNews.append(h5);

                let containerFluid = document.createElement('div');
                containerFluid.className = 'container-fluid border border-[#e2e2e2] mt-1 group';

                relatedNews.append(containerFluid);
                // let link = document.createElement('a');
                // link.href = href;
                // containerFluid.append(link);

                let headline = document.createElement('div');
                headline.className = 'headline py-2 px-4 my-1 text-[#121212] text-[16px] font-bold group-hover:text-[#3375af] cursor-pointer';
                // headline.style.cssText = 'font-size:19px;font-weight: bold; width: 65%; float: left';
                // headline.style.cssText = 'font-size:16px;font-weight: bold;';
                headline.innerText = title;
                // link.append(headline);
                containerFluid.append(headline);
                headline.addEventListener('click', function handleClick(event) {
                    navigateTo(`/${href}`)
                });

                return relatedNews;
            }

            let itemIncrement = 0;
            descParas?.forEach((item, i) => {

                if (i > 0 && i % 3 === 0 && insideMoreNews[itemIncrement]) {
                    descParas[0].parentNode.insertBefore(insertRelatedNews(insideMoreNews[itemIncrement]?.content_heading, fJsNewsURL(insideMoreNews[itemIncrement].category.cat_slug, insideMoreNews[itemIncrement].content_id)), descParas[i - 1].nextSibling);
                    itemIncrement++;
                }
            })

            function fJsNewsURL(cat_slug, content_id) {
                return 'category/' + cat_slug + '/' + content_id;
                // return location.origin+'/'+cat_slug+(subcat_slug ? subcat_slug : '')+'/news/'+content_id;
            }

        }
        // End For loop
    } catch (e) {
        console.log(e)
    }


    // ================= END More Post Details Inside Element Added =======================// 
})

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