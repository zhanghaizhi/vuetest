<template>
    <div>
        <p class="lesscolor">less颜色变量使用<span>我是嵌套的</span></p>
    </div>
</template>
<style lang="less">
 @fontcolor:red;
 @greencolor:green;
 .borderred{
     border-top:1px solid red;
 }
 .lesscolor{
     color:@fontcolor;
     .borderred;
     span{
         color:@greencolor;
     }
 }

</style>
<script>
   
    export default {
        data(){
           return {

           }
        },
        components:{

        },
        methods:{

        },
        mounted(){

        },
        created(){

        }
    }
</script>