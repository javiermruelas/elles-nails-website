<template>
    <div class="gallery-image">
        <img class="img" :src="filePath(src)" :alt="alt" style="width:100%; height: 100%">
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
    'src',
    'alt'
  ],
  mounted() {

  },
  methods: {
    filePath: function(path) {
      let images = require.context('../assets/gallery/', false, /\.png$|\.jpg$/);
      return images("./" + path);
    }
  }
}
</script>