<template>
    <div class="c-code-preview">
        <div class="c-code-preview__legend">
            Example
        </div>
        <div class="c-code-preview__component">
            <slot />
        </div>
        <div class="c-code-preview__code">
            <CodeSnippet>
                <slot />
            </CodeSnippet>
        </div>
    </div>
</template>

<script>
    import CodeSnippet from '@/components/CodeSnippet/CodeSnippet.vue'

    export default {
        components: {
            CodeSnippet
        }
    }
</script>

<style lang="scss" scoped>
  .c-code-preview {
    &__legend {
      background-color: var(--color-secondary);
      display: inline-block;
      color: var(--color-shade-0);
      text-transform: uppercase;
      font-size: 10px;
      font-weight: 700;
      padding: 8px;
      letter-spacing: 0.05em;
      border-top-right-radius: var(--radius-s);
      border-top-left-radius: var(--radius-s);
    }

    &__component {
      overflow: auto;
      padding: 24px;
      border: 1px solid var(--color-secondary);
    }

    &__code {
      background-color: var(--color-shade-100);
      border: 1px solid var(--color-secondary);
      border-top: 0;
    }
  }

</style>
