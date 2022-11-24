<template>
  <component :is="currentView" />
</template>

<style>
html {
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  color: #000;
}
</style>

<script>
import Home from './views/Home.vue';
import Services from './views/Services.vue';
import Testimonials from './views/Testimonials.vue';
import Gallery from './views/Gallery.vue';
import NotFound from './views/NotFound.vue';

// https://vuejs.org/guide/scaling-up/routing.html#simple-routing-from-scratch
const routes = {
  '/': Home,
  '/home': Home,
  '/services': Services,
  '/testimonials': Testimonials,
  '/gallery': Gallery,
  '/notfound': NotFound
}

export default {
  name: 'App',
  data: function() {
    return {
      width: 0,
      height: 0,
      currentPath: window.location.hash,
      showScrollTop: false
    }
  },
  created() {
    // used for getting width and height
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  mounted() {
    window.addEventListener('hashchange', () => {
      this.currentPath = window.location.hash
		});
    //TO DO: Finish the scroll button functionality
    // convert this for each responsive size
    var self = this;
    window.onscroll = function() {self.scrollFunction()};
  },
  unmounted() {
    // used for getting width and height
    window.removeEventListener('resize', this.handleResize);
  },
  computed: {
    isMobile() {
      return this.width <= 768 ? true : false;
    },
    currentView() {
      return routes[this.currentPath.slice(1) || '/'] || NotFound
    }
  },
  methods: {
    handleResize() {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
    },
    scrollFunction() {
      if (document.documentElement.scrollTop < 200) {
        this.showScrollTop = false;
      } else {
        this.showScrollTop = true;
      }
    }
  },
  components: {
    Home,
    Gallery,
    Services,
    Testimonials,
    NotFound
  },
  watch: {
  }
}
</script>
