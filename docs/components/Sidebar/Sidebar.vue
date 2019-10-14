<template>
    <aside class="c-sidebar" :class="{ 'is-active' : isPanelOpen }">
        <div class="c-sidebar__toggle">
            <Hamburger />
        </div>
        <div class="c-sidebar__inner">
            <div class="c-sidebar__box">
                <img class="c-sidebar__logo" src="https://d1yold88hsv6sw.cloudfront.net/resize/200x100/filters:quality(85):max_age(1209600)/s3/avoristravel/assets/img/logos/avorisLogo.png" alt="Logo">
                <Search class="c-sidebar__search" />
            </div>

            <Navigation />
        </div>
    </aside>
</template>

<script>
    import { store, mutations } from '@/store/nav.js'
    import Navigation from '@/components/Navigation/Navigation.vue'
    import Search from '@/components/Search/Search.vue'
    import Hamburger from '@/components/Hamburger/Hamburger.vue'

    export default {
        components: {
            Navigation,
            Search,
            Hamburger
        },
        computed: {
            isPanelOpen () {
                return store.isNavOpen
            }
        },
        methods: {
            closeSidebarPanel: mutations.toggleNav
        }
    }
</script>

<style lang="scss" scoped>
  .c-sidebar {
    $this: &;

    border-right: 1px solid var(--color-border);
    background-color: var(--color-shade-0);
    position: relative;

    &__toggle {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      z-index: var(--z-index-bishop);
    }

    &:not(.is-active) {
      #{$this}__toggle {
        right: -20px;
        left: auto;
        transform: translateY(-50%) rotate(180deg);
      }
    }

    &__inner {
      max-height: 100vh;
      overflow-y: auto;
    }

    &__box {
      padding: 16px;
      position: sticky;
      top: 0;
      background-color: var(--color-shade-0);
    }

    &__logo {
      margin-bottom: 24px;
    }

    &__search {

    }
  }
</style>
