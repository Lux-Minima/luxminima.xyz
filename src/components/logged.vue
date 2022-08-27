<template>
  <h1>You are logged and can access luxminima BackEnd finally</h1>
</template>

<script>
export default {
  name: "logged",
  beforeRouteEnter: (to, from, next) => {
    next(vm => {
      if (vm.$store.getters.getUserStatus) {
        return next();
      } else {
        return next({ name: "usr" });
      }
    });
  }
};
</script>
