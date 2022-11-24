<template>
  <div id="NavBar">
    <header>
      <nav>
        <div class="logo"><img src="../assets/elles-logo.svg" style="width: 100%; height: 100%;" alt="elle's details logo - custom nails and designs"></div>

        <div v-if="$root.isMobile" @click="this.nav = !this.nav" :class="[nav ? 'open' : 'closed']"> 
          <img v-if="!this.nav" class="toggle" src="../assets/nail-dryer.png" alt="Cute nail dryer icon."/>
          <img v-if="this.nav" class="toggle" src="../assets/manicure.png" alt="Cute manicured nails icon."/>
        </div>

        <ul>
          <li><a href="#/home">Home<img class="nav-icon" src="../../src/assets/home.svg"/></a></li>
          <li><a href="#/gallery">Gallery<img class="nav-icon" src="../../src/assets/gallery.svg"/></a></li>
          <li><a href="#/services">Services<img class="nav-icon" src="../../src/assets/services.svg"/></a></li>
          <li><a @click="openModal()">Quote<img class="nav-icon" src="../../src/assets/quote.svg"/></a></li>
          <li><a href="#/testimonials">Testimonials<img class="nav-icon" src="../../src/assets/testimonials.svg"/></a></li>
        </ul>
      </nav>
    </header>
    <QuoteModal v-show="modal"/>
  </div>
</template>

<script>
import QuoteModal from '../components/QuoteModal.vue';
export default {
  name: 'nav-bar',
  data() {
    return {
      nav: false,
      modal: false
    }
  },
  mounted() {
    this.emitter.on("closeModal", () => {
      this.modal = false;
    });
  },
  methods: {
    openModal() {
      this.modal = true;
    }
  },
  components: {
    QuoteModal
  }
}
</script>