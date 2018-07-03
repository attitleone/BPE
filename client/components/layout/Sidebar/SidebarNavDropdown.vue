<template>
  <!-- <router-link tag="li" :to="url"> -->
  <li >
      <!-- <a href="#" @click="handleClick"> -->
      <a href="#" >
      <i :class="icon"></i> 
      <span class="nav-label">{{name}} </span>
      <span class="fa arrow"></span>
      </a>

    <ul :class="classes">
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
    }
  },
  methods: {
    handleClick (e) {
      e.preventDefault()
      e.target.parentElement.classList.toggle('active')
      // e.target.classList.toggle('active')
      e.target.parentElement.querySelector("ul").classList.toggle('in')
    }
  }
}
</script>
