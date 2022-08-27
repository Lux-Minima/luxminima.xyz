<template>
  <div class="usr">
    <p class="font-mono  text-normal pt-3 px-5 pt-8">| usr</p>
    <div class="p-5 mb-8">
      <div class="">
        <div v-show="isLoggedIn">
          <!-- <img
            class="w-10/12 mt-2 ml-2 border-teal-100 border-2"
            :src="this.currentUser.imgURL"
            alt=""
          /> -->
          <p class="class=font-mono text-gray-600 ml-3 my-2 text-sm">
            {{ username }}
          </p>
          <!-- <p class="class=font-mono text-gray-600 ml-3 my-2 text-sm">{{  }}</p> -->
          <router-link
            class="font-mono cursor-pointer text-gray-600 ml-3 text-sm hover:text-gray-700"
            :to="{ name: 'dashboard' }"
            >Dashboard</router-link
          >
          <p>
            <button
              class="font-mono cursor-pointer text-gray-600 ml-3 text-sm hover:text-gray-700"
              @click="triggerNetlifyIdentityAction('logout')"
            >
              Log Out
            </button>
          </p>
        </div>
        <div v-show="!isLoggedIn">
          <!-- <p class="class=font-mono text-gray-600 ml-3 my-2 text-xl">{{ username }}</p> -->
          <p class="font-mono text-gray-800 ml-3 my-2 text-sm">
            You are not logged in.
          </p>
          <p>
            <button
              class="font-mono cursor-pointer text-gray-600 ml-3 text-sm hover:text-gray-700"
              @click="triggerNetlifyIdentityAction('login')"
            >
              Log In
            </button>
          </p>
        </div>

        <!-- <a
          class="font-mono cursor-pointer text-gray-600 ml-3 text-sm hover:text-gray-700"
          href="#"
          >Logout</a
        > -->
      </div>
      <!-- <div class="">
        <h1 class="mt-2 text-xs">Username</h1>
      </div> -->
    </div>
    <p class="font-mono  text-normal pt-3 px-5 pt-8">| us</p>
    <div
      class="p-5 grid grid-cols-2 gap-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 mb-8"
    >
      <div class="">
        <img
          v-on:click="link('https://www.instagram.com/nonobstant_.l')"
          class="w-9/12 sqr sqr-capre border-teal-100 border-2"
          :src="require(`@/assets/img/nonobstant.jpg`)"
          alt=""
        />
        <h1 class="mt-2 text-xs">nonobstant</h1>
        <p class="font-mono text-gray-700 text-sm">instagram</p>
      </div>
      <div class="">
        <img
          v-on:click="link('https://www.instagram.com/envy.chintox')"
          class="w-9/12 sqr sqr-capre border-teal-100 border-2"
          :src="require(`@/assets/img/chintox.jpg`)"
          alt=""
        />
        <h1 class="mt-2 text-xs">chintox</h1>
        <p class="font-mono text-gray-700 text-sm">instagram</p>
      </div>
      <div class="">
        <img
          v-on:click="link('https://www.instagram.com/art.wagner')"
          class="w-9/12 sqr sqr-capre border-teal-100 border-2"
          :src="require(`@/assets/img/pelendrum.jpg`)"
          alt=""
        />
        <h1 class="mt-2 text-xs">pelendrum</h1>
        <p class="font-mono text-gray-700 text-sm">instagram</p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
//import dashboard from "@/components/logged";
//netlify identity
import netlifyIdentity from "netlify-identity-widget";
//import { mapGetters, mapActions } from "vuex";

netlifyIdentity.init({
  APIUrl: "https://luxminima.xyz/.netlify/identity",
  logo: false // you can try false and see what happens
});

export default {
  name: "usr",

  components: {
    //dashboard,
  },

  data: () => ({
    currentUser: false,
    user: null,
    isLoggedIn: false,
    storedUser: null
  }),

  mounted() {
    if (this.$store.getters.getUserStatus) {
      // this.currentUser = true;
      // this.updataUser();
      this.isLoggedIn = true;
    } else {
      console.log("public mode");
    }
  },

  computed: {
    // eslint-disable-next-line
    getUserStatut() {return this.isLoggedIn = this.$store.getters.getUserStatus;},
    // eslint-disable-next-line
    getUser() {return this.user = this.$store.getters.getUser;},
    username() {
      return this.user ? this.user.user_metadata.full_name : "🦠";
    }
  },

  methods: {
    link(data) {
      window.open(data, "_blank");
    },
    // ...mapActions("user", {
    //   updateUser: "updateUser"
    // }),
    updateUser() {
      let activeUser = this.currentUser;
      this.$store.commit("setUser", activeUser);
    },
    onLogin(user) {
      //console.log("Logged In !", user);
      this.storedUser = user;
      this.currentUser = true;
      //this.isLoggedIn = true;
      this.updateUser();
      this.isLoggedIn = true;
      netlifyIdentity.close();
    },
    triggerNetlifyIdentityAction(action) {
      //this.currentUser = this.user;
      if (action == "login" || action == "signup") {
        netlifyIdentity.open(action);
        netlifyIdentity.on(action, user => this.onLogin(user));
      } else if (action == "logout") {
        this.currentUser = false;
        this.updateUser();
        netlifyIdentity.logout();
        this.isLoggedIn = false;
        //this.$router.push({ name: "usr" });
        //console.log("Logged Out !")
      }
    }
  }
};
</script>
