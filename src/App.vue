<template>
  <div
    :class="mode === 'light' ? 'bg-purple-500' : 'bg-black'"
    class="absolute w-full min-h-screen mt-0 top-0 pixel transition ease-in-out duration-700"
    id="app"
  >
    <div
      :class="mode === 'light' ? 'text-gray-900' : 'text-gray-100'"
      class="m-0 top-0 right-0 "
    >
      <div class="relative block w-full">
        <nav class="fixed col-span-1 px-4 hidden lg:block">
          <div
            :class="
              mode === 'light'
                ? 'text-purple-800 border-purple-700'
                : 'text-red-700 border-red-700'
            "
            class="border-r-4 border-solid  mt-px ml-3 p-4  text-right"
          >
            <h3
              class="text-sm text-center  nav border-transparent border-dashed border-l-4 hover:border-black"
            >
              LUX<br />MINIMA
            </h3>
            <p
              class="text-xs pl-2 mt-3 pb-px  border-transparent border-dashed border-l-4 hover:border-black"
            >
              4Φ4
            </p>
          </div>
          <div class="">
            <svg
              class="fill-current text-gray-600 inline-block h-6 w-6 mx-6 my-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 9a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
              />
            </svg>
            <br />
            <router-link
              to="/"
              :class="
                mode === 'light'
                  ? 'hover:text-purple-900'
                  : 'hover:text-red-500'
              "
            >
              <svg
                :class="mode === 'light' ? 'text-gray-900' : 'text-gray-600'"
                class="fill-current inline-block h-6 w-6 ml-6 mr-2 my-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M0 0h9v9H0V0zm2 2v5h5V2H2zm-2 9h9v9H0v-9zm2 2v5h5v-5H2zm9-13h9v9h-9V0zm2 2v5h5V2h-5zm-2 9h9v9h-9v-9zm2 2v5h5v-5h-5z"
                /></svg
              ><span class="text-xxs hidden lg:inline">.lux</span>
            </router-link>
            <br />
            <router-link
              to="music"
              :class="
                mode === 'light'
                  ? 'hover:text-purple-900'
                  : 'hover:text-red-500'
              "
            >
              <svg
                :class="mode === 'light' ? 'text-gray-900' : 'text-gray-600'"
                class="fill-current  inline-block h-6 w-6 ml-6 mr-2 my-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M16 17a3 3 0 0 1-3 3h-2a3 3 0 0 1 0-6h2a3 3 0 0 1 1 .17V1l6-1v4l-4 .67V17zM0 3h12v2H0V3zm0 4h12v2H0V7zm0 4h12v2H0v-2zm0 4h6v2H0v-2z"
                /></svg
              ><span class="text-xxs hidden lg:inline">.mp3</span>
            </router-link>
            <br />
            <router-link
              to="log"
              :class="
                mode === 'light'
                  ? 'hover:text-purple-900'
                  : 'hover:text-red-500'
              "
            >
              <svg
                :class="mode === 'light' ? 'text-gray-900' : 'text-gray-600'"
                class="fill-current  inline-block h-6 w-6 ml-6 mr-2 my-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M4 18h12V6h-4V2H4v16zm-2 1V0h12l4 4v16H2v-1z" /></svg
              ><span class="text-xxs hidden lg:inline">.log</span>
            </router-link>
            <br />
            <router-link
              to="arc"
              :class="
                mode === 'light'
                  ? 'hover:text-purple-900'
                  : 'hover:text-red-500'
              "
            >
              <svg
                :class="mode === 'light' ? 'text-gray-900' : 'text-gray-600'"
                class="fill-current  inline-block h-6 w-6 ml-6 mr-2 my-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M6 4H5a1 1 0 1 1 0-2h11V1a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V5a1 1 0 0 0-1-1h-7v8l-2-2-2 2V4z"
                /></svg
              ><span class="text-xxs hidden lg:inline">.arc</span>
            </router-link>
            <br />
            <router-link
              to="usr"
              :class="
                mode === 'light'
                  ? 'hover:text-purple-900'
                  : 'hover:text-red-500'
              "
            >
              <svg
                :class="mode === 'light' ? 'text-gray-900' : 'text-gray-600'"
                class="fill-current  inline-block h-6 w-6 ml-6 mr-2 my-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M12.26 11.74L10 14H8v2H6v2l-2 2H0v-4l8.26-8.26a6 6 0 1 1 4 4zm4.86-4.62A3 3 0 0 0 15 2a3 3 0 0 0-2.12.88l4.24 4.24z"
                /></svg
              ><span class="text-xxs hidden lg:inline">.usr</span>
            </router-link>
            <br />
            <img
              class="h-16 w-16 mx-auto my-8"
              :src="require(`@/assets/luxmin.png`)"
              alt=""
            />
          </div>
        </nav>
        <nav
          :class="mode === 'light' ? 'bg-purple-900' : 'bg-red-900'"
          class="fixed block mx-12 my-5 right-0 bottom-0  lg:hidden z-50"
        >
          <router-link to="/">
            <svg
              @click="select(0)"
              :class="selected === 0 ? 'text-black' : 'text-gray-600'"
              class="fill-current inline-block h-4 w-4 mx-3 my-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M0 0h9v9H0V0zm2 2v5h5V2H2zm-2 9h9v9H0v-9zm2 2v5h5v-5H2zm9-13h9v9h-9V0zm2 2v5h5V2h-5zm-2 9h9v9h-9v-9zm2 2v5h5v-5h-5z"
              /></svg
            ><span class="text-xxs hidden lg:inline">menu</span>
          </router-link>
          <router-link to="music">
            <svg
              @click="select(3)"
              :class="selected === 3 ? 'text-black' : 'text-gray-600'"
              class="fill-current inline-block h-4 w-4 mx-3 my-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M16 17a3 3 0 0 1-3 3h-2a3 3 0 0 1 0-6h2a3 3 0 0 1 1 .17V1l6-1v4l-4 .67V17zM0 3h12v2H0V3zm0 4h12v2H0V7zm0 4h12v2H0v-2zm0 4h6v2H0v-2z"
              /></svg
            ><span class="text-xxs hidden lg:inline">mp3</span>
          </router-link>
          <router-link to="log">
            <svg
              @click="select(1)"
              :class="selected === 1 ? 'text-black' : 'text-gray-600'"
              class="fill-current inline-block h-4 w-4 mx-3 my-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M4 18h12V6h-4V2H4v16zm-2 1V0h12l4 4v16H2v-1z" /></svg
            ><span class="text-xxs hidden lg:inline">log</span>
          </router-link>
          <router-link to="arc">
            <svg
              @click="select(5)"
              :class="selected === 5 ? 'text-black' : 'text-gray-600'"
              class="fill-current inline-block h-3 w-3 mx-3 my-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M6 4H5a1 1 0 1 1 0-2h11V1a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V5a1 1 0 0 0-1-1h-7v8l-2-2-2 2V4z"
              /></svg
            ><span class="text-xxs hidden lg:inline">arc</span>
          </router-link>
          <router-link to="usr">
            <svg
              @click="select(2)"
              :class="selected === 2 ? 'text-black' : 'text-gray-600'"
              class="fill-current inline-block h-4 w-4 mx-3 my-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M12.26 11.74L10 14H8v2H6v2l-2 2H0v-4l8.26-8.26a6 6 0 1 1 4 4zm4.86-4.62A3 3 0 0 0 15 2a3 3 0 0 0-2.12.88l4.24 4.24z"
              /></svg
            ><span class="text-xxs hidden lg:inline">usr</span>
          </router-link>
        </nav>
        <nav
          class="fixed relative block mx-6 my-5 right-0 top-0  lg:mx-16 z-50 cursor-pointer"
        >
          <img
            @click="selectMode('light')"
            :class="mode === 'dark' ? 'opacity-100 z-50' : 'opacity-0 z-0'"
            class="absolute right-0 h-8 my-3  transition ease-in-out duration-700"
            :src="require(`@/assets/dark.png`)"
            alt=""
          />
          <img
            @click="selectMode('dark')"
            :class="mode === 'light' ? 'opacity-100 z-50' : 'opacity-0 z-0'"
            class="absolute right-0 h-8 my-3  rounded-full transition ease-in-out duration-700"
            :src="require(`@/assets/light.png`)"
            alt=""
          />
        </nav>
        <div
          :class="
            mode === 'light'
              ? 'bg-purple-600 border-purple-700'
              : 'bg-black border-gray-700'
          "
          class="hidden  border-l-4 border-solid ml-2 mr-4 my-5 lg:mr-10 lg:ml-40 lg:block"
        >
          <div class="shellCode">
            <p
              id="shellcodeOS"
              :class="mode === 'light' ? 'bg-purple-600' : 'bg-gray-900'"
              class="pl-3 py-5 px-5 text-xs pixel "
              contenteditable="false"
            >
              <span
                :class="mode === 'light' ? 'bg-purple-800' : 'bg-gray-800'"
                class="  shadow-2xl px-4 py-3"
              >
                ShellcodeOS v.3
              </span>
            </p>
            <VueTerminal
              class="bg-black"
              console-sign="Φ"
              height="80vh"
            ></VueTerminal>
          </div>
        </div>
        <router-view
          :class="
            mode === 'light'
              ? 'bg-purple-200 border-purple-400'
              : 'bg-gray-900 border-gray-700'
          "
          class=" border-l-4 border-solid ml-2 mr-4 my-5 lg:mr-10 lg:ml-40"
        />
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import "@/ptty.jquery.js";
import $ from "jquery";
import router from "@/router";
//import ShellCode from "@/components/shell.vue";
import VueTerminal from "vue-terminal-ui";

