<template>
    <nav>
        <NavigationList :items="navigation" />
    </nav>
</template>

<script>
    import config from '@/config.js'
    import NavigationList from '@/components/Navigation/NavigationList.vue'

    export default {
        components: {
            NavigationList
        },
        data () {
            return {
                navigation: config.navigation
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
