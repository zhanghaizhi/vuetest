<template>
  <div class="hello">
    <el-radio v-model="radio" label="1">备选项1</el-radio>
    <el-radio v-model="radio" label="2">备选项2</el-radio>
    <br/>
    <el-switch
      v-model="value3"
      active-text="按月付费"
      inactive-text="按年付费">
    </el-switch>
    <h1>{{ msg }}</h1>
    <h2 @click="fun1" ref="kk">Essential Links</h2>
    <ul>
      <li v-if="show" v-for="(item,index) in arr" :key="index" >{{item}}</li>
    </ul>
    <p >{{updatedata}}</p>
    <son :sdata="sondata" sdata2="我是数据2" @update="fun2" ></son>
    <input type="text" v-model="value">
    <p>{{value}}</p>
    路由：
    <router-link :to="'/MyName/'+name">名字</router-link>
    <span @click="fun3">性别</span>
    <router-view></router-view>
  </div>
</template>

<script>
import son from './son.vue';
export default {
  name: "HelloWorld",
  data() {
    return {
      value:'请输入看看',
      msg: "Welcome to Your Vue.js App",
      arr: ["数据1", "数据2", "数据3"],
      show: false,
      updatedata:'',
      sondata:"我是数据",
      radio: '1',
      value3:true,
      name:'',
      sex:''
    };
  },
  components:{
    son
  },
  methods: {
    fun1() {
       alert("巴啦啦能量");
    },
    fun2(param){
      console.log("111111111")
       this.updatedata=param;
    },
    fun3(){
      this.$router.push({name:'Sex',params:{sex:this.sex}})
    }
  },
  mounted() {
    this.$refs.kk.style = "background:red;";
    this.$axios.get("/static/test.json").then((res) => {
      this.name=res.data.name;
      this.sex=res.data.sex;
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
