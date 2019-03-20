<template>
  <div class="content">社区
    <!-- <icon-library></icon-library> -->
    <div class="inputBox">
      <input placeholder="请输入" type="text" v-focus>
    </div>
  </div>
</template>
<script>
import iconLibrary from '@/components/icon-library'
// import { XInput } from "vux";
export default {
  components: {
    iconLibrary
  },
  name: 'community',
  data() {
    return {}
  },
  methods: {

  },
      directives: {
      focus: {
        // 指令的定义
        inserted: function(el) {
          el.focus()
        }
      }
    }
}
</script>


