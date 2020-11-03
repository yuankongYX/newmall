<template>
<div>
  <swiper>
    <swiper-item v-for="item in mybanners" :key="item.index">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
    </swiper-item>
  </swiper>
</div>
</template>

<script>
import {
  Swiper,
  SwiperItem
} from 'components/common/swiper'

export default {
  name: 'HomeSwiper',
  props: {
    mybanners: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped>

</style>
