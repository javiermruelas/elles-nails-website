<template>
  <div class="lightbox">
    <div class="lightbox-img">
      <img :src="filePath(src)" :alt="alt" style="width:100%; height: 100%">
    </div>
    <p>{{alt}}</p>
    <p>{{id}} / {{total}}</p>
    <button class="page-left" @click.prevent="pageLeft">&#10095;</button>
    <button class="page-right" @click.prevent="pageRight">&#10094;</button>
    <div class="mini-slideshow">
      <img v-for="image in currentMiniImages" :key="image.id" :src="filePath(image.src)" :alt="image.alt" @click.prevent="pageCurrentMiniImage(image.id)" class="mini-images">
    </div>
    <button class="x" @click.prevent="closeLightbox">x</button>
  </div>
</template>

<script>
export default {
  name: 'gallery-image',
  data() {
    return {

    }
  },
  props: [
    'id',
    'src',
    'alt',
    'total',
    'all'
  ],
  computed: {
    currentMiniImages() {
      let currentIndex = this.id - 1;
      let currentMiniImages = [];

      for (let i = currentIndex; i < currentIndex + 4; i++) {
        if (i > this.all.length - 1) {
          let offset = currentIndex + 4 - i;
          for (let j = 0; j < offset; j++ ) {
            currentMiniImages.push(this.all[j])
          }
          break; 
        } else {
          currentMiniImages.push(this.all[i]);
        }
      }

      return currentMiniImages;
    }
  },
  methods: {
    filePath: function(path) {
      let images = require.context('../assets/gallery/', false, /\.png$|\.jpg$/);
      return images("./" + path);
    },
    pageLeft() {
      this.emitter.emit("pageLeft", this.id);
    },
    pageRight() {
      this.emitter.emit("pageRight", this.id);
    },
    pageCurrentMiniImage(id) {
      this.emitter.emit("pageCurrentMiniImage", id);
    },
    closeLightbox() {
      this.emitter.emit("closeLightbox");
    }
  }
}
</script>