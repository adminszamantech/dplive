<template>
 

    <div :class="`${bottomAdsBox ? '-bottom-[98px] left-0 right-0' : 'bottom-0 left-0 right-0'  } fixed duration-700`">
        <div class="bg-[#eee] h-[100px] flex flex-col justify-center items-center relative">
            <div @click="bottomAdsToggle" class="bg-[#eee] w-8 h-8 px-2 absolute right-0 -top-6 rounded-l-lg cursor-pointer">
                <Icon name="material-symbols:close" />
            </div>
            <img class="mx-auto" src="/assets/img/ads.png" />
        </div>
    </div>
    

</template>

<script setup>
    const bottomAdsBox = ref(false)
    const bottomAdsToggle = () => {
        if(bottomAdsBox.value === true){
            bottomAdsBox.value = false
          
        }else{
            bottomAdsBox.value = true
    
        }
    }
    const {adsBottomStatus} = defineProps(['adsBottomStatus'])
</script>

<style lang="scss" scoped></style>