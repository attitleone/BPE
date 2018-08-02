<template>
  <!-- <div class="row">
    <div class="col-md-3">
      <card :title="$t('Employee')" class="settings-card">
        <ul class="nav flex-column nav-pills">
          <li v-for="tab in tabs" class="nav-item">
            <router-link :to="{ name: tab.route }" class="nav-link" active-class="active">
              <fa :icon="tab.icon" fixed-width/>
              {{ tab.name }}
            </router-link>
          </li>
        </ul>
      </card>
    </div>

    <div class="col-md-9">
      <transition name="fade" mode="out-in">
        <nuxt />
      </transition>
    </div>
  </div> -->



<div>

  <div class="ibox-content m-b-sm border-bottom animated fadeInRight ">
<!-- <card  bg-variant="Info" text-variant="dark"> -->
<form @submit.prevent="Search" class="m-t" role="form" @keydown="form.onKeydown($event)">
  <div class="row">
      <div class="col-sm-4">
          <div class="form-group">
              <label class="control-label" for="Emp_ID">{{ Employee_Res.Resources.Views.Emp_ID }}</label>
              <input type="text" v-model="form.Emp_ID" name="Emp_ID"  :placeholder="Employee_Res.Resources.Placeholders.Emp_ID" class="form-control">
          </div>
      </div>
      <div class="col-sm-4">
          <div class="form-group">
              <label class="control-label" for="Emp_FirstName"> {{ Employee_Res.Resources.Views.Emp_FirstName}} </label>
              <input type="text" v-model="form.Emp_FirstName" name="Emp_FirstName"  :placeholder="Employee_Res.Resources.Placeholders.Emp_FirstName" class="form-control">
          </div>
      </div>
      <div class="col-sm-4">
          <div class="form-group">
              <label class="control-label" for="Emp_LastName"> {{ Employee_Res.Resources.Views.Emp_LastName}} </label>
              <input type="text" v-model="form.Emp_LastName" name="Emp_LastName"  :placeholder="Employee_Res.Resources.Placeholders.Emp_LastName" class="form-control">
          </div>
      </div>
  </div>
  <div class="row">
      <!-- <div class="col-sm-4">
          <div class="form-group">
              <label class="control-label" for="Emp_Status">{{ Employee_Res.Resources.Views.Emp_Status }}</label>
              <input type="text" v-model="form.Emp_Status" name="Emp_Status" value="" :placeholder="Employee_Res.Resources.Placeholders.Emp_Status" class="form-control">
          </div>
      </div> -->
      <div class="col-sm-4">
          <div class="form-group">
              <label class="control-label" for="date_added">{{ Common_Res.Resources.Views.Date_Added }}</label>
              <div class="input-group date">
                  <span class="input-group-addon"><i class="fa fa-calendar"></i></span>
                  <input id="date_added" type="text" class="form-control" readonly>
              </div>
          </div>
      </div>
      <div class="col-sm-4">
          <div class="form-group">
              <label class="control-label" for="date_modified">{{ Common_Res.Resources.Views.Date_Modified }}</label>
              <div class="input-group date">
                  <span class="input-group-addon"><i class="fa fa-calendar"></i></span>
                  <input id="date_modified" type="text" class="form-control"  readonly>
              </div>
          </div>
      </div>
      <!-- <div class="col-sm-3">
          <div class="form-group">
              <label class="control-label" for="amount">Amount</label>
              <input type="text" id="amount" name="amount" value="" placeholder="Amount" class="form-control">
          </div>
      </div> -->
  </div>
  <div class="row">
              <v-button :loading="form.busy" class="btn btn-primary block m-b">
                ค้นหา
              </v-button>
  </div>
    </form>
<!-- </card> -->
</div>
                <div class="row">
                <div class="col-lg-12">
                    <div class="ibox">
                        <div class="ibox-content animated fadeInRight">
                            <template>
  <div>
    <no-ssr>
      <datatable v-bind="$data" />
    </no-ssr>
  </div>
</template>
                        </div>
                    </div>
                </div>
                </div>
