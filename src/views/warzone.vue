<template>
  <div class="warzone">
    <HelloWorld />
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "warzone",
  components: {
    //HelloWorld
  },
  methods: {
    async fetchSomething() {
      const ip = await this.$axios.$get("");
      this.ip = ip;
    }
  }
};
</script>
