<template>
<div class="recommend">
  <div v-for="item in myrecommends" :key="item.index" class="recommend-item">
    <a :href="item.link">
      <img :src="item.image" alt="">
      <div>{{item.title}}</div>
    </a>
  </div>
</div>
</template>

<script>
export default {
  name: 'RecommendViews',
  props: {
    myrecommends: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped>
.recommend {
  display: flex;
  text-align: center;
  font-size: 12px;
  padding: 10px 0 20px;
  border-bottom: 10px solid #eee;
}

.recommend-item {
  flex: 1;
}

.recommend-item img {
  margin-bottom: 10px;
  width: 70px;
  height: 70px;

}
</style>
