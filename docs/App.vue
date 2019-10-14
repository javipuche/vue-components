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
    --color-primary: #017177;
    --color-secondary: #00afa9;
  }

  body {
    color: var(--color-text);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 500;
  }

  h1 {
    font-size: var(--font-size-4xl);
  }

  h2 {
    font-size: var(--font-size-3xl);
  }

  h3 {
    font-size: var(--font-size-2xl);
  }

  h4 {
    font-size: var(--font-size-xl);
  }

  h5 {
    font-size: var(--font-size-l);
  }

  h6 {
    font-size: var(--font-size-m);
  }
</style>
