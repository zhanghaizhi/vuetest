<template>
    <div>
       <test-dialog ref="dialog"
            title="kk"
            content="this is content"
            :show="show"
            borderRadius=3vw
            :single="false">
       </test-dialog>
    </div>
</template>
<style  scoped>

</style>
<script>
    export default {
        data(){
           return {
               show:true,
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