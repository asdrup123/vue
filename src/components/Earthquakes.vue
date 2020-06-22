<template>
    <div><h3>{{ $t("earthquakes") }}</h3>
    <table>
      <tr>
        <th>地震編號</th>
        <th>警報顏色</th>
        <th>經度</th>
        <th>緯度</th>
        <th>地點</th>
        <th>震度</th>
      </tr>
      <tr v-for="earthquake of earthquakes" :key="earthquake.earthquakeNo">
        <td>{{earthquake.earthquakeNo}}</td>
        <td>{{earthquake.reportColor}}</td>
        <td>{{earthquake.longitude}}</td>
        <td>{{earthquake.latitude}}</td>
        <td>{{earthquake.location}}</td>
        <td>{{earthquake.value}}</td>
      </tr>
    </table>
    </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'
export default {
  name: 'Earthquakes',
  data() {
    return {
      posts: [],
      earthquakes: []
    }
  },
  mounted() {
    var self = this;
    axios.post('/api/fangzai//common/getEqEventList')
    .then ( function(res){
      self.earthquakes = res.data.datas;
        console.log('Data: ',res.data.datas);
        console.log('Datas: ',earthquakes);
    })
    .catch( function(error){
      // console.log('Error: ', error);
    })
  }
}
</script>

<style scoped>
table{
  width: 80%;
  height: 50px;
  margin: 0 auto;
  border-collapse:collapse;
  border:1px solid black;
}
th{
  width: 150px;
  text-align: center;
  border:1px solid black;
  padding: 6px;
}
td{
    width: 150px;
    text-align: center;
    border:1px solid black;
    padding: 6px;
}
</style>

