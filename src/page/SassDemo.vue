<template>
    <div>
     <p class="sasscolor">我是sassdemo<span>我是嵌套的</span></p>
    </div>
</template>
<style lang='scss' scoped>
$fontcolor:red;
$greencolor:green;
@mixin box-sizing ($sizing) {
    -webkit-box-sizing:$sizing;     
       -moz-box-sizing:$sizing;
            box-sizing:$sizing;
}
.sasscolor{
    color:$fontcolor;
    span{
        color:$greencolor;
    }
     @include box-sizing(border-box);
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