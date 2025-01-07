<template>
    <div>
        <div class="fb-comments" :data-href="url" data-width="100%" data-numposts="5"></div>
    </div>
</template>

<script setup>
defineProps(['url'])
onMounted(() => {
    // Check if FB is already defined
    if (window.FB) {
        window.FB.XFBML.parse();
    }
});
</script>

<style lang="scss" scoped></style>