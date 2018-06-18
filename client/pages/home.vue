<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-card-group>
          <b-card-body>
          <b-row class="justify-content-center">
            <app-logo/>
          </b-row>



      <h1 class="text-center title">
      Welcome to
      </h1>
      <h2 class="text-center subtitle">
      {{CompanyName}}
      </h2>
          </b-card-body>
        </b-card-group>
      </b-row>
    </div>
  </div>


</template>

<script>
  import AppLogo from '~/components/AppLogo.vue'
  import { CompanyName } from '../static/Helper'
export default {
  middleware: 'auth',
  data: () => ({
      CompanyName: CompanyName
  }),
  components: {
      AppLogo
  },
  head () {
      return { title: this.$t('home') }
  }
}
</script>
