<template>
    <img :src="src" :alt="alt" :width="width" :class="{ 'has-border': showBorder }" />
</template>

<script>
export default {
    props: {
        src: {
            type: String,
            required: true,
        },
        alt: {
            type: String,
            default: '',
        },
        width: {
            type: [String, Number],
            default: '300',
        },
        showBorder: {
            type: Boolean,
            default: false,
        },
    }
};
</script>
<style scoped>
.has-border {
    border: 1px solid #334155;
}
</style>