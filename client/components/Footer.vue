<template>
  <footer class="app-footer">
    <span>{{CompanyName}}  &copy; {{year}} </span>
    <!--<span class="ml-auto">Powered by <a href="http://coreui.io">CoreUI</a></span>-->
  </footer>
</template>
<script>
  import { CompanyName, Year } from '../static/Helper'
export default {
  name: 'c-footer',
  data: () => ({
      year: Year,
      CompanyName: CompanyName
  })
}
</script>
