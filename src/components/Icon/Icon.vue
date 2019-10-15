<template>
    <span class="c-icon" :class="icon && `c-icon--${icon}`">
        <img src="@/assets/images/logos/muchoviaje.png" alt="">
        <h1>sadasd</h1>
    </span>
</template>

<script>
    export default {
        name: 'Icon',
        props: {
            icon: {
                type: String,
                default: undefined
            }
        }
    }
</script>

<style lang="scss">
  .c-icon {
    color: red;
  }
</style>
