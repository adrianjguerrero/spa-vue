<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>SPA VUE</h1>
    <select name="countries" id="countries" v-model="selectedCountry">
      <option v-for="country in countries" :value="country.value">{{country.name}}</option>
    </select>
    <loader v-show="loading"></loader>
    <ul>
      <artist :key="artist.mbid" v-for="artist in artists" :artist="artist"></artist>
      <!-- a los componentes debemos ponerles key para q sean unicos y 
      vue los maneje mejor -->
    </ul>
  </div>   
</template>

<script>
import Artist from './components/Artist'
import Loader from './components/Loader'
import getArtists from './api/index';
// traemos el componente
export default {
  name: 'app',
  data() {
    return {
      artists: [],
      countries: [{
          value: 'venezuela',
          name: 'Venezuela'
        },
        {
          value: 'spain',
          name: 'España'
        },
        {
          value: 'chile',
          name: 'Chile'
        }
      ],
      selectedCountry: 'venezuela',
      loading:true
    }
  },
  components: {
    Artist,
    Loader
    // decimos q lo usaremos
  },
  methods: {
    refreshArtist() {

      const self = this;
      this.loading=true;
      getArtists(this.selectedCountry)
        .then(function (artists) {
          self.loading = false;
          self.artists = artists
        })
    }
  },
  mounted: function () {
    this.refreshArtist();
  },
  watch: {
    // q este pendiente de cuando seleccione uno nuevo
    selectedCountry: function () {
      this.refreshArtist();
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;

  span{
    color:red;
  }
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
</style>
