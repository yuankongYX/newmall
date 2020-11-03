<template>
<div class="tab-control">
  <div v-for="(item,index) in mytitles" :key="index" class="tontrol-item" :class="{active: index === currentIndex}" @click="itemClick(index)">
    <span>{{item}}</span>
  </div>
</div>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    mytitles: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  }
}
</script>

<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  font-size: 15px;
  background-color: #fff;
}

.tontrol-item {
  flex: 1;
  height: 40px;
  line-height: 40px;

}

.tontrol-item span {
  padding: 5px;
}

.active {
  color: var(--color-high-text);

}

.active span {
  border-bottom: 3px solid var(--color-tint);
}
</style>
