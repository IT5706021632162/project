<template >
  <div class="home">
    <!--  แทปดำ -->
    <div class="bd-example is-paddingless">
      <nav class="navbar is-dark navbar is-fixed-top">
      <div class="navbar-brand">

        <h3 style="font-family:  'Russo One', sans-serif;" >  W a s h </h3>


      </div>

      <div id="navMenuColorlink-example" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item is-active">
            <span class="icon is-small "><i class="fa fa-users"></i></span>&nbsp;
            <span v-on:click="home()">MEMBER</span>
          </a>
          <a class="navbar-item">
            <span class="icon is-small"><i class="fa fa-user-plus"></i></span>&nbsp;
            <span v-on:click="addadmin()" >Add admin</span>
          </a>
          <a class="navbar-item">
            <span class="icon is-small"><i class="fa fa-money"></i></span>&nbsp;
            <span  v-on:click="Add_user_credit()" >Add user credit</span>
          </a>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              <span class="icon is-small"><i class="fa fa-pie-chart"></i></span>&nbsp;
              <span  v-on:click="Earnings_Revenue1()">Earnings Revenue 1</span>
            </a>
            <div class="navbar-dropdown">
              <a class="navbar-item" href="">
                Overview
              </a>
              <a class="navbar-item" href="">
                Modifiers
              </a>
              <a class="navbar-item" href="">
                Columns
              </a>
              <a class="navbar-item" href="">
                Layout
              </a>
              <a class="navbar-item" href="">
                Form
              </a>
              <hr class="navbar-divider">
              <a class="navbar-item" href="">
                Elements
              </a>
              <a class="navbar-item is-active" href="">
                Components
              </a>
            </div>
          </div>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              <span class="icon is-small"><i class="fa fa-pie-chart"></i></span>&nbsp;
              <span  v-on:click="Earnings_Revenue2()">Earnings Revenue 2</span>
            </a>
            <div class="navbar-dropdown">
              <a class="navbar-item" href="">
                Overview
              </a>
              <a class="navbar-item" href="">
                Modifiers
              </a>
              <a class="navbar-item" href="">
                Columns
              </a>
              <a class="navbar-item" href="">
                Layout
              </a>
              <a class="navbar-item" href="">
                Form
              </a>
              <hr class="navbar-divider">
              <a class="navbar-item" href="">
                Elements
              </a>
              <a class="navbar-item is-active" href="">
                Components
              </a>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="field is-grouped">
              <p class="control">
                <h6>{{this.user}}</h6>
                <a class="button is-dark" >
                  <a class="button is-white is-outlined" @click = "logout()">LOGOUT</a>

                </a>
              </p>
            </div>
          </div>
       </div>

      </div>
    </nav>

    </div>
    <!--  จบ แทปดำ -->

<!--
    <div class="columns">
        <div class="column"></div>
          <div class="column is-two-thirds">
            <div class="showmember"  v-for = " (users, key, count) in showusers">

              {{users.name}}
              {{users.email}}
              {{users.Transfer_money}} Bath
              {{users.money}} Bath
            </div>
          </div>
        <div class="column"></div>
    </div> -->


      <!-- แสดงตาราง member ผู้ใช้บริการทั้งหมด -->
      <div  class="tablemember" >
        <table class="table" >
          <thead class="table-secondary">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">E-mail</th>
              <th scope="col">Transfer_money</th>
              <th scope="col">Credit</th>
            </tr>
          </thead>
            <tbody  v-for = " (users, key, count) in showusers">
              <tr >
                <td >  {{count+1}}  </td>
                <td>  {{users.name}}  </td>
                <td>  {{users.email}} </td>
                <td>  {{users.Transfer_money}} Bath </td>
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

export default {
  name: 'home',
  data () {
    return {
      showusers: '',
      count: 0
    }
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
      firebase.database().ref('/users/').once('value').then(function (snapshot) {
        that.showusers = snapshot.val()
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
    Earnings_Revenue1 () {
      this.$router.push({path: '/Earnings_Revenue1'})
    },
    Earnings_Revenue2 () {
      this.$router.push({path: '/Earnings_Revenue2'})
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

<style >
.tablemember{
  width: 70%;
  margin-left: 15%;
}
/* .showmember{
  float: left;
  padding: 1%;
  margin: 0.5%;
  width: 20%;

    border-radius: 20px;
    border: 2px solid #73AD21;
} */

</style>
