<!--
 * @Description: 地图层
 * @Version: 1.0
 * @Author: xiaozhangtx
 * @Date: 2021-10-31 22:53:41
-->
<template>
  <div id="container"></div>
</template>

<script>
export default {
  created() {
    this.$http.get('/ship').then((res) => {
      console.log(res.data.message)
      this.ships = res.data.message
    })
  },
  data() {
    return {
      ships: [],
    }
  },
  mounted() {
    var map = new AMap.Map('container', {
      zoom: 6,
    })

    AMapUI.load(['ui/misc/PointSimplifier', 'lib/$'], (PointSimplifier) => {
      if (!PointSimplifier.supportCanvas) {
        return this.$message.error('当前环境不支持 Canvas！')
      } else {
        var pointSimplifierIns = new PointSimplifier({
          map: map, //所属的地图实例
          getPosition: function (item) {
            if (!item) {
              return null
            }
            //返回经纬度
            return [parseFloat(item.lon), parseFloat(item.lat)]
          },
          getHoverTitle: function (dataItem) {
            return dataItem.lon.toFixed(3) + ',' + dataItem.lat.toFixed(3)
          },
          renderOptions: {
            //点的样式
            pointStyle: {
              width: 6,
              height: 6,
            },
            //鼠标hover时的title信息
            hoverTitleStyle: {
              position: 'top',
            },
          },
        })

        window.pointSimplifierIns = pointSimplifierIns

        pointSimplifierIns.setData(this.ships)
        this.$message.success('数据加载成功')
        pointSimplifierIns.on('pointClick pointMouseover pointMouseout', function (e, record) {
          //console.log(e.type, record);
        })
      }
    })
  },
}
</script>

.<style lang="scss" scoped>
#container {
  width: 96%;
  height: 95%;
  border-radius: 5px;
}
</style>
