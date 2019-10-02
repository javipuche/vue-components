<template>
    <span class="c-icon" :class="icon && `c-icon--${icon}`">
        <img src="@/assets/images/logos/muchoviaje.png" alt="">
    </span>
</template>

<script>
    export default {
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
