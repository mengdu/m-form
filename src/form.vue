<template>
  <form class="m-form"
    :class="{
      'm-form--inline': inline,
      'm-form--label-left': labelPosition === 'left',
      'm-form--label-right': labelPosition === 'right',
      'm-form--label-top': labelPosition === 'top'
    }"
    >
    <slot></slot>
  </form>
</template>
<script>

export default {
  name: 'MForm',
  props: {
    model: Object,
    rules: Object,
    inline: Boolean,
    labelWidth: [String, Number],
    labelPosition: [String, Number]
  },
  methods: {
    submit () {
      console.log('submit')
    }
  }
}
</script>
