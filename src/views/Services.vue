<template>
  <NavBar ref="navBar"/>
  <div class="services">
    <h1>SERVICES</h1>
    <div class="service-items">
      <div class="service-item">
        <h1>Acrylic - $25</h1>
        <img :src="filePath('acrylic.jpg')" alt="a set of acrylic nails">
      </div>

      <div class="service-item">
        <h1>Gel Manicure - $15</h1>
        <img :src="filePath('gel.jpg')" alt="a set of gel manicure nails">
      </div>
      
      <div class="service-item">
        <h1>Polygel - $20</h1>
        <img :src="filePath('polygel.jpg')" alt="a set of gel x nails">
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>

<script>
import NavBar from '../components/NavBar.vue';

export default {
  name: 'services',
  data: function() {
    return {

    }
  },
  methods: {
    openModal() {
      this.$refs.navBar.openModal();
    },
    filePath: function(path) {
      let images = require.context('../assets/services/', false, /\.png$|\.jpg$/);
      return images("./" + path);
    }
  },
  components: {
    NavBar
  }
}
</script>