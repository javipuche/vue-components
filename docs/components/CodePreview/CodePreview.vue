<template>
    <div class="c-code-preview" :class="{ 'c-code-preview--vertical': vertical && preview }">
        <div class="c-code-preview__legends">
            <div class="c-code-preview__legend">
                Example
            </div>
            <button class="c-code-preview__legend c-code-preview__legend--link" @click.prevent="expandPreview()">
                Preview <span class="fas fa-expand-arrows-alt"></span>
            </button>
        </div>
        <div v-if="preview" :class="{ 'is-expanded': isPreviewExpanded }" class="c-code-preview__component">
            <slot />
            <button v-show="isPreviewExpanded" class="c-code-preview__close" @click.prevent="closePreview()">
                <span class="fas fa-compress-arrows-alt"></span>
            </button>
        </div>
        <div class="c-code-preview__box">
            <div class="c-code-preview__code" :class="{ 'is-active': isCodeOpen || !preview }">
                <button class="c-code-preview__copy" @click="copyCode()">
                    <span v-if="!isCopied">Copy</span>
                    <span v-else>Copied to clipboard!</span>
                </button>
                <CodeSnippet class="c-code-preview__code-snippet">
                    <slot />
                </CodeSnippet>
                <button v-if="preview" class="c-code-preview__show-box" :class="{ 'is-active': isCodeOpen }" @click="toggleCode()">
                    <span v-show="!isCodeOpen" class="c-code-preview__show-item"><span class="c-code-preview__show-icon fas fa-code"></span> Show code</span>
                    <span v-show="isCodeOpen" class="c-code-preview__show-item"><span class="c-code-preview__show-icon fas fa-eye-slash"></span> Hide code</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import CodeSnippet from '@/components/CodeSnippet/CodeSnippet.vue'
    import { store } from '@/store/nav.js'
    import { store as storeOverlay } from '@/store/overlay.js'

    export default {
        components: {
            CodeSnippet
        },
        props: {
            vertical: Boolean,
            preview: {
                type: Boolean,
                default: true
            }
        },
        data () {
            return {
                isCodeOpen: false,
                isCopied: false,
                isPreviewExpanded: false
            }
        },
        methods: {
            expandPreview () {
                this.isPreviewExpanded = true
                store.isNavOpen = false
                storeOverlay.isModalOpen = this.isPreviewExpanded
            },
            closePreview () {
                this.isPreviewExpanded = false
                store.isNavOpen = true
                storeOverlay.isModalOpen = this.isPreviewExpanded
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
    $this: &;

    margin-top: calc(var(--space-between-tags) * 1.2);
    margin-bottom: calc(var(--space-between-tags) * 1.2);

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

      &--link {
        &.is-active,
        &:active,
        &:hover {
          background-color: var(--color-primary);
        }
      }
    }

    &__component {
      overflow: auto;
      padding: 1.5rem;
      border: 0.0625rem solid var(--color-secondary);
      border-bottom: 0;

      &.is-expanded {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        min-height: 100vh;
        border: 0;
        background-color: #fff;
        z-index: 10;
        padding: 0;
        overflow-y: auto;
      }
    }

    &__close {
      position: fixed;
      bottom: 1rem;
      right: 1rem;
      font-size: 1.5em;
      background-color: var(--color-secondary);
      height: 2em;
      width: 2em;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
    }

    &__code {
      border: 0.0625rem solid var(--color-secondary);
      position: relative;
      background-color: #f7f7f7;

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

    &__code-snippet {
      margin-top: 0;
      margin-bottom: 0;
    }

    &--vertical {
      @include breakpoint(l) {
        display: grid;
        grid-template-columns: 1fr 1fr;

        #{$this} {
          &__legends {
            grid-column: 1/-1;
          }

          &__box {
            position: relative;
            min-width: 1px;
            display: flex;
            flex-direction: column;
          }

          &__component {
            min-width: 1px;

            &:not(.is-expanded) {
              border-bottom: 0.0625rem solid var(--color-secondary);
            }
          }

          &__code {
            border-left: 0;
            max-height: none;
            flex-grow: 1;
            display: flex;
            flex-direction: column;

            &:not(.is-active) {
              left: 0;
              top: 0;
              position: absolute;
              width: 100%;
              height: 100%;
            }
          }

          &__show {
            &-box {
              margin-top: auto;
            }
          }
        }
      }
    }
  }

</style>
