<template>
  <h1>Hello World! {{msg}}</h1>
</template>

<script>
  export default {
    name: 'App',
    data () {
      return {
        msg: '95258'
      }
    },
    async mounted () {
      let y = await new Promise((resolve, reject) => {
        resolve('852')
      })
      console.log('y', y)
    }
  }
</script>

<style lang="scss">
html , body {
  padding: 0;
  margin: 0;
}
$red: red;
h1 {
  color: $red;
}
</style>