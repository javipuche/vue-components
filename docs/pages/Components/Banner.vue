<template>
    <Layout>
        <Markdown>
            # Banner
        </Markdown>

        <CodePreview :vertical="true">
            <AtBanner text="Button">
                <div class="c-banner__title">
                    asdadasd
                </div>
                <AtButton text="Leer más" :inverted="true" size="small" />
            </AtBanner>
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
