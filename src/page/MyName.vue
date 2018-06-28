<template>
    <div class="myname">
        姓名：{{name}}
    </div>
</template>
<style scoped>
.myname{
    color:blue;
    font-size:24px;
    text-align: left;
    margin-top:30px;
}
</style>
<script>
    export default {
        data(){
           return {
               name:'ll'
           }
        },
        components:{

        },
        methods:{

        },
        mounted(){
            this.name=this.$route.params.name
        },
        created(){

        }
    }
</script>