<template>
    <div>
        <p class="son">我是引入的子组件</p>
        <h2 @click="fun1">点击我传值给父组件{{sdata}}</h2>
        <h3>{{sdata2}}</h3>
    </div>
</template>
<style scoped>
    .son{
        color:red;
    }
</style>
<script>
    export default {
        // props:['sdata','sdata2'], 第一种方式
        props:{
            sdata:{
                default:'',
                type:String
            },
            sdata2:{
                default:'',
                type:String
            }
        },
        data(){
            return {}
        },
        methods:{
            fun1(){
                this.$emit("update","全部传给你")
            }
        }
    }
</script>

