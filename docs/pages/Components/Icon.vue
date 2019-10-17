<template>
    <Layout>
        <Markdown>
            # Icon
        </Markdown>

        <CodePreview :vertical="true">
            <Icon icon="phone" />
        </CodePreview>
    </Layout>
</template>

<script>
    import Layout from '@/layouts/Default.vue'
    import CodePreview from '@/components/CodePreview/CodePreview.vue'
    import Icon from '@lib/components/Icon/Icon.vue'
    import Markdown from '@/components/Markdown/Markdown.vue'
    import Message from '@/components/Message/Message.vue'

    export default {
        components: {
            Layout,
            CodePreview,
            Icon,
            Markdown,
            Message
        }
    }
</script>
