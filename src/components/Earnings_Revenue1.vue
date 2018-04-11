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



      <div class="" v-if="type === 'Branch1'"> <!-- div ใหญ่สุดที่แสดงข้อมูล ของสาขา 1 -->
        <!-- แสดง  เดือน   -->
                <div class="columns">
                  <div class="column"></div>
                    <div class="control has-icons-left">
                              <label v-if ="Month === 0"><h1>เดือน ณ ปัจจุบัน : มกราคม</h1></label>
                              <label v-if ="Month === 1"><h1>เดือน ณ ปัจจุบัน : กุมภาพันธ์</h1></label>
                              <label v-if ="Month === 2"><h1>เดือน ณ ปัจจุบัน : มีนาคม</h1></label>
                              <label v-if ="Month === 3"><h1>เดือน ณ ปัจจุบัน : เมษายน</h1></label>
                              <label v-if ="Month === 4"><h1>เดือน ณ ปัจจุบัน : พฤษภาคม</h1></label>
                              <label v-if ="Month === 5"><h1>เดือน ณ ปัจจุบัน : มิถุนายน</h1></label>
                              <label v-if ="Month === 6"><h1>เดือน ณ ปัจจุบัน : กรกฎาคม</h1></label>
                              <label v-if ="Month === 7"><h1>เดือน ณ ปัจจุบัน : สิงหาคม</h1></label>
                              <label v-if ="Month === 8"><h1>เดือน ณ ปัจจุบัน : กันยายน</h1></label>
                              <label v-if ="Month === 9"><h1>เดือน ณ ปัจจุบัน : ตุลาคม</h1></label>
                              <label v-if ="Month === 10"><h1>เดือน ณ ปัจจุบัน : พฤศจิกายน</h1></label>
                              <label v-if ="Month === 11"><h1>เดือน ณ ปัจจุบัน : ธันวาคม</h1></label>
                    </div>
                    <div class="column"></div>
                  </div>
        <!-- จบ แสดง  เดือน    -->

      <!-- แสดง  ปุ่มกด สาขาด้วย  -->
              <div class="columns">
                <div class="column "></div>&nbsp;
                    <a class="button is-info is-focused is-medium" v-on:click="Changebranch1()">สาขา 1</a>&nbsp;
                    <a class="button  is-focused is-medium" v-on:click="Changebranch2()">สาขา 2</a>
                  <div class="control has-icons-left">

                  </div>
                  <div class="column"></div>
                </div>
      <!-- จบ แสดง  ปุ่มกด  สาขาด้วย  -->