export default {
  name: "app",
  components: {
    //ShellCode
    VueTerminal
  },

  data() {
    return {
      selected: 0,
      mode: "dark",
      user: null
    };
  },
  mounted() {
    var terminalUser = null;
    if (this.$store.getters.getUserStatus) {
      this.user = JSON.parse(this.$store.state.user);
      terminalUser = this.user;
    } else {
      terminalUser = null;
    }

    if (terminalUser === null) {
      console.log("Guest");
    } else if (terminalUser.app_metadata.role === undefined) {
      terminalUser.app_metadata.role = "Guest";
    }

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
        welcome:
          '<a class="font-semibold" href="https://gitlab.com/pachanka/ptty">Ptty</a> (0.0.5 beta).<br> Type <b>help</b> to list the available commands.'
      },
      ps: "Φ",
      allowArbitrary: this.allowArbitrary,
      passCommand: this.allowArbitrary ? commandEmitter : null
    });

    //inside
    $ptty.register("command", {
      name: "inside",
      method: function(cmd) {
        cmd.out = "working";
        return cmd;
      },
      help: "testing inside cmd"
    });
    //logged
    $ptty.register("command", {
      name: "usr",
      method: function(cmd) {
        if (terminalUser === null) {
          cmd.out = "Not logged !";
        } else {
          if (terminalUser.app_metadata.role === undefined) {
            terminalUser.app_metadata.role = "Guest";
            cmd.out =
              '<span class="font-bold">Username: </span>' +
              terminalUser.user_metadata.full_name +
              "</br>" +
              '<span class="font-bold">Role: </span>' +
              terminalUser.app_metadata.roles[0];
          } else {
            cmd.out =
              '<span class="font-bold">Username: </span>' +
              terminalUser.user_metadata.full_name +
              "</br>" +
              '<span class="font-bold">Role: </span>' +
              terminalUser.app_metadata.roles[0];
          }
        }
        return cmd;
      },
      help: "Logged ?"
    });
    //shellcode
    $ptty.register("command", {
      name: "version",
      method: function(cmd) {
        cmd.out =
          '<span class="font-bold">Welcome to shellcode <span class="text-green-500">v.3</span></span><br>▫ New Design<br>▫ Auto Complete<br>▫ Command History<br>▫ <span class="text-green-500">VueJS</span>';
        return cmd;
      },
      help: "News, update and version."
    });
    //ui
    $ptty.register("command", {
      name: ".ui",
      method: function(cmd) {
        router.push("/");
        //cmd.out = '...'
        return cmd;
      },
      help: "Open the User Interface."
    });
    //test
    $ptty.register("command", {
      name: "route",
      method: function(cmd) {
        cmd.out = "router path - /" + router.currentRoute.name;
        return cmd;
      },
      help: "testing router detection."
    });
    //info
    $ptty.register("command", {
      name: ".inf",
      method: function(cmd) {
        router.push("info");
        //cmd.out = '...'
        return cmd;
      },
      help: "Open the Info Page."
    });
    //log
    $ptty.register("command", {
      name: ".log",
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
      name: ".mp3",
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
  methods: {
    select(i) {
      this.selected = i;
    },
    selectMode(i) {
      this.mode = i;
    },
    toggleWaiting() {
      this.waiting = !this.waiting;
    }
  }
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap");
* {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -moz-tap-highlight-color: rgba(0, 0, 0, 0);
}
html {
  background-color: black;
}
body::-webkit-scrollbar {
  width: 10px;
}

/* Track */
body::-webkit-scrollbar-track {
  background: #fff0;
}

/* Handle */
body::-webkit-scrollbar-thumb {
  background: darkgray;
}

/* Handle on hover */
body::-webkit-scrollbar-thumb:hover {
  background: darkgray;
}
html {
  overflow-x: hidden;
  scrollbar-color: darkgray #fff0;
  scrollbar-width: thin;
}
.pixel {
  font-family: "Press Start 2P", cursive;
}
.text-xxs {
  font-size: 10px;
}
.vh-75 {
  min-height: 75vh;
}
@-webkit-keyframes glitch {
  0% {
    color: white;
  }
  25% {
    color: #3498db;
  }
  40% {
    color: #e74c3c;
  }
  50% {
    color: #cccccc;
  }
  80% {
    color: #3498db;
  }
  90% {
    color: #e74c3c;
  }
  100% {
    color: white;
  }
}
@keyframes glitch {
  0% {
    color: #c23b27;
  }
  25% {
    color: #af64cc;
  }
  40% {
    color: #56cc54;
  }
  50% {
    color: #cccccc;
  }
  80% {
    color: #c23b27;
  }
  90% {
    color: #eba7dc;
  }
  100% {
    color: #c23b27;
  }
}
@-webkit-keyframes changeColor {
  0% {
    color: MistyRose;
  }
  25% {
    color: plum;
  }
  50% {
    color: MintCream;
  }
  75% {
    color: MediumPurple;
  }
  100% {
    color: MistyRose;
  }
}
@keyframes changeColor {
  0% {
    color: MistyRose;
  }
  25% {
    color: plum;
  }
  50% {
    color: MintCream;
  }
  75% {
    color: MediumPurple;
  }
  100% {
    color: MistyRose;
  }
}
#shellcodeOS {
  -webkit-animation: glitch 5s linear infinite;
  animation: glitch 5s linear infinite;
  -webkit-animation-play-state: running;
  animation-play-state: running;
}

#terminal div.prompt div.input::before {
  -webkit-animation: glitch 5s linear infinite;
  animation: glitch 5s linear infinite;
  -webkit-animation-play-state: running;
  animation-play-state: running;
  font-size: 1.25rem;
  font-family: "Press Start 2P", cursive;
}
</style>
