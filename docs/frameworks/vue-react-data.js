// vue
var componentOptions = {
  // data: { // error: `data` property in component must be a function (vue/no-shared-component-data)
    // name: 'a'
  // }
  data: function () {
    return {
      name: 'a'
    }
  }
}
function MyVueComponent(options) {
  // this.data = options.data
  this.data = options.data() // 此处注意，因是函数，需要执行才能返回对象
}
var c1 = new MyVueComponent(componentOptions)
var c2 = new MyVueComponent(componentOptions)

c1.data.name = 'b'
console.log(c2.data.name)

// react
function MyReactComponent() {
  this.data = {
    name: 'a'
  }
}
var c1 = new MyReactComponent()
var c2 = new MyReactComponent()
c1.data.name = 'b'
console.log(c2.data.name)
