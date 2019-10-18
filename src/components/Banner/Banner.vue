<template>
    <div class="c-banner">
        <AtPicture class="c-banner__picture" :lazy="false" />
        <div v-if="$slots.default" class="c-banner__box">
            <slot />
        </div>
    </div>
</template>

<script>
    import AtPicture from '../Picture/Picture.vue'

    export default {
        name: 'AtBanner',
        components: {
            AtPicture
        }
    }
</script>

<style lang="scss">
  .c-banner {
    display: grid;
    grid-template-columns: 1fr;

    &__picture,
    &__box {
      position: relative;
      z-index: 1;
      grid-column: 1/2;
      grid-row: 1/2;
    }

    &__picture {
      --c-picture-ratio-width: 13;
      --c-picture-ratio-height: 17;
    }

    &__box {
      z-index: 2;
    }
  }
</style>
