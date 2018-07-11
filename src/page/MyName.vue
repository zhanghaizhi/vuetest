<template>
    <div class="myname">
        姓名：{{name}}{{countplus}}
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
import { mapState } from 'vuex';
    export default {
        data(){
           return {
               name:'ll',
               flag:"总数"
            //    count:store.state.count
           }
        },
        components:{

        },
        computed:{
            // ...mapState(['count'])
            // ...mapState({count:state => state.count})
            // 如果需要使用this的话需要传如一个函数。
            ...mapState({countplus(state){
                return this.flag+state.count
            }})
        },
        methods:{

        },
        mounted(){
            this.name=this.$route.params.name
            this.$store.commit('increment');
        },
        created(){

        }
    }
</script>