<template>
  <div>
    <nav class="navbar-default navbar-static-side" role="navigation">
        <div class="sidebar-collapse">
          <ul class="nav metismenu" id="side-menu">
        <SidebarHeader/>
          <template v-for="(item) in navItems">
          <template v-if="item.title">
            <SidebarNavTitle :name="item.name" :classes="item.class" :wrapper="item.wrapper" v-bind:key="item.key"/>
          </template>
          <template v-else-if="item.divider">
            <SidebarNavDivider :classes="item.class" v-bind:key="item.key"/>
          </template>
          <template v-else-if="item.label">
            <SidebarNavLabel :name="item.name" :url="item.url" :icon="item.icon"  :classes="item.class" v-bind:key="item.key"/>
          </template>
          <template v-else>
            <template v-if="item.children && item.children.length > 0">
              <!-- First level dropdown -->
              <SidebarNavDropdown :name="item.name" :url="item.url" :classes="childlevel1Class" :icon="item.icon" v-bind:key="item.key" :CollapseClass="Level2Collapse(item.url)" :ActiveClass="activeRoute(item.url) ">
                <template v-for="(childL1) in item.children">
                  <template v-if="childL1.children && childL1.children.length > 0">
                    <!-- Second level dropdown -->
                    <SidebarNavDropdown :name="childL1.name"  :url="childL1.url" :classes="childlevel2Class" :icon="childL1.icon" v-bind:key="childL1.key" :CollapseClass="Level3Collapse(childL1.url)" :ActiveClass="activeRoute(childL1.url)">
                      <li v-for="(childL2) in childL1.children" v-bind:key="childL2.key" :class="activeRoute(childL2.url)">
                        <SidebarNavLink :name="childL2.name" :url="childL2.url" :icon="childL2.icon" :badge="childL2.badge" :variant="item.variant"/>
                      </li>
                    </SidebarNavDropdown>
                  </template>
                  <template v-else>
                    <!-- eslint-disable -->
                    <SidebarNavItem :url="childL1.url" :class="activeRoute(childL1.url)">
                      <SidebarNavLink :name="childL1.name" :url="childL1.url" :icon="childL1.icon" :badge="childL1.badge" :variant="item.variant" />
                    </SidebarNavItem>
                    <!-- eslint-enable -->
                  </template>
                </template>
              </SidebarNavDropdown>
            </template>
            <template v-else>
              <SidebarNavItem  v-bind:key="item.key" :url="item.url" :classes="activeRoute(item.url)">
                <SidebarNavLink :name="item.name" :url="item.url" :icon="item.icon" :badge="item.badge" :variant="item.variant"/>
              </SidebarNavItem>
            </template>
          </template>
        </template>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
import SidebarHeader from './SidebarHeader'
import SidebarNavDropdown from './SidebarNavDropdown'
import SidebarNavLink from './SidebarNavLink'
import SidebarNavTitle from './SidebarNavTitle'
import SidebarNavItem from './SidebarNavItem'
import SidebarNavLabel from './SidebarNavLabel'

  export default {
    data () {
      return {
        currentUrl: '',
        menus: []
      }
    },
  props: {
    navItems: {
      type: Array,
      required: true,
      default: () => []
    },
  },
    components: {
    SidebarHeader,
    SidebarNavDropdown,
    SidebarNavLink,
    SidebarNavTitle,
    SidebarNavItem,
    SidebarNavLabel
  },
    computed: 
      mapGetters({
        user: 'auth/user'
      }),
    methods: {
      activeRoute(url) {
         return this.$route.path.indexOf( url ) > -1 ? 'active' : ''
      },
      Level2Collapse(url) {
        return this.$route.path.indexOf( url ) > -1 ? "nav nav-second-level collapse in" : "nav nav-second-level collapse"
      },
      Level3Collapse(url) {
        return this.$route.path.indexOf( url ) > -1 ? "nav nav-third-level collapse in" : "nav nav-third-level collapse"
      }
    } 
  }
</script>
<style scoped>


</style>
