<template>
  <div class="log font-mono p-5 bg-gray-800">
    <div
      v-if="err.status == true"
      class="text-white px-6 py-4 border-0 rounded relative mb-4 bg-red-500"
    >
      <span class="text-xl inline-block mr-5 align-middle">
        <svg
          class="w-6 h-6 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 5h2v6H9V5zm0 8h2v2H9v-2z"
          />
        </svg>
      </span>
      <span class="inline-block align-middle mr-8">
        <b class="capitalize">Warning!</b> {{ err.message }}
      </span>
      <button
        @click="err.status = false"
        class="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
      >
        <span>×</span>
      </button>
    </div>
    <div v-if="loading == true" class="">
      <h1
        class="text-sm md:text-base lg:text-lg xl:text-2xl font-bold text-center"
      >
        Loading ...
      </h1>
      <img class="mx-auto w-1/3 mt-8" src="../assets/mew.gif" alt="" />
    </div>
    <div v-if="loading == false">
      <h1 class="text-2xl">
        Lux.Minima
      </h1>
      <p>
        | log.journal - <span class="text-red-800">nonobstant</span>
        <br class="block md:hidden" />
        <span class="text-gray-600 text-sm">(=｀ω´=)</span>
      </p>
      <br />
      <div class="w-full mt-3 masonry-with-columns gap-1 p-1">
        <div
          v-for="log in logs"
          :key="log.sys.id"
          class="border-gray-700 border-2 p-2"
        >
          <h1
            class="text-sm md:text-base lg:text-lg xl:text-2xl font-bold text-center"
          >
            {{ log.fields.title }}
          </h1>
          <!-- <p
            v-html="arch.content"
            class="text-xs md:text-sm lg:text-base xl:text-lg font-semibold mx-auto text-center"
          ></p> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import VueMarkdown from 'vue-markdown';
//import mdviewer from "@/components/markdown.vue";
import axios from "axios";

export default {
  name: "log",
  components: {
    //mdviewer
  },
  mounted() {
    axios
      .get(
        "https://cdn.contentful.com/spaces/81ncg6wai8hh/environments/master/entries?access_token=uNfBv7Esqi_wfudLGYLdTK4JcOOI-L5YFGPgMMhHvqE"
      )
      .then(response => {
        this.logs = response.data.items;
        console.log(this.logs);
      })
      .catch(error => {
        //console.log(error)
        this.err.message = error;
        this.err.status = true;
      })
      .finally(() => (this.loading = false));
  },
  data() {
    return {
      logs: [],
      loading: true,
      err: {
        status: false,
        message: ""
      }
    };
  }
};
</script>
