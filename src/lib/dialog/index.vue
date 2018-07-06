<template>
    <div class="container">
    <div class="cover" v-if="show" :show="true" :hasAnimation="false"></div>
    <div class="dialog-box" v-if="show" :style="{top:top+'px','border-radius':borderRadius}">
      <div class="dialog-content">
        <slot name="title">
          <span class="content-title">{{title}}</span>
        </slot>
        <slot name="content">
          <span class="content-subtext">{{content}}</span>
        </slot>
      </div>
      <div class="dialog-footer" v-if="footer">
        <div class="footer-btn cancel"
             v-if="!single"
             @click="secondaryClicked">
          <span class="btn-text" :style="{ color: secondBtnColor }">{{cancelText}}</span>
        </div>
        <div class="footer-btn confirm" @click="primaryClicked">
          <span class="btn-text" :style="{ color: mainBtnColor }">{{confirmText}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .container {
    position: fixed;
    width: 100%;
    /*兼容H5异常*/
    z-index: 99999;
    display: flex;
    height:100%;
    top:0px;
  }
  .cover{
      background-color: rgba(0,0, 0, 0.6);
       display: flex;
       flex:1;
  }
  .dialog-box {
    position: fixed;
    left: 20%;
    width: 60%;
    background-color: #FFFFFF;
     display: flex;
     flex-direction: column;
  }
  .dialog-content {
    padding-top: 4vw;
    padding-bottom: 4vw;
    padding-left: 4vw;
    padding-right: 4vw;
     display: flex;
     flex-direction: column;
  }
  .content-title {
    color: #333333;
    font-size: 5vw;
    text-align: center;
    margin-bottom: 3vw;
  }
  .content-subtext {
    color: #666666;
    font-size: 5vw;
    line-height: 6vw;
    text-align: center;
  }
  .dialog-footer {
    flex-direction: row;
    align-items: center;
    border-top-color: #F3F3F3;
    border-top-width: 1px;
    display: flex;
  }
  .footer-btn {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex: 1;
    height: 9vw;
    display: flex;
  }
  .cancel {
    border-right-color: #F3F3F3;
    border-right-width: 1px;
  }
  .btn-text {
    font-size: 4vw;
    color: #666666;
  }
</style>
<script>
  export default {
    name:'test-dialog',
    props: {
      show: {
        type: Boolean,
        default: false
      },
      single: {
        type: Boolean,
        default: false
      },
      footer: {
        type: Boolean,
        default: true
      },
      title: {
        type: String,
        default: ''
      },
      content: {
        type: String,
        default: ''
      },
      top: {
        type: Number,
        default: 300
      },
      cancelText: {
        type: String,
        default: '取消'
      },
      confirmText: {
        type: String,
        default: '确定'
      },
      mainBtnColor: {
        type: String,
        default: '#EE9900'
      },
      secondBtnColor: {
        type: String,
        default: '#666666'
      },
      borderRadius:{
        type: String,
        default: '0vw' 
      },
      isChecked: {
        type: Boolean,
        default: false
      }
    },
    data: () => ({
      pageHeight: 1334
    }),
    created () {

    },
    methods: {
      secondaryClicked () {
        this.$emit('wxcDialogCancelBtnClicked', {
          type: 'cancel'
        });
      },
      primaryClicked (e) {
        this.$emit('wxcDialogConfirmBtnClicked', {
          type: 'confirm'
        });
      }
    }
  };
</script>