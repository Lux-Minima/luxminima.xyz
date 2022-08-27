<template>
  <vue-simple-markdown :source="mdText"></vue-simple-markdown>
</template>

<script>
//import axios from 'axios'

import fileMd from "raw-loader!../../README.md";
export default {
  name: "mdviewer",
  props: ["_src"],
  data() {
    return {
      mdText: "# Not Working"
    };
  },
  mounted() {
    this.mdText = fileMd;
    // eslint-disable-next-line no-console
    console.log("fileMd", fileMd);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
