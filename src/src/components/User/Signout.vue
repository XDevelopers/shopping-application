<template lang="html">
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    signOut(){
      var fb = this.$store.getters('firebaseSession')
      fb.signOut();
      this.$router.push('/')
    }
  },
  mounted(){
    this.signOut()
  }
}
</script>

<style lang="css">
</style>
