<template>
    <div class="container">
        <div class="ui-tabs">
            <div class="tab__item"
                v-for="tabItem in tabOptions"
                :key="tabItem.key"
                :class="{ 'is-active': activeTab === tabItem.key }"
                @click="activeTab = tabItem.key"
            >
                {{tabItem.title}}
            <div class="tab__bottom-bar"></div>
            </div>
        </div>
        <div class="ui-tab__pane">
            <component :is="currentTabData.component"></component>
        </div>
    </div>
</template>

<script>
export default {
    components: {
    },
    mixins: [],
    data: () => ({
        activeTab: 'A',
        tabOptions: [
            {
                key: 'A',
                title: '空间上限',
                component: 'A',
            },
            {
                key: 'B',
                title: '空间权限',
                component: 'B',
            },
        ]
    }),
    methods: {
    },
    computed: {
        currentTabData() {
            return this.tabOptions.find(i => i.key === this.activeTab)
        }
    },
    watch: {
    },
    created() {
    }
};
</script>
<style lang="scss">
$--color-primary: #FF0520;

.container {

  .ui-tabs {
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

}
</style>
