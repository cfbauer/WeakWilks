<template>
  <div class="page-container md-layout-column">
      <md-toolbar class="md-primary">
        <h1 class="md-title">Weak Wilks</h1>
      </md-toolbar>

      <md-content>
        <md-list>
          <md-subheader>Calculated Wilks!</md-subheader>
          <md-list-item>
            <h2 class="md-display-2">{{ calcWilks() }}</h2>
          </md-list-item>

          <md-subheader>Weight</md-subheader>
          <md-list-item>
            <md-field>
              <label>Bodyweight</label>
              <md-input v-model="bodyWeight" type="number"></md-input>
            </md-field>
          </md-list-item>

          <md-list-item>
            <md-field>
              <label>Lifted Weight</label>
              <md-input v-model="liftedWeight" type="number"></md-input>
            </md-field>
          </md-list-item>

          <md-subheader>Units</md-subheader>
          <md-list-item>
            <md-radio v-model="units" value="pounds">Freedom Units (pounds)</md-radio>
          </md-list-item>
          <md-list-item>
            <md-radio v-model="units" value="kilos">Commie Units (kilos)</md-radio>
          </md-list-item>

          <md-subheader>Sex</md-subheader>
          <md-list-item>
            <md-radio v-model="sex" value="male">Male</md-radio>
          </md-list-item>
          <md-list-item>
            <md-radio v-model="sex" value="female">Female</md-radio>
          </md-list-item>

        </md-list>

        <md-button class="md-accent" @click="showDialog = true">About Weak Wilks</md-button>

        <md-dialog :md-active.sync="showDialog">
          <md-dialog-title>Preferences</md-dialog-title>

          <md-tabs md-dynamic-height>
            <md-tab md-label="Wilks">
              <img src="./assets/weakwilks-logo.png" class="logo" />
              <p>The Wilks Coefficient is way of comparing powerlifters of different bodyweights and sexes in a more or less fair way. You can read more about the <a href="https://en.wikipedia.org/wiki/Wilks_Coefficient">Wilks Coefficient here</a>.</p>

            </md-tab>

            <md-tab md-label="This App">
              <img src="./assets/chris-bauer.jpg" class="profile-image" />
              <p>This app was made by Chris Bauer to practice <a href="https://vuejs.org/">Vue.js</a> and <a href="https://vuematerial.io/">vue-material</a>.</p>
            </md-tab>
          </md-tabs>
          <md-dialog-actions>
            <md-button class="md-primary" @click="showDialog = false">Close</md-button>
          </md-dialog-actions>
        </md-dialog>

      </md-content>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        msg: 'Chris rules.',
        bodyWeight: '',
        liftedWeight: '',
        sex: 'male',
        units: 'pounds',
        bodyweightKG: '',
        liftedweightKG: '',
        showDialog: false,
      }

    },
    methods: {
      calcWilks() {
        var aMens = -216.0475144;
        var bMens = 16.2606339;
        var cMens = -.002388645;
        var dMens = -.00113732;
        var eMens = 0.00000701863;
        var fMens = -0.00000001291;

        var aWomens = 594.31747775582;
        var bWomens = -27.23842536447;
        var cWomens = .82112226871;
        var dWomens = -.00930733913;
        var eWomens = .00004731582;
        var fWomens = -.00000009054;

        var bodyweightKG = this.units == 'pounds' ? this.bodyWeight * .453 : this.bodyWeight;
        var liftedweightKG = this.units == 'pounds' ? this.liftedWeight * .453 : this.liftedWeight;

        var b2 = bodyweightKG;
        var c2 = Math.pow(bodyweightKG, 2);
        var d2 = Math.pow(bodyweightKG, 3);
        var e2 = Math.pow(bodyweightKG, 4);
        var f2 = Math.pow(bodyweightKG, 5);

        if (this.sex == 'female') {
          var denominator = aWomens + (bWomens*b2) + (cWomens*c2) + (dWomens*d2) + (eWomens*e2) + (fWomens*f2);
        } else if (this.sex == 'male') {
          var denominator = aMens + (bMens*b2) + (cMens*c2) + (dMens*d2) + (eMens*e2) + (fMens*f2);
        } else {
          return 'This is to be inclusive.';
        }

        var coeff = 500 / denominator;
        var wilks = Math.round(coeff*liftedweightKG);

        return wilks;
      }
    }
  }
</script>

<!-- <style src="../node_modules/vue-material/dist/vue-material.css"></style> -->

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
