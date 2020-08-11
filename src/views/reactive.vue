<template>
  <div>
    <!-- {{ countRef }} {{ objectRea.foo }} {{ objectRea.double }} {{ foo }}
    {{ plus }} {{ plusOne }} -->
    <button @click="goto">点击到生命周期页面</button>
  </div>
</template>
<script lang="ts">
import { ref, reactive, computed, readonly, watchEffect, watch } from "vue";
export default {
  setup() {
    const countRef = ref(0);
    const foo = ref<string | number>("foo");
    foo.value = 2;
    const objectRea = reactive({
      foo: "bar",
      countRef,
      double: computed(() => objectRea.countRef * 2)
    });
    const plus = computed(() => countRef.value * 2);
    const plusOne = computed({
      get: () => countRef.value + 1,
      set: val => {
        countRef.value = val - 1;
      }
    });
    objectRea.countRef = 1;
    console.log(countRef.value);
    const otherCount = ref(2);
    objectRea.countRef = otherCount.value;
    console.log(objectRea.countRef);
    console.log(countRef.value);
    plusOne.value = 6;
    console.log(countRef.value);
    const original = reactive({ count: 0 });
    const copy = readonly(original);
    watchEffect(() => {
      console.log(111111111, copy.count);
    });
    watch(otherCount, (v, o) => {
      console.log(222222222, v, o);
    });
    function goto() {
      this.$router.push({ path: "/lifeCycle" });
    }
    // copy.count++;//爆红 只读不可更改
    original.count++;
    return {
      countRef,
      objectRea,
      foo,
      plus,
      plusOne,
      copy,
      goto
    };
  }
};
</script>
