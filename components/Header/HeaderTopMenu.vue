<template>
    <div id="HeaderTopBar"
        :class="`${scrollDown ? 'fixed top-0 right-0 left-0 shadow-lg' : 'fixed right-0 left-0 '} z-[1] hidden md:block shadow-lg shadow-gray-300 duration-300 bg-[#3375af]`">
        <div class="max-w-[1280px] mx-auto flex gap-1 items-center justify-between px-4 dp-font">
            <ul class="flex gap-0 justify-center text-white mainmenu">
                <li>
                    <NuxtLink to="/"
                        class=" py-2 px-2 block hover:bg-[#284f81] hover:border-b-2 hover:border-b-white border-b-2 border-b-transparent duration-500">
                        <Icon name="material-symbols:house-rounded" class="text-xl" />
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink :to="`/collection/latest`"
                        class="py-2 px-3 block hover:bg-[#284f81] hover:border-b-2 hover:border-b-white border-b-2 border-b-transparent duration-500">
                        সর্বশেষ</NuxtLink>
                </li>
                <li v-for="category in headCategory?.slice(0, 12)" :key="category.cat_id">
                    <NuxtLink :to="`/${category.cat_slug}`"
                        class="py-2 px-3 block hover:bg-[#284f81] hover:border-b-2 hover:border-b-white border-b-2 border-b-transparent duration-500">
                        {{ category.cat_name_bn }}</NuxtLink>
                </li>
                <li>
                    <NuxtLink :to="`/video`"
                        class="py-2 px-2 block hover:bg-[#284f81] hover:border-b-2 hover:border-b-white border-b-2 border-b-transparent duration-500">
                        ভিজ্যুয়াল মিডিয়া</NuxtLink>
                </li>
                <li>
                    <span 
                        @click="$emit('toggle-dark-mode')" 
                        class="dark-mode-toggle"
                        :class="darkMode ? 'bg-black' : 'bg-blue-900'"
                        >
                        <Icon 
                            v-if="darkMode" 
                            name="material-symbols:dark-mode" 
                            class="text-xl text-white"
                        />
                        <Icon 
                            v-else 
                            name="material-symbols:light-mode" 
                            class="text-xl" 
                        />
                </span>
                </li>
            </ul>
            <div @click="dkdropdownToggle"
                :class="`${dkdropdownStatus === true && 'bg-[#124d80]'} flex gap-1 items-center justify-center text-white hover:bg-[#124d80] px-2 py-1 rounded-sm cursor-pointer`">
                <Icon name="dashicons:editor-justify" />
                <span>সব</span>
            </div>
        
            <!-- <a href="#" class="text-[#124d80] text-base bg-white px-2 py-[2px] rounded-sm">English</a>
            <a href="#" class="text-[#124d80] text-base bg-white px-2 py-[2px] rounded-sm">ই-পেপার</a> -->
        </div>
        <div v-if="dkdropdownStatus === true" :class="`relative border-t`" ref="dropmenuRef">
            <div :class="`max-w-[1280px] px-4 py-4 mx-auto`">
                <div class="dropmenu grid grid-cols-6 gap-1 items-center justify-center text-white text-[18px]">
                    <NuxtLink @click="dkdropdownToggle" class="hover:pl-2 duration-300 py-2" v-for="dropmenuitem in headCategory?.slice(12, 41)"
                        :key="dropmenuitem.cat_id" :to="`/${dropmenuitem.cat_slug}`">
                        {{ dropmenuitem.cat_name_bn }}
                    </NuxtLink>
                </div>

            </div>
            <span @click="dkdropdownToggle" :class="`absolute right-0 top-0 cursor-pointer bg-black pl-4 pr-2 pt-1 pb-2 rounded-bl-[50px]`">
                <Icon name="material-symbols:close" class="text-xl cursor-pointer text-white" />
            </span>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
// const { scrollDown } = defineProps(['scrollDown'])
defineProps(['darkMode', 'scrollDown']);

// const headCatconfig = useRuntimeConfig()
const headCategory = useState(() => [])
// const { data: headCat } = await useFetch(`${headCatconfig.public.apiUrl}/api/headercat`, {
//     method: 'GET'
// })
const { data: headCat } = await useFetch(`/api/prismaapi/header/headercategory`, {
    method: 'GET'
})
headCategory.value = headCat.value

const dkdropdownStatus = ref(false)
const dkdropdownToggle = () => {
    if (dkdropdownStatus.value == false) {
        dkdropdownStatus.value = true
    } else {
        dkdropdownStatus.value = false
    }
}




// const dropmenuRef = ref(null)
// onClickOutside(
//     dropmenuRef,
//     (event) => {
//         // console.log(event)
//         dkdropdownStatus.value = false
//     },
// )

</script>

<style scoped>
.mainmenu .router-link-active {
    background-color: #284f81;
    border-bottom: 2px solid #fff;
}
</style>
<style>
.dark-mode-toggle {
    display: flex; /* Enables Flexbox layout */
    justify-content: center; /* Horizontally centers the span */
    align-items: center; /* Vertically centers the span */
    transition: background-color 0.3s ease-in-out;
    border: none;
    cursor: pointer;
    margin-top: 9px;
    padding: 4px;
    border-radius: 50%;
    /* background-color: #141414; */
    margin-left: 10px;
}
</style>