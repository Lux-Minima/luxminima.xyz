<template>
  <!-- <VueTerminal :intro="intro" console-sign="$" height="80vh"></VueTerminal> -->
  <div class="vue-terminal-wrapper">
    <div class="lds-css" v-if="this.waiting">
      <div style="width:100%;height:100%" class="lds-rolling"><div></div></div>
    </div>
    <div
      v-bind:style="{ maxHeight: this.height }"
      id="terminal"
      class="boring"
      v-bind:class="{
        'default-height': !fullScreen,
        'fullscreen-height': fullScreen
      }"
      data-theme="boring"
    ></div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
// import VueTerminal from "vue-terminal-ui";
import "../ptty.jquery.js";
import $ from "jquery";
import router from "@/router";

export default {
  name: "shellCode",
  props: {
    height: {
      type: String,
      default: "100%"
    },
    intro: {
      type: String,
      default: ""
    },
    allowArbitrary: {
      type: Boolean,
      default: false
    },
    fullScreen: {
      type: Boolean,
      default: false
    },
    consoleSign: {
      type: String,
      default: "$"
    }
  },
  data: function() {
    return {
      waiting: false
    };
  },

  methods: {
    toggleWaiting() {
      this.waiting = !this.waiting;
    }
  },
  mounted() {
    const commandEmitter = commandText => {
      let prms = new Promise((resolve, reject) => {
        var data = {
          text: commandText
        };
        this.$emit("command", data, resolve, reject);
        this.toggleWaiting();
      });

      prms.finally(this.toggleWaiting);
      return prms;
    };
    var $ptty = $("#terminal", ".vue-terminal-wrapper").Ptty({
      i18n: {
        welcome: this.intro
      },
      ps: this.consoleSign,
      allowArbitrary: this.allowArbitrary,
      passCommand: this.allowArbitrary ? commandEmitter : null
    });

    //shellcode
    $ptty.register("command", {
      name: "shellcode",
      method: function(cmd) {
        cmd.out =
          '<span class="font-bold">Welcome to shellcode <span class="text-green-500">v.3</span></span><br>▫ New Design<br>▫ Auto Complete<br>▫ Command History<br>▫ <span class="text-green-500">VueJS</span>';
        return cmd;
      },
      help: "News, update and version."
    });
    //ui
    $ptty.register("command", {
      name: "ui",
      method: function(cmd) {
        router.push("/");
        //cmd.out = '...'
        return cmd;
      },
      help: "Open the User Interface."
    });
    //test
    $ptty.register("command", {
      name: "inside",
      method: function(cmd) {
        cmd.out = "working bitch";
        return cmd;
      },
      help: "Open the User Interface."
    });
    //info
    $ptty.register("command", {
      name: "info",
      method: function(cmd) {
        router.push("info");
        //cmd.out = '...'
        return cmd;
      },
      help: "Open the Info Page."
    });
    //log
    $ptty.register("command", {
      name: "log",
      method: function(cmd) {
        router.push("log");
        //cmd.out = '...'
        return cmd;
      },
      help: "Open the Log Journal."
    });
    /* portal
    $ptty.register('command', {
      name: 'portal',
      method: function (cmd) {
        window.open('https://google.com', '_blank');
        cmd.out = 'The portal is now open !'
        return cmd
      },
      help: 'wip'
    }) */
    //music
    $ptty.register("command", {
      name: "music",
      method: function(cmd) {
        //window.open('/music', '_blank');
        window.open(
          "/music",
          "targetWindow",
          "toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=450,height=600"
        );
        cmd.out = "The music player is open ..";
        return cmd;
      },
      help: "Open our custom playlist."
    });
  },
  components: {
    // VueTerminal
  }
};
</script>

<style lang="scss">
/* hight settings */
#terminal.default-height {
  max-height: 250px;
}
#terminal.fullscreen-height {
  height: 100vh;
}

