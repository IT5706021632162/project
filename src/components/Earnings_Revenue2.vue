<template lang="html">
  <div >
    <!--  แทปดำ -->
    <div class="bd-example is-paddingless">
      <nav class="navbar is-dark navbar is-fixed-top">
      <div class="navbar-brand">

        <h3 style="font-family:  'Russo One', sans-serif;" >  W a s h </h3>


      </div>

      <div id="navMenuColorlink-example" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item">
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
            <a class="navbar-link is-active">
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

    <!-- แสดง  เดือน   -->
            <div class="columns">
              <div class="column"></div>
                <div class="control has-icons-left">
                          <label v-if ="Month === 0"> <h4>เดือน ณ ปัจจุบัน <br> --- มกราคม --- </h4></label>
                          <label v-if ="Month === 1"> <h4>เดือน ณ ปัจจุบัน <br> --- กุมภาพันธ์ --- </h4></label>
                          <label v-if ="Month === 2"> <h4>เดือน ณ ปัจจุบัน <br> --- มีนาคม ---</h4></label>
                          <label v-if ="Month === 3"> <h4>เดือน ณ ปัจจุบัน <br> --- เมษายน ---</h4></label>
                          <label v-if ="Month === 4"> <h4>เดือน ณ ปัจจุบัน <br> --- พฤษภาคม ---</h4></label>
                          <label v-if ="Month === 5"> <h4>เดือน ณ ปัจจุบัน <br> --- มิถุนายน ---</h4></label>
                          <label v-if ="Month === 6"> <h4>เดือน ณ ปัจจุบัน <br> --- กรกฎาคม ---</h4></label>
                          <label v-if ="Month === 7"> <h4>เดือน ณ ปัจจุบัน <br> --- สิงหาคม ---</h4></label>
                          <label v-if ="Month === 8"> <h4>เดือน ณ ปัจจุบัน <br> --- กันยายน ---</h4></label>
                          <label v-if ="Month === 9"> <h4>เดือน ณ ปัจจุบัน <br> --- ตุลาคม ---</h4></label>
                          <label v-if ="Month === 10"><h4>เดือน ณ ปัจจุบัน <br> --- พฤศจิกายน ---</h4></label>
                          <label v-if ="Month === 11"><h4>เดือน ณ ปัจจุบัน <br> --- ธันวาคม ---</h4></label>
                </div>
                <div class="column"></div>
              </div>
    <!-- จบ แสดง  เดือน    -->

    <!-- แสดง  ปุ่มกด สาขาด้วย  -->
                  <div class="columns">
                    <div class="column "></div>

                      <div class="control has-icons-left">

                      </div>

                      <div class="column"></div>
                    </div>
          <!-- จบ แสดง  ปุ่มกด  สาขาด้วย  -->

          <div class="columns">
            <div class="column "></div>
              <div class="control has-icons-left">
                  <div class="columns is-desktop">
                    <div class="column">
                      <table class="table is-bordered"  >
                        <thead>
                          <tr>
                            <th colspan="13" >
                              <center>  <label for="recipient-name" class="form-control-label"><h3> สรุปผลกำไร-ขาดทุน </h3> </label> </center>
                            </th>
                          </tr>
                        </thead>

                          <tr >
                            <th scope="col"> </th>
                            <td> <center>มกราคม </center></td>
                            <td><center>กุมภาพันธ์</center></td>
                            <td><center>มีนาคม</center></td>
                            <td><center>เมษายน</center></td>
                            <td><center>พฤษภาคม</center></td>
                            <td><center>มิถุนายน</center></td>
                            <td><center>กรกฎาคม</center></td>
                            <td><center>สิงหาคม</center></td>
                            <td><center>กันยายน</center></td>
                            <td><center>ตุลาคม</center></td>
                            <td><center>พฤศจิกายน</center></td>
                            <td><center>ธันวาคม</center></td>
                          </tr>

                          <tr>
                            <th scope="col"> # รายรับ</th>
                            <td><center>  0000 บาท  </center></td>
                            <td><center>  0000 บาท  </center></td>
                            <td><center>  0000 บาท  </center></td>
                            <td><center>  0000 บาท  </center></td>
                            <td><center>  0000 บาท  </center></td>
                            <td><center>  0000 บาท  </center></td>
                            <td><center>  0000 บาท  </center></td>
                            <td><center>  0000 บาท  </center></td>
                            <td><center>  0000 บาท  </center></td>
                            <td><center>  0000 บาท  </center></td>
                            <td><center>  0000 บาท  </center></td>
                            <td><center>  0000 บาท  </center></td>
                          </tr>

                          <tr>
                            <th scope="col"> # รายจ่าย</th>
                            <td><center>  0000 บาท  </center></td>
                            <td><center>  0000 บาท  </center></td>
                            <td><center>  0000 บาท  </center></td>
                            <td><center>  0000 บาท  </center></td>
                            <td><center>  0000 บาท  </center></td>
                            <td><center>  0000 บาท  </center></td>
                            <td><center>  0000 บาท  </center></td>
                            <td><center>  0000 บาท  </center></td>
                            <td><center>  0000 บาท  </center></td>
                            <td><center>  0000 บาท  </center></td>
                            <td><center>  0000 บาท  </center></td>
                            <td><center>  0000 บาท  </center></td>
                          </tr>

                          <tr>
                            <th scope="col"> # รวม</th>
                            <td><center>  0000 บาท  </center></td>
                            <td><center>  0000 บาท  </center></td>
                            <td><center>  0000 บาท  </center></td>
                            <td><center>  0000 บาท  </center></td>
                            <td><center>  0000 บาท  </center></td>
                            <td><center>  0000 บาท  </center></td>
                            <td><center>  0000 บาท  </center></td>
                            <td><center>  0000 บาท  </center></td>
                            <td><center>  0000 บาท  </center></td>
                            <td><center>  0000 บาท  </center></td>
                            <td><center>  0000 บาท  </center></td>
                            <td><center>  0000 บาท  </center></td>
                          </tr>
                      </table>
                    </div>
                  </div>
              </div>
            <div class="column"></div>
          </div>





 </div>
