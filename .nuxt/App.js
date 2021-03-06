import Vue from 'vue'
import NuxtLoading from './components/nuxt-loading.vue'

import '..\\node_modules\\flag-icon-css\\css\\flag-icon.min.css'

import '..\\node_modules\\font-awesome\\css\\font-awesome.min.css'

import '..\\node_modules\\simple-line-icons\\css\\simple-line-icons.css'

import '..\\node_modules\\vue2-datatable-component\\dist\\min.css'

import '..\\client\\assets\\css\\animate.css'

import '..\\client\\assets\\css\\bootstrap.css'

import '..\\node_modules\\bootstrap-datepicker\\dist\\css\\bootstrap-datepicker3.css'

import '..\\client\\assets\\less\\style.less'


let layouts = {

  "_clean": () => import('..\\client\\layouts\\clean.vue'  /* webpackChunkName: "layouts_clean" */).then(m => m.default || m),

  "_default": () => import('..\\client\\layouts\\default.vue'  /* webpackChunkName: "layouts_default" */).then(m => m.default || m),

  "_menu": () => import('..\\client\\layouts\\menu.js'  /* webpackChunkName: "layouts_menu" */).then(m => m.default || m),

  "_simple": () => import('..\\client\\layouts\\simple.vue'  /* webpackChunkName: "layouts_simple" */).then(m => m.default || m)

}

let resolvedLayouts = {}

export default {
  head: {"title":"LaravelNuxt","titleTemplate":"%s - LaravelNuxt","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"Nuxt.js project"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"}],"script":[{"src":"https:\u002F\u002Fcdn.polyfill.io\u002Fv2\u002Fpolyfill.min.js?features=Promise,Object.assign,Object.values,Array.prototype.find,Array.prototype.findIndex,Array.prototype.includes,String.prototype.includes,String.prototype.startsWith,String.prototype.endsWith"}],"style":[]},
  render(h, props) {
    const loadingEl = h('nuxt-loading', { ref: 'loading' })
    const layoutEl = h(this.layout || 'nuxt')
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [ layoutEl ])

    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      }
    }, [ templateEl ])

    return h('div',{
      domProps: {
        id: '__nuxt'
      }
    }, [
      loadingEl,
      transitionEl
    ])
  },
  data: () => ({
    layout: null,
    layoutName: ''
  }),
  beforeCreate () {
    Vue.util.defineReactive(this, 'nuxt', this.$options.nuxt)
  },
  created () {
    // Add this.$nuxt in child instances
    Vue.prototype.$nuxt = this
    // add to window so we can listen when ready
    if (typeof window !== 'undefined') {
      window.$nuxt = this
    }
    // Add $nuxt.error()
    this.error = this.nuxt.error
  },
  
  mounted () {
    this.$loading = this.$refs.loading
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },
  
  methods: {
    
    errorChanged () {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) this.$loading.fail()
        if (this.$loading.finish) this.$loading.finish()
      }
    },
    
    setLayout (layout) {
      if (!layout || !resolvedLayouts['_' + layout]) layout = 'default'
      this.layoutName = layout
      let _layout = '_' + layout
      this.layout = resolvedLayouts[_layout]
      return this.layout
    },
    loadLayout (layout) {
      if (!layout || !(layouts['_' + layout] || resolvedLayouts['_' + layout])) layout = 'default'
      let _layout = '_' + layout
      if (resolvedLayouts[_layout]) {
        return Promise.resolve(resolvedLayouts[_layout])
      }
      return layouts[_layout]()
      .then((Component) => {
        resolvedLayouts[_layout] = Component
        delete layouts[_layout]
        return resolvedLayouts[_layout]
      })
      .catch((e) => {
        if (this.$nuxt) {
          return this.$nuxt.error({ statusCode: 500, message: e.message })
        }
      })
    }
  },
  components: {
    NuxtLoading
  }
}

