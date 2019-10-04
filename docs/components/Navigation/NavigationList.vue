<template>
    <ul>
        <li v-for="item in items" :key="item.id">
            <a :href="item.url.hash ? item.url.name + item.url.hash : item.url.name">{{ item.title }}</a>
            <NavigationList vif="item.children" :items="item.children" />
        </li>
    </ul>
</template>

<script>
    export default {
        name: 'NavigationList',
        props: {
            items: {
                type: Array,
                default: undefined
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
