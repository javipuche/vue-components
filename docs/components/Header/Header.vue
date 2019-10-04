<template>
    <header class="c-header">
        <div class="c-header__btn">
            <Hamburger />
        </div>
        <div class="c-header__title">
            Pegasus
        </div>
        <Search class="c-header__search" />
    </header>
</template>

<script>
    import Hamburger from '@/components/Hamburger/Hamburger.vue'
    import Search from '@/components/Search/Search.vue'

    export default {
        components: {
            Hamburger,
            Search
        }
    }
</script>

<style lang="scss" scoped>
  .c-header {
    border-bottom: 1px solid var(--color-border);
    padding: 8px 16px;
    height: 56px;
    background-color: var(--color-shade-0);
    display: grid;
    grid-template-columns: auto minmax(40px, 1fr) minmax(auto, 320px);
    grid-gap: 16px;
    align-items: center;

    &__title {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      line-height: 1.4;
      font-weight: 700;
    }
  }
</style>
