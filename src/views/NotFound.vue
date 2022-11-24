<template>
    <NavBar ref="navBar"/>  
    <div>
        <h1>404</h1>
        <p>the page you tried to access was not found</p>
    </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';

export default {
  name: 'notfound',
  data: function() {
    return {

    }
  },
  methods: {
    openModal() {
      this.$refs.navBar.openModal();
    }
  },
  components: {
    NavBar
  }
}
</script>