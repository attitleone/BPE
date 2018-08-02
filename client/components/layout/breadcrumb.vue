<template>
  <ol class="breadcrumb">
    <li class="breadcrumb-item">
      <router-link to="/home" >หน้าแรก</router-link>
    </li>
    <li class="breadcrumb-item" v-for="(item, index) in list" v-bind:key="index">
      <!-- <span class="active" v-if="isLast(index)">{{ showName(item) }}</span> -->
      <strong v-if="isLast(index)">{{ showName(item) }}</strong>
      <router-link :to="item" v-else>{{ showName(item) }}</router-link>
    </li>
  </ol>
</template>

<script>
export default {
  data: () => ({
        currentUrl: ''
  }),
  props: {
    list: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  methods: {
    isLast (index) {
      return index === this.list.length - 1
    },
    showName (item) {
      if (item.meta && item.meta.label) {
        item = item.meta && item.meta.label
      }
      if (item.name) {
        item = item.name
      }
      return item
    },
    current(){
      this.currentUrl = this.$route.name
    }
  }
}
</script>
