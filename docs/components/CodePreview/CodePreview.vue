<template>
    <div class="c-code-preview">
        <div class="c-code-preview__legends">
            <div class="c-code-preview__legend">
                Example
            </div>
            <RouterLink :to="{ name: 'ComponentPreview', params: { componentName: name }}" target="_blank" class="c-code-preview__legend">
                Preview <span class="fas fa-external-link-alt"></span>
            </RouterLink>
        </div>
        <div class="c-code-preview__component">
            <slot />
        </div>
        <div class="c-code-preview__code" :class="{ 'is-active': isCodeOpen }">
            <button class="c-code-preview__copy" @click="copyCode()">
                <span v-if="!isCopied">Copy</span>
                <span v-else>Copied to clipboard!</span>
            </button>
            <CodeSnippet>
                <slot id="code" />
            </CodeSnippet>
            <button class="c-code-preview__show-box" :class="{ 'is-active': isCodeOpen }" @click="toggleCode()">
                <span v-show="!isCodeOpen" class="c-code-preview__show-item"><span class="c-code-preview__show-icon fas fa-code"></span> Show code</span>
                <span v-show="isCodeOpen" class="c-code-preview__show-item"><span class="c-code-preview__show-icon fas fa-eye-slash"></span> Hide code</span>
            </button>
        </div>
    </div>
</template>

<script>
    import CodeSnippet from '@/components/CodeSnippet/CodeSnippet.vue'

    export default {
        components: {
            CodeSnippet
        },
        data () {
            return {
                name: 'Example',
                isCodeOpen: false,
                isCopied: false
            }
        },
        mounted () {
            this.name = this.getComponentName()
        },
        methods: {
            getComponentName () {
                return this.$children[1].$options.name
            },
            toggleCode () {
                this.isCodeOpen = !this.isCodeOpen
            },
            copyCode () {
                const node = this.$el.querySelector('#code-snippet')

                if (document.body.createTextRange) {
                    const range = document.body.createTextRange()
                    range.moveToElementText(node)
                    range.select()
                } else if (window.getSelection) {
                    const selection = window.getSelection()
                    const range = document.createRange()
                    range.selectNodeContents(node)
                    selection.removeAllRanges()
                    selection.addRange(range)
                } else {
                    return console.warn('Could not select text in node: Unsupported browser.')
                }

                document.execCommand('copy')
                this.copied()
            },
            copied () {
                this.isCopied = !this.isCopied
                setTimeout(() => { this.isCopied = !this.isCopied }, 1500)
            }
        }
    }
</script>

<style lang="scss" scoped>
  .c-code-preview {
    margin-top: 2rem;
    margin-bottom: 2rem;

    &__legends {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }

    &__legend {
      background-color: var(--color-secondary);
      display: inline-block;
      color: #fff;
      text-transform: uppercase;
      font-size: 0.625em;
      font-weight: 700;
      padding: 0.5rem;
      letter-spacing: 0.05em;
      border-top-right-radius: 0.125rem;
      border-top-left-radius: 0.125rem;
      transition: all 0.3s;

      @at-root {
        a {
          &.is-active,
          &:active,
          &:hover {
            background-color: var(--color-primary);
          }
        }
      }
    }

    &__component {
      overflow: auto;
      padding: 1.5rem;
      border: 0.0625rem solid var(--color-secondary);
    }

    &__code {
      border: 0.0625rem solid var(--color-secondary);
      border-top: 0;
      position: relative;

      &:not(.is-active) {
        max-height: 3rem;
        overflow: hidden;
      }
    }

    &__show {
      &-item {
        display: flex;
        align-items: center;
      }

      &-box {
        background-color: #fff;
        color: var(--color-primary);
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        text-transform: uppercase;
        font-size: 0.625em;
        font-weight: 700;
        padding: 0.6rem;
        letter-spacing: 0.05em;
        z-index: 3;
        padding-right: 2em;
        width: 100%;
        transition: all 0.3s;

        &:active,
        &:hover {
          color: #fff;
          background-color: var(--color-secondary);
        }

        &:not(.is-active) {
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          opacity: 0.7;
        }
      }

      &-icon {
        font-size: 1.5em;
        margin-right: 0.5rem;
      }
    }

    &__copy {
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
      font-size: 0.7em;

      &:active,
      &:focus,
      &:hover {
        color: var(--color-secondary);
      }
    }
  }

</style>
