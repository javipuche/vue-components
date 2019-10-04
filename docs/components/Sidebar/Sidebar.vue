<template>
    <aside class="c-sidebar" :class="{ 'is-active' : isPanelOpen }">
        <Navigation />
    </aside>
</template>

<script>
    import { store, mutations } from '@/store/nav.js'
    import Navigation from '@/components/Navigation/Navigation.vue'

    export default {
        components: {
            Navigation
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
    overflow: auto hidden;
    border-right: 1px solid var(--color-border);
    background-color: var(--color-shade-0);

    &__search {
      padding: 16px;
    }
  }
</style>
