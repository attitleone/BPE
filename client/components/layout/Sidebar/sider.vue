<template>
  <div>
    <nav class="navbar-default navbar-static-side" role="navigation">
        <div class="sidebar-collapse">
        <!-- <ul class="nav metismenu" id="sid-menu"> -->
          <ul class="nav metismenu" id="menu">
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
              <SidebarNavDropdown :name="item.name" :url="item.url" :classes="childlevel1Class" :icon="item.icon" v-bind:key="item.key">
                <template v-for="(childL1) in item.children">
                  <template v-if="childL1.children && childL1.children.length > 0">
                    <!-- Second level dropdown -->
                    <SidebarNavDropdown :name="childL1.name"  :url="childL1.url" :classes="childlevel2Class" :icon="childL1.icon" v-bind:key="childL1.key">
                      <li v-for="(childL2) in childL1.children" v-bind:key="childL2.key">
                        <SidebarNavLink :name="childL2.name" :url="childL2.url" :icon="childL2.icon" :badge="childL2.badge" :variant="item.variant"/>
                      </li>
                    </SidebarNavDropdown>
                  </template>
                  <template v-else>
                    <!-- eslint-disable -->
                    <SidebarNavItem :classes="item.class">
                      <SidebarNavLink :name="childL1.name" :url="childL1.url" :icon="childL1.icon" :badge="childL1.badge" :variant="item.variant"/>
                    </SidebarNavItem>
                    <!-- eslint-enable -->
                  </template>
                </template>
              </SidebarNavDropdown>
            </template>
            <template v-else>
              <SidebarNavItem :classes="item.class" v-bind:key="item.key">
                <SidebarNavLink :name="item.name" :url="item.url" :icon="item.icon" :badge="item.badge" :variant="item.variant"/>
              </SidebarNavItem>
            </template>
          </template>
        </template>


          <!-- <li v-for="one in data" :key="one.name" @click.stop="triggle(one)" :class="[one.active ? 'active': '']">
            <a href="javascript:;">
              <i class="fa" :class="one.icon"></i>
              <span class="nav-label">{{one.name}}</span>
              <span class="fa arrow" v-show="one.children"></span>
            </a>
            <ul class="nav nav-second-level collapse" v-show="one.children && one.children.length>0" :class="[one.active ? 'in': '']">
              <li v-for="two in one.children" :key="two.name" @click.stop="triggle(two)" :class="[two.active ? 'active': '']">
                <a href="javascript:;"> -->
                  <!-- <i class="fa" :class="two.icon"></i> -->
                  <!-- {{two.name}}
                  <span class="fa arrow" v-show="two.children"></span>
                </a>
                <ul class="nav nav-third-level collapse" v-show="two.children && two.children.length>0" :class="[two.active ? 'in': '']">
                  <li v-for="three in two.children" :key="three.name" @click.stop="triggle(three)" :class="[three.active ? 'active': '']">
                    <a href="javascript:;"> -->
                      <!-- <i class="fa" :class="three.icon"></i> -->
                      <!-- {{three.name}}
                      <span class="fa arrow" v-if="three.children"></span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li> -->

          <li>
            <a href="#">
              <i class="fa fa-sitemap"></i>
              <span class="nav-label">Menu Levels </span>
              <span class="fa arrow"></span>
            </a>
            <ul class="nav nav-second-level collapse">
              <li>
                <a href="#">Third Level
                  <span class="fa arrow"></span>
                </a>
                <ul class="nav nav-third-level collapse">
                  <li>
                    <a href="#">Third Level Item</a>
                  </li>
                  <li>
                    <a href="#">Third Level Item</a>
                  </li>
                  <li>
                    <a href="#">Third Level Item</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Second Level Item</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="css_animation.html">
              <i class="fa fa-magic"></i>
              <span class="nav-label">CSS Animations </span>
              <span class="label label-info pull-right">62</span>
            </a>
          </li>
          <li class="landing_link">
            <a target="_blank" href="landing.html">
              <i class="fa fa-star"></i>
              <span class="nav-label">Landing Page</span>
              <span class="label label-warning pull-right">NEW</span>
            </a>
          </li>
          <li class="special_link">
            <a href="package.html">
              <i class="fa fa-database"></i>
              <span class="nav-label">Package</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import SidebarForm from '../../Sidebar/SidebarForm'
import SidebarHeader from './SidebarHeader'
import SidebarMinimizer from '../../Sidebar/SidebarMinimizer'
import SidebarNavDivider from '../../Sidebar/SidebarNavDivider'
import SidebarNavDropdown from './SidebarNavDropdown'
import SidebarNavLink from './SidebarNavLink'
import SidebarNavTitle from './SidebarNavTitle'
import SidebarNavItem from '../../Sidebar/SidebarNavItem'
import SidebarNavLabel from '../../Sidebar/SidebarNavLabel'
  export default {
    data () {
      return {
        currentUrl: '',
        menus: [],
        childlevel1Class: 'nav nav-second-level collapse',
        childlevel2Class: 'nav nav-third-level collapse'
      }
    },
  props: {
    navItems: {
      type: Array,
      required: true,
      default: () => []
    }
  },
    components: {
    SidebarForm,
    SidebarHeader,
    SidebarMinimizer,
    SidebarNavDivider,
    SidebarNavDropdown,
    SidebarNavLink,
    SidebarNavTitle,
    SidebarNavItem,
    SidebarNavLabel
  },
    mounted: () => {
  $('#menu').metisMenu();
    },
      computed: mapGetters({
      user: 'auth/user'
    }),
  }
</script>
<style scoped>


</style>
