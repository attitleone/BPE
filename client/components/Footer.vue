<template>
  <footer class="app-footer">
    <span>{{CompanyName}}  &copy; {{year}} </span>
    <!--<span class="ml-auto">Powered by <a href="http://coreui.io">CoreUI</a></span>-->
  </footer>
</template>
<script>
  import { Common } from '../static/Resource'
export default {
  name: 'c-footer',
  data: () => ({
      year: Common.Year,
      CompanyName: Common.CompanyName
  })
}
</script>
