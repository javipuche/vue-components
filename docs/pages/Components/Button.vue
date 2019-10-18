<template>
    <Layout>
        <Markdown>
            # Button

            The classic button, in different colors, sizes, and states.
        </Markdown>

        <CodePreview :vertical="true">
            <AtButton text="Button" size="tiny" />
            <AtButton text="Button" size="small" />
            <AtButton text="Button" />
            <AtButton text="Button" size="medium" />
            <AtButton text="Button" size="large" />
        </CodePreview>

        <CodePreview :vertical="true">
            <AtButton text="Button" :inverted="true" />
        </CodePreview>

        <CodePreview :vertical="true">
            <AtButton icon="avatar" />
        </CodePreview>
    </Layout>
</template>

<script>
    import Layout from '@/layouts/Default.vue'
    import CodePreview from '@/components/CodePreview/CodePreview.vue'
    import Markdown from '@/components/Markdown/Markdown.vue'
    import Message from '@/components/Message/Message.vue'

    export default {
        components: {
            Layout,
            CodePreview,
            Markdown,
            Message
        }
    }
</script>
