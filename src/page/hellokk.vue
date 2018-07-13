<template>
    <div>
        <p></p>
       <test-dialog ref="dialog"
            title="kk"
            content="this is content"
            :show="false"
            borderRadius=3vw
            :single="false">
       </test-dialog>
       <test-search></test-search>
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
            console.log("kk")
        },
        created(){
        },
    }
</script>