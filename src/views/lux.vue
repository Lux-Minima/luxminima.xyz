<template>
  <div class="UI">
    <p class="font-mono  text-normal pt-3 px-5 pt-8">| games</p>
    <div
      class="p-5 grid grid-cols-2 gap-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 mb-8"
    >
      <div class="">
        <img
          v-on:click="link('https://hungry-swirles-f31e6c.netlify.app/')"
          class="w-full sqr sqr-oxy"
          :src="require(`@/assets/img/oxymore.png`)"
          alt=""
        />
        <h1 class="mt-2 text-xs">Oxymore</h1>
        <p class="font-mono text-gray-700 text-sm">
          point&click
          <span class="bg-purple-500 px-1 py-px text-white opacity-75 "
            >new!</span
          >
        </p>
      </div>
      <div class="">
        <img
          class="w-full sqr-cyber opacity-25"
          :src="require(`@/assets/img/cyber.png`)"
          alt=""
        />
        <h1 class="mt-2 text-xs">cyberKuro</h1>
        <p class="font-mono text-gray-700 text-sm">hack&slash</p>
      </div>
    </div>
    <p class="font-mono  text-normal pt-3 px-5">| lux.minima</p>
    <div
      class="p-5 grid grid-cols-2 gap-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 mb-8"
    >
      <div class="">
        <img
          v-on:click="link('https://nebuleuse.luxminima.com')"
          class="w-full sqr sqr-nebu border-teal-100 border-2"
          :src="require(`@/assets/img/nebu.png`)"
          alt=""
        />
        <h1 class="mt-2 text-xs">nebule.use</h1>
        <p class="font-mono text-gray-700 text-sm">novel.poem.crypto</p>
      </div>
      <div class="">
        <img
          v-on:click="link('https://melancolie.luxminima.com/')"
          class="w-full sqr sqr-melanco border-teal-100 border-2"
          :src="require(`@/assets/img/melanco.png`)"
          alt=""
        />
        <h1 class="mt-2 text-xs">melanco.lie</h1>
        <p class="font-mono text-gray-700 text-sm">web.poem</p>
      </div>
      <div class="">
        <img
          v-on:click="link('https://melancolie.luxminima.com/capreolus/')"
          class="w-full sqr sqr-capre border-teal-100 border-2"
          :src="require(`@/assets/img/capre.png`)"
          alt=""
        />
        <h1 class="mt-2 text-xs">capreolus</h1>
        <p class="font-mono text-gray-700 text-sm">web.museum</p>
      </div>
      <div class="">
        <img
          class="w-full sqr sqr-motus border-teal-100 border-2 opacity-25"
          :src="require(`@/assets/img/motus.jpg`)"
          alt=""
        />
        <h1 class="mt-2 text-xs">motusMakinal</h1>
        <p class="font-mono text-gray-700 text-sm">
          rand.music
          <span class="bg-red-500 px-1 py-px text-white opacity-75 "
            >soon!</span
          >
        </p>
      </div>
    </div>
    <p class="font-mono  text-normal pt-3 px-5 pt-8">| atelier.404</p>
    <div
      class="p-5 grid grid-cols-2 gap-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 mb-8"
    >
      <div class="">
        <img
          v-on:click="link('https://gallery404.luxminima.com/')"
          class="w-full sqr sqr-gall border-teal-100 border-2"
          :src="require(`@/assets/img/gall.png`)"
          alt=""
        />
        <h1 class="mt-2 text-xs">gallery</h1>
        <p class="font-mono text-gray-700 text-sm">art.app</p>
      </div>
      <div class="">
        <img
          v-on:click="link('https://atelier404.luxminima.com/the-draw-box/')"
          class="w-full sqr sqr-drawbox border-teal-100 border-2"
          :src="require(`@/assets/img/drawbox.png`)"
          alt=""
        />
        <h1 class="mt-2 text-xs">TheDrawBox</h1>
        <p class="font-mono text-gray-700 text-sm">live.draw</p>
      </div>
      <div class="">
        <img
          v-on:click="link('https://atelier404.luxminima.com/pix/')"
          class="w-full sqr sqr-pix border-teal-100 border-2"
          :src="require(`@/assets/img/pix.png`)"
          alt=""
        />
        <h1 class="mt-2 text-xs">Pix</h1>
        <p class="font-mono text-gray-700 text-sm">pixel.project</p>
      </div>
      <div class="">
        <img
          class="w-full sqr sqr-shop border-teal-100 border-2 opacity-25"
          :src="require(`@/assets/img/shop.png`)"
          alt=""
        />
        <h1 class="mt-2 text-xs">shop</h1>
        <p class="font-mono text-gray-700 text-sm">merch</p>
      </div>
    </div>
    <p class="font-mono  text-normal pt-3 px-5 pt-8">| yuui experiment</p>
    <div
      class="p-5 grid grid-cols-2 gap-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 mb-8"
    >
      <div class="">
        <img
          v-on:click="link('https://luxminima.com/yuui/lab')"
          class="w-full sqr sqr-meme border-teal-100 border-2"
          :src="require(`@/assets/img/lab.png`)"
          alt=""
        />
        <h1 class="mt-2 text-xs">Lab</h1>
        <p class="font-mono text-gray-700 text-sm">3d.labyrinth</p>
      </div>
      <div class="">
        <img
          v-on:click="link('https://luxminima.com/yuui/climb')"
          class="w-full sqr sqr-meme border-teal-100 border-2"
          :src="require(`@/assets/img/climb.png`)"
          alt=""
        />
        <h1 class="mt-2 text-xs">Climb</h1>
        <p class="font-mono text-gray-700 text-sm">3d.mountain</p>
      </div>
      <div class="">
        <img
          v-on:click="link('https://luxminima.com/yuui/vanta')"
          class="w-full sqr sqr-meme border-teal-100 border-2"
          :src="require(`@/assets/img/vanta.png`)"
          alt=""
        />
        <h1 class="mt-2 text-xs">VantaBlue</h1>
        <p class="font-mono text-gray-700 text-sm">3d.vanta.black</p>
      </div>
      <div class="">
        <img
          v-on:click="link('https://luxminima.com/yuui/vanta')"
          class="w-full sqr sqr-meme border-teal-100 border-2"
          :src="require(`@/assets/img/vanta.png`)"
          alt=""
        />
        <h1 class="mt-2 text-xs">Sierpinsky</h1>
        <p class="font-mono text-gray-700 text-sm">fractal.explore</p>
      </div>
      <div class="">
        <img
          v-on:click="link('https://luxminima.com/yuui/vanta')"
          class="w-full sqr sqr-meme border-teal-100 border-2"
          :src="require(`@/assets/img/vanta.png`)"
          alt=""
        />
        <h1 class="mt-2 text-xs">Donutsunshine</h1>
        <p class="font-mono text-gray-700 text-sm">ray.marching</p>
      </div>
    </div>
    <p class="font-mono  text-normal pt-3 px-5 pt-8">| external</p>
    <div
      class="p-5 grid grid-cols-2 gap-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 mb-8"
    >
      <div class="">
        <img
          v-on:click="link('https://givemeameme.com')"
          class="w-full sqr sqr-meme border-teal-100 border-2"
          :src="require(`@/assets/img/meme.png`)"
          alt=""
        />
        <h1 class="mt-2 text-xs">Memes</h1>
        <p class="font-mono text-gray-700 text-sm">give.me.a.meme</p>
      </div>
      <div class="">
        <img
          class="w-full sqr-piano border-teal-100 border-2 opacity-25"
          :src="require(`@/assets/img/piano.png`)"
          alt=""
        />
        <h1 class="mt-2 text-xs">pianoScope</h1>
        <p class="font-mono text-gray-700 text-sm">
          glsl.music
          <span class="bg-yellow-700 px-1 py-px text-white opacity-75 "
            >soon!</span
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "UI",
  components: {
    //HelloWorld
  },
  methods: {
    link(data) {
      window.open(data, "_blank");
    }
  }
};
</script>
<style lang="scss">
.sqr {
  transition: transform 0.3s ease;
}

.sqr:hover {
  transform: translate(5px, -5px);
  cursor: crosshair;
}

.sqr-nebu:hover {
  box-shadow: -5px 5px darkred;
}
.sqr-melanco:hover {
  box-shadow: -5px 5px gray;
}
.sqr-capre:hover {
  box-shadow: -5px 5px lightgray;
}
.sqr-motus:hover {
  transform: translate(0px, 0px);
  cursor: not-allowed;
}
.sqr-gall:hover {
  box-shadow: -5px 5px white;
}
.sqr-drawbox:hover {
  box-shadow: -5px 5px mediumpurple;
}
.sqr-pix:hover {
  box-shadow: -5px 5px CornflowerBlue;
}
.sqr-shop:hover {
  transform: translate(0px, 0px);
  cursor: not-allowed;
}
.sqr-meme:hover {
  box-shadow: -5px 5px cyan;
}
.sqr-yuui:hover {
  box-shadow: -5px 5px #008080;
}
.sqr-cyber:hover {
  transform: translate(0px, 0px);
  cursor: not-allowed;
}
.sqr-oxy:hover {
}
.sqr-piano:hover {
  cursor: not-allowed;
}
</style>
