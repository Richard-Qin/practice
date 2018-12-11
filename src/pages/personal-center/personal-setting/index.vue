<template>
  <div class="personal_setting">
    <div class="setting_head">
      <div class="pet_name">
        <img src="../../../assets/images/headPhone.jpg" alt>
        <div>
          <div>芝麻凛</div>
          <div>1110</div>
        </div>
      </div>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-youjiantou-copy"></use>
      </svg>
    </div>
    <group label-margin-right="4em" label-align="right">
      <x-address
        :title="title"
        v-model="value"
        :list="addressData"
        placeholder="请选择"
        class="ignore"
      ></x-address>
    </group>
    <group>
      <x-switch :title="$t('Toggle')" v-model="show"></x-switch>
    </group>
    <div v-transfer-dom>
      <confirm
        v-model="show"
        :title="$t('Confirm deleting the item')"
        @on-cancel="onCancel"
        @on-confirm="onConfirm"
        @on-show="onShow"
        @on-hide="onHide"
      >
        <p style="text-align:center;">{{ $t('Are you sure?') }}</p>
      </confirm>
    </div>
  </div>
</template>
<script>
import {
  Group,
  Picker,
  XAddress,
  ChinaAddressV4Data,
  Confirm,
  Value2nameFilter as value2name
} from "vux";

export default {
  components: {
    Confirm,
    Picker,
    XAddress,
    Group
  },
  name: "personalSetting",
  data() {
    return {
      show: false,
      title: "地址",
      value: [],
      showAddress: false,
      addressData: ChinaAddressV4Data
    };
  },
  mounted() {},
  methods: {
    onCancel() {
      console.log("on cancel");
    },
    onConfirm(msg) {
      console.log("on confirm");
      if (msg) {
        alert(msg);
      }
    }
  }
};
</script>

