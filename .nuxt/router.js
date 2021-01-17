import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5597d1d7 = () => interopDefault(import('..\\pages\\About.vue' /* webpackChunkName: "pages/About" */))
const _98b8d49e = () => interopDefault(import('..\\pages\\Contact-Us.vue' /* webpackChunkName: "pages/Contact-Us" */))
const _8dd46a5c = () => interopDefault(import('..\\pages\\Error.vue' /* webpackChunkName: "pages/Error" */))
const _aeff56f8 = () => interopDefault(import('..\\pages\\Services.vue' /* webpackChunkName: "pages/Services" */))
const _0444e688 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/About",
    component: _5597d1d7,
    name: "About"
  }, {
    path: "/Contact-Us",
    component: _98b8d49e,
    name: "Contact-Us"
  }, {
    path: "/Error",
    component: _8dd46a5c,
    name: "Error"
  }, {
    path: "/Services",
    component: _aeff56f8,
    name: "Services"
  }, {
    path: "/",
    component: _0444e688,
    name: "index"
  }, {
    path: "*",
    component: _8dd46a5c,
    name: "custom"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
