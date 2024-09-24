<template>
  <view>
    <view class="free-card-box" v-for="(item, index) in list" :key="index">
      <view class="free-card-img">
        <image :src="item.teach" mode="widthFix"></image>
      </view>
      <view class="free-card-text">
        <view class="free-card-title"> {{ item.limitName }} </view>
        <view class="free-card-info">
          <view class="free-card-info-text">{{item.teacher_name}}-{{ item.teacher_job }}</view>
          <view class="free-card-info-learn">{{ item.limitNum }}</view>
        </view>
        <view class="free-card-info-btn"> 立即学习 </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "freecard",
  data() {
    return {
      list: [],
    };
  },
  mounted() {
	// 网络请求
    uni.request({
      url: "http://localhost:3000/api/specific",
      success: (res) => {
        if (res.data.status === 200) {
          this.list = res.data.result.data;
        }
      },
    });
  },
};
</script>

<style lang="scss">
.free-card-box {
  display: flex;
  padding: 10px 0;
  margin: 10px;
  border-radius: 10px;
  box-sizing: border-box;
  align-items: center;
  margin-bottom: 15px;
  background-color: #fff;

  .free-card-img {
    flex-shrink: 0;
    width: 91px;
    height: 91px;
    border-radius: 50%;
    margin: 0 15px;

    image {
      width: 100%;
      height: 100%;
      border-radius: 100%;
    }
  }

  .free-card-text {
    width: 100%;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    padding: 0 15px 0 0;

    .free-card-title {
      font-size: 16px;
      white-space: normal;
      text-overflow: ellipsis;
      overflow: hidden;
      margin: 10px 0;
    }

    .free-card-info {
      width: 100%;
      display: flex;
      box-sizing: border-box;
      flex-wrap: row nowrap;
      justify-content: space-between;

      .free-card-info-text {
        width: 60%;
        overflow: hidden;
        font-size: 16px;
        color: #666;
      }

      .free-card-info-learn {
        font-size: 13px;
        color: #666;
      }
    }

    .free-card-info-btn {
      width: 100px;
      height: 34px;
      text-align: center;
      line-height: 34px;
      border-radius: 34px;
      background-color: #00b783;
      color: #fff;
      font-size: 16px;
      margin-top: 10px;
    }
  }
}
</style>
