<template>
  <view class="index-container">
    <NavBar />
    <view class="index-banner-box">
      <swiper
        class="swiper"
        indicator-active-color="#4affc3"
        :indicator-dots="true"
        :autoplay="true"
        :interval="3000"
        :duration="3000"
      >
        <swiper-item v-for="(item, index) in topBanner" :key="index">
          <image class="banner" :src="item.img_url" mode="widthFix"></image>
        </swiper-item>
      </swiper>
    </view>
    <Coursenav></Coursenav>
    <view class="online-box">
      <image
        class="online-img"
        :src="indexBanner.img_url"
        mode="widthFix"
      ></image>
    </view>
    <view class="free-box">
      <view class="free-t-box public-tow-box">
        <view class="public-t">
          <FreeCard />
        </view>
      </view>
    </view>
    <view class="free-box">
      <view class="free-t-box public-tow-box">
        <view class="public-t">
          <JobScroll />
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import NavBar from "@/components/navbar.vue";
import Coursenav from "@/components/coursenav.vue";
import FreeCard from "@/components/freecard.vue";
import JobScroll from "@/components/jobscorll.vue";
import banner from "@/data/banner.js";
export default {
  data() {
    return {
      topBanner: [],
      indexBanner: "",
    };
  },
  onLoad() {
    this.topBanner = banner.top_banner;
    this.indexBanner = banner.index_banner;
  },
  mounted() {
    // 网络请求：
    // uni.request({
    // 	url: "http://localhost:3000/api/banner",
    // 	success(res) {
    // 		if (res.data.status === 200) {
    // 			this.topBanner = res.data.result.top_banner
    // 			this.indexBanner = res.data.result.index_banner
    // 		}
    // 	}
    // })
  },
  components: {
    NavBar,
    Coursenav,
    FreeCard,
    JobScroll,
  },
  methods: {},
};
</script>

<style lang="scss">
.index-container {
  display: flex;
  flex-direction: column;
  overflow: hidden;

  .index-banner-box {
    display: flex;
    width: 100%;
    padding: 10px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    overflow: hidden;

    .swiper {
      width: 100%;
      height: 260rpx;

      .banner {
        width: 700rpx;
        height: 260rpx;
      }
    }
  }

  .online-box {
    display: flex;
    width: 724rpx;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    overflow: hidden;
    margin-bottom: 15px;

    .online-img {
      width: 724rpx;
      height: 132rpx;
    }
  }

  .free-box {
    .public-tow-box {
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      overflow: hidden;
      padding: 0 15px;
      justify-content: space-between;
      align-content: space-between;
      flex-wrap: wrap;

      .public-t {
        font-size: 20px;
        font-weight: 700;
      }
    }
  }
}
</style>