</div>

</template>

<script>
import Form from 'vform'
import { Employee, Common } from '~/static/Resources'
export default {
  middleware: 'auth',
  props: ['row'],
  data: () => ({
    form: new Form({
      Emp_ID: '',
      Emp_FirstName: '',
      Emp_LastName: '',
      Emp_Added: '',
      Emp_Modified: '',
    //   Emp_Status: '',
    }),
    Employee_Res: Employee,
    Common_Res: Common,
    
    // columns: [
    //   { title: 'รหัสแผนก', field: 'DepID', sortable: true },
    //   { title: 'ชื่อแผนก', field: 'DepName' }
    //   // { title: 'Age', field: 'age', sortable: true },
    //   // { title: 'Email', field: 'email' },
    //   // { title: 'Country', field: 'country' }
    // ],
pageSizeOptions: [5, 10, 15, 20],
    columns: (() => {
        const cols = [
          // { title: 'UID', field: 'uid', label: 'User ID', sortable: true, visible: 'true' },
          // { title: 'Email', field: 'email', visible: false, thComp: 'FilterTh', tdComp: 'Email' },
          // { title: 'Username', field: 'name', thComp: 'FilterTh', tdStyle: { fontStyle: 'italic' } },
          // { title: 'Country', field: 'country', thComp: 'FilterTh', thStyle: { fontWeight: 'normal' } },
          // { title: 'IP', field: 'ip', visible: false, tdComp: 'IP' },
          // { title: 'Age', field: 'age', sortable: true, thClass: 'text-info', tdClass: 'text-success' },
          // { title: 'Create time', field: 'createTime', sortable: true, colClass: 'w-240', thComp: 'CreatetimeTh', tdComp: 'CreatetimeTd' },
          // { title: 'Color', field: 'color', explain: 'Favorite color', visible: false, tdComp: 'Color' },
          // { title: 'Language', field: 'lang', visible: false, thComp: 'FilterTh' },
          // { title: 'PL', field: 'programLang', explain: 'Programming Language', visible: false, thComp: 'FilterTh' },
          // { title: 'Operation', tdComp: 'Opt', visible: 'true' }
             { title: 'รหัสแผนก', field: 'DepID', sortable: true },
             { title: 'ชื่อแผนก', field: 'DepName',sortable: false, label: 'ชื่อพนักงาน' }
        ]
        const groupsDef = {
          Normal: ['DepID', 'DepName'],
          // Sortable: ['UID', 'Age', 'Create time'],
          // Extra: ['Operation', 'Color', 'Language', 'PL']
        }
        return cols.map(col => {
          Object.keys(groupsDef).forEach(groupName => {
            if (groupsDef[groupName].includes(col.title)) {
              col.group = groupName
            }
          })
          return col
        })
      })(),
    data: [],
    total: 0,
    query: {limit: 5 },
    selection: [],
  }),
  components: {
  },
  computed: {
    tabs () {
      return [
        {
          icon: 'user',
          name: this.$t('profile'),
          route: 'Employee.Add'
        },
        // {
        //   icon: 'lock',
        //   name: this.$t('password'),
        //   route: 'settings.password'
        // }
      ]
    }
  },
  methods: {
     async ShowData () {
         await this.form.get('/department').then((result) => {
          this.data = result.data.result
          this.total = result.data.total
        }).catch((err) => {

        });
    },
    async Search () {
         await this.form.post('/department').then((result) => {
          this.data = result.data.result
          this.total = result.data.total
        }).catch((err) => {
          
        });
    },
  },
    watch: {
    query: {
      handler (query) {
         this.ShowData()
      },
      deep: true
    },
  },
  mounted() {
    $('.input-group.date').datepicker({
        language: 'th',
        format: "dd/mm/yyyy",
        todayBtn: "linked",
        clearBtn: false,
        keyboardNavigation: false,
        forceParse: false,
        calendarWeeks: true,
        autoclose: true,
        orientation: "bottom left",
        todayHighlight: true,
        startDate: '01-01-2018'
     })
  },
}
</script>