<br>


        <!-- แสดงตาราง ค่าน้ำประปา และ ค่าไฟฟ้า  -->
        <div class="columns">
          <div class="column"> </div>
            <div class="column">
              <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth" border="2">
                <tbody  v-for = " Branch1 in Branch1">
                <tr class="table-primary">
                  <th colspan="14" >
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    ค่าน้ำประปา
                  </th>
                </tr>
                <tr >
                  <th rowspan="2" colspan="2">&nbsp;&nbsp;&nbsp;&nbsp; วันนี้ </th>
                  <th colspan="10" >
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    สัปดาห์นี้
                  </th>
                  <th rowspan="2" colspan="2"> &nbsp;&nbsp;&nbsp;&nbsp;เดือนนี้ </th>
                </tr>
                <tr>
                  <th colspan="2"> สัปดาห์ที่ 1 </th>
                  <th colspan="2"> สัปดาห์ที่ 2 </th>
                  <th colspan="2"> สัปดาห์ที่ 3 </th>
                  <th colspan="2"> สัปดาห์ที่ 4 </th>
                  <th colspan="2"> สัปดาห์ที่ 5 </th>
                </tr>
                <tr>
                  <th> Unit </th>
                  <th> Bath </th>
                  <th> Unit </th>
                  <th> Bath </th>
                  <th> Unit </th>
                  <th> Bath </th>
                  <th> Unit </th>
                  <th> Bath </th>
                  <th> Unit </th>
                  <th> Bath </th>
                  <th> Unit </th>
                  <th> Bath </th>
                  <th> Unit </th>
                  <th> Bath </th>
                </tr>
                <tr>
                  <td> {{Branch1.Unit1}} </td>    <!-- ค่าน้ำประปาวันนี้  Unit  -->
                  <td> {{Branch1.Price1}} </td>   <!-- ค่าน้ำประปาวันนี้  Bath  -->
                  <td> 1 </td>
                  <td> 1 </td>
                  <td> 2 </td>
                  <td> 2 </td>
                  <td> 3 </td>
                  <td> 3 </td>
                  <td> 4 </td>
                  <td> 4 </td>
                  <td> 5 </td>
                  <td> 5 </td>
                  <td> 0 </td>
                  <td> 0 </td>
                </tr>
              </tbody>
              </table>
            </div>
                <!-- -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-  -->
                <div class="control has-icons-left"></div>
                <!-- -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-  -->
            <div class="column">
              <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth" border="2">
                <tbody  v-for = " Branch1 in Branch1">
                <tr class="table-warning">
                  <th colspan="14" >
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    ค่าไฟฟ้า
                  </th>
                </tr>
                <tr >
                  <th rowspan="2" colspan="2">&nbsp;&nbsp;&nbsp;&nbsp; วันนี้ </th>
                  <th colspan="10" >
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    สัปดาห์นี้
                  </th>
                  <th rowspan="2" colspan="2">&nbsp;&nbsp;&nbsp;&nbsp; เดือนนี้ </th>
                </tr>
                <tr>
                  <th colspan="2"> สัปดาห์ที่ 1 </th>
                  <th colspan="2"> สัปดาห์ที่ 2 </th>
                  <th colspan="2"> สัปดาห์ที่ 3 </th>
                  <th colspan="2"> สัปดาห์ที่ 4 </th>
                  <th colspan="2"> สัปดาห์ที่ 5 </th>
                </tr>
                <tr>
                  <th> Unit </th>
                  <th> Bath </th>
                  <th> Unit </th>
                  <th> Bath </th>
                  <th> Unit </th>
                  <th> Bath </th>
                  <th> Unit </th>
                  <th> Bath </th>
                  <th> Unit </th>
                  <th> Bath </th>
                  <th> Unit </th>
                  <th> Bath </th>
                  <th> Unit </th>
                  <th> Bath </th>
                </tr>
                <tr>
                  <td> 0 </td>
                  <td> 0 </td>
                  <td> 1 </td>
                  <td> 1 </td>
                  <td> 2 </td>
                  <td> 2 </td>
                  <td> 3 </td>
                  <td> 3 </td>
                  <td> 4 </td>
                  <td> 4 </td>
                  <td> 5 </td>
                  <td> 5 </td>
                  <td> 0 </td>
                  <td> 0 </td>
                </tr>
              </tbody>
              </table>
            </div>
          <div class="column"> </div>
        </div>
          <!-- จบ แสดงตาราง ค่าน้ำประปา และ ค่าไฟฟ้า -->


