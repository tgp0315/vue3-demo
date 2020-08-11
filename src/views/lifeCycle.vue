<template>
  <div>
    <p @click="increase">生命周期</p>
    <p>{{ state.count }}</p>
  </div>
</template>
<script lang="ts">
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted
} from "vue";
import { useCount } from "../utils/common";
export default {
  setup() {
    console.log("App ===> 相当于 vue2.x 中 beforeCreated, created");
    const countOps = useCount(0);
    // function add() {
    //   // countOps.increase();
    console.log(countOps);
    // }
    onBeforeMount(() => {
      console.log("Counter ===> 相当于 vue2.x 中 beforeMount");
    });
    onMounted(() => {
      console.log("Counter ===> 相当于 vue2.x 中 mounted");
    });
    onBeforeUpdate(() => {
      console.log("Counter ===> 相当于 vue2.x 中 beforeUpdate");
    });
    onUpdated(() => {
      console.log("+++++ updated 2");
    });
    onBeforeUnmount(() => {
      console.log("Counter ===> 相当于 vue2.x 中 beforeDestroy");
    });
    onUnmounted(() => {
      console.log("Counter ===> 相当于 vue2.x 中 destroyed");
    });
    return {
      ...countOps,
      onMounted
    };
  }
};
</script>
