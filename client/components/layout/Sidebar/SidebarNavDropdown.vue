<template>
  <!-- <router-link tag="li" :to="url"> -->
  <li :class="ActiveClass">
      <!-- <a href="#" @click="handleClick"> -->
      <a href="#" >
      <i :class="icon"></i> 
      <span class="nav-label">{{name}} </span>
      <span class="fa arrow"></span>
      </a>

    <ul :class="CollapseClass">
      <slot></slot>
    </ul>
  </li>
  <!-- </router-link> -->
  
  
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    classes: {
        type: String,
        default: ''
    },
    ActiveClass: {
      type: String,
      default: ''
    },
    CollapseClass: {
      type: String,
      default: ''
    }
  },
  // computed:{
  //         classList () {
  //       return [
  //         ...this.itemClasses,
  //       ]
  //     },
  //     itemClasses () {
  //       return this.classes ? this.classes.split(' ') : ''
  //     },

  // }
}
</script>
