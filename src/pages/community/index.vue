<template>
  <div class="content">社区
    <!-- <icon-library></icon-library> -->
    <div>
      <span>{{this.$store.state.count}}</span>
    </div>
    <div>
      <span>{{this.$store.getters.addCount}}</span>
    </div>
    <button v-on:click="addCount">按钮</button>
  </div>
</template>
<script>
import iconLibrary from "@/components/icon-library";
// import { XInput } from "vux";
export default {
  components: {
    iconLibrary
  },
  name: "community",
  data() {
    return {};
  },
  mounted() {},
  methods: {
    addCount() {
      this.$store.dispatch("newCount");
    }
  }
};
</script>
<style lang="less" scoped>
.weui-cell {
  margin-top: 600px;
}
</style>


