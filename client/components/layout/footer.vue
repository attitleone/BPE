<template>
  <div class="footer">
      <div class="pull-right">
      </div>
      <div>
          <strong>Copyright</strong> {{ CompanyName }} © {{ year }}
      </div>
  </div>
</template>

<script>
import { Common } from '../../static/Resources'
export default {
  data: () => ({
      msg: 'Welcome to Your Vue.js App',
      year: Common.Year,
      CompanyName: Common.CompanyName
  }),
}
</script>

<style scoped>

</style>
