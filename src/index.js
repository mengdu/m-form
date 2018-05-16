import MForm from './form'
import MFormItem from './form-item'
import './form.less'

MForm.install = function (Vue) {
  Vue.component(MForm.name, MForm)
  Vue.component(MFormItem.name, MFormItem)
}

export {
  MForm as default,
  MForm,
  MFormItem
}
