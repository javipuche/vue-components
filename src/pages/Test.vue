<template>
    <Layout>
        <Search />
        <p>test</p>
        <RouterLink to="#how">
            asdsad
        </RouterLink>
        <div style="height: 3000px;"></div>
        <div id="how">
            how
        </div>
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
