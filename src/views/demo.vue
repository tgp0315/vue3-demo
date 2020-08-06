<template>
  <div>{{ countRef }}</div>
</template>
<script>
import { ref, reactive } from "vue";
export default {
  setup () {
    const countRef = ref(0);
    return {
      countRef
    }
  }
};
</script>