<template>
  <li :class="classList">
    <template v-if="wrapper && wrapper.element">
      <component v-bind:is="wrapper.element" v-bind="wrapper.attributes">
        <span class="nav-label">{{name}} </span>
      </component>
    </template>
    <template v-else>
      <span class="nav-label">{{name}} </span>
    </template>
  </li>
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
        default: ''
      },
      classes: {
        type: String,
        default: ''
      },
      wrapper: {
        type: Object,
        default: () => {}
      }
    },
    computed: {
      classList () {
        return [
          'nav-title',
          ...this.itemClasses
        ]
      },
      itemClasses () {
        return this.classes ? this.classes.split(' ') : ''
      }
    }
  }
</script>
<style scoped>
.nav-label{
  color: #fff;
  padding: 5%;
}
</style>
