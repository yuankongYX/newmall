<template>
<div>
</div>
</template>

<script>
export default {
    name: 'Cart',
    methods: {
        zenjia() {
            console.log("===")
            this.$store.commit('increment')
        }
    },
    data() {
        return {

        }
    }
}
</script>

<style  scoped>
</style>
