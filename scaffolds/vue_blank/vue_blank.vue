<template>
  <div class="vue_blank">
    vue_blank
  </div>
</template>

<script>
import mixin_g from './vue_blank.g.js';
import mixin_ex from './vue_blank.ex.js';
export default {
  mixins: [mixin_g, mixin_ex]
}
</script>

<style lang="less" scoped>
@import "./vue_blank.less";
</style>
