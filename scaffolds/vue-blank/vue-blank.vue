<template>
  <div class="vue-blank">
    vue-blank
  </div>
</template>

<script>
import mixin_g from './vue-blank.g.js';
import mixin_ex from './vue-blank.ex.js';
export default {
  mixins: [mixin_g, mixin_ex]
}
</script>

<style lang="less" scoped>
@import "./vue-blank.less";
</style>
