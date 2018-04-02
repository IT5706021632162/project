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

      <!-- แสดง  select เดือน  สาขาด้วย และ ค่าน้ำ ค่าไฟ -->
              <div class="columns">
                <div class="column"></div>&nbsp;
                    <a class="button is-info is-focused is-medium" v-on:click="Changebranch1()">สาขา 1</a>&nbsp;
                    <a class="button  is-focused is-medium" v-on:click="Changebranch2()">สาขา 2</a>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <div class="control has-icons-left">

                            <label v-if ="Month === 0"><h1>มกราคม</h1></label>
                            <label v-if ="Month === 1"><h1>กุมภาพันธ์</h1></label>
                            <label v-if ="Month === 2"><h1>มีนาคม</h1></label>
                            <label v-if ="Month === 3"><h1>เมษายน</h1></label>
                            <label v-if ="Month === 4"><h1>พฤษภาคม</h1></label>
                            <label v-if ="Month === 5"><h1>มิถุนายน</h1></label>
                            <label v-if ="Month === 6"><h1>กรกฎาคม</h1></label>
                            <label v-if ="Month === 7"><h1>สิงหาคม</h1></label>
                            <label v-if ="Month === 8"><h1>กันยายน</h1></label>
                            <label v-if ="Month === 9"><h1>ตุลาคม</h1></label>
                            <label v-if ="Month === 10"><h1>พฤศจิกายน</h1></label>
                            <label v-if ="Month === 11"><h1>ธันวาคม</h1></label>

                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                          <a class="button is-info is-focused is-medium"  v-on:click="water()">ค่าน้ำประปา</a>
                          <a class="button  is-focused is-medium"  v-on:click="fire()">ค่าไฟฟ้า</a>

                  </div>


                  <div class="column"></div>
                </div>
      <!-- จบ แสดง  select เดือน  สาขาด้วย และ ค่าน้ำ ค่าไฟ  -->
<br>

      <!-- แสดง ตารางเดือน วันนี้ สัปดาห์ เดือน -->
            <div class="columns">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <div class="column is-half">
                <div  class="table" >
                  <table class="table is-bordered"  >
                    <thead>
                      <tr>
                        <th scope="col">เดือน</th>
                        <th scope="col">Unit</th>
                        <th scope="col">ราคา</th>
                      </tr>
                    </thead>
                      <tr>
                        <td>มกราคม</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>กุมภาพันธ์</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>มีนาคม</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>เมษายน</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>พฤษภาคม</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>มิถุนายน</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>กรกฎาคม</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>สิงหาคม</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>กันยายน</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>ตุลาคม</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>พฤศจิกายน</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>ธันวาคม</td>
                        <td></td>
                        <td></td>
                      </tr>

                  </table>
                </div>
              </div>

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div class="column" >
              <h3>  ค่าน้ำประปาวันนี้</h3>
              <tbody  v-for = " Branch1 in Branch1">
                <tr>
                  <td> <h5> {{Branch1.Unit1}} Unit </h5> </td>
                </tr>
                <tr>
                  <td> <h5> {{Branch1.Price1}} Bath </h5> </td>
                </tr>
              </tbody>

              <hr>
              <h3>  ค่าน้ำประปาสัปดาห์นี้</h3>
              <tbody  v-for = " Branch1 in Branch1">

                <tr>
                  <td> <h5>สัปดาห์ที่ 1 <br> {{Branch1.April.one.Unit1}} Unit <br> {{Branch1.April.one.Price1}} Bath</h5> </td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <td> <h5>สัปดาห์ที่ 2 <br>  {{Branch1.Unit1}} Unit </br> {{Branch1.Price1}} Bath</h5> </td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <td> <h5>สัปดาห์ที่ 3 <br>  {{Branch1.Unit1}} Unit </br> {{Branch1.Price1}} Bath</h5> </td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                </tr>
                <br>
                <tr>
                  <td> <h5>สัปดาห์ที่ 4 <br>  {{Branch1.Unit1}} Unit </br> {{Branch1.Price1}} Bath</h5> </td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <td> <h5>สัปดาห์ที่ 5 <br>  {{Branch1.Unit1}} Unit </br> {{Branch1.Price1}} Bath</h5> </td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </tr>

              </tbody>

              <hr>
              <h3>  ค่าน้ำประปาเดือนนี้</h3>
              <tbody  v-for = " Branch1 in Branch1">
                <tr>
                  <td> <h5> {{Branch1.Unit1}} Unit </h5> </td>
                </tr>
                <tr>
                  <td> <h5> {{Branch1.Price1}} Bath </h5> </td>
                </tr>
              </tbody>


              </div>




              <div class="column"></div>

            </div>
<!-- จบ แสดง ตารางเดือน วันนี้ สัปดาห์ เดือน -->

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
      waterfire: 'water',
      month: ''
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
    }
  }
}
</script>
