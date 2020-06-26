<!--
 * @Author: your name
 * @Date: 2020-06-26 16:25:36
 * @LastEditTime: 2020-06-26 17:24:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \.vscode\supermall\src\components\content\goods\GoodsList.vue
--> 

<template>
  <div class="goods-list">
    <goods-list-item
            v-for="item in goods"
            :goods-item="item" class="item">
    </goods-list-item>
  </div>
</template>

<script>
  import GoodsListItem from './GoodsListItem'

  export default {
    name: "GoodsList",
    components: {
      GoodsListItem
    },
    props: {
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .goods-list {
    display: flex;
    flex-wrap: wrap;
    padding: 5px;
    justify-content: space-around;
  }

  .goods-list .item {
    width: 48%;
  }
</style>