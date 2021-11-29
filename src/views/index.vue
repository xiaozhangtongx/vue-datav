<template>
  <div id="index" ref="appRef">
    <dv-loading v-if="loading">Loading...</dv-loading>
    <div v-else class="host-body">
      <!-- 第一行 -->
      <div class="px-1">
        <div class="d-flex jc-center">
          <dv-decoration-10 class="dv-dec-10" />
          <div class="d-flex jc-center">
            <dv-decoration-8 class="dv-dec-8" :color="['#568aea', '#000000']" />
            <div class="title">
              <span class="title-text">全球海盗事件数据可视化分析系统</span>
              <dv-decoration-6 class="dv-dec-6" :reverse="true" :color="['#50e3c2', '#67a1e5']" />
            </div>
            <dv-decoration-8 class="dv-dec-8" :reverse="true" :color="['#568aea', '#000000']" />
          </div>
          <dv-decoration-10 class="dv-dec-10-s" />
        </div>
      </div>

      <!-- 第二行 -->
      <div class="d-flex jc-between px-2">
        <div class="d-flex aside-width">
          <div class="react-left ml-4 react-l-s">
            <span class="react-before"></span>
            <span class="text">
              确认地区
              <a-select default-value="xxxx"
                style="weight:260px,background:#03060D;margin-left:20px">
                <a-select-option value="jack">
                  全球各地
                </a-select-option>
                <a-select-option value="xxxx">
                  xxxx
                </a-select-option>
                <a-select-option value="xxxx">
                  xxxx
                </a-select-option>
              </a-select>
            </span>
          </div>
          <div class="react-right ml-3 ">
            <span class="text">
              选择年限
              <a-select default-value="2021"
                style="weight:260px,background:#03060D;margin-left:20px">
                <a-select-option value="jack">
                  2020
                </a-select-option>
                <a-select-option value="xxxx">
                  2019
                </a-select-option>
                <a-select-option value="xxxx">
                  2018
                </a-select-option>
              </a-select>
            </span>
          </div>
        </div>
        <div class="d-flex aside-width">
          <div class="react-right bg-color-blue mr-3">
            <span class="text fw-b">当前时间</span>
          </div>
          <div class="react-right mr-4 react-l-s">
            <span class="react-after"></span>
            <span class="text">{{ dateYear }} {{ dateWeek }} {{ dateDay }}</span>
          </div>
        </div>
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>
// import drawMixin from '../utils/drawMixin'
import { formatTime } from '../utils/index.js'
export default {
  // mixins: [drawMixin],
  data() {
    return {
      timing: null,
      loading: true,
      dateDay: null,
      dateYear: null,
      dateWeek: null,
      weekday: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
    }
  },

  mounted() {
    this.timeFn()
    this.cancelLoading()
  },
  beforeDestroy() {
    clearInterval(this.timing)
  },
  methods: {
    timeFn() {
      this.timing = setInterval(() => {
        this.dateDay = formatTime(new Date(), 'HH: mm: ss')
        this.dateYear = formatTime(new Date(), 'yyyy-MM-dd')
        this.dateWeek = this.weekday[new Date().getDay()]
      }, 1000)
    },
    cancelLoading() {
      setTimeout(() => {
        this.loading = false
      }, 500)
    },
  },
}
</script>

<style lang="scss">
@import '../assets/scss/index.scss';
.ant-select-selection {
  background-color: rgba(26, 92, 215, 0.3);
  border: none;
  color: #fff;
  font-size: 18px;
}
.ant-select-arrow {
  color: #fff;
}
</style>
