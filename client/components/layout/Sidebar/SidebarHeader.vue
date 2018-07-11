<template>
    <li class="nav-header">
            <div class="dropdown profile-element">
              
              <span>
                <!-- <img alt="image" class="img-circle " src="~static/img/profile_small.jpg"> -->
                <router-link to="/home"> 
                 <img :src="user.photo_url" class="img-responsive img-circle" :alt="user.Email">
              </router-link>
              </span>
              
              <a data-toggle="dropdown" class="dropdown-toggle" href="#">
                <span class="clear">
                  <span class="block m-t-xs">
                    <strong class="font-bold"><span class="align-middle">{{user.Email}}</span></strong>
                  </span>
                  <span class="text-muted text-xs block">{{user.Role}}
                    <b class="caret"></b>
                  </span>
                </span>
              </a>
              <ul class="dropdown-menu animated fadeInRight m-t-xs">
                <li>
                  <a href="profile.html">个人信息</a>
                </li>
                <li>
                  <a href="contacts.html">联系人</a>
                </li>
                <li>
                  <a href="mailbox.html">邮箱</a>
                </li>
                <li class="divider"></li>
                <li>
                  <a href="login.html">注销</a>
                </li>
              </ul>
            </div>
            <div class="logo-element">
              <!-- <img alt="image" class="img-circle" src="~static/img/profile_small.jpg"> -->
              <!-- <img alt="image" class="img-responsive img-circle" src="~static/img/LogoBangpu.jpg"> -->
              <!-- <img :src="user.photo_url" class="img-responsive img-circle" :alt="user.Email"> -->
              <router-link to="/home"> 
                 BPE
              </router-link>
            </div>
          </li>
</template>

<script>
  import { mapGetters } from 'vuex'
export default {

  name: 'sidebar-header',
  computed: mapGetters({
  user: 'auth/user'
    })
}
</script>

<style scoped>
img
{
    width: 100px;
    height: 100px;
}
</style>
