<template >

      <b-nav-item-dropdown   right no-caret>
        <template slot="button-content">
          <!-- <img src="~static/img/avatars/6.jpg" class="img-avatar" alt="admin@bootstrapmaster.com"> -->
          
          <img :src="user.photo_url" class="img-avatar" :alt="user.Email">
          
          <span class="align-middle">{{user.Name}}</span>
        </template>
        <!--<b-dropdown-header tag="div" class="text-center"><strong>Account</strong></b-dropdown-header>-->
        <!--<b-dropdown-item><i class="fa fa-bell-o"></i> Updates<b-badge variant="info">{{itemsCount}}</b-badge></b-dropdown-item>-->
        <!--<b-dropdown-item><i class="fa fa-envelope-o"></i> Messages<b-badge variant="success">{{itemsCount}}</b-badge></b-dropdown-item>-->
        <!--<b-dropdown-item><i class="fa fa-tasks"></i> Tasks<b-badge variant="danger">{{itemsCount}}</b-badge></b-dropdown-item>-->
        <!--<b-dropdown-item><i class="fa fa-comments"></i> Comments<b-badge variant="warning">{{itemsCount}}</b-badge></b-dropdown-item>-->
        <b-dropdown-header tag="div" class="text-center"><strong>Settings</strong></b-dropdown-header>
        <b-dropdown-item><i class="fa fa-user"></i> Profile</b-dropdown-item>
        <b-dropdown-item @click.prevent="setting"><i class="fa fa-wrench"></i>
          {{ $t('settings') }}
        </b-dropdown-item>
        <!--<b-dropdown-item><i class="fa fa-usd"></i> Payments<b-badge variant="secondary">{{itemsCount}}</b-badge></b-dropdown-item>-->
        <!--<b-dropdown-item><i class="fa fa-file"></i> Projects<b-badge variant="primary">{{itemsCount}}</b-badge></b-dropdown-item>-->
        <!--<b-dropdown-divider></b-dropdown-divider>-->
        <!--<b-dropdown-item><i class="fa fa-shield"></i> Lock Account</b-dropdown-item>-->
        <b-dropdown-item @click.prevent="logout"><i class="fa fa-lock"></i> Logout</b-dropdown-item>
      </b-nav-item-dropdown>




</template>


<script>
  import { mapGetters } from 'vuex'
  import LocaleDropdown from '../LocaleDropdown'
  export default {
    name: 'header-dropdown',
    data: () => ({
      itemsCount: 42
    }),

    computed: mapGetters({
    user: 'auth/user'
    }),
    components: {
      LocaleDropdown
    },
    methods: {
      async logout () {
        // Log out the user.
        await this.$store.dispatch('auth/logout')

        // Redirect to login.
        this.$router.push({ name: 'login' })
      },

      async setting () {
        // Redirect to setting.
        this.$router.push({ name: 'settings.profile' })
      }
    }
  }
</script>

