<template>
    <div class="c-docs-code">
        <pre><code id="code-snippet"><slot></slot></code></pre>
    </div>
</template>

<script>
    import beautifyHtml from 'js-beautify'
    import hljs from 'highlight.js'
    import 'highlight.js/styles/github.css'

    export default {
        name: 'CodeSnippet',
        mounted: function () {
            const code = this.$el.querySelector('#code-snippet')
            const renderedCode = this.renderCodeSnippet(beautifyHtml.html(code.innerHTML, {
                preserve_newlines: false,
                inline: []
            }))
            code.innerHTML = renderedCode
        },
        methods: {
            renderCodeSnippet: function (code, language = 'html') {
                return hljs.highlight(language, code).value
            }
        }
    }
</script>

<style lang="scss">
  .c-docs-code {
    max-width: 100%;
    max-height: 40rem;
    overflow: auto;
    padding: 2rem 1.5rem;
    display: flex;
    background-color: #f7f7f7;
    line-height: 1.8;

    &::after {
      content: "";
      display: block;
      width: 1.5rem;
      flex-shrink: 0;
    }
  }
</style>
