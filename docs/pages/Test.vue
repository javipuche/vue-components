<template>
    <Layout>
        <Docs>
            <h1>Icon</h1>
            <p>Icons take an important role of any application</p>
            <h2 id="caca">
                Material Design Icons
            </h2>
            <p>
                Buefy is compatible with both Material <a href="#caca">Design Icons</a> , FontAwesome 4 and FontAwesome 5 but you can also add your custom icon pack.
                They adapt to most elements background automatically — but you can also override their colors.
            </p>
        </Docs>

        <CodePreview>
            <Icon icon="house" />
        </CodePreview>

        <Docs>
            <p>
                Buefy is compatible with both Material Design Icons , FontAwesome 4 and FontAwesome 5 but you can also add your custom icon pack.
                They adapt to most elements background automatically — but you can also override their colors.
            </p>
            <ul>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
            </ul>
            <ol>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
            </ol>
            <p>
                Buefy is compatible with both Material Design Icons , FontAwesome 4 and FontAwesome 5 but you can also add your custom icon pack.
                They adapt to most elements background automatically — but you can also override their colors.
            </p>
            <h3>asdasdasd</h3>
            <p>
                Buefy is compatible with both Material Design Icons , FontAwesome 4 and FontAwesome 5 but you can also add your custom icon pack.
                They adapt to most elements background automatically — but you can also override their colors.
            </p>
            <table>
                <tr>
                    <th>asdas</th>
                    <th>asdas</th>
                    <th>asdas</th>
                </tr>
                <tr>
                    <td>asdas</td>
                    <td>asdas</td>
                    <td>asdas</td>
                </tr>
                <tr>
                    <td>asdas</td>
                    <td>asdas</td>
                    <td>asdas</td>
                </tr>
                <tr>
                    <td>asdas</td>
                    <td>asdas</td>
                    <td>asdas</td>
                </tr>
            </table>
            <h4>asdasdasd</h4>
            <p>
                Buefy is compatible with both Material Design Icons , FontAwesome 4 and FontAwesome 5 but you can also add your custom icon pack.
                They adapt to most elements background automatically — but you can also override their colors.
            </p>
            <h5>asdasdasd</h5>
            <p>
                Buefy is compatible with both Material Design Icons , FontAwesome 4 and FontAwesome 5 but you can also add your custom icon pack.
                They adapt to most elements background automatically — but you can also override their colors.
            </p>
            <h6>asdasdasd</h6>
            <p>
                Buefy is compatible with both Material Design Icons , FontAwesome 4 and FontAwesome 5 but you can also add your custom icon pack.
                They adapt to most elements background automatically — but you can also override their colors.
            </p>
        </Docs>
    </Layout>
</template>

<script>
    import Layout from '@/layouts/Default.vue'
    import Docs from '@/components/Docs/Docs.vue'
    import CodePreview from '@/components/CodePreview/CodePreview.vue'
    import Icon from '@lib/components/Icon/Icon.vue'

    export default {
        components: {
            Layout,
            Docs,
            CodePreview,
            Icon
        }
    }
</script>
