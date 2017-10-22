<template lang="html">
  <v-container>
    <v-layout row wrap>
      <v-flex class="text-sm-center text-xs-center" xs12>
        <h2 class="heading"><strong>Welcome to our Awesome site!</strong></h2>
        <h6 class="subheading">Sign in or create an account with us!</h6>
      </v-flex>
      <v-flex class="text-sm-right text-xs-center" xs12>
        <div id="firebaseui-auth-container"></div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    methods: {
      createGWidget() {
        this.$store.dispatch('googleWidget', this.$store.getters.authInst)
      }
    },
    mounted() {
      this.createGWidget()
    }
  }
</script>

<style scoped lang="css">
.title {
  position: absolute;
  bottom: 50px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 2em;
  padding: 20px;
}
</style>
