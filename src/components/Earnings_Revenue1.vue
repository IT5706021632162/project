<template lang="html">
  <div >
    <!--  แทปฟ้า -->
    <section class="hero is-primary is-bold">
        <div class="container"><br>
            <h1 class="title is-1" style="font-family: 'Seymour One', sans-serif;">
                W a s h

              <h2 class="is-pulled-right">
                  <img class="image is-64x64" @click = "logout()" src="../assets/logout3.png">
              </h2>

            </h1>
            <label for="recipient-name" class="form-control-label"> Admin : {{this.user}}</label>
            <br>
        </div>
    </section>
  <!--  จบ แทปฟ้า -->
<br>
      <!--  แทปเมนูต่างๆ -->
      <div class="tabs is-centered is-boxed is-medium">
        <ul>
            <li>
              <a>
                <span class="icon is-small"><i class="fa fa-users"></i></span>
                <span v-on:click="home()">MEMBER</span>
              </a>
            </li>

            <li>
              <a>
                <span class="icon is-small"><i class="fa fa-user-plus"></i></span>
                <span v-on:click="addadmin()" >Add admin</span>
              </a>
            </li>

            <li>
              <a>
                <span class="icon is-small"><i class="fa fa-money"></i></span>
                <span  v-on:click="Add_user_credit()" >Add user credit</span>
              </a>
            </li>

            <li class="is-active">
              <a>
                <span class="icon is-small"><i class="fa fa-pie-chart"></i></span>
                <span  v-on:click="Earnings_Revenue()">Earnings Revenue</span>
              </a>
            </li>
        </ul>
      </div>
      <!-- จบ แทปเมนูต่างๆ -->

      <!-- แสดงตาราง member ผู้ใช้บริการทั้งหมด -->
      <div  class="tablemember" >
        <table class="table" >
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">E-mail</th>
              <th scope="col">Credit</th>
            </tr>
          </thead>
            <tbody  v-for = " (users, key, count) in Today">
              <tr>
                <td>  {{Today}}  </td>
                <td>  {{users.name}}  </td>
                <td>  {{users.email}} </td>
                <td>  {{users.money}} Bath </td>
              </tr>
            </tbody>
        </table>
      </div>
      <!-- จบ แสดงตาราง member ผู้ใช้บริการทั้งหมด -->

 </div>
</template>

<script>
// Initialize Firebase
import firebase from 'firebase'
import { ChartPie } from 'vue-d2b'
export default {
  name: 'home',
  data () {
    return {
      Today: '',
      count: 0,
      chartData: [
        {label: 'arc 1', value: 44},
        {label: 'arc 2', value: 55}
      ],
      chartConfig (chart) {
        chart.donutRatio(0.5)
      }
    }
  },
  components: {
    ChartPie
  },
  created: function () { /* แสดงชื่อ Admin */
    var user = firebase.auth().currentUser
    if (user) {
      this.user = user.email
    } else {
      alert('Oops. ')
    }
    this.pullData()
  },
  methods: {
    pullData: function () {   /* แสดงชือตาราง User ทั้งหมด */
      let that = this
      firebase.database().ref('/Today/').once('value').then(function (snapshot) {
        that.Today = snapshot.val()
      })
    },
    logout: function () {
      firebase.auth().signOut().then(() => {
        this.$router.replace('/')
      })
    },
    addadmin () {
      this.$router.push({path: '/addadmin1'})
    },
    Earnings_Revenue () {
      this.$router.push({path: '/Earnings_Revenue1'})
    },
    home () {
      this.$router.push({path: '/home1'})
    },
    Add_user_credit () {
      this.$router.push({path: '/Addcredit1'})
    }
  }
}
</script>
