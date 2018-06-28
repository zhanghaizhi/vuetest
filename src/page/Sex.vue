<template>
    <div class="sex">
     性别：{{sex}}
    </div>
</template>
<style  scoped>
.sex{
    color:blue;
    font-size:24px;
    margin-top:30px;
    text-align: left;
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