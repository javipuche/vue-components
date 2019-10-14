<template>
    <nav class="c-nav">
        <template v-for="item in navigation">
            <div v-if="item.group" :key="item.id" class="c-nav__group">
                {{ item.group }}
            </div>
            <NavigationList :key="item.id" :items="item.children" />
        </template>
    </nav>
</template>

<script>
    import config from '@/config.js'
    import NavigationList from '@/components/Navigation/NavigationList.vue'

    export default {
        components: {
            NavigationList
        },
        data () {
            return {
                navigation: config.navigation
            }
        }
    }
</script>

<style lang="scss" scoped>
  .c-nav {
    min-width: 320px;
    padding: 24px;

    &__group {
      text-transform: uppercase;
      font-weight: 600;
      font-size: 14px;
      margin-bottom: 16px;
      color: var(--color-shade-800);
    }
  }
</style>
