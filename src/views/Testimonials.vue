<template>
    <NavBar ref="navBar"/>
    <div>TESTIMONIALS</div>
</template>

<script>
import NavBar from '../components/NavBar.vue';

export default {
  name: 'testimonials',
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