<template>
  <div class="addadmin">
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
             <br><br><h2>Administrator</h2><br>

              <input type="text" class="input is-info" v-model="email"  placeholder="Email">
                <input type="password" class="input is-info"  v-model="password" placeholder="Password">
               <button class="button buttonAddadmin" v-on:click="add()" >Add Admin</button>

          </div>

          <div class="menu3"><br>
            <table >
                <tr>
                  <td><b>E-mail</b></td>
                  <td><b>Password</b></td>
                  <td><b>ลบAdmin</b></td>
                </tr>
            </table>
              <div class="" v-for = " (admin, key) in showAdmin">
                <table >
                  <tr>
                    <td> {{admin.email}} </td>
                    <td> {{admin.password}}  </td>
                    <td> <button type="button" class="button buttonremove" name="buttonremove" @click="remove(key)">Remove</button> </td>
                  </tr>
                </table>

              </div>
          </div>


</div>

</template>

<script>
// Initialize Firebase
import firebase from 'firebase'
export default {
  name: 'addadmin',
  data () {
    return {
      data: {
        email: '',
        password: ''
      },
      showAdmin: ''
    }
  },
  created: function () { /* แสดงชื่อ Admin */
    var user = firebase.auth().currentUser
    if (user != null) {
      this.admin = user.email
    }
    this.pullData()
  },
  methods: {
    pullData: function () {  /* แสดงชืตาราง Admin */
      let that = this
      firebase.database().ref('/Admin/').once('value').then(function (snapshot) {
        that.showAdmin = snapshot.val()
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
    },
    add: function () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          this.data.email = this.email
          this.data.password = this.password
          firebase.database().ref('Admin').push(this.data)
          this.$router.replace('/addadmin')
          alert('Add Admin Complete')
          this.pullData()
        },
        (err) => {
          alert('Oops. ' + err.message)
        }
      )
    },
    remove: function (key) {
      alert('Delete Admin Complete')
      firebase.database().ref('Admin').child(key).remove()
      this.pullData()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.addadmin{
  padding: 0px;
  margin: 0px;
  position:relative;
}
.bar{ /* ตัวอัษกร wash อะ ใช่ร่วมกับ h1 */
  position: fixed;
  height: 100px;
  width:  120%;
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
  border-bottom: 1px solid #F4FFFF;
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
  margin-top: 70px;
  margin-left: 250px;
  height: 100%;
  width:  100%;
  border-bottom: 1px solid #F4FFFF;
  padding-left: 40px;
  /*background-color: red;*/
}

input[type='text'], input[type='password'] {
  width: 15%;
  padding: 15px 10px;
  margin: 0px 2px;
  border: 2px solid #ccc;
  border-radius: 4px;
}

tr,td{/* ตารางแสดงผล Admin */
    text-align: center;
    width: 40%;
    line-height: 45px;
    border-bottom: 1px solid #ddd;
}

table{/* ตารางแสดงผล Admin */
   border-collapse: collapse;
   width: 75%;
}

.buttonAddadmin{/* ปุ่ม Addadmin */
  color: white;
  height: 45px;
  width: 8.5%;
  margin-top: -5px;
  background-color: #40A940;
  font-size: 17px;
}
.buttonAddadmin:hover{/* ปุ่ม Addadmin */
  background-color: #5EC75E;
  color: white;
}

.buttonremove{/* ปุ่ม remove admin */
  color: white;
  background-color: red;
  height: 50px;
  width: 100%;
  font-size: 20px;
}
.buttonremove:hover{/* ปุ่ม remove admin */
  background-color: #EB0000;
  color: white;
}


</style>
