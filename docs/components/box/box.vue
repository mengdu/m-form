<template>
<div class="m-box">
  <div class="m-box-header" v-if="title || $slots.header">
    <slot name="header">{{title}}</slot>
  </div>
  <div class="m-box-content"><slot></slot></div>
</div>
</template>
<script>
export default {
  name: 'MBox',
  props: {
    title: String
  }
}
</script>
<style>
  .m-box {
    margin: 0 auto;
    margin-bottom: 20px;
    background: #fff;
    border-radius: 3px;
    overflow: hidden;
  }
  .m-box:last-child{
    margin-bottom: 0;
  }
  .m-box .m-box-header{
    padding: 10px;
    font-size: 1.3rem;
  }
  .m-box .m-box-content{
    padding: 15px;
  }
</style>
