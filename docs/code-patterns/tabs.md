```pug
.tabs
  .tab__item(
    v-for="tabItem in tabOptions"
    :class="{ 'is-active': activeTab === tabItem.key }"
    @click="activeTab = tabItem.key") {{tabItem.title}}
    .tab__bottom-bar
.ajz-tab__pane(
  v-for="(item, index) in tabOptions"
  :class="item.class"
  :key='item.name'
  v-if="activeTab === index"
)
  component(:is="item.component")
```
```js
      activeTab: 'A',
      tabOptions: [
        {
          key: 'A',
          title: 'aaa',
          component: 'AAA',
        },
        {
          key: 'B',
          title: 'bbb',
        },
      ]
```

```scss
$--color-primary: #FF0520;

  .tabs {
    display: flex;
    background: #fff;
    .tab__item {
      width: 176px;
      height: 56px;
      line-height: 56px;
      font-size: 16px;
      padding: 0 32px;
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;
      position: relative;
      &:first-child::after {
        content: '';
        height: 32px;
        width: 1px;
        background: #F1F2F4;
        position: absolute;
        right: 0;
        top: 12px;
      }
      .tab__bottom-bar {
        width: 64px;
        height: 3px;
        margin-top: -3px;
      }
      &.is-active {
        color: $--color-primary;
        .tab__bottom-bar {
          background: $--color-primary;
        }
      }
    }
  }
```
