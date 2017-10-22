<template lang="html">
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm10 md8 lg6 offset-sm1 offset-md2 offset-lg3>
        <v-text-field
        class="mb-5"
        append-icon="search"
        label="Search"
        single-line
        hide-details
        ></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex v-for="device in devices" :key="device.id"  md3>
        <v-card class="primary ma-2"  hover>
          <v-container @click="onLoadDevice(device.id)" fluid>
            <v-layout row>
              <v-flex xs5 sm4 md3>
                <v-card-media
                :src="device.imageUrl"
                height="130px"
                ></v-card-media>
              </v-flex>
              <v-flex xs7 sm8 md9>
                <v-card-title primary-title>
                  <h5 class="headline white--text mb-0">{{device.title}}</h5>
                  <div>Synced: {{device.lastSync}}</div>
                </v-card-title>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    devices () {
      return this.$store.getters.loadedDevices
    }
  },
  methods: {
    onLoadDevice(id) {
      console.log("here");
      this.$router.push('/devices/' + id)
    }
  }
}
</script>
<style lang="css">
</style>
