<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <!-- <b-row class="justify-content-center"> -->
        <div class="row text-center">
        <!-- <b-card-group> -->
          <div class="card">
          <!-- <b-card-body> -->
            <div class="card-body">
          <div class="row text-center">
            <app-logo/>
          </div>



      <h1 class="text-center title">
      Welcome to
      </h1>
      <h2 class="text-center subtitle">
      {{CompanyName}}
      </h2>
          <!-- </b-card-body> -->
          </div>
          </div>
        <!-- </b-card-group> -->
      <!-- </b-row> -->
        </div>
    </div>
  </div>


</template>

<script>
  import AppLogo from '~/components/AppLogo.vue'
  import { Common } from '../static/Resource'
export default {
  middleware: 'auth',
  data: () => ({
      CompanyName: Common.CompanyName
  }),
  components: {
      AppLogo
  },
  head () {
      return { title: this.$t('home') }
  }
}
</script>
