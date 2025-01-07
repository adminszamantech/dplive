<template>
    <div>
        <div v-if="counterState.status === 1" class="px-4 py-4 border-4 mt-4">
            <NuxtLink to="/religion/news/60278" class="hover:text-[#ff0000]"><h2 class="text-center mb-2 text-xl">{{  counterState.counter_name }}</h2></NuxtLink>
            <div class="flex gap-4 justify-between">
                <div class="flex flex-col items-center text-center">
                    <span id="hours" class="bg-[#3375af] w-[70px] text-white text-[20px]">0</span>
                    <p class="bg-[#ff0000] text-white w-[70px] text-base py-[2px]">ঘণ্টা</p>
                </div>
                <div class="flex flex-col items-center text-center">
                    <span id="minutes" class="bg-[#3375af] w-[70px] text-white text-[20px]">0</span>
                    <p class="bg-[#ff0000] text-white w-[70px] text-base py-[2px]">মিনিট</p>
                </div>
                <div class="flex flex-col items-center text-center">
                    <span id="seconds" class="bg-[#3375af] w-[70px] text-white text-[20px]">0</span>
                    <p class="bg-[#ff0000] text-white w-[70px] text-base py-[2px]">সেকেন্ড</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const counterState = useState(() => '');
const { data: getCounter } = await useFetch("/api/prismaapi/home/counter", {
    method: "GET"
});
counterState.value = getCounter;
console.log(counterState.value);


onMounted(() => {

    const convertToBengaliDigits = (number) => {
        const bengaliDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
        return number.toString().split('').map(digit => bengaliDigits[parseInt(digit)]).join('');
    }

    // let countdown = new Date("Mar 13, 2024 18:10:00").getTime();
    let countdown = new Date(counterState.value.counter_time).getTime();
    let x = setInterval(function () {
        let now = new Date().getTime();
        let distance = countdown - now;
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById('hours').innerHTML = convertToBengaliDigits(hours);
        document.getElementById('minutes').innerHTML = convertToBengaliDigits(minutes);
        document.getElementById('seconds').innerHTML = convertToBengaliDigits(seconds);

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("hours").innerHTML = "০০";
            document.getElementById("minutes").innerHTML = "০০";
            document.getElementById("seconds").innerHTML = "০০";
        }
    }, 1000);


})

</script>

<style lang="scss" scoped></style>