<!-- ------------------------------------------------------------------------------------------------------------------- -->
    <!-- แสดง ตารางรายรับ รายจ่าย แจ้งเครื่องซักผ้าเสีย และ ค่าน้ำ ค่าไฟฟ้าด้วย-->
    <div class="columns">
      <div class="column "></div>
        <div class="control has-icons-left">
            <div class="columns is-desktop">
              <div class="column">
                <table class="table is-bordered"  >

                     <tr>
                       <th colspan="4">
                         <center>  <label for="recipient-name" class="form-control-label"><h3> แจ้งเครื่องซักผ้าเสีย </h3> </label> </center>
                       </th>
                     </tr>
                     <tr>
                       <th colspan="4">
                         <center>  <a class="button is-info is-focused"  @click="insertWashingmachine()"> <i class="fa fa-plus" aria-hidden="true"></i> &nbsp;Add</a> </center>
                       </th>
                     </tr>
                     <tr>
                       <th scope="col">#</th>
                       <th scope="col">เครื่องซักผ้า</th>
                       <th scope="col">สถานะ</th>
                       <th scope="col">delete</th>
                     </tr>
                     <tbody  v-for = "(show, key, count) in showWashingmachineBranch1"  :key ="show.num">
                       <tr>
                         <td>  {{count+1}}.  </td>
                         <td>   <center><img width="60px" src="../assets/Washing-machine.png"> </center> </td>
                         <td>  <a  v-if ="show.type === 'On'">    <!-- แสดง เครื่องซักผ้าที่ใช้ไดด้ -->
                                  <a class="button  is-success" @click="truee(key)">On</a>
                                  <a class="button " @click="falsee(key)">Off</a>
                              </a>
                              <a  v-if ="show.type === 'Off'">    <!-- แสดง เครื่องซักผ้าที่พัง -->
                                        <a class="button" @click="truee(key)">On</a>
                                        <a class="button  is-danger " @click="falsee(key)">Off</a>
                              </a>
                        </td>
                        <td>      <a class="button is-danger is-outlined" @click="Delete(key)">Delete</a> </td>
                       </tr>
                     </tbody>
                 </table>
              </div>
              <!-- -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-  -->
              <div class="column">
                <table class="table is-bordered"  >
                  <thead>
                    <tr>
                      <th colspan="5" >
                      <center>  <label for="recipient-name" class="form-control-label"><h3> รายรับ </h3> </label> </center>
                      </th>
                    </tr>
                    <tr>
                      <th></th>
                      <th colspan="2">ค่าไฟฟ้า</th>
                      <th colspan="2">ค่าน้ำประปา</th>
                    </tr>
                    <tr>
                      <th scope="col">เดือน</th>
                      <th scope="col">Unit</th>
                      <th scope="col">ราคา</th>
                      <th scope="col">Unit</th>
                      <th scope="col">ราคา</th>
                    </tr>
                  </thead>
                </table>
              </div>
              <!-- -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-  -->
              <div class="column">
                <table class="table is-bordered"  >
                  <thead>
                    <tr>
                      <th colspan="5" >
                        <center>  <label for="recipient-name" class="form-control-label"><h3> รายจ่าย </h3> </label> </center>
                      </th>
                    </tr>
                    <tr>
                      <th></th>
                      <th colspan="2">ค่าไฟฟ้า</th>
                      <th colspan="2">ค่าน้ำประปา</th>
                    </tr>
                    <tr>
                      <th scope="col">เดือน</th>
                      <th scope="col">Unit</th>
                      <th scope="col">ราคา</th>
                      <th scope="col">Unit</th>
                      <th scope="col">ราคา</th>
                    </tr>
                  </thead>
                    <tr>
                      <td>มกราคม</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>กุมภาพันธ์</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>มีนาคม</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>เมษายน</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>พฤษภาคม</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>มิถุนายน</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>กรกฎาคม</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>สิงหาคม</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>กันยายน</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>ตุลาคม</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>พฤศจิกายน</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>ธันวาคม</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                </table>
              </div>
              <!-- -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-  -->
              <div class="column">
                <table class="table is-bordered"  >
                  <thead>
                    <tr>
                      <th colspan="5" >
                        <center>  <label for="recipient-name" class="form-control-label"><h3> รวม </h3> </label> </center>
                      </th>
                    </tr>
                    <tr>
                      <th></th>
                      <th colspan="2">ค่าไฟฟ้า</th>
                      <th colspan="2">ค่าน้ำประปา</th>
                    </tr>
                    <tr>
                      <th scope="col">เดือน</th>
                      <th scope="col">Unit</th>
                      <th scope="col">ราคา</th>
                      <th scope="col">Unit</th>
                      <th scope="col">ราคา</th>
                    </tr>
                  </thead>
                    <tr>
                      <td>มกราคม</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>กุมภาพันธ์</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>มีนาคม</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>เมษายน</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>พฤษภาคม</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>มิถุนายน</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>กรกฎาคม</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>สิงหาคม</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>กันยายน</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>ตุลาคม</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>พฤศจิกายน</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>ธันวาคม</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                </table>
              </div>
              <!-- -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-  -->
            </div>
        </div>
      <div class="column"></div>
    </div>
    <!-- จบ แสดง ตารางรายรับ รายจ่าย แจ้งเครื่องซักผ้าเสีย และ ค่าน้ำ ค่าไฟฟ้าด้วย-->
<!-- ------------------------------------------------------------------------------------------------------------------- -->
      </div><!-- จบ div ใหญ่สุดที่แสดงข้อมูล ของสาขา 1 -->





 </div>
</template>

<script>
// Initialize Firebase
import firebase from 'firebase'
export default {
  name: 'Earnings_Revenue1',
  data () {
    return {
      Branch1: '',
      Month: '',
      count: 0,
      type: 'Branch1',
      month: '',
      isSwitchedCustom: 'On',
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
    },
    Changebranch1: function () {
      this.type = 'Branch1'
    },
    Changebranch2: function () {
      this.type = 'Branch2'
    },
    insertWashingmachine () { // เพิ่มเครื่องซักผ้า โดยก้แล้ว จะให้ใส่คำว่า true ไปเลย
      this.data.type = 'On'
      firebase.database().ref('WashingmachineBranch1').push(this.data)
      this.pullData()
    },
    truee (key, type) { // เปลี่ยนค่าจาก false เป็น true
      firebase.database().ref('/WashingmachineBranch1/').child(key).update({
        type: 'On'
      })
      this.pullData()
      this.checkEdit = ''
    },
    falsee (key, type) { // เปลี่ยนค่าจาก true เป็น false
      firebase.database().ref('/WashingmachineBranch1/').child(key).update({
        type: 'Off'
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
