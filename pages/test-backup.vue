


<template>
    <div>
        <button class="sdlkfjdslfk">
            click
        </button>
        <!-- ${ ok ? 'block duration-1000' : 'hidden duration-1000'}  -->
        <div id="popup" :class="`duration-500 hidden cursor-zoom-out fixed inset-0 bg-black/85 overflow-y-hidden overflow--hidden h-screen z-[999999999] items-center justify-center`">
            <div class="flex partha relative h-screen w-full justify-center items-center duration-1000">
                <img id="nuxtpopupImage" :class="`w-full duration-1000  absolute  px-0 md:px-8`"
                    src="https://www.dhakaprokash24.com/media/content/images/2024January/dhaka-prokah-news1-20240122153828.jpg"
                    alt="">
            </div>
        </div>
    </div>
</template>
<script setup>
    const ok = ref(false)
    onMounted(() => {
        const id = document.querySelector('.sdlkfjdslfk')
        id.addEventListener('click', function(){
            const popup = document.querySelector('#popup')
            popup.classList.remove('hidden')
            const img = document.querySelector('.partha #nuxtpopupImage')
            img.src = 'https://dhakaprokash24.com/media/content/images/2024January/dhaka-prokash-kader-2-20240122145057.jpg'
        })
        const popup = document.querySelector('#popup')
        popup.addEventListener('click', function(){
            
            popup.classList.add('hidden')
        })

    })

</script>