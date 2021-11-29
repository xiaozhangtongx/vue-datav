<!--
 * @Author: your name
 * @Date: 2021-11-29 17:05:48
 * @LastEditTime: 2021-11-29 23:43:39
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \big-screen-vue-datav\src\views\Home.vue
-->
<template>
  <div class="show">
    <div class="box top">
      <dv-border-box-12 class="show1">
        <div class="show2">
          <Map class="dd" />
        </div>
      </dv-border-box-12>
      <dv-border-box-12 class="show1">
      </dv-border-box-12>
      <dv-border-box-12 class="show1">
        <div class="show2">
          <div class="dd"></div>
        </div>
      </dv-border-box-12>
    </div>
    <div class="box bottom">
      <div class="bl">
        <dv-border-box-9></dv-border-box-9>
        <dv-border-box-9></dv-border-box-9>
      </div>
      <div class="br">
        <dv-border-box-9></dv-border-box-9>
        <dv-border-box-9></dv-border-box-9>
      </div>
    </div>
  </div>
</template>

<script>
import Map from '@/views/Map'
export default {
  name: '',
  data() {
    return {}
  },
  components: {
    Map,
  },
  methods: {},
}
</script>

<style scoped lang='scss'>
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
      width: 74%;
      display: flex;
      justify-content: space-between;
      &:nth-child(1) {
        margin-right: 3px;
      }
    }
    .br {
      width: 25%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
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
  .dd {
    width: 100px;
    height: 100px;
    background-color: #fff;
  }
}
</style>