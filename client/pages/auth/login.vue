<template>
  <!-- <div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="8">
          <b-card-group>
            <b-card no-body class="p-4">
              <b-form @submit.prevent="login" @keydown="form.onKeydown($event)">
              <b-card-body>

                <h1>Login</h1>
                <p class="text-muted">Sign In to your account</p>
                <b-input-group class="mb-3">
                  <b-input-group-prepend><b-input-group-text><i class="icon-user"></i></b-input-group-text></b-input-group-prepend>
                  <input v-model="form.email" type="email" name="email" class="form-control" placeholder="Username"
                         :class="{ 'is-invalid': form.errors.has('email') }">
                </b-input-group>
                <b-input-group class="mb-4">
                  <b-input-group-prepend><b-input-group-text><i class="icon-lock"></i></b-input-group-text></b-input-group-prepend>
                  <input v-model="form.password" type="password" name="password" class="form-control" placeholder="Password"
                  :class="{ 'is-invalid': form.errors.has('password') }">
                  <has-error :form="form" field="password"/>
                </b-input-group>
                <b-input-group class="mb-4">
                <checkbox v-model="remember" name="remember">
                  {{ $t('remember_me') }}
                </checkbox>
                </b-input-group>
                <b-row>
                  <b-col cols="6"> -->
                    <!--<b-button variant="primary" class="px-4">Login</b-button>-->
                    <!-- <v-button :loading="form.busy">
                    {{ $t('login') }}
                    </v-button>
                  </b-col>
                  <b-col cols="6" class="text-right">

                    <b-button variant="link" class="px-0">
                      <router-link :to="{ name: 'password.request' }" >
                      {{ $t('forgot_password') }}
                      </router-link>
                    </b-button>
                  </b-col>
                </b-row>
              </b-card-body>
              </b-form>
            </b-card>
            <b-card no-body class="text-white bg-primary py-5 d-md-down-none" style="width:44%">
              <b-card-body class="text-center">
                <div>
                  <h2>{{ CompanyName }}</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> -->
                  <!--<b-button variant="primary" class="active mt-3">Register Now!</b-button>-->
                <!-- </div>
              </b-card-body>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>
    </div>
  </div> -->


      <div class="middle-box text-center loginscreen animated fadeInDown">
        <div>
            <div>

                <h1 class="logo-name">IN+</h1>

            </div>
            <h3>Welcome to IN+</h3>
            <p>Perfectly designed and precisely prepared admin theme with over 50 pages with extra new web app views.
                <!--Continually expanded and constantly improved Inspinia Admin Them (IN+)-->
            </p>
            <p>Login in. To see it in action.</p>
            <form class="m-t" role="form" action="index.html">
                <div class="form-group">
                    <input type="email" class="form-control" placeholder="Username" required="">
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" placeholder="Password" required="">
                </div>
                <button type="submit" class="btn btn-primary block full-width m-b">Login</button>

                <a href="#"><small>Forgot password?</small></a>
                <p class="text-muted text-center"><small>Do not have an account?</small></p>
                <a class="btn btn-sm btn-white btn-block" href="register.html">Create an account</a>
            </form>
            <p class="m-t"> <small>Inspinia we app framework base on Bootstrap 3 &copy; 2014</small> </p>
        </div>
    </div>
</template>

<!--<template>-->
  <!--<div class="row">-->
    <!--<div class="col-lg-8 m-auto">-->
      <!--<card :title="$t('login')">-->
        <!--<form @submit.prevent="login" @keydown="form.onKeydown($event)">-->
          <!--&lt;!&ndash; Email &ndash;&gt;-->
          <!--<div class="form-group row">-->
            <!--<label class="col-md-3 col-form-label text-md-right">{{ $t('email') }}</label>-->
            <!--<div class="col-md-7">-->
              <!--<input v-model="form.email" type="email" name="email" class="form-control"-->
                <!--:class="{ 'is-invalid': form.errors.has('email') }">-->
              <!--<has-error :form="form" field="email"/>-->
            <!--</div>-->
          <!--</div>-->

          <!--&lt;!&ndash; Password &ndash;&gt;-->
          <!--<div class="form-group row">-->
            <!--<label class="col-md-3 col-form-label text-md-right">{{ $t('password') }}</label>-->
            <!--<div class="col-md-7">-->
              <!--<input v-model="form.password" type="password" name="password" class="form-control"-->
                <!--:class="{ 'is-invalid': form.errors.has('password') }">-->
              <!--<has-error :form="form" field="password"/>-->
            <!--</div>-->
          <!--</div>-->

          <!--&lt;!&ndash; Remember Me &ndash;&gt;-->
          <!--<div class="form-group row">-->
            <!--<div class="col-md-3"></div>-->
            <!--<div class="col-md-7 d-flex">-->
              <!--<checkbox v-model="remember" name="remember">-->
                <!--{{ $t('remember_me') }}-->
              <!--</checkbox>-->

              <!--<router-link :to="{ name: 'password.request' }" class="small ml-auto my-auto">-->
                <!--{{ $t('forgot_password') }}-->
              <!--</router-link>-->
            <!--</div>-->
          <!--</div>-->

          <!--<div class="form-group row">-->
            <!--<div class="col-md-7 offset-md-3 d-flex">-->
              <!--&lt;!&ndash; Submit Button &ndash;&gt;-->
              <!--<v-button :loading="form.busy">-->
                <!--{{ $t('login') }}-->
              <!--</v-button>-->

              <!--&lt;!&ndash; GitHub Login Button &ndash;&gt;-->
              <!--<login-with-github/>-->
            <!--</div>-->
          <!--</div>-->
        <!--</form>-->
      <!--</card>-->
    <!--</div>-->
  <!--</div>-->
<!--</template>-->

<script>
import Form from 'vform'
// import { CompanyName } from '../../static/Resource'
import { Common } from '../../static/Resource'
export default {
  head () {
    return { title: this.$t('login') }
  },
  layout: 'simple',
  data: () => ({
    form: new Form({
      email: '',
      password: ''
    }),
    remember: false,
    CompanyName: Common.CompanyName
  }),

  methods: {
    async login () {
      // Submit the form.
      const { data } = await this.form.post('/login')

      // Save the token.
      this.$store.dispatch('auth/saveToken', {
        token: data.token,
        remember: this.remember
      })
      // Fetch the user.
      await this.$store.dispatch('auth/fetchUser')

      // Redirect home.
      this.$router.push({ name: 'home' })
    }
  },
}
</script>
<style scoped>
body{
  background-color: #f3f3f4
}
</style>

