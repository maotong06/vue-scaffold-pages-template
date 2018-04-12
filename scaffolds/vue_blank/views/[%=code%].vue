<template>
  <div class="[%=code%]">
    {{[%=code%]}}
  </div>
</template>

<script>
import mixin_g from './[%=code%].g.js';
import mixin_ex from './[%=code%].ex.js';
export default {
  mixins: [mixin_g, mixin_ex]
}
</script>

<style lang="less" src="./[%=code%].less" scoped></style>
