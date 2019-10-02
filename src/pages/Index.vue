<template>
    <Layout>
        <Search />
    </Layout>
</template>

<script>
    import Layout from '@/layouts/Default.vue'
    import Search from '@/components/Docs/Search.vue'

    export default {
        components: {
            Layout,
            Search
        }
    }
</script>
