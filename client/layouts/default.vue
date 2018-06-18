<template>
  <div class="app">
    <AppHeader/>
    <div class="app-body">
      <Sidebar :navItems="nav"/>
      <main class="main">
        <breadcrumb :list="list"/>
        <div class="container-fluid">
          <nuxt />
        </div>
      </main>
      <!--<AppAside/>-->
    </div>
    <AppFooter/>
  </div>
</template>

<script>
  // import nav from './menu' 
  import { mapGetters,mapActions } from 'vuex'
  import { Header as AppHeader, Sidebar, Footer as AppFooter, Breadcrumb } from '~/components/'

  export default {
    name: 'full',
     middleware: 'menu',
    components: {
      AppHeader,
      Sidebar,
      AppFooter,
      Breadcrumb
    },
    data () {
      return {
        // nav: nav.items
      }
    },
    computed: {
      ...mapGetters({
          nav: 'menu/items',
          // items: 'auth/items'
      }),
      name () {
        return this.$route.name
      },
      list () {
        return this.$route.matched
      }
    }
  }
</script>


// import Navbar from '~/components/Navbar'
//
// export default {
//   components: {
//     Navbar
//   }
// }

