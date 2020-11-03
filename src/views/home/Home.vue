<template>
<div id="home">
  <nav-bar class="home-nav">
    <div slot="center">购物街</div>
  </nav-bar>
  <home-swiper :mybanners=banners></home-swiper>
  <recommend-views :myrecommends=recommends></recommend-views>
  <pops-feature></pops-feature>
  <tab-control :mytitles="['流行','新款','精选']" class="tab-control"></tab-control>
  <ul>
    <li>列表1</li>
    <li>列表2</li>
    <li>列表3</li>
    <li>列表4</li>
    <li>列表5</li>
    <li>列表6</li>
    <li>列表7</li>
    <li>列表8</li>
    <li>列表9</li>
    <li>列表10</li>
    <li>列表11</li>
    <li>列表12</li>
    <li>列表13</li>
    <li>列表14</li>
    <li>列表15</li>
    <li>列表16</li>
    <li>列表17</li>
    <li>列表18</li>
    <li>列表19</li>
    <li>列表20</li>
    <li>列表21</li>
    <li>列表22</li>
    <li>列表23</li>
    <li>列表24</li>
    <li>列表25</li>
    <li>列表26</li>
    <li>列表27</li>
    <li>列表28</li>
    <li>列表29</li>
    <li>列表30</li>
    <li>列表31</li>
    <li>列表32</li>
    <li>列表33</li>
    <li>列表34</li>
    <li>列表35</li>
    <li>列表36</li>
    <li>列表37</li>
    <li>列表38</li>
    <li>列表39</li>
    <li>列表40</li>
    <li>列表41</li>
    <li>列表42</li>
    <li>列表43</li>
    <li>列表44</li>
    <li>列表45</li>
    <li>列表46</li>
    <li>列表47</li>
    <li>列表48</li>
    <li>列表49</li>
    <li>列表50</li>
  </ul>

</div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './homeComps/HomeSwiper'
import RecommendViews from './homeComps/RecommendViews'
import PopsFeature from '@/views/home/homeComps/PopsFeature'

import TabControl from '@/components/content/tabcintrol/TabControl'

import {
  getHomeMuliData,
  getHomeGoods
} from 'network/home'

export default {
  name: 'Home',
  components: {
    NavBar,
    HomeSwiper,
    RecommendViews,
    PopsFeature,
    TabControl
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': {
          page: 0,
          list: []
        },
        'latest': {
          page: 0,
          list: []
        },
        'selection': {
          page: 0,
          list: []
        }
      }
    }
  },
  created() {
    this.getHomeMuliData(),
      this.getHomeGoods()
  },
  methods: {
    getHomeMuliData() {
      getHomeMuliData().then(res => {
        console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    },
    getHomeGoods() {
      getHomeGoods('pop', 1).then(res => {
        console.log("==")
        console.log(res)
        console.log("==")
      })
    }
  }
}
</script>

<style scoped>
#home {
  padding-top: 44px;
}

.home-nav {
  background-color: var(--color-tint);
  color: #fff;

  position: fixed;
  left: 0px;
  right: 0px;
  top: 0px;
  z-index: 9;
}

.tab-control {
  position: sticky;
  top: 44px;
}
</style>
