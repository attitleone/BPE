<template>
  <div class="app">
      <div id="wrapper">
    <Sidebar :navItems="nav" />
    <div id="page-wrapper" class="gray-bg">
      <AppHeader/>
      <!-- <nuxt /> -->
            <div class="row wrapper border-bottom white-bg page-heading" v-if="CheckCurrentUrl">
                 <div class="col-lg-10">
                     <h2>{{ nameTH }}</h2>
                     <breadcrumb :list="list" />
                 </div>
                 <div class="col-lg-2"></div>
            </div>
      <div class="wrapper wrapper-content animated fadeInRight">
  <transition name="fade">
 <nuxt />
  </transition>
      </div>
      <AppFooter/>
    </div>
  </div>
</div>
</template>

<script>

  // import nav from './menu' 
  import { mapGetters,mapActions } from 'vuex'
  import { Header as AppHeader, Sidebar, Footer as AppFooter, Breadcrumb } from '~/components/'
  // import '~/assets/js/inspinia'
  export default {
    name: 'full',
     middleware:  ['auth', 'menu'],
    components: {
      AppHeader,
      Sidebar,
      AppFooter,
      Breadcrumb
    },
    data () {
      return {
        show: true
        // nav: nav.items
      }
    },
    computed: {
      ...mapGetters({
          nav: 'menu/items'
      }),
      name () {
        return this.$route.name
      },
      list () {
        return this.$route.matched
      },
      nameTH () {
        return this.$route.meta.nameTH
      },
      CheckCurrentUrl () {
        if(this.name === 'home'){
          return false
        }
        return true
      }
    },
    mounted ()  {
      $('#side-menu').metisMenu()
    },
  }
</script>
