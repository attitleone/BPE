<template>
  <header class="app-header navbar">
    <button class="navbar-toggler mobile-sidebar-toggler d-lg-none" type="button" @click="mobileSidebarToggle">
      <span class="navbar-toggler-icon"></span>
    </button>
    <!--<b-link class="navbar-brand" to="#"></b-link>-->
    <router-link :to="{ name: user ? 'home' : 'welcome' }" class="navbar-brand">
      <!--{{ appName }}-->
    </router-link>
    <button class="navbar-toggler sidebar-toggler d-md-down-none" type="button" @click="sidebarToggle">
      <span class="navbar-toggler-icon"></span>
    </button>
    <b-navbar-nav class="d-md-down-none">
      <!--<b-nav-item class="px-3">Dashboard</b-nav-item>-->
      <!--<b-nav-item class="px-3">Users</b-nav-item>-->
      <!--<b-nav-item class="px-3">Settings</b-nav-item>-->
    </b-navbar-nav>
    <b-navbar-nav class="ml-auto">
      <b-nav-item class="d-md-down-none">
        <!--<i class="icon-bell"></i>-->
        <!--<b-badge pill variant="danger">5</b-badge>-->
      </b-nav-item>
      <b-nav-item class="d-md-down-none">
        <!--<i class="icon-list"></i>-->
      </b-nav-item>
      <!--<b-nav-item class="d-md-down-none">-->
        <!--<i class="icon-location-pin"></i>-->
      <!--</b-nav-item>-->

      <HeaderDropdown v-if="user"/>
      <b-nav-item v-else class="d-md-down-none">
        <router-link :to="{ name: 'login' }" class="nav-link" active-class="active">
          {{ $t('login') }}
        </router-link>
      </b-nav-item>
    </b-navbar-nav>
  </header>
</template>

<script>
  import HeaderDropdown from './HeaderDropdown.vue'
  import { mapGetters } from 'vuex'
  export default {
    name: 'c-header',
    data: () => ({
      appName: process.env.appName
    }),
    computed: mapGetters({
      user: 'auth/user'
    }),
    components: {
      HeaderDropdown
    },
    methods: {
      sidebarToggle (e) {
        e.preventDefault()
        document.body.classList.toggle('sidebar-hidden')
      },
      sidebarMinimize (e) {
        e.preventDefault()
        document.body.classList.toggle('sidebar-minimized')
      },
      mobileSidebarToggle (e) {
        e.preventDefault()
        document.body.classList.toggle('sidebar-mobile-show')
      }
    }
  }
</script>
