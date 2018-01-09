<template>
  <div>
    <p>首页 {{ test.count }}</p>
    <button @click="test.plus">增加</button>
  </div>
</template>
<script>
  import api from '@/api/index'
  export default {
    computed: {
      test () {
        return this.$vuet.getModule('test')
      }
    }
  }
</script>