<template>
    <div class="c-search">
        <div class="c-search__inner">
            <span class="c-search__icon fas fa-search"></span>
            <input
                v-model="search"
                class="c-search__element"
                type="text"
                @keyup="onKeyup"
                @keydown.down="onArrowDown"
                @keydown.up="onArrowUp"
                @keydown.enter="onEnter"
            >
        </div>
        <ul class="c-search__list" :class="{ 'is-active': isOpen }">
            <li
                v-for="(item, index) in results"
                :key="item.id"
                class="c-search__item"
                :class="{ 'is-active': index === arrowCounter }"
                @mouseover="onHover(index)"
            >
                <component :is="item.url ? 'RouterLink' : 'div'" :to="item.url" class="c-search__link">
                    <span v-if="item.parent" class="c-search__parent">{{ item.parent }}</span>
                    <span class="c-search__text">
                        <span v-if="item.parent">></span>
                        {{ item.title }}
                    </span>
                </component>
            </li>
        </ul>
    </div>
</template>

<script>
    import config from '@/config.js'

    export default {
        data () {
            return {
                search: '',
                results: [],
                navigation: config.navigation,
                arrowCounter: -1,
                isOpen: false
            }
        },
        created () {
            window.addEventListener('click', this.close)
        },

        beforeDestroy () {
            window.removeEventListener('click', this.close)
        },
        methods: {
            onClickOutside (event) {
                console.log(this.$refs)
            },
            onKeyup () {
                this.results = []
                this.search ? this.filterResults(this.navigation) : this.arrowCounter = -1
                this.results.length ? this.isOpen = true : this.isOpen = false
            },
            onArrowDown () {
                if (this.arrowCounter < (this.results.length - 1)) this.arrowCounter = this.arrowCounter + 1
            },
            onArrowUp () {
                if (this.arrowCounter > 0) this.arrowCounter = this.arrowCounter - 1
            },
            onEnter () {
                if (this.arrowCounter >= 0) {
                    const url = this.results[this.arrowCounter].url
                    const currentRoute = this.$router.currentRoute

                    if (currentRoute.name === url.name) {
                        const id = document.querySelector(url.hash)
                        this.isOpen = false
                        this.search = ''
                        if (url.hash && id) id.scrollIntoView()
                    } else {
                        this.$router.push(url)
                    }
                }
            },
            onHover (index) {
                this.arrowCounter = index
            },
            close (e) {
                if (!this.$el.contains(e.target)) this.isOpen = false
            },
            filterResults (items, parent = undefined) {
                items.forEach(item => {
                    const match = item.title.toLowerCase().includes(this.search.toLowerCase())
                    if (match) this.results.push({ title: item.title, url: item.url, parent: parent })
                    if (item.children) this.filterResults(item.children, item.title)
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
  .c-search {
    $this: &;

    background-color: var(--color-shade-0);
    border-radius: var(--radius-s);
    position: relative;

    &__inner {
      position: relative;
    }

    &__element {
      border: 1px solid var(--color-border);
      height: 32px;
      border-radius: 20px;
      padding-left: 40px;
      padding-right: 16px;
      font-size: 14px;
      color: currentColor;
      outline: none;
      width: 100%;
      transition: all 0.3s;
      padding-bottom: 2px;

      &:focus {
        border-color: var(--color-primary);
      }
    }

    &__icon {
      pointer-events: none;
      color: var(--color-icons);
      position: absolute;
      top: 50%;
      left: 16px;
      transform: translateY(-50%);
      font-size: 16px;
    }

    &__list {
      padding: 4px;
      border: 1px solid var(--color-border);
      display: none;
      position: absolute;
      top: calc(100% + 4px);
      right: 0;
      background-color: var(--color-shade-0);
      width: calc(100vw - 32px);
      max-width: 440px;
      border-radius: var(--radius-s);

      &.is-active {
        display: block;
      }
    }

    &__item {
      line-height: 1.4;
      color: var(--color-shade-1500);
      border-radius: var(--radius-s);

      &.is-active {
        background-color: var(--color-shade-100);
        color: var(--color-primary);
      }
    }

    &__link {
      display: block;
      font-size: 15px;
      padding: 8px;
    }

    &__parent {
      font-weight: 600;
      display: inline-block;

      & + #{$this}__text {
        font-weight: 400;
        font-size: 14px;
        display: inline-block;
      }
    }

    &__text {
      font-weight: 600;
    }
  }
</style>
