<template>
    <div class="c-layout">
        <div class="c-layout__inner">
            <Sidebar class="c-layout__sidebar" />

            <div class="c-layout__content">
                <slot />
            </div>
        </div>
    </div>
</template>

<script>
    import Header from '@/components/Header/Header.vue'
    import Sidebar from '@/components/Sidebar/Sidebar.vue'

    export default {
        components: {
            Header,
            Sidebar
        }
    }
</script>

<style lang="scss" scoped>
  .c-layout {
    min-height: 100vh;
    display: flex;
    flex-direction: column;

    &__inner {
      display: flex;
      flex-grow: 1;
    }

    &__sidebar {
      transition: all 0.3s;
      z-index: var(--z-index-knight);
      width: 320px;
      flex-shrink: 0;
      max-height: 100vh;
      position: sticky;
      top: 0;

      @include breakpoint(l down) {
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        transform: translateX(-100%);
        will-change: transform;
      }

      @include breakpoint(l) {
        will-change: width;
      }

      &:not(.is-active) {
        @include breakpoint(l) {
          width: 0;
        }
      }

      &.is-active {
        @include breakpoint(l down) {
          transform: translateX(0);
        }
      }
    }

    &__content {
      flex-grow: 1;
      padding: 16px;
      z-index: var(--z-index-pawn);
      min-width: 1px;

      @include breakpoint(m) {
        padding: 40px;
      }
    }
  }

</style>
