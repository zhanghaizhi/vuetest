<template>
    <div class="sex">
     性别：{{sex}}
     <el-button type="primary">主要按钮</el-button>
     <p class="colorred">122333</p>
    </div>
</template>
<style  >
.sex{
    color:blue;
    font-size:24px;
    margin-top:30px;
    text-align: left;
}
p{
    width:100px;
    height:100px;
}
</style>
<script>
    export default {
        data(){
           return {
               sex:""
           }
        },
        components:{

        },
        methods:{

        },
        mounted(){
            this.sex=this.$route.params.sex;    
        },
        created(){

        }
    }
</script>