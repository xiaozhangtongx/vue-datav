<template>
  <div id="main"></div>
</template>

<script>
let myChart
export default {
  name: 'Echarts',
  data() {
    return {
      data: {},
      articlecout: {
        datax: [],
        datay: [],
      },
    }
  },
  mounted() {
    this.myEcharts()
  },
  methods: {
    myEcharts() {
      if (myChart != null && myChart != '' && myChart != undefined) {
        myChart.dispose()
      }
      // 基于准备好的dom，初始化echarts实例
      myChart = this.$echarts.init(document.getElementById('main'))
      // 指定图表的配置项和数据
      let option = {
        title: {
          text: '每月数据统计结果',
          textStyle: {
            fontWeight: '800', //标题颜色
            color: '#fff',
          },
          x: 'center',
        },
        tooltip: {
          trigger: 'axis',
          showContent: true,
        },
        dataset: {
          source: [
            [
              'product',
              '1978',
              '1979',
              '1980',
              '1981',
              '1982',
              '1983',
              '1984',
              '1985',
              '1986',
              '1987',
              '1988',
              '1989',
              '1990',
              '1991',
              '1992',
              '1993',
              '1994',
              '1995',
              '1996',
              '1997',
              '1998',
              '1999',
              '2000',
              '2001',
              '2002',
              '2003',
              '2004',
              '2005',
              '2006',
              '2007',
              '2008',
              '2009',
              '2010',
              '2011',
              '2012',
              '2013',
              '2014',
              '2015',
              '2016',
              '2017',
              '2018',
              '2019',
              '2020',
              '2021',
            ],
            [
              '1月',
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              3,
              4,
              4,
              2,
              2,
              2,
              4,
              4,
              8,
              10,
              9,
              13,
              5,
              6,
              10,
              33,
              24,
              32,
              27,
              20,
              22,
              24,
              25,
              33,
              59,
              17,
              67,
              43,
              23,
              24,
              16,
              23,
              25,
              35,
              11,
              28,
              32,
            ],
            [
              '2月',
              0,
              1,
              1,
              0,
              0,
              0,
              0,
              0,
              3,
              4,
              1,
              0,
              0,
              2,
              3,
              6,
              1,
              9,
              4,
              5,
              3,
              2,
              21,
              16,
              20,
              24,
              24,
              25,
              28,
              14,
              18,
              29,
              16,
              41,
              36,
              30,
              25,
              19,
              22,
              22,
              39,
              10,
              28,
              17,
            ],
            [
              '3月',
              0,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              2,
              0,
              2,
              1,
              3,
              3,
              1,
              14,
              4,
              8,
              5,
              6,
              8,
              12,
              14,
              25,
              43,
              40,
              28,
              36,
              30,
              23,
              32,
              60,
              55,
              59,
              37,
              30,
              25,
              33,
              18,
              45,
              29,
              14,
              29,
              15,
            ],
            [
              '4月',
              0,
              0,
              0,
              1,
              0,
              1,
              0,
              1,
              4,
              3,
              5,
              1,
              1,
              2,
              4,
              18,
              7,
              15,
              4,
              3,
              6,
              13,
              31,
              26,
              36,
              45,
              35,
              40,
              31,
              30,
              54,
              66,
              57,
              40,
              28,
              39,
              26,
              24,
              33,
              38,
              15,
              10,
              20,
              14,
            ],
            [
              '5月',
              2,
              0,
              0,
              0,
              0,
              0,
              1,
              0,
              4,
              3,
              3,
              0,
              2,
              3,
              3,
              9,
              8,
              10,
              3,
              7,
              5,
              8,
              41,
              30,
              20,
              46,
              33,
              27,
              28,
              33,
              38,
              57,
              42,
              54,
              31,
              40,
              25,
              29,
              32,
              32,
              12,
              12,
              34,
              2,
            ],
            [
              '6月',
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              1,
              4,
              1,
              3,
              3,
              1,
              2,
              0,
              14,
              5,
              5,
              0,
              4,
              3,
              6,
              30,
              32,
              27,
              35,
              28,
              35,
              21,
              21,
              37,
              31,
              36,
              36,
              23,
              36,
              27,
              28,
              18,
              19,
              2,
              8,
              17,
              19,
            ],
            [
              '7月',
              0,
              0,
              0,
              0,
              0,
              0,
              1,
              1,
              3,
              2,
              3,
              4,
              0,
              2,
              0,
              7,
              2,
              4,
              1,
              9,
              5,
              18,
              45,
              30,
              38,
              34,
              26,
              39,
              23,
              36,
              37,
              19,
              21,
              33,
              18,
              42,
              22,
              17,
              35,
              17,
              10,
              7,
              12,
              4,
            ],
            [
              '8月',
              0,
              0,
              0,
              0,
              0,
              0,
              2,
              2,
              0,
              3,
              2,
              0,
              2,
              3,
              2,
              5,
              11,
              11,
              5,
              15,
              7,
              16,
              46,
              32,
              31,
              36,
              22,
              30,
              14,
              28,
              43,
              15,
              42,
              28,
              23,
              26,
              24,
              22,
              22,
              29,
              3,
              0,
              28,
              0,
            ],
            [
              '9月',
              0,
              0,
              0,
              0,
              0,
              0,
              2,
              3,
              1,
              0,
              4,
              2,
              5,
              4,
              5,
              5,
              6,
              1,
              4,
              4,
              7,
              11,
              42,
              21,
              31,
              17,
              25,
              27,
              22,
              26,
              72,
              30,
              43,
              31,
              24,
              15,
              11,
              18,
              27,
              26,
              7,
              12,
              32,
              0,
            ],
            [
              '10月',
              0,
              1,
              0,
              0,
              0,
              0,
              2,
              3,
              2,
              3,
              1,
              0,
              3,
              1,
              2,
              8,
              9,
              8,
              4,
              4,
              2,
              7,
              46,
              18,
              31,
              31,
              22,
              26,
              31,
              44,
              42,
              39,
              72,
              48,
              29,
              33,
              27,
              25,
              34,
              33,
              9,
              14,
              33,
              0,
            ],
            [
              '11月',
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              2,
              1,
              0,
              1,
              0,
              2,
              2,
              3,
              4,
              15,
              6,
              2,
              7,
              4,
              7,
              39,
              25,
              35,
              37,
              48,
              13,
              25,
              25,
              58,
              42,
              90,
              23,
              28,
              28,
              34,
              20,
              40,
              35,
              0,
              23,
              32,
              0,
            ],
            [
              '12月',
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              1,
              1,
              1,
              1,
              4,
              0,
              0,
              10,
              4,
              16,
              4,
              3,
              4,
              11,
              23,
              36,
              32,
              30,
              18,
              35,
              22,
              21,
              19,
              36,
              44,
              54,
              23,
              25,
              25,
              21,
              24,
              17,
              33,
              1,
              32,
              23,
              0,
            ],
          ],
        },
        xAxis: {
          type: 'category',
          splitLine: {
            show: false,
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#fff', //更改坐标轴文字颜色
            },
          },
        },
        yAxis: {
          gridIndex: 0,
          type: 'value',
          splitLine: {
            show: false,
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#fff', //更改坐标轴文字颜色
            },
          },
        },
        grid: {
          top: '10%',
          bottom: '2%',
          left: '0',
          right: '0',
          containLabel: true,
        },
        color: [
          '#7cb5ec',
          '#434348',
          '#90ed7d',
          '#f7a35c',
          '#8085e9',
          '#f15c80',
          '#e4d354',
          '#2b908f',
          '#f45b5b',
          '#AA4643',
          '#89A54E',
          '#80699B',
        ],
        series: [
          { type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: { focus: 'series' } },
          { type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: { focus: 'series' } },
          { type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: { focus: 'series' } },
          { type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: { focus: 'series' } },
          { type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: { focus: 'series' } },
          { type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: { focus: 'series' } },
          { type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: { focus: 'series' } },
          { type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: { focus: 'series' } },
          { type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: { focus: 'series' } },
          { type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: { focus: 'series' } },
          { type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: { focus: 'series' } },
          { type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: { focus: 'series' } },
        ],
      }
      //清空画布,防止缓存
      myChart.clear()
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)

      //根据窗口的大小变动图表 --- 重点
      window.onresize = function () {
        myChart.resize()
      }
    },
  },
}
</script>

<style lang="scss" scoped>
#main {
  width: 95%;
  height: 95%;
}
</style>
