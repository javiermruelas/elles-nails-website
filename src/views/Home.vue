<template>
  <div id="home">
    <NavBar/>
    <div v-show="copied" id="copyNotification" class="copy-notif">
      <p>Phone number copied!</p>
      <br/>
      <p>💾</p>
    </div>
    <section id="hero">
      <img style="width: 100%; height: 100%;" src="../assets/nail-tech.jpg" alt="A nail tech hard at work!"/>
      <div class="hero-logo"><img src="../assets/elles-logo.svg" style="width: 100%; height: 100%;" alt="elle's details logo - custom nails and designs"></div>
      <div class="hero-buttons">
        <h1>Hello, I'd love to make your nails pretty. Contact me!</h1>
        <div class="row hero-btns">
          <button class="lg-btn" @click="openModal()">Email</button>
          <button class="lg-btn" @click="copyText()">Call Now</button>
        </div>
      </div>
    </section>
    <section id="about">

    </section>
    <section id="services">
      
    </section>
    <section id="gallery">
      
    </section>
    <CustomFooter/>
    <button id="back-to-top" v-show="this.$root.showScrollTop" @click="scrollTop">⮵</button>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';
import CustomFooter from '../components/CustomFooter.vue';

export default {
  name: 'home',
  data: function() {
    return {
      copied: false
    }
  },
  methods: {
    copyText() {
      navigator.clipboard.writeText("702-680-3100");
      this.copied = true;
      setTimeout(() => {
        this.copied = false;
      }, 3000);
    },
    scrollTop() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
  },
  components: {
    NavBar,
    CustomFooter
  }
}
</script>