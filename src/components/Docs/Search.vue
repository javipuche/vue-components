<template>
    <div class="c-search">
        <input
            v-model="search"
            type="text"
            @keyup="onKeyup"
            @keydown.down="onArrowDown"
            @keydown.up="onArrowUp"
            @keydown.enter="onEnter"
        >
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
        methods: {
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
                        this.isOpen = false
                        this.search = ''
                        if (url.hash) document.querySelector(url.hash).scrollIntoView()
                    } else {
                        this.$router.push(url)
                    }
                }
            },
            onHover (index) {
                this.arrowCounter = index
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

<style lang="scss">
  .c-search {
    $this: &;

    background-color: #fff;
    border-radius: var(--radius-s);

    &__list {
      padding: 4px;
      border: 1px solid #ccc;
      display: none;

      &.is-active {
        display: block;
      }
    }

    &__item {
      line-height: 1.4;
      color: var(--color-shade-300);

      &.is-active {
        background-color: var(--color-shade-100);
        color: var(--color-primary);
      }
    }

    &__link {
      display: block;
      font-size: 0.9em;
      padding: 8px;
    }

    &__parent {
      font-weight: 600;
      display: inline-block;

      & + #{$this}__text {
        font-weight: 400;
        font-size: 0.9em;
        display: inline-block;
      }
    }

    &__text {
      font-weight: 600;
    }
  }
</style>