/* basic bw theme */
.boring,
.boring .prompt,
.boring .content {
  font-family: "Courier New", Courier, monospace;
  color: #ddd;
}
.boring .content {
  padding: 15px 15px 0 15px;
}
.boring .prompt {
  padding: 0 15px 15px 15px;
}
.boring .loading span::after {
  content: "⚙";
  color: #ddd;
  font-size: 10em;
  border-radius: 10em;
  opacity: 0.4;
}
.boring .content ul {
  margin: 0;
}
.boring .prompt .input.show-caret {
  color: #ddd;
  opacity: 0.85;
}
.boring .prompt .input,
.boring .prompt .input::before,
.boring .prompt .input::after {
  color: transparent;
  text-shadow: 0 0 0 #ddd;
}
.boring .content div .cmd_in .cmd_ps,
.boring .prompt .input::before {
  padding-right: 10px;
}
.boring .content ul li {
  list-style-type: none;
}
.boring div.prompt div.input::after {
  font-size: 2em;
}
.boring div.prompt div.input,
.boring div.content div div.cmd_in,
.boring div.prompt div.input::before {
  line-height: 2em;
}

/* other styles */
#terminal {
  position: relative;
  display: block;
  overflow-x: hidden;
  height: 100%;
  text-align: left;
}
#terminal div.content div p {
  margin: 0;
}
#terminal div.content div {
  clear: both;
  word-wrap: break-word;
}
#terminal div.content div ul {
  padding: 0;
  white-space: normal;
}
#terminal div.content div ul li {
  list-style: none;
}
#terminal div.content div ul.sq-li li {
  display: inline-block;
  text-align: center;
  padding: 10px;
  min-width: 5%;
}
#terminal div.prompt div.input {
  width: 100%;
  white-space: pre-wrap;
  word-wrap: break-word;
  cursor: default;
  outline: none;
}
#terminal div.prompt div.input::before {
  vertical-align: middle;
  content: attr(data-ps);
}
#terminal div.prompt div.input::after {
  visibility: visible;
  vertical-align: middle;
  content: attr(data-caret);
}
#terminal div.prompt div.input.blink::after {
  visibility: hidden;
}
#terminal div.prompt .hide {
  position: absolute;
  top: -9999em;
}
#terminal div.loading {
  display: none;
}
#terminal div.loading.working {
  display: block;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: inherit;
  height: inherit;
}
#terminal div.loading span {
  -webkit-animation: spin 4s linear infinite;
  -moz-animation: spin 4s linear infinite;
  -ms-animation: spin 4s linear infinite;
  -o-animation: spin 4s linear infinite;
  animation: spin 4s linear infinite;
}
@-moz-keyframes spin {
  100% {
    -moz-transform: rotate(360deg);
  }
}
@-webkit-keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
  }
}
@-ms-keyframes spin {
  100% {
    -ms-transform: rotate(360deg);
  }
}
@-o-keyframes spin {
  100% {
    -o-transform: rotate(360deg);
  }
}
@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}

/* loader */
@keyframes lds-rolling {
  0% {
    -webkit-transform: translate(-50%, -50%) rotate(0deg);
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    -webkit-transform: translate(-50%, -50%) rotate(360deg);
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
@-webkit-keyframes lds-rolling {
  0% {
    -webkit-transform: translate(-50%, -50%) rotate(0deg);
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    -webkit-transform: translate(-50%, -50%) rotate(360deg);
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
.lds-css {
  position: absolute;
}
.lds-rolling {
  position: fixed;
  top: 30px;
  z-index: 1000;
  right: 10px;
}
.lds-rolling div,
.lds-rolling div:after {
  position: absolute;
  width: 160px;
  height: 160px;
  border: 20px solid #ffffff;
  border-top-color: transparent;
  border-radius: 50%;
}
.lds-rolling div {
  -webkit-animation: lds-rolling 1s linear infinite;
  animation: lds-rolling 1s linear infinite;
  top: 100px;
  left: 100px;
}
.lds-rolling div:after {
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
}
.lds-rolling {
  width: 36px !important;
  height: 36px !important;
  -webkit-transform: translate(-18px, -18px) scale(0.18) translate(18px, 18px);
  transform: translate(-18px, -18px) scale(0.18) translate(18px, 18px);
}

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
