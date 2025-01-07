<template>
    <div
        :class="`${scrollDown ? 'fixed top-0 right-0 left-0 shadow-lg' : ''} hidden md:block shadow-lg shadow-gray-300 duration-300 bg-[#3375af]`">
        <ul class="flex gap-0 justify-center text-[18px] text-white">
            <li>
                <NuxtLink to="/"
                    class=" py-2 px-3 block hover:bg-[#284f81] hover:border-b-2 hover:border-b-white border-b-2 border-b-transparent duration-500">
                    <Icon name="material-symbols:house-rounded" class="text-xl" />
                </NuxtLink>
            </li>
            <li>
                <NuxtLink :to="`/collection/latest`"
                    class="py-2 px-3 block hover:bg-[#284f81] hover:border-b-2 hover:border-b-white border-b-2 border-b-transparent duration-500">
                    সর্বশেষ</NuxtLink>
            </li>
            <li v-for="category in headCategory" :key="category.cat_id">
                <NuxtLink :to="`/${category.cat_slug}`"
                    class="py-2 px-3 block hover:bg-[#284f81] hover:border-b-2 hover:border-b-white border-b-2 border-b-transparent duration-500">
                    {{ category.cat_name_bn }}</NuxtLink>
            </li>
            <li>
                <NuxtLink :to="`/video`"
                    class="py-2 px-3 block hover:bg-[#284f81] hover:border-b-2 hover:border-b-white border-b-2 border-b-transparent duration-500">
                    ভিজ্যুয়াল মিডিয়া</NuxtLink>
            </li>

        </ul>
    </div>
</template>

<script setup>
const { scrollDown } = defineProps(['scrollDown'])

// const headCatconfig = useRuntimeConfig()
const headCategory = useState(() => [])
// const { data: headCat } = await useFetch(`${headCatconfig.public.apiUrl}/api/headercat`, {
//     method: 'GET'
// })
const { data: headCat } = await useFetch(`/api/prismaapi/header/headercategory`, {
    method: 'GET'
})
headCategory.value = headCat.value


</script>

<style scoped>
.router-link-active {
    background-color: #284f81;
    border-bottom: 2px solid #fff;
}
</style>