<template>
    <NavBar ref="navBar"/>
    <GalleryLightbox
    v-if="currentImage != null"
    :key="currentImage.id"
    :id="currentImage.id"
    :src="currentImage.src"
    :alt="currentImage.alt"
    :total="images.length"
    :all="images"
    >
    </GalleryLightbox>
    <div class="gallery">
      <h1>GALLERY</h1>
      <GalleryImage
      v-for="image in images"
      :key="image.id"
      :src="image.src"
      :alt="image.alt"
      @click.prevent="setCurrentImage(image.id)"
      >
      </GalleryImage>
    </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';
import GalleryImage from '../components/GalleryImage.vue';
import GalleryLightbox from '../components/GalleryLightbox.vue';

export default {
  name: 'gallery',
  data: function() {
    return {
      images: [
        {
          id: 1,
          title: "Nails 1",
          alt: "1/5/2022 - $125",
          src: "nails1.jpg"
        },
        {
          id: 2,
          title: "Nails 2",
          alt: "1/10/2022 - $100",
          src: "nails2.jpg"
        },
        {
          id: 3,
          title: "Nails 3",
          alt: "2/5/2022 - $105",
          src: "nails3.jpg"
        },
        {
          id: 4,
          title: "Nails 4",
          alt: "3/15/2022 - $110",
          src: "nails4.jpg"
        },
        {
          id: 5,
          title: "Nails 5",
          alt: "3/23/2022 - $75",
          src: "nails5.jpg"
        },
        {
          id: 6,
          title: "Nails 6",
          alt: "3/17/2022 - $60",
          src: "nails6.jpg"
        },
        {
          id: 7,
          title: "Nails 7",
          alt: "5/5/2022 - $155",
          src: "nails7.jpg"
        },
        {
          id: 8,
          title: "Nails 8",
          alt: "3/5/2022 - $135",
          src: "nails8.jpg"
        },
        {
          id: 9,
          title: "Nails 9",
          alt: "4/14/2022 - $90",
          src: "nails9.jpg"
        },
        {
          id: 10,
          title: "Nails 10",
          alt: "3/23/2022 - $125",
          src: "nails10.jpg"
        },
        {
          id: 11,
          title: "Nails 11",
          alt: "1/5/2022 - $125",
          src: "nails11.jpg"
        },
        {
          id: 12,
          title: "Nails 12",
          alt: "1/24/2022 - $50",
          src: "nails12.jpg"
        },
        {
          id: 13,
          title: "Nails 13",
          alt: "4/28/2022 - $80",
          src: "nails13.jpg"
        },
        {
          id: 14,
          title: "Nails 14",
          alt: "3/16/2022 - $150",
          src: "nails14.jpg"
        },
        {
          id: 15,
          title: "Nails 15",
          alt: "2/5/2022 - $75",
          src: "nails15.jpg"
        }
      ],
      currentImage: null,
    }
  },
  mounted() {
    //this.currentImage = this.images[2];
    // this.currentImage = null;
    this.emitter.on("pageRight", (currentId) => {
      if (currentId == 1) {
        this.currentImage = this.images[this.images.length - 1]
      } else {
        //x ids aren't index based - 1 for index then - 1 for paging
        this.currentImage = this.images[currentId - 1 - 1];
      }
    });
    this.emitter.on("pageLeft", (currentId) => {
      if (currentId == this.images.length) {
        this.currentImage = this.images[0];
      } else {
        //x ids aren't index based - 1 for index then + 1 for paging
        this.currentImage = this.images[currentId - 1 + 1 ];
      }
    });
    this.emitter.on("closeLightbox", () => {
      this.currentImage = null;
    });
    this.emitter.on("pageCurrentMiniImage", (id) => {
      this.currentImage = this.images[id - 1];
    });
  },
  methods: {
    openModal() {
      this.$refs.navBar.openModal();
    },
    setCurrentImage(id) {
      let indexBasedId = id - 1;
      this.currentImage = this.images[indexBasedId];
    }
  },
  components: {
    NavBar,
    GalleryImage,
    GalleryLightbox
  }
}
</script>