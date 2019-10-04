<template>
    <body>
        <RouterView />
    </body>
</template>

<script>
    import '@/assets/js/icons.js'
    import '@/assets/js/fontawesome.js'

    export default {
        updated () {
            // window.Pegasus.init()
        }
    }
</script>

<style lang="scss">
  :root {
    --color-text: var(--color-shade-1500);
    --color-icons: var(--color-shade-700);
    --color-border: var(--color-shade-400);
  }

  body {
    color: var(--color-text);
  }
</style>
