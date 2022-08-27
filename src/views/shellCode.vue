<template>
  <div class="shellCode">
    <p
      id="shellcodeOS"
      class="text-center pt-5 px-5 text-xs pixel"
      contenteditable="false"
    >
      ShellcodeOS v.3
    </p>
    <VueTerminal :intro="intro" console-sign="$" height="80vh"></VueTerminal>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import VueTerminal from "vue-terminal-ui";

export default {
  name: "shellCode",
  data() {
    return {
      intro: ""
    };
  },
  methods: {},
  components: {
    VueTerminal
  }
};
</script>
<style lang="scss">
@-webkit-keyframes glitch {
  0% {
    color: white;
    -webkit-transform: translateX(0) translateY(0%);
    transform: translateX(0) translateY(0%);
  }
  25% {
    color: #3498db;
    -webkit-transform: translateX(1px) translateY(1px);
    transform: translateX(1px) translateY(1px);
  }
  40% {
    color: #e74c3c;
    -webkit-transform: translateX(-2px) translateY(-2px);
    transform: translateX(-2px) translateY(-2px);
  }
  50% {
    color: #cccccc;
    -webkit-transform: translateX(0) translateY(0);
    transform: translateX(0) translateY(0);
  }
  80% {
    color: #3498db;
    -webkit-transform: translateX(2px) translateY(2px);
    transform: translateX(2px) translateY(2px);
  }
  90% {
    color: #e74c3c;
    -webkit-transform: translateX(-1px) translateY(-1px);
    transform: translateX(-1px) translateY(-1px);
  }
  100% {
    color: white;
    -webkit-transform: translateX(0) translateY(0);
    transform: translateX(0) translateY(0);
  }
}
@keyframes glitch {
  0% {
    color: #c23b27;
    -webkit-transform: translateX(0) translateY(0%);
    transform: translateX(0) translateY(0%);
  }
  25% {
    color: #af64cc;
    -webkit-transform: translateX(1px) translateY(1px);
    transform: translateX(1px) translateY(1px);
  }
  40% {
    color: #56cc54;
    -webkit-transform: translateX(-2px) translateY(-2px);
    transform: translateX(-2px) translateY(-2px);
  }
  50% {
    color: #cccccc;
    -webkit-transform: translateX(0) translateY(0);
    transform: translateX(0) translateY(0);
  }
  80% {
    color: #c23b27;
    -webkit-transform: translateX(2px) translateY(2px);
    transform: translateX(2px) translateY(2px);
  }
  90% {
    color: #eba7dc;
    -webkit-transform: translateX(-1px) translateY(-1px);
    transform: translateX(-1px) translateY(-1px);
  }
  100% {
    color: #c23b27;
    -webkit-transform: translateX(0) translateY(0);
    transform: translateX(0) translateY(0);
  }
}
@-webkit-keyframes changeColor {
  0% {
    color: #af64cc;
  }
  25% {
    color: #56cc54;
  }
  50% {
    color: #c23b27;
  }
  75% {
    color: black;
  }
  100% {
    color: #af64cc;
  }
}
@keyframes changeColor {
  0% {
    color: #af64cc;
  }
  25% {
    color: #56cc54;
  }
  50% {
    color: #c23b27;
  }
  75% {
    color: black;
  }
  100% {
    color: #af64cc;
  }
}
#shellcodeOS {
  -webkit-animation: glitch 0.2s linear infinite;
  animation: glitch 0.2s linear infinite;
  -webkit-animation-play-state: paused;
  animation-play-state: paused;
}
#shellcodeOS:hover {
  -webkit-animation-play-state: running;
  animation-play-state: running;
}
#terminal div.prompt div.input::before {
  -webkit-animation: changeColor 10s ease-in-out infinite;
  animation: changeColor 10s ease-in-out infinite;
}
</style>