</template>

<script>
// Initialize Firebase
import firebase from 'firebase'
export default {
  name: 'Earnings_Revenue2',
  data () {
    return {
      Branch1: '',
      Month: '',
      count: 0,
      menu: 'Water_Fire',
      month: '',
      weekWater: '',
      weekFire: '',
      showWashingmachineBranch1: '',
      data: {
        type: ''
      }
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
      firebase.database().ref('/Branch1/').once('value').then(function (snapshot) {
        that.Branch1 = snapshot.val()
      })
      firebase.database().ref('/Month/').once('value').then(function (snapshot) {
        that.Month = snapshot.val()
      })
      firebase.database().ref('/WashingmachineBranch1/').once('value').then(function (snapshot) {
        that.showWashingmachineBranch1 = snapshot.val()
      })
      firebase.database().ref('/Branch1/Water/').once('value').then(function (snapshot) {
        that.weekWater = snapshot.val()
      })
      firebase.database().ref('/Branch1/Fire/').once('value').then(function (snapshot) {
        that.weekFire = snapshot.val()
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
    },
    Changemenu1: function () {
      this.type = 'Water_Fire'
    },
    insertWashingmachine () { // เพิ่มเครื่องซักผ้า โดยก้แล้ว จะให้ใส่คำว่า true ไปเลย
      this.data.type = 'Usable'
      firebase.database().ref('WashingmachineBranch1').push(this.data)
      this.pullData()
    },
    truee (key, type) { // เปลี่ยนค่าจาก false เป็น true
      firebase.database().ref('/WashingmachineBranch1/').child(key).update({
        type: 'Usable'
      })
      this.pullData()
      this.checkEdit = ''
    },
    falsee (key, type) { // เปลี่ยนค่าจาก true เป็น false
      firebase.database().ref('/WashingmachineBranch1/').child(key).update({
        type: 'Defective'
      })
      this.pullData()
      this.checkEdit = ''
    },
    Delete (key) {
      firebase.database().ref('WashingmachineBranch1').child(key).remove()
      this.pullData()
    }
  }
}
</script>
