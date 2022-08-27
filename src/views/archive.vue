<template>
  <div class="archive font-mono p-5 bg-gray-800">
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
    <div v-if="loading == false" class="">
      <p>
        | archives - <span class="text-purple-600">chintoxique</span>
        <br class="block md:hidden" />
        <span class="text-gray-600 text-sm"> (*Ф w Ф*)</span>
        <span
          @click="sortItem"
          class="text-gray-600 hover:text-gray-500 cursor-pointer text-sm float-right mr-3"
        >
          Inverse Order</span
        >
      </p>
      <div class="w-full mt-3 masonry-with-columns gap-1 p-1">
        <div
          v-for="arch in archives"
          :key="arch.id"
          class="border-gray-700 border-2 p-2"
        >
          <h1
            class="text-sm md:text-base lg:text-lg xl:text-2xl font-bold text-center"
          >
            {{ arch.title }}
          </h1>
          <p
            v-if="arch.type == 'center'"
            v-html="arch.content"
            class="text-xs md:text-sm lg:text-base xl:text-lg font-semibold mx-auto text-center"
          ></p>
          <p
            v-if="arch.type == 'left'"
            v-html="arch.content"
            class="text-xs md:text-sm lg:text-base xl:text-lg font-semibold"
          ></p>
        </div>
      </div>
      <br />
    </div>
  </div>
</template>

<script>
//import mdviewer from "@/components/markdown.vue";
//import gql from "graphql-tag";
import axios from "axios";

export default {
  name: "archive",
  components: {
    //mdviewer
  },
  data() {
    return {
      archives: [],
      loading: true,
      err: {
        status: false,
        message: ""
      }
    };
  },
  mounted() {
    axios
      .get("https://minimadmin.herokuapp.com/archives?_limit=-1")
      .then(response => {
        this.archives = response.data;
        this.sortItem();
      })
      .catch(error => {
        //console.log(error)
        this.err.message = error;
        this.err.status = true;
      })
      .finally(() => (this.loading = false));
  },
  //
  // apollo: {
  //   archives: gql`
  //     query {
  //       archives {
  //         id
  //         title
  //         content
  //         type
  //       }
  //     }
  //   `
  // },
  methods: {
    sortItem() {
      this.archives.sort(function(a, b) {
        return b - a;
      });
    }
  }
};
</script>
<style lang="scss">
.masonry-with-columns {
  columns: 3 150px;
  column-gap: 1rem;
  div {
    margin: 0 1rem 1rem 0;
    display: inline-block;
    width: 95%;
  }
}
</style>
