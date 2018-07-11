<template>
  <!-- <div v-if="isExternalLink">
    <a :href="url" :class="classList">
      <i :class="icon"></i> {{name}}
      <b-badge v-if="badge && badge.text" :variant="badge.variant">{{badge.text}}</b-badge>
    </a>
  </div> -->
  <!-- <div v-else> -->
    <router-link :to="url" :class="classList" >
      <!-- <a href="#" @click="handleClick"> -->
        <i :class="icon"></i> 
      <span class="nav-label">{{name}} </span>
      <!-- </a> -->
      
      <!-- <b-badge v-if="badge && badge.text" :variant="badge.variant">{{badge.text}}</b-badge> -->
    </router-link>
  <!-- </div> -->

                    <!-- <a href="metrics.html" @click="handleClick"><i class="fa fa-pie-chart"></i> <span class="nav-label">Metrics</span>  </a> -->

  
</template>

<script>
  export default {
    name: 'sidebar-nav-link',
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
      badge: {
        type: Object,
        default: () => {}
      },
      variant: {
        type: String,
        default: ''
      },
      classes: {
        type: String,
        default: ''
      }
    },
    computed: {
      classList () {
        return [
          'nav-link',
          this.linkVariant,
          ...this.itemClasses
        ]
      },
      linkVariant () {
        return this.variant ? `nav-link-${this.variant}` : ''
      },
      itemClasses () {
        return this.classes ? this.classes.split(' ') : []
      },
      isExternalLink () {
        if (this.url.substring(0, 4) === 'http') {
          return true
        } else {
          return false
        }
      }
    }
  }
</script>
