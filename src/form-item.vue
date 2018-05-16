<template>
  <div class="m-form-item">
    <label class="m-form-item__label" v-if="label"
      :class="{
        'is-required': required
      }"
      :style="{
        width: doLabelPosition !== 'top' ? doLabelWidth : null
      }"
      >{{label}}</label>
    <div class="m-form-item__content"
      :style="{
        marginLeft: doLabelPosition !== 'top' ? doLabelWidth : null
      }"
      >
      <slot></slot>
      <div class="m-form-item__error" v-if="errorMsg">{{errorMsg}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MFormItem',
  props: {
    prop: String,
    label: String,
    labelWidth: [String, Number],
    required: Boolean
  },
  computed: {
    doLabelWidth () {
      let width = this.labelWidth || this.$parent.labelWidth
      if (width) return width + 'px'
      return null
    },
    doLabelPosition () {
      return this.$parent.labelPosition
    }
  },
  data () {
    return {
      errorMsg: ''
    }
  },
  mounted () {
    console.log(this.$options.componentName)
  }
}
</script>
