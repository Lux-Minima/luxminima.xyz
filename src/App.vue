<template>
  <div
    class="absolute w-full min-h-screen mt-0 top-0 mono text-lg transition ease-in-out duration-700 text-black bg-white dark:text-white dark:bg-black"
    id="app"
    ref="minima"
  >
    <div
      class="m-0 top-0 right-0 rounded-lg"
    >
      <div class="relative block w-full">
        <nav class="fixed col-span-1 px-4 hidden lg:block">
          <div
            class="  mt-px ml-3 p-4 rounded-l-lg text-right"
          >
            <h3
              class=" text-center  nav text-white bg-black px-2 pt-1 pb-3 robot" style="line-height:0.7rem"
            >
              <span class="text-4xl">LUX</span><br>MINIMA
            </h3>
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
            <br>
            <router-link
              to="/"
            >
              <svg
                class="inline-block h-6 w-6 ml-6 mr-2 my-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 164 164" stroke="currentColor"
              >
                <path stroke-linecap="square" stroke-linejoin="arcs" stroke-width="15" d="M75,15 L75,15 L15,135 L135,135 L105,75 " />
              </svg
              ><span class="text-xxs hidden lg:inline">/lux</span>
            </router-link>
            <br>
            <router-link
              to="/nox"
            >
              <svg
                class="inline-block h-6 w-6 ml-6 mr-2 my-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 164 164" stroke="currentColor"
              >
                <path stroke-linecap="square" stroke-linejoin="arcs" stroke-width="15" d="M75,15 A60,60 0 0,0 15,75 A60,60 0 0,0 75,135 A60,60 0 0,0 135,75 A60,60 0 0,0 75,15 L75,15 L75,135 " />
              </svg
              ><span class="text-xxs hidden lg:inline">/nox</span>
            </router-link>
            <br>
            <router-link
              to="/usr"
            >
              <svg
                class="inline-block h-5 w-5 ml-6 mr-2 my-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg
              ><span class="text-xxs hidden lg:inline">/usr</span>
            </router-link>
            <br>
            <!-- <router-link
              to="/txt"
            >
              <svg
                class="inline-block h-5 w-5 ml-6 mr-2 my-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />              </svg
              ><span class="text-xxs hidden lg:inline">/txt</span>
            </router-link> -->

          </div>
        </nav>
        <nav

          class="fixed block mx-12 my-5 right-0 bottom-0 rounded-lg lg:hidden z-50"
        >
          <router-link to="/">
            <svg
              @click="select(0)"
              class="fill-current inline-block h-4 w-4 mx-3 my-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M0 0h9v9H0V0zm2 2v5h5V2H2zm-2 9h9v9H0v-9zm2 2v5h5v-5H2zm9-13h9v9h-9V0zm2 2v5h5V2h-5zm-2 9h9v9h-9v-9zm2 2v5h5v-5h-5z"
              /></svg
            ><span class="text-xxs hidden lg:inline">menu</span>
          </router-link>
          <router-link to="/usr">
            <svg
              @click="select(2)"

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
          class="fixed relative block mx-6 my-5 right-0 top-0 rounded-lg lg:mx-16 z-50 cursor-pointer"
        >
          <svg
           v-if="theme == 'light'"
           @click="themeDark()"
           xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 absolute right-0 text-black fill-current" viewBox="0 0 20 20" fill="currentColor"
           >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
          <svg
           v-if="theme == 'dark'"
           @click="themeLight()"
           xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 absolute right-0 text-white fill-current" viewBox="0 0 20 20" fill="currentColor"
           >
           <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>


        </nav>
        <div
          class="hidden rounded-r-lg border-l-4 border-solid ml-2 my-5 lg:mr-10 lg:ml-40 lg:block"
        >
          <div class="">
            <p
              id=""
              class="pl-3 py-2 px-2  rounded-r-lg"
              contenteditable="false"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd" />
              </svg>
              <span
                class=" rounded-lg shadow-2xl mono px-4 py-3"
              >
                NOX TERMINAL
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

          class="rounded-r-lg border-l-4 border-solid ml-2 my-5 lg:mr-10 lg:ml-40"
        />
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import "@/plugins/ptty.jquery.js";
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
      theme: ""
    };
  },
  mounted() {

    //theme setup
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      this.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      this.theme = "light";
    }

    //terminal
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
          'Type <b>help</b> to list the available commands.'
      },
      ps: "Φ",
      allowArbitrary: this.allowArbitrary,
      passCommand: this.allowArbitrary ? commandEmitter : null
    });

    //init Vue
    let self = this

    //inside
    $ptty.register("command", {
      name: "inside",
      method: function(cmd) {
        cmd.out = "working";
        return cmd;
      },
      help: "testing inside cmd"
    });
    //version
    $ptty.register("command", {
      name: "version",
      method: function(cmd) {
        cmd.out =
          '<span class="font-bold"><span class="text-gray-500">v0.0.5</span> Made with ❤ by lux.minima</span>';
        return cmd;
      },
      help: "News, update and version."
    });
    //cd
    $ptty.register("command", {
      name: "cd",
      method: function(cmd) {
        var dir = $ptty.get_command_option('last').split(' ');
        dir.shift();
        console.log(dir)
        if(dir[0] === "lux"){
            cmd.out = 'LUX'
            //router.push("/");
        }else if(dir[0] === "nox"){
            cmd.out = 'NOX'
        }else {
          cmd.out = 'Incorrect directory ! Try <span class="bg-gray-800 py-1 px-2 rounded-lg">ls</span> to get a list of all directory'
        }
        //cmd.out = '...'
        return cmd;
      },
      options: ['lux','nox','usr'],
      help: "navigate to directory"
    });
    //theme
    $ptty.register("command", {
      name: "theme",
      method: function(cmd) {
        if($ptty.get_command_option('last') === "theme dark"){
            self.themeDark()
        }else if($ptty.get_command_option('last') === "theme light"){
            self.themeLight()
        }else{
          cmd.out = 'Incorrect options ! Try <span class="bg-gray-800 py-1 px-2 rounded-lg">theme dark</span> or <span class="bg-gray-800 py-1 px-2 rounded-lg">theme light</span>'
        }
        //cmd.out = '...'
        return cmd;
      },
      help: "options : dark & light"
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
    //ls
    $ptty.register("command", {
      name: "ls",
      method: function(cmd) {
        cmd.out = '<span class="text-gray-400">lux</span> <span class="text-gray-600">nox</span> <span class="text-green-600">usr</span>'
        return cmd;
      },
      help: "show directory list"
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
  },
  methods: {
    // Theme action
    themeLight() {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      this.theme = "light";
    },
    themeDark() {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      this.theme = "dark";
    },
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
@import url('https://fonts.googleapis.com/css2?family=Ubuntu+Mono&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
* {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -moz-tap-highlight-color: rgba(0, 0, 0, 0);
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
.robot {
  font-family: 'Roboto', sans-serif;
}
.mono {
  font-family: "Courier New", 'Ubuntu Mono', monospace;
}
.pixel {
  font-family: "Press Start 2P", cursive;
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

#terminal {
  font-size: 1rem;
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
