<template>
    <footer>
        <section id="contact-details">
            <p>Contact Details</p>
            <ul>
                <li>702-680-3100</li>
                <li>mariaeloisescharff@gmail.com</li>
                <li>ellesdetails.com</li>
            </ul>
        </section>
        <section id="social-media-links">
            <p>Social Media</p>
            <ul>
            <li><img class="footer-icon" src="../../src/assets/ig_icon.svg"/></li>
            <li><img class="footer-icon" src="../../src/assets/fb_icon.svg"/></li>
            </ul>
        </section>
        <section id="quick-links">
            <p>Quick Links</p>
            <ul>
              <li><a href="#/home">Home</a></li>
              <li><a href="#/gallery">Gallery</a></li>
              <li><a href="#/services">Services</a></li>
              <li><a href="#/testimonials">Testimonials</a></li>
            </ul>
        </section>
    </footer>
    <hr/>
    <p>Made by Javi with ❤️</p>
    <a href="https://www.privacypolicies.com/generic/">Privacy Policy</a>
</template>
  
<script>
  export default {
    name: 'custom-footer',
    data() {
      return {
        nav: false
      }
    }
  }
</script>