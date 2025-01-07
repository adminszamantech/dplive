<template>
    <div class="footer-bottom">
        <div class="md:flex justify-center gap-3 hidden text-[#595959] text-xs border-t border-b py-3">
            <NuxtLink to="/">ঢাকা প্রকাশ</NuxtLink>
            <NuxtLink to="/" >বিজ্ঞাপন</NuxtLink>
            <NuxtLink to="/" >সার্কুলেশন</NuxtLink>
            <NuxtLink to="/" >শর্তাবলি ও নীতিমালা</NuxtLink>
            <NuxtLink to="/" >গোপনীয়তা নীতি</NuxtLink>
            <NuxtLink to="/">যোগাযোগ</NuxtLink>
        </div>
        <div class="md:hidden justify-center gap-3 grid grid-cols-3 text-center px-4 text-[#595959] text-xs border-t border-b py-3">
            <NuxtLink to="/">ঢাকা প্রকাশ</NuxtLink>
            <NuxtLink to="/" >বিজ্ঞাপন</NuxtLink>
            <NuxtLink to="/" >সার্কুলেশন</NuxtLink>
            <NuxtLink to="/" >শর্তাবলি ও নীতিমালা</NuxtLink>
            <NuxtLink to="/" >গোপনীয়তা নীতি</NuxtLink>
            <NuxtLink to="/">যোগাযোগ</NuxtLink>
        </div>
        <div class="footer-copyright flex justify-center items-center text-[12px] py-3">
            <div class="copyright text-[#595959]">স্বত্ব © ২০২৩ ঢাকা প্রকাশ</div>
            <div class="Editor text-[#595959]">সম্পাদক ও প্রকাশক: ঢাকা প্রকাশ</div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.footer-bottom a:after {
    content: '\2022';
    padding-left: 6px;
    padding-top:4px;
    font-size:20px;
    color:#ccc;
}
.copyright:after {
    content: '|';
    padding-left:7px;
    padding-right:7px;
    display:inline-block
}
.footer-bottom a:last-child:after {
    content: ''; 
}
</style>