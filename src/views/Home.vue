<!--
 * @Author: your name
 * @Date: 2021-11-29 17:05:48
 * @LastEditTime: 2021-11-30 16:42:31
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \big-screen-vue-datav\src\views\Home.vue
-->
<template>
  <div class="show">
    <!-- 上部分 -->
    <div class="box top">
      <!-- 地图部分 -->
      <dv-border-box-12>
        <div class="show2">
          <Map />
        </div>
      </dv-border-box-12>

      <dv-border-box-12>
        <div class="show2">
          <AlltimeChart />
        </div>
      </dv-border-box-12>
      <dv-border-box-12>
        <div class="show2">
          <AllyearChart />
        </div>
      </dv-border-box-12>
    </div>
    <!-- 下部分 -->
    <div class="box bottom">
      <div class="bl">
        <dv-border-box-12>
          <div class="show2">
            <AllereaChart />
          </div>
        </dv-border-box-12>
      </div>
      <div class="br">
        <dv-border-box-12>
          <div class="show2">
            <dv-scroll-ranking-board :config="config" style="width:89%;height:95%" />
          </div>
        </dv-border-box-12>
      </div>
    </div>
  </div>
</template>

<script>
import Map from '@/views/Map'
import AlltimeChart from '@/echarts/AlltimeChart'
import AllyearChart from '@/echarts/AllyearChart'
import AllereaChart from '@/echarts/AllereaChart'
export default {
  name: '',
  data() {
    return {
      config: {
        data: [
          {
            name: '法国',
            value: 55,
          },
          {
            name: '美国',
            value: 120,
          },
          {
            name: '日本',
            value: 78,
          },
          {
            name: '巴西',
            value: 66,
          },
          {
            name: '阿根廷',
            value: 80,
          },
          {
            name: '印度',
            value: 45,
          },
          {
            name: '俄罗斯',
            value: 29,
          },
        ],
      },
    }
  },
  components: {
    Map,
    AlltimeChart,
    AllyearChart,
    AllereaChart,
  },
  methods: {},
}
</script>

<style scoped lang="scss">
.show {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 88vh;
  .box {
    height: 43vh;
    width: 100%;
  }
  .top {
    display: flex;
    justify-content: space-between;
    > * {
      width: 33%;
    }
  }
  .bottom {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .bl {
      width: 80%;
    }
    .br {
      width: 20%;
    }
  }
}
.show2 {
  width: 100%;
  height: 100%;
  // background-color: rgb(136, 44, 44);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
