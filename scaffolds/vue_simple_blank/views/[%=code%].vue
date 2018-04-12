<template>
  <div class="[%=code%]">
    [%=code%]
  </div>
</template>

<script>
import mixin_g from './[%=code%].g.js';
export default {
  mixins: [mixin_g]
}
</script>

<style lang="less" scoped>
.[%=code%]{

}
</style>
