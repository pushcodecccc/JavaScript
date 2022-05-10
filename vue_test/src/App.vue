<template>
  <div>
    <School name="张三" sex="女" :age="18" />
  </div>
</template>

<script>
import School from "./components/School";
export default {
  name: "App",
  components: {
    School,
  },
};
</script>

<style>