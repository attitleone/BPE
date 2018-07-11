<template>
  <div class="app">
    <!-- <AppHeader/>
    <div class="app-body">
      <Sidebar :navItems="nav"/>
      <main class="main"> -->
        <!-- <breadcrumb :list="list"/> -->
        <!-- <div class="container-fluid">
          <nuxt />
        </div>
      </main> -->
      <!--<AppAside/>-->
    <!-- </div>
    <AppFooter/> -->
      <div id="wrapper">
    <Sidebar :navItems="nav" />
    <div id="page-wrapper" class="gray-bg">
      <AppHeader/>
      <!-- <nuxt /> -->

      <!-- <div class="wrapper wrapper-content animated fadeInRight"> -->
      <div class="wrapper wrapper-content">
        <nuxt />
      </div>
      <AppFooter/>
    </div>
  </div>
</div>
</template>

<script>
  // import nav from './menu' 
  import { mapGetters,mapActions } from 'vuex'
  // import { Header as AppHeader, Sidebar, Footer as AppFooter, Breadcrumb } from '~/components/'
  import { Header as AppHeader, Sidebar, Footer as AppFooter } from '~/components/'
  import '~/assets/js/inspinia'
  export default {
    name: 'full',
     middleware:  ['auth', 'menu'],
    components: {
      AppHeader,
      Sidebar,
      AppFooter
      // Breadcrumb
    },
    data () {
      return {
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
      }
    },
    beforeMount: () => {
    // document.body.classList.remove('gray-bg')
    
    // document.getElementsByClassName('wrapper wrapper-content').classList.add('animated fadeInRight')
    },
    mounted: () => {
      $('#side-menu').metisMenu()
    },
  }
</script>


// import Navbar from '~/components/Navbar'
//
// export default {
//   components: {
//     Navbar
//   }
// }

