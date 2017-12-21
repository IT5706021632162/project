<template>
<div class="home">
  <div class="bar">
    <h1>wash</h1>
  </div>
      <div class="menu1">
            <ul>
              <br> <img height="150px" width="150px" src="../assets/logo.png" class="rounded mx-auto d-block"> <center>{{admin}}</center>
              <li v-on:click="home()" >Member</li>
              <li v-on:click="addadmin()" >Administrator</li>
              <li v-on:click="Add_user_credit()" >Add User Credit</li>
              <li v-on:click="Earnings_Revenue()" >View Earnings</li>
              <p v-on:click="logout()" >Logout</p>
            </ul>
      </div>  <!--  end div menu1 -->

      <div class="menu2">
            <br> <br><h2>Member</h2>

      </div>

      <div class="menu3">
        <table >
            <tr>
              <td><b>#</b></td>
              <td><b>Name</b></td>
              <td><b>E-mail</b></td>
              <td><b>Credit</b></td>
            </tr>
        </table>
          <div class="" v-for = " (users, key, count) in showusers">
            <table >
              <tr>
                <td>  {{count+1}}  </td>
                <td>  {{users.name}}  </td>
                <td>  {{users.email}} </td>
                <td>  {{users.money}} Bath </td>
              </tr>
            </table>

          </div>
      </div>


</div>  <!--  end div home -->

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
    if (user != null) {
      this.admin = user.email
    }
    this.pullData()
  },  /* จบ แสดงชื่อ Admin */
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
      this.$router.push({path: '/addadmin'})
    },
    Earnings_Revenue () {
      this.$router.push({path: '/Earnings_Revenue'})
    },
    home () {
      this.$router.push({path: '/home'})
    },
    Add_user_credit () {
      this.$router.push({path: '/Add_user_credit'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home{
  padding: 0px;
  margin: 0px;
  position:relative;
}
.bar{ /* ตัวอัษกร wash อะ ใช่ร่วมกับ h1 */
  position: fixed;
  height: 100px;
  width:  120%;
    /*background-color: green;*/
}
h1{ /* ตัวอัษกร wash อะ ใช่ร่วมกับ .bar */
  padding-left: 80px;
  font-family: arial, sans-serif;
  font-weight: 100;
  height: 40px;
  width: 100%;
  background: #4B73E1 ;
  line-height: 35px;
  color: white;
}
.menu1{ /* div เมนูด้านซ่าย */
  margin-top: 40px;
  position: fixed;
  height: 100%;
  width:  250px;
  border-right: 1px solid #F4FFFF;
  background-color: #D7EDF7;
}

div ul li{ /* พวกจัดการเมนูด้านซ้าย  */
  padding: 8.5%;
  border-bottom: 1px solid #d2d2d2;
  font-size: 19px;
  text-align: center;
  color: black;

}
div ul li:hover{ /* พวกจัดการเมนูด้านซ้าย  */
  font-size: 21px;
  color: white;
  background-color: #3CAEFF;
  transition:linear all 0.20s;
  margin-left: 13px;
}
p{ /* พวกจัดการเมนูด้านซ้าย จัดการ logout */
  padding: 8.5%;
  border-bottom: 1px solid #F4FFFF;
  font-size: 19px;
  text-align: center;
  color: black;
}
p:hover{ /* พวกจัดการเมนูด้านซ้าย จัดการ logout */
  font-size: 21px;
  color: white;
  background-color: #FF5A5A;
  transition:linear all 0.20s;
  margin-left: 13px;
}

.menu2{ /* div กลางบน */
  margin-left: 250px;
  height: 100px;
  width:  100%;
  border-bottom: 1px solid #F4FFFF;
  padding-left: 40px;
  /*background-color: green;*/
}

.menu3{ /* div กลาง */
  margin-top: 50px;
  margin-left: 250px;
  height: 100%;
  width:  100%;
  border-bottom: 1px solid #F4FFFF;
  padding-left: 40px;
  /*background-color: red;*/
}
tr,td{/* ตารางแสดงผล Admin */
    text-align: center;
    width: 25%;
    line-height: 45px;
    border-bottom: 1px solid #ddd;

}

table{/* ตารางแสดงผล Admin */
   border-collapse: collapse;
   width: 75%;
   /*background-color: red;*/
}


</style>
