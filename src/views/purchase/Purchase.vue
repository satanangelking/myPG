<template>
  <div id="purchase">
    <div class="order">
      <label for="orderid">
        <span>采购单编号</span>
        <input
          type="text"
          id="orderid"
          v-model="purchasefrom.orderid"
          disabled="disabled"
        />
      </label>
    </div>

    <PurchaseItem>
      <PurchaseItemInput label_name="name">
        <span slot="name">名称</span>
        <input
          type="text"
          slot="input"
          id="name"
          v-model="purchasefrom.name"
          :input="inputFunc"
        />
      </PurchaseItemInput>
      <PurchaseItemInput label_name="weight">
        <span slot="name">重量</span>
        <input
          type="text"
          v-model="purchasefrom.weight"
          slot="input"
          id="weight"
        />
      </PurchaseItemInput>
      <PurchaseItemInput label_name="price">
        <span slot="name">单价</span>
        <input
          type="text"
          v-model="purchasefrom.price"
          slot="input"
          id="price"
        />
      </PurchaseItemInput>
      <PurchaseItemInput label_name="origin">
        <span slot="name">产地</span>
        <input
          type="text"
          v-model="purchasefrom.origin"
          slot="input"
          id="origin"
        />
      </PurchaseItemInput>
      <PurchaseItemInput label_name="tag">
        <span slot="name">标签</span>
        <input type="text" v-model="purchasefrom.tag" slot="input" id="tag" />
      </PurchaseItemInput>
      <PurchaseItemInput label_name="class">
        <span slot="name">类别</span>
        <input
          type="text"
          v-model="purchasefrom.class"
          slot="input"
          id="class"
        />
      </PurchaseItemInput>
    </PurchaseItem>
    <button @click="commit">提交</button>
  </div>
</template>
<script>
import require from "@/network/request.js";

import PurchaseItem from "@/views/purchase/purchaseitem/PurchaseItem";
import PurchaseItemInput from "@/views/purchase/purchaseitem/purchaseiteminput/PurchaseItemInput";
export default {
  components: {
    PurchaseItem,
    PurchaseItemInput
  },
  data: function() {
    return {
      purchasefrom: {
        orderid: "",
        name: "",
        origin: "",
        price: "",
        weight: "",
        tag: "",
        class: ""
      },
      orderid: "",
      data: ""
    };
  },
  methods: {
    async commit() {
      console.log(this.purchasefrom);
      const res = await require({
        method: "post",
        url: "/purchase.php/",
        data: this.purchasefrom
      });
      const data = res.data;
      if (data.meta.code != 200) {
        alert(data.meta.message);
      }
    },
    inputFunc() {
      if (this.purchasefrom.name.trim()) {
        require({
          method: "post",
          url: "/fruit_name.php/",
          data: this.purchasefrom
        });
      }
    },
    GetDateNow() {
      let vNow = new Date();
      let sNow = "";
      sNow += String(vNow.getFullYear());
      sNow += String(vNow.getMonth() + 1);
      sNow += String(vNow.getDate());
      sNow += String(vNow.getHours());
      sNow += String(vNow.getMinutes());
      sNow += String(vNow.getSeconds());
      sNow += String(vNow.getMilliseconds());
      return sNow;
    }
  },
  computed: {},
  created() {
    this.purchasefrom.orderid = this.GetDateNow();
  }
};
</script>
<style lang="scss" scoped>
#purchase {
  display: flex;
  flex-direction: column;
  .order {
    margin-top: 10px;
    padding: 8px 2px;
    font-size: 14px;
    background: white;
    input {
      border: none;
    }
  }
  div {
    input {
      margin-left: 10px;
    }
  }
  button {
    padding: 10px;
    border: none;
    background: white;
    outline: none;
  }
}
</style>
