<template>
  <v-app dark>
    <v-navigation-drawer v-model="sideNav" temporary>
        <v-toolbar flat>
          <v-list>
            <v-list-tile>
              <v-list-tile-title class="title">
                <router-link to="/" tag="span" style="cursor: pointer">{{appTitle}}</router-link>
              </v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-toolbar>
        <v-divider></v-divider>
        <v-list>
          <v-list-tile v-for="item in items" :key="item.title" :to="item.link">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
    </v-navigation-drawer>

    <v-toolbar class="primary" dark>
      <v-toolbar-side-icon @click="sideNav = !sideNav" class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">{{ appTitle }}</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="item in items" :key="item.title" @click="" :to="item.link">
          {{item.title}}
          <v-icon right>{{ item.icon }}</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        appTitle: 'Awesome Application',
        sideNav: false
      }
    },
    computed: {
      items () {
        let items = [
        ]
        if (this.userIsAuthenticated) {
          items = [
            {title: 'My Account', icon: 'person', link: '/profiles/me'},
            {title: 'Signout', icon: '', link: '/signout'}
          ]
        } else {
          items = [
            {title: 'Log in or Sign up', icon: 'person', link: '/'}
          ]
        }
        return items
      },
      userIsAuthenticated () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      }
    }
  }

</script>

<style lang="stylus">
  @import './stylus/main'
</style>
