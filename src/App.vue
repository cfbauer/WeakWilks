<template>
  <div class="page-container md-layout-column">

      <md-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="showNavigation = true">
          <md-icon>menu</md-icon>
        </md-button>
        <h1 class="md-title">Weak Wilks</h1>
      </md-toolbar>

      <md-drawer :md-active.sync="showNavigation">
        <md-toolbar class="md-transparent" md-elevation="0">
          <span class="md-title">Weak Wilks</span>
        </md-toolbar>

        <md-list>
          <md-list-item>
            <router-link to="/" v-on:click.native="showNavigation = false">
              <md-icon>send</md-icon>
              <span class="md-list-item-text">Wilks</span>
            </router-link>
          </md-list-item>
          <md-list-item>
            <router-link to="/lbs-kgs-converter" v-on:click.native="showNavigation = false">
              <md-icon>person</md-icon>
              <span class="md-list-item-text">About</span>
            </router-link>
          </md-list-item>
        </md-list>
    </md-drawer>

      <md-content>
        <router-view></router-view>
      </md-content>


      <md-button class="md-accent" @click="showDialog = true">About Weak Wilks</md-button>

      <md-dialog :md-active.sync="showDialog">
        <md-dialog-title>Preferences</md-dialog-title>

        <md-tabs md-dynamic-height>
          <md-tab md-label="Wilks">
            <img src="/.assets/weakwilks-logo.png" class="logo" />
            <p>The Wilks Coefficient is way of comparing powerlifters of different bodyweights and sexes in a more or less fair way. You can read more about the <a href="https://en.wikipedia.org/wiki/Wilks_Coefficient">Wilks Coefficient here</a>.</p>

          </md-tab>

          <md-tab md-label="This App">
            <img src="/.assets/chris-bauer.jpg" class="profile-image" />
            <p>This app was made by Chris Bauer to practice <a href="https://vuejs.org/">Vue.js</a> and <a href="https://vuematerial.io/">vue-material</a>.</p>
          </md-tab>
        </md-tabs>
        <md-dialog-actions>
          <md-button class="md-primary" @click="showDialog = false">Close</md-button>
        </md-dialog-actions>
      </md-dialog>

  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        showDialog: false,
        showNavigation: false,
      }
    }
  }
</script>

<style lang="scss">
  @import "~vue-material/dist/theme/engine"; // Import the theme engine

  @include md-register-theme("default", (
    primary: md-get-palette-color(pink, A200), // The primary color of your application
    accent: md-get-palette-color(blue, A200), // The accent and secondary color
    theme: light
  ));

  @import "~vue-material/dist/theme/all"; // Apply the theme

  @mixin circle-image($side) {
    border-radius: $side;
    width: $side;
  }

  #app {
    font-family: Roboto, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin-top: 60px;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .profile-image {
    @include circle-image(150px);
  }
  .logo {
    width: 200px;
    height: auto;
  }
</style>
