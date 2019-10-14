<template>
    <Layout>
        <h1>Icon</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, magni.</p>
        <CodePreview>
            <Icon icon="house" />
        </CodePreview>
    </Layout>
</template>

<script>
    import Layout from '@/layouts/Default.vue'
    import CodePreview from '@/components/CodePreview/CodePreview.vue'
    import Icon from '@lib/components/Icon/Icon.vue'

    export default {
        components: {
            Layout,
            CodePreview,
            Icon
        }
    }
</script>
