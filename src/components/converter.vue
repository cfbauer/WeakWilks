<template>
  <div>
    <md-list>
      <md-list-item>
        <md-subheader>LBS and KGS Converter</md-subheader>
      </md-list-item>

      <md-list-item>
        <md-field>
          <label>kilograms</label>
          <md-input v-model.number="kilograms" type="number"></md-input>

        </md-field>
      </md-list-item>

      <md-list-item>
        <md-field>
          <label>pounds</label>
          <md-input v-model.number="pounds" type="number"></md-input>
        </md-field>
      </md-list-item>
    </md-list>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        kilograms: '',
        pounds: '',
      }
    },
    watch: {
      kilograms: function() {
        this.pounds = Math.round((this.kilograms*2.20462)*10)/10;

      },
      pounds: function() {
        this.kilograms = Math.round((this.pounds/2.20462)*10)/10;
      },
    },
  }
</script>
