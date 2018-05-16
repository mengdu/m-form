# m-form

表单组件


[Example](https://mengdu.github.io/m-form/example/)

```ls
npm install -S vue-m-form
```

```js
import MForm from 'vue-m-form'

Vue.use(MForm)
```

**例子**

```html
<m-form @submit.native.prevent="">
  <m-form-item label="Username" required>
    <input type="text" class="form-control" placeholder="Username">
  </m-form-item>
  <m-form-item label="Password" required>
    <input type="text" class="form-control" placeholder="Password">
  </m-form-item>
  <m-form-item label="NickName">
    <input type="text" class="form-control" placeholder="NickName">
  </m-form-item>
  <m-form-item>
    <m-button>提交</m-button>
  </m-form-item>
</m-form>
```


## MForm Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| inline    | 显示行模式 | Boolean | — | false |
| label-width| 标签长度 | String/Number | — | — |
| label-position | 标签位置 | String | — | — |


## MFormItem Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| label    | 标签名 | String | — | — |
| label-width| 标签长度 | String/Number | — | — |
| required | 必须 | Boolean | — | false |
