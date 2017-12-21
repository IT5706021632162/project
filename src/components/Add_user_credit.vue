<template>
  <div class="Add_user_credit">
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

                <div class="menu2" >

                  <br><br><h2>Add User Credit</h2>
                       <table >
                           <tr>
                             <td><b>E-mail</b></td>
                             <td><b>Date</b></td>
                             <td><b>Time</b></td>
                             <td><b>Photo</b></td>
                           </tr>
                       </table>
                       <div class="" v-for = " (User, key) in showimage" >
                         <table >
                           <tr>
                             <td>  {{User.email}}  </td>
                             <td>  {{User.Date}}  </td>
                             <td>  {{User.Time}}  </td>
                             <td>  <a class="lightbox" href="#img">  <img v-bind:src="User.url"/></a>
                               <div class="lightbox-target" id="img"> <img v-bind:src="User.url"/> <a class="lightbox-close" href="#"> </a></div>
                             </td>

                        </tr>
                         </table>
                       </div>



                       <br><table >
                           <tr>
                             <td><b>Name</b></td>
                             <td><b>Money</b></td>
                             <td><b>Approved</b></td>
                           </tr>
                       </table>
                         <div class="" v-for = " (User, key) in showusers">
                           <div v-if="checkEdit !== key">
                           <table >
                             <tr>
                               <td>  {{User.email}}  </td>
                               <td>  {{User.money}}  </td>
                               <td> <button type="button" class="button buttonAdd" name="buttonAdd" @click="swap(key)" >update</button> </td>
                             </tr>
                           </table>
                           </div>
                           <div class="content" v-else>
                             <table >
                               <tr>
                                 <td>  {{User.email}}  </td>
                                 <td>  <input type="number"  name="" value="" v-model="User.money"> </td>
                                 <td> <button type="button" class="button buttonAdd" name="buttonAdd" @click="update(key,User.money)" >Approved</button> </td>
                               </tr>
                             </table>
                           </div>
                         </div>
      </div>

</div>
</template>

<script>
// Initialize Firebase
import firebase from 'firebase'
export default {
  name: 'Add_user_credit',
  data () {
    return {
      data: {
        name: '',
        surname: '',
        money: ''
      },
      showusers: '',
      showimage: '',
      checkEdit: ''
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
    pullData: function () {   /* แสดงชือตาราง User ที่ส่งรูปมาให้ Approved */
      let that = this
      firebase.database().ref('/image/').once('value').then(function (snapshot) {
        that.showimage = snapshot.val()
      })
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
    },
    update: function (key, money) {
      console.log(key)
      alert('Add Credit Complete')
      firebase.database().ref('/users/').child(key).update({
        money: money
      })
      this.checkEdit = ''
    },
    swap: function (key) {
      this.checkEdit = key
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Add_user_credit{
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
  height: 100%;
  width:  100%;
  border-bottom: 1px solid #F4FFFF;
  padding-left: 40px;
/*  background-color: green;*/
}


input[type='text'], input[type='password'] {
  width: 15%;
  padding: 15px 10px;
  margin: 0px 2px;
  border: 2px solid #ccc;
  border-radius: 4px;
}

tr,td{/* ตารางแสดงผล User */
  text-align: center;
    width: 25%;
    line-height: 45px;
    border-bottom: 1px solid #ddd;
}

table{/* ตารางแสดงผล Admin */
   border-collapse: collapse;
   width: 77%;
}


.buttonAdd{/* ปุ่ม Add */
  color: white;
  background-color: red;
  height: 50px;
  width: 60%;
  font-size: 20px;
}
.buttonAdd:hover{/* ปุ่ม Add */
  background-color: #EB0000;
  color: white;
}

a.lightbox img {
height: 150px;
border: 3px solid white;
box-shadow: 0px 0px 8px rgba(0,0,0,.3);
margin: 94px 20px 20px 20px;
}

/* Styles the lightbox, removes it from sight and adds the fade-in transition */

.lightbox-target {
position: fixed;
top: -100%;
width: 50%;
background: rgba(0,0,0,.7);
width: 81.5%;
opacity: 0;
-webkit-transition: opacity .5s ease-in-out;
-moz-transition: opacity .5s ease-in-out;
-o-transition: opacity .5s ease-in-out;
transition: opacity .5s ease-in-out;
overflow: hidden;
margin-left: -59%;
}

/* Styles the lightbox image, centers it vertically and horizontally, adds the zoom-in transition and makes it responsive using a combination of margin and absolute positioning */

.lightbox-target img {
margin: auto;
position: absolute;
top: 0;
left:0;
right:0;
bottom: 0;
max-height: 0%;
max-width: 0%;
border: 3px solid white;
box-shadow: 0px 0px 8px rgba(0,0,0,.3);
box-sizing: border-box;
-webkit-transition: .5s ease-in-out;
-moz-transition: .5s ease-in-out;
-o-transition: .5s ease-in-out;
transition: .5s ease-in-out;
}

/* Styles the close link, adds the slide down transition */

a.lightbox-close {
display: block;
width:50px;
height:50px;
box-sizing: border-box;
background: white;
color: black;
text-decoration: none;
position: absolute;
top: -80px;
right: 0;
-webkit-transition: .5s ease-in-out;
-moz-transition: .5s ease-in-out;
-o-transition: .5s ease-in-out;
transition: .5s ease-in-out;
}

/* Provides part of the "X" to eliminate an image from the close link */

a.lightbox-close:before {
content: "";
display: block;
height: 30px;
width: 1px;
background: black;
position: absolute;
left: 26px;
top:10px;
-webkit-transform:rotate(45deg);
-moz-transform:rotate(45deg);
-o-transform:rotate(45deg);
transform:rotate(45deg);
}

/* Provides part of the "X" to eliminate an image from the close link */

a.lightbox-close:after {
content: "";
display: block;
height: 30px;
width: 1px;
background: black;
position: absolute;
left: 26px;
top:10px;
-webkit-transform:rotate(-45deg);
-moz-transform:rotate(-45deg);
-o-transform:rotate(-45deg);
transform:rotate(-45deg);
}

/* Uses the :target pseudo-class to perform the animations upon clicking the .lightbox-target anchor */

.lightbox-target:target {
opacity: 1;
top: 0;
bottom: 0;
}

.lightbox-target:target img {
max-height: 100%;
max-width: 100%;
}

.lightbox-target:target a.lightbox-close {
top: 0px;
}

/**vcvcvcbv**/

</style>
