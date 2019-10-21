<template>
    <Layout>
        <Markdown>
            # Banner
        </Markdown>

        <CodePreview vertical>
            <AtBanner
                valign="bottom"
                align="center"
                text="Button"
                shadow
                radius
            />
        </CodePreview>

        <CodePreview vertical>
            <AtBanner
                class="c-banner--orion"
                valign="bottom"
                align="center"
                text="Button"
                shadow
                radius
            >
                <div class="c-banner__title">
                    asdadasd
                </div>
                <AtButton text="Leer más" outlined size="small" />
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
