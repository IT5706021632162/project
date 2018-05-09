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
            <a class="navbar-link is-active">
              <span class="icon is-small"><i class="fa fa-pie-chart"></i></span>&nbsp;
              <span  v-on:click="Earnings_Revenue1()">Earnings Revenue 1</span>
            </a>
            <div class="navbar-dropdown">
              <a class="navbar-item" href="">
                ค่าน้ำ + ไฟฟ้า
              </a>
              <hr class="navbar-divider">
              <a class="navbar-item" href="">
                รายรับ + รายจ่าย
              </a>
              <hr class="navbar-divider">
              <a class="navbar-item" href="">
                แจ้งเครื่องซักผ้า + ต้นทุน
              </a>
              <hr class="navbar-divider">
              <a class="navbar-item" href="">
                จุดคุ้มทุน
              </a>
              <hr class="navbar-divider">
              <a class="navbar-item" href="">
                สรุปผล
              </a>
              <hr class="navbar-divider">
              <a class="navbar-item" href="">
                ดูปริมาณการใช้เครื่องซักผ้า
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

      <!-- แสดง  ปุ่มกด รายการต่างๆ  -->
              <div class="columns">
                <div class="column "></div>&nbsp;
                    <a class="button is-info is-focused is-rounded" v-on:click="Changemenu1()">ค่าน้ำ + ไฟฟ้า</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a class="button         is-focused is-rounded" v-on:click="Changemenu2()">รายรับ + รายจ่าย</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a class="button         is-focused is-rounded" v-on:click="Changemenu3()">แจ้งเครื่องซักผ้า + ต้นทุน</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a class="button         is-focused is-rounded" v-on:click="Changemenu4()">จุดคุ้มทุน</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a class="button         is-focused is-rounded" v-on:click="Changemenu5()">สรุปผล</a>
                  <div class="control has-icons-left">
                  </div>
                  <div class="column"></div>
                </div>
      <!-- จบ แสดง  ปุ่มกด  รายการต่างๆ  -->

      <div class="" v-if="menu === 'Water_Fire'">
        <!-- แสดงตาราง ค่าน้ำประปา   -->
        <div class="columns">
          <div class="column">  </div>
            <div class="column">
              <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth" border="2">
                <tbody  >
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
                <tr v-if ="Month === 0">  <!-- มกราคม  January -->
                  <td> {{this.weekWater.Unit1.toFixed(2)}} </td>    <!-- ค่าน้ำประปาวันนี้  Unit  -->
                  <td> {{this.weekWater.Price1.toFixed(2)}} </td>   <!-- ค่าน้ำประปาวันนี้  Bath  -->
                  <td> {{this.weekWater.January.one.Unit1.toFixed(2)}}     </td>
                  <td> {{this.weekWater.January.one.Price1.toFixed(2)}}    </td>
                  <td> {{this.weekWater.January.two.Price1.toFixed(2)}}    </td>
                  <td> {{this.weekWater.January.two.Unit1.toFixed(2)}}     </td>
                  <td> {{this.weekWater.January.three.Unit1.toFixed(2)}}   </td>
                  <td> {{this.weekWater.January.three.Price1.toFixed(2)}}  </td>
                  <td> {{this.weekWater.January.four.Price1.toFixed(2)}}   </td>
                  <td> {{this.weekWater.January.four.Unit1.toFixed(2)}}    </td>
                  <td> {{this.weekWater.January.five.Unit1.toFixed(2)}}    </td>
                  <td> {{this.weekWater.January.five.Price1.toFixed(2)}}   </td>
                  <td> {{this.weekWater.January.five.Unit1.toFixed(2)}}    </td>
                  <td> {{this.weekWater.January.five.Price1.toFixed(2)}}   </td>
                </tr>
                <tr v-if ="Month === 1">   <!-- กุมภาพันธ์  February -->
                  <td> {{this.weekWater.Unit1.toFixed(2)}} </td>    <!-- ค่าน้ำประปาวันนี้  Unit  -->
                  <td> {{this.weekWater.Price1.toFixed(2)}} </td>   <!-- ค่าน้ำประปาวันนี้  Bath  -->
                  <td> {{this.weekWater.February.one.Unit1.toFixed(2)}}     </td>
                  <td> {{this.weekWater.February.one.Price1.toFixed(2)}}    </td>
                  <td> {{this.weekWater.February.two.Price1.toFixed(2)}}    </td>
                  <td> {{this.weekWater.February.two.Unit1.toFixed(2)}}     </td>
                  <td> {{this.weekWater.February.three.Unit1.toFixed(2)}}   </td>
                  <td> {{this.weekWater.February.three.Price1.toFixed(2)}}  </td>
                  <td> {{this.weekWater.February.four.Price1.toFixed(2)}}   </td>
                  <td> {{this.weekWater.February.four.Unit1.toFixed(2)}}    </td>
                  <td> {{this.weekWater.February.five.Unit1.toFixed(2)}}    </td>
                  <td> {{this.weekWater.February.five.Price1.toFixed(2)}}   </td>
                  <td> {{this.weekWater.February.five.Unit1.toFixed(2)}}    </td>
                  <td> {{this.weekWater.February.five.Price1.toFixed(2)}}   </td>
                </tr>
                <tr v-if ="Month === 2">   <!-- มีนาคม  March -->
                  <td> {{this.weekWater.Unit1.toFixed(2)}} </td>    <!-- ค่าน้ำประปาวันนี้  Unit  -->
                  <td> {{this.weekWater.Price1.toFixed(2)}} </td>   <!-- ค่าน้ำประปาวันนี้  Bath  -->
                  <td> {{this.weekWater.March.one.Unit1.toFixed(2)}}     </td>
                  <td> {{this.weekWater.March.one.Price1.toFixed(2)}}    </td>
                  <td> {{this.weekWater.March.two.Price1.toFixed(2)}}    </td>
                  <td> {{this.weekWater.March.two.Unit1.toFixed(2)}}     </td>
                  <td> {{this.weekWater.March.three.Unit1.toFixed(2)}}   </td>
                  <td> {{this.weekWater.March.three.Price1.toFixed(2)}}  </td>
                  <td> {{this.weekWater.March.four.Price1.toFixed(2)}}   </td>
                  <td> {{this.weekWater.March.four.Unit1.toFixed(2)}}    </td>
                  <td> {{this.weekWater.March.five.Unit1.toFixed(2)}}    </td>
                  <td> {{this.weekWater.March.five.Price1.toFixed(2)}}   </td>
                  <td> {{this.weekWater.March.five.Unit1.toFixed(2)}}    </td>
                  <td> {{this.weekWater.March.five.Price1.toFixed(2)}}   </td>
                </tr>
                <tr v-if ="Month === 3">   <!-- เมษายน  April -->
                  <td> {{this.weekWater.Unit1.toFixed(2)}} </td>    <!-- ค่าน้ำประปาวันนี้  Unit  -->
                  <td> {{this.weekWater.Price1.toFixed(2)}} </td>   <!-- ค่าน้ำประปาวันนี้  Bath  -->
                  <td> {{this.weekWater.April.one.Unit1.toFixed(2)}}     </td>
                  <td> {{this.weekWater.April.one.Price1.toFixed(2)}}    </td>
                  <td> {{this.weekWater.April.two.Price1.toFixed(2)}}    </td>
                  <td> {{this.weekWater.April.two.Unit1.toFixed(2)}}     </td>
                  <td> {{this.weekWater.April.three.Unit1.toFixed(2)}}   </td>
                  <td> {{this.weekWater.April.three.Price1.toFixed(2)}}  </td>
                  <td> {{this.weekWater.April.four.Price1.toFixed(2)}}   </td>
                  <td> {{this.weekWater.April.four.Unit1.toFixed(2)}}    </td>
                  <td> {{this.weekWater.April.five.Unit1.toFixed(2)}}    </td>
                  <td> {{this.weekWater.April.five.Price1.toFixed(2)}}   </td>
                  <td> {{this.weekWater.April.five.Unit1.toFixed(2)}}    </td>
                  <td> {{this.weekWater.April.five.Price1.toFixed(2)}}   </td>
                </tr>
                <tr v-if ="Month === 4">   <!-- พฤษภาคม  May -->
                  <td> {{this.weekWater.Unit1.toFixed(2)}} </td>    <!-- ค่าน้ำประปาวันนี้  Unit  -->
                  <td> {{this.weekWater.Price1.toFixed(2)}} </td>   <!-- ค่าน้ำประปาวันนี้  Bath  -->
                  <td> {{this.weekWater.May.one.Unit1.toFixed(2)}}     </td>
                  <td> {{this.weekWater.May.one.Price1.toFixed(2)}}    </td>
                  <td> {{this.weekWater.May.two.Price1.toFixed(2)}}    </td>
                  <td> {{this.weekWater.May.two.Unit1.toFixed(2)}}     </td>
                  <td> {{this.weekWater.May.three.Unit1.toFixed(2)}}   </td>
                  <td> {{this.weekWater.May.three.Price1.toFixed(2)}}  </td>
                  <td> {{this.weekWater.May.four.Price1.toFixed(2)}}   </td>
                  <td> {{this.weekWater.May.four.Unit1.toFixed(2)}}    </td>
                  <td> {{this.weekWater.May.five.Unit1.toFixed(2)}}    </td>
                  <td> {{this.weekWater.May.five.Price1.toFixed(2)}}   </td>
                  <td> {{this.weekWater.May.five.Unit1.toFixed(2)}}    </td>
                  <td> {{this.weekWater.May.five.Price1.toFixed(2)}}   </td>
                </tr>
                <tr v-if ="Month === 5">   <!-- มิถุนายน  June -->
                  <td> {{this.weekWater.Unit1.toFixed(2)}} </td>    <!-- ค่าน้ำประปาวันนี้  Unit  -->
                  <td> {{this.weekWater.Price1.toFixed(2)}} </td>   <!-- ค่าน้ำประปาวันนี้  Bath  -->
                  <td> {{this.weekWater.June.one.Unit1.toFixed(2)}}     </td>
                  <td> {{this.weekWater.June.one.Price1.toFixed(2)}}    </td>
                  <td> {{this.weekWater.June.two.Price1.toFixed(2)}}    </td>
                  <td> {{this.weekWater.June.two.Unit1.toFixed(2)}}     </td>
                  <td> {{this.weekWater.June.three.Unit1.toFixed(2)}}   </td>
                  <td> {{this.weekWater.June.three.Price1.toFixed(2)}}  </td>
                  <td> {{this.weekWater.June.four.Price1.toFixed(2)}}   </td>
                  <td> {{this.weekWater.June.four.Unit1.toFixed(2)}}    </td>
                  <td> {{this.weekWater.June.five.Unit1.toFixed(2)}}    </td>
                  <td> {{this.weekWater.June.five.Price1.toFixed(2)}}   </td>
                  <td> {{this.weekWater.June.five.Unit1.toFixed(2)}}    </td>
                  <td> {{this.weekWater.June.five.Price1.toFixed(2)}}   </td>
                </tr>
                <tr v-if ="Month === 6">   <!-- กรกฎาคม  July -->
                  <td> {{this.weekWater.Unit1.toFixed(2)}} </td>    <!-- ค่าน้ำประปาวันนี้  Unit  -->
                  <td> {{this.weekWater.Price1.toFixed(2)}} </td>   <!-- ค่าน้ำประปาวันนี้  Bath  -->
                  <td> {{this.weekWater.July.one.Unit1.toFixed(2)}}     </td>
                  <td> {{this.weekWater.July.one.Price1.toFixed(2)}}    </td>
                  <td> {{this.weekWater.July.two.Price1.toFixed(2)}}    </td>
                  <td> {{this.weekWater.July.two.Unit1.toFixed(2)}}     </td>
                  <td> {{this.weekWater.July.three.Unit1.toFixed(2)}}   </td>
                  <td> {{this.weekWater.July.three.Price1.toFixed(2)}}  </td>
                  <td> {{this.weekWater.July.four.Price1.toFixed(2)}}   </td>
                  <td> {{this.weekWater.July.four.Unit1.toFixed(2)}}    </td>
                  <td> {{this.weekWater.July.five.Unit1.toFixed(2)}}    </td>
                  <td> {{this.weekWater.July.five.Price1.toFixed(2)}}   </td>
                  <td> {{this.weekWater.July.five.Unit1.toFixed(2)}}    </td>
                  <td> {{this.weekWater.July.five.Price1.toFixed(2)}}   </td>
                </tr>
                <tr v-if ="Month === 7">   <!-- สิงหาคม  August -->
                  <td> {{this.weekWater.Unit1.toFixed(2)}} </td>    <!-- ค่าน้ำประปาวันนี้  Unit  -->
                  <td> {{this.weekWater.Price1.toFixed(2)}} </td>   <!-- ค่าน้ำประปาวันนี้  Bath  -->
                  <td> {{this.weekWater.August.one.Unit1.toFixed(2)}}     </td>
                  <td> {{this.weekWater.August.one.Price1.toFixed(2)}}    </td>
                  <td> {{this.weekWater.August.two.Price1.toFixed(2)}}    </td>
                  <td> {{this.weekWater.August.two.Unit1.toFixed(2)}}     </td>
                  <td> {{this.weekWater.August.three.Unit1.toFixed(2)}}   </td>
                  <td> {{this.weekWater.August.three.Price1.toFixed(2)}}  </td>
                  <td> {{this.weekWater.August.four.Price1.toFixed(2)}}   </td>
                  <td> {{this.weekWater.August.four.Unit1.toFixed(2)}}    </td>
                  <td> {{this.weekWater.August.five.Unit1.toFixed(2)}}    </td>
                  <td> {{this.weekWater.August.five.Price1.toFixed(2)}}   </td>
                  <td> {{this.weekWater.August.five.Unit1.toFixed(2)}}    </td>
                  <td> {{this.weekWater.August.five.Price1.toFixed(2)}}   </td>
                </tr>
                <tr v-if ="Month === 8">   <!-- กันยายน  September -->
                  <td> {{this.weekWater.Unit1.toFixed(2)}} </td>    <!-- ค่าน้ำประปาวันนี้  Unit  -->
                  <td> {{this.weekWater.Price1.toFixed(2)}} </td>   <!-- ค่าน้ำประปาวันนี้  Bath  -->
                  <td> {{this.weekWater.September.one.Unit1.toFixed(2)}}     </td>
                  <td> {{this.weekWater.September.one.Price1.toFixed(2)}}    </td>
                  <td> {{this.weekWater.September.two.Price1.toFixed(2)}}    </td>
                  <td> {{this.weekWater.September.two.Unit1.toFixed(2)}}     </td>
                  <td> {{this.weekWater.September.three.Unit1.toFixed(2)}}   </td>
                  <td> {{this.weekWater.September.three.Price1.toFixed(2)}}  </td>
                  <td> {{this.weekWater.September.four.Price1.toFixed(2)}}   </td>
                  <td> {{this.weekWater.September.four.Unit1.toFixed(2)}}    </td>
                  <td> {{this.weekWater.September.five.Unit1.toFixed(2)}}    </td>
                  <td> {{this.weekWater.September.five.Price1.toFixed(2)}}   </td>
                  <td> {{this.weekWater.September.five.Unit1.toFixed(2)}}    </td>
                  <td> {{this.weekWater.September.five.Price1.toFixed(2)}}   </td>
                </tr>
                <tr v-if ="Month === 9">   <!-- ตุลาคม  October -->
                  <td> {{this.weekWater.Unit1.toFixed(2)}} </td>    <!-- ค่าน้ำประปาวันนี้  Unit  -->
                  <td> {{this.weekWater.Price1.toFixed(2)}} </td>   <!-- ค่าน้ำประปาวันนี้  Bath  -->
                  <td> {{this.weekWater.October.one.Unit1.toFixed(2)}}     </td>
                  <td> {{this.weekWater.October.one.Price1.toFixed(2)}}    </td>
                  <td> {{this.weekWater.October.two.Price1.toFixed(2)}}    </td>
                  <td> {{this.weekWater.October.two.Unit1.toFixed(2)}}     </td>
                  <td> {{this.weekWater.October.three.Unit1.toFixed(2)}}   </td>
                  <td> {{this.weekWater.October.three.Price1.toFixed(2)}}  </td>
                  <td> {{this.weekWater.October.four.Price1.toFixed(2)}}   </td>
                  <td> {{this.weekWater.October.four.Unit1.toFixed(2)}}    </td>
                  <td> {{this.weekWater.October.five.Unit1.toFixed(2)}}    </td>
                  <td> {{this.weekWater.October.five.Price1.toFixed(2)}}   </td>
                  <td> {{this.weekWater.October.five.Unit1.toFixed(2)}}    </td>
                  <td> {{this.weekWater.October.five.Price1.toFixed(2)}}   </td>
                </tr>
                <tr v-if ="Month === 10">   <!-- พฤศจิกายน  November -->
                  <td> {{this.weekWater.Unit1.toFixed(2)}} </td>    <!-- ค่าน้ำประปาวันนี้  Unit  -->
                  <td> {{this.weekWater.Price1.toFixed(2)}} </td>   <!-- ค่าน้ำประปาวันนี้  Bath  -->
                  <td> {{this.weekWater.November.one.Unit1.toFixed(2)}}     </td>
                  <td> {{this.weekWater.November.one.Price1.toFixed(2)}}    </td>
                  <td> {{this.weekWater.November.two.Price1.toFixed(2)}}    </td>
                  <td> {{this.weekWater.November.two.Unit1.toFixed(2)}}     </td>
                  <td> {{this.weekWater.November.three.Unit1.toFixed(2)}}   </td>
                  <td> {{this.weekWater.November.three.Price1.toFixed(2)}}  </td>
                  <td> {{this.weekWater.November.four.Price1.toFixed(2)}}   </td>
                  <td> {{this.weekWater.November.four.Unit1.toFixed(2)}}    </td>
                  <td> {{this.weekWater.November.five.Unit1.toFixed(2)}}    </td>
                  <td> {{this.weekWater.November.five.Price1.toFixed(2)}}   </td>
                  <td> {{this.weekWater.November.five.Unit1.toFixed(2)}}    </td>
                  <td> {{this.weekWater.November.five.Price1.toFixed(2)}}   </td>
                </tr>
                <tr v-if ="Month === 11">   <!-- ธันวาคม  December -->
                  <td> {{this.weekWater.Unit1.toFixed(2)}} </td>    <!-- ค่าน้ำประปาวันนี้  Unit  -->
                  <td> {{this.weekWater.Price1.toFixed(2)}} </td>   <!-- ค่าน้ำประปาวันนี้  Bath  -->
                  <td> {{this.weekWater.December.one.Unit1.toFixed(2)}}     </td>
                  <td> {{this.weekWater.December.one.Price1.toFixed(2)}}    </td>
                  <td> {{this.weekWater.December.two.Price1.toFixed(2)}}    </td>
                  <td> {{this.weekWater.December.two.Unit1.toFixed(2)}}     </td>
                  <td> {{this.weekWater.December.three.Unit1.toFixed(2)}}   </td>
                  <td> {{this.weekWater.December.three.Price1.toFixed(2)}}  </td>
                  <td> {{this.weekWater.December.four.Price1.toFixed(2)}}   </td>
                  <td> {{this.weekWater.December.four.Unit1.toFixed(2)}}    </td>
                  <td> {{this.weekWater.December.five.Unit1.toFixed(2)}}    </td>
                  <td> {{this.weekWater.December.five.Price1.toFixed(2)}}   </td>
                  <td> {{this.weekWater.December.five.Unit1.toFixed(2)}}    </td>
                  <td> {{this.weekWater.December.five.Price1.toFixed(2)}}   </td>
                </tr>

              </tbody>
              </table>
             </div>
            <div class="column"> </div>
          </div>
            <!-- จบ แสดงตาราง ค่าน้ำประปา   -->

                <!-- -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-  -->
                <div class="control has-icons-left"></div>
                <!-- -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-  -->

              <!-- แสดงตาราง ไฟฟ้า  -->
                <div class="columns">
                  <div class="column"> </div>
                    <div class="column">
              <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth" border="2">
                <tbody>
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
                  <tr v-if ="Month === 0">  <!-- มกราคม  January -->
                    <td> {{this.weekFire.Unit1.toFixed(2)}} </td>    <!-- ค่าน้ำประปาวันนี้  Unit  -->
                    <td> {{this.weekFire.Price1.toFixed(2)}} </td>   <!-- ค่าน้ำประปาวันนี้  Bath  -->
                    <td> {{this.weekFire.January.one.Unit1.toFixed(2)}}     </td>
                    <td> {{this.weekFire.January.one.Price1.toFixed(2)}}    </td>
                    <td> {{this.weekFire.January.two.Price1.toFixed(2)}}    </td>
                    <td> {{this.weekFire.January.two.Unit1.toFixed(2)}}     </td>
                    <td> {{this.weekFire.January.three.Unit1.toFixed(2)}}   </td>
                    <td> {{this.weekFire.January.three.Price1.toFixed(2)}}  </td>
                    <td> {{this.weekFire.January.four.Price1.toFixed(2)}}   </td>
                    <td> {{this.weekFire.January.four.Unit1.toFixed(2)}}    </td>
                    <td> {{this.weekFire.January.five.Unit1.toFixed(2)}}    </td>
                    <td> {{this.weekFire.January.five.Price1.toFixed(2)}}   </td>
                    <td> {{this.weekFire.January.five.Unit1.toFixed(2)}}    </td>
                    <td> {{this.weekFire.January.five.Price1.toFixed(2)}}   </td>
                  </tr>
                  <tr v-if ="Month === 1">   <!-- กุมภาพันธ์  February -->
                    <td> {{this.weekFire.Unit1.toFixed(2)}} </td>    <!-- ค่าน้ำประปาวันนี้  Unit  -->
                    <td> {{this.weekFire.Price1.toFixed(2)}} </td>   <!-- ค่าน้ำประปาวันนี้  Bath  -->
                    <td> {{this.weekFire.February.one.Unit1.toFixed(2)}}     </td>
                    <td> {{this.weekFire.February.one.Price1.toFixed(2)}}    </td>
                    <td> {{this.weekFire.February.two.Price1.toFixed(2)}}    </td>
                    <td> {{this.weekFire.February.two.Unit1.toFixed(2)}}     </td>
                    <td> {{this.weekFire.February.three.Unit1.toFixed(2)}}   </td>
                    <td> {{this.weekFire.February.three.Price1.toFixed(2)}}  </td>
                    <td> {{this.weekFire.February.four.Price1.toFixed(2)}}   </td>
                    <td> {{this.weekFire.February.four.Unit1.toFixed(2)}}    </td>
                    <td> {{this.weekFire.February.five.Unit1.toFixed(2)}}    </td>
                    <td> {{this.weekFire.February.five.Price1.toFixed(2)}}   </td>
                    <td> {{this.weekFire.February.five.Unit1.toFixed(2)}}    </td>
                    <td> {{this.weekFire.February.five.Price1.toFixed(2)}}   </td>
                  </tr>
                  <tr v-if ="Month === 2">   <!-- มีนาคม  March -->
                    <td> {{this.weekFire.Unit1.toFixed(2)}} </td>    <!-- ค่าน้ำประปาวันนี้  Unit  -->
                    <td> {{this.weekFire.Price1.toFixed(2)}} </td>   <!-- ค่าน้ำประปาวันนี้  Bath  -->
                    <td> {{this.weekFire.March.one.Unit1.toFixed(2)}}     </td>
                    <td> {{this.weekFire.March.one.Price1.toFixed(2)}}    </td>
                    <td> {{this.weekFire.March.two.Price1.toFixed(2)}}    </td>
                    <td> {{this.weekFire.March.two.Unit1.toFixed(2)}}     </td>
                    <td> {{this.weekFire.March.three.Unit1.toFixed(2)}}   </td>
                    <td> {{this.weekFire.March.three.Price1.toFixed(2)}}  </td>
                    <td> {{this.weekFire.March.four.Price1.toFixed(2)}}   </td>
                    <td> {{this.weekFire.March.four.Unit1.toFixed(2)}}    </td>
                    <td> {{this.weekFire.March.five.Unit1.toFixed(2)}}    </td>
                    <td> {{this.weekFire.March.five.Price1.toFixed(2)}}   </td>
                    <td> {{this.weekFire.March.five.Unit1.toFixed(2)}}    </td>
                    <td> {{this.weekFire.March.five.Price1.toFixed(2)}}   </td>
                  </tr>
                  <tr v-if ="Month === 3">   <!-- เมษายน  April -->
                    <td> {{this.weekFire.Unit1.toFixed(2)}} </td>    <!-- ค่าน้ำประปาวันนี้  Unit  -->
                    <td> {{this.weekFire.Price1.toFixed(2)}} </td>   <!-- ค่าน้ำประปาวันนี้  Bath  -->
                    <td> {{this.weekFire.April.one.Unit1.toFixed(2)}}     </td>
                    <td> {{this.weekFire.April.one.Price1.toFixed(2)}}    </td>
                    <td> {{this.weekFire.April.two.Price1.toFixed(2)}}    </td>
                    <td> {{this.weekFire.April.two.Unit1.toFixed(2)}}     </td>
                    <td> {{this.weekFire.April.three.Unit1.toFixed(2)}}   </td>
                    <td> {{this.weekFire.April.three.Price1.toFixed(2)}}  </td>
                    <td> {{this.weekFire.April.four.Price1.toFixed(2)}}   </td>
                    <td> {{this.weekFire.April.four.Unit1.toFixed(2)}}    </td>
                    <td> {{this.weekFire.April.five.Unit1.toFixed(2)}}    </td>
                    <td> {{this.weekFire.April.five.Price1.toFixed(2)}}   </td>
                    <td> {{this.weekFire.April.five.Unit1.toFixed(2)}}    </td>
                    <td> {{this.weekFire.April.five.Price1.toFixed(2)}}   </td>
                  </tr>
                  <tr v-if ="Month === 4">   <!-- พฤษภาคม  May -->
                    <td> {{this.weekFire.Unit1.toFixed(2)}} </td>    <!-- ค่าน้ำประปาวันนี้  Unit  -->
                    <td> {{this.weekFire.Price1.toFixed(2)}} </td>   <!-- ค่าน้ำประปาวันนี้  Bath  -->
                    <td> {{this.weekFire.May.one.Unit1.toFixed(2)}}     </td>
                    <td> {{this.weekFire.May.one.Price1.toFixed(2)}}    </td>
                    <td> {{this.weekFire.May.two.Price1.toFixed(2)}}    </td>
                    <td> {{this.weekFire.May.two.Unit1.toFixed(2)}}     </td>
                    <td> {{this.weekFire.May.three.Unit1.toFixed(2)}}   </td>
                    <td> {{this.weekFire.May.three.Price1.toFixed(2)}}  </td>
                    <td> {{this.weekFire.May.four.Price1.toFixed(2)}}   </td>
                    <td> {{this.weekFire.May.four.Unit1.toFixed(2)}}    </td>
                    <td> {{this.weekFire.May.five.Unit1.toFixed(2)}}    </td>
                    <td> {{this.weekFire.May.five.Price1.toFixed(2)}}   </td>
                    <td> {{this.weekFire.May.five.Unit1.toFixed(2)}}    </td>
                    <td> {{this.weekFire.May.five.Price1.toFixed(2)}}   </td>
                  </tr>
                  <tr v-if ="Month === 5">   <!-- มิถุนายน  June -->
                    <td> {{this.weekFire.Unit1.toFixed(2)}} </td>    <!-- ค่าน้ำประปาวันนี้  Unit  -->
                    <td> {{this.weekFire.Price1.toFixed(2)}} </td>   <!-- ค่าน้ำประปาวันนี้  Bath  -->
                    <td> {{this.weekFire.June.one.Unit1.toFixed(2)}}     </td>
                    <td> {{this.weekFire.June.one.Price1.toFixed(2)}}    </td>
                    <td> {{this.weekFire.June.two.Price1.toFixed(2)}}    </td>
                    <td> {{this.weekFire.June.two.Unit1.toFixed(2)}}     </td>
                    <td> {{this.weekFire.June.three.Unit1.toFixed(2)}}   </td>
                    <td> {{this.weekFire.June.three.Price1.toFixed(2)}}  </td>
                    <td> {{this.weekFire.June.four.Price1.toFixed(2)}}   </td>
                    <td> {{this.weekFire.June.four.Unit1.toFixed(2)}}    </td>
                    <td> {{this.weekFire.June.five.Unit1.toFixed(2)}}    </td>
                    <td> {{this.weekFire.June.five.Price1.toFixed(2)}}   </td>
                    <td> {{this.weekFire.June.five.Unit1.toFixed(2)}}    </td>
                    <td> {{this.weekFire.June.five.Price1.toFixed(2)}}   </td>
                  </tr>
                  <tr v-if ="Month === 6">   <!-- กรกฎาคม  July -->
                    <td> {{this.weekFire.Unit1.toFixed(2)}} </td>    <!-- ค่าน้ำประปาวันนี้  Unit  -->
                    <td> {{this.weekFire.Price1.toFixed(2)}} </td>   <!-- ค่าน้ำประปาวันนี้  Bath  -->
                    <td> {{this.weekFire.July.one.Unit1.toFixed(2)}}     </td>
                    <td> {{this.weekFire.July.one.Price1.toFixed(2)}}    </td>
                    <td> {{this.weekFire.July.two.Price1.toFixed(2)}}    </td>
                    <td> {{this.weekFire.July.two.Unit1.toFixed(2)}}     </td>
                    <td> {{this.weekFire.July.three.Unit1.toFixed(2)}}   </td>
                    <td> {{this.weekFire.July.three.Price1.toFixed(2)}}  </td>
                    <td> {{this.weekFire.July.four.Price1.toFixed(2)}}   </td>
                    <td> {{this.weekFire.July.four.Unit1.toFixed(2)}}    </td>
                    <td> {{this.weekFire.July.five.Unit1.toFixed(2)}}    </td>
                    <td> {{this.weekFire.July.five.Price1.toFixed(2)}}   </td>
                    <td> {{this.weekFire.July.five.Unit1.toFixed(2)}}    </td>
                    <td> {{this.weekFire.July.five.Price1.toFixed(2)}}   </td>
                  </tr>
                  <tr v-if ="Month === 7">   <!-- สิงหาคม  August -->
                    <td> {{this.weekFire.Unit1.toFixed(2)}} </td>    <!-- ค่าน้ำประปาวันนี้  Unit  -->
                    <td> {{this.weekFire.Price1.toFixed(2)}} </td>   <!-- ค่าน้ำประปาวันนี้  Bath  -->
                    <td> {{this.weekFire.August.one.Unit1.toFixed(2)}}     </td>
                    <td> {{this.weekFire.August.one.Price1.toFixed(2)}}    </td>
                    <td> {{this.weekFire.August.two.Price1.toFixed(2)}}    </td>
                    <td> {{this.weekFire.August.two.Unit1.toFixed(2)}}     </td>
                    <td> {{this.weekFire.August.three.Unit1.toFixed(2)}}   </td>
                    <td> {{this.weekFire.August.three.Price1.toFixed(2)}}  </td>
                    <td> {{this.weekFire.August.four.Price1.toFixed(2)}}   </td>
                    <td> {{this.weekFire.August.four.Unit1.toFixed(2)}}    </td>
                    <td> {{this.weekFire.August.five.Unit1.toFixed(2)}}    </td>
                    <td> {{this.weekFire.August.five.Price1.toFixed(2)}}   </td>
                    <td> {{this.weekFire.August.five.Unit1.toFixed(2)}}    </td>
                    <td> {{this.weekFire.August.five.Price1.toFixed(2)}}   </td>
                  </tr>
                  <tr v-if ="Month === 8">   <!-- กันยายน  September -->
                    <td> {{this.weekFire.Unit1.toFixed(2)}} </td>    <!-- ค่าน้ำประปาวันนี้  Unit  -->
                    <td> {{this.weekFire.Price1.toFixed(2)}} </td>   <!-- ค่าน้ำประปาวันนี้  Bath  -->
                    <td> {{this.weekFire.September.one.Unit1.toFixed(2)}}     </td>
                    <td> {{this.weekFire.September.one.Price1.toFixed(2)}}    </td>
                    <td> {{this.weekFire.September.two.Price1.toFixed(2)}}    </td>
                    <td> {{this.weekFire.September.two.Unit1.toFixed(2)}}     </td>
                    <td> {{this.weekFire.September.three.Unit1.toFixed(2)}}   </td>
                    <td> {{this.weekFire.September.three.Price1.toFixed(2)}}  </td>
                    <td> {{this.weekFire.September.four.Price1.toFixed(2)}}   </td>
                    <td> {{this.weekFire.September.four.Unit1.toFixed(2)}}    </td>
                    <td> {{this.weekFire.September.five.Unit1.toFixed(2)}}    </td>
                    <td> {{this.weekFire.September.five.Price1.toFixed(2)}}   </td>
                    <td> {{this.weekFire.September.five.Unit1.toFixed(2)}}    </td>
                    <td> {{this.weekFire.September.five.Price1.toFixed(2)}}   </td>
                  </tr>
                  <tr v-if ="Month === 9">   <!-- ตุลาคม  October -->
                    <td> {{this.weekFire.Unit1.toFixed(2)}} </td>    <!-- ค่าน้ำประปาวันนี้  Unit  -->
                    <td> {{this.weekFire.Price1.toFixed(2)}} </td>   <!-- ค่าน้ำประปาวันนี้  Bath  -->
                    <td> {{this.weekFire.October.one.Unit1.toFixed(2)}}     </td>
                    <td> {{this.weekFire.October.one.Price1.toFixed(2)}}    </td>
                    <td> {{this.weekFire.October.two.Price1.toFixed(2)}}    </td>
                    <td> {{this.weekFire.October.two.Unit1.toFixed(2)}}     </td>
                    <td> {{this.weekFire.October.three.Unit1.toFixed(2)}}   </td>
                    <td> {{this.weekFire.October.three.Price1.toFixed(2)}}  </td>
                    <td> {{this.weekFire.October.four.Price1.toFixed(2)}}   </td>
                    <td> {{this.weekFire.October.four.Unit1.toFixed(2)}}    </td>
                    <td> {{this.weekFire.October.five.Unit1.toFixed(2)}}    </td>
                    <td> {{this.weekFire.October.five.Price1.toFixed(2)}}   </td>
                    <td> {{this.weekFire.October.five.Unit1.toFixed(2)}}    </td>
                    <td> {{this.weekFire.October.five.Price1.toFixed(2)}}   </td>
                  </tr>
                  <tr v-if ="Month === 10">   <!-- พฤศจิกายน  November -->
                    <td> {{this.weekFire.Unit1.toFixed(2)}} </td>    <!-- ค่าน้ำประปาวันนี้  Unit  -->
                    <td> {{this.weekFire.Price1.toFixed(2)}} </td>   <!-- ค่าน้ำประปาวันนี้  Bath  -->
                    <td> {{this.weekFire.November.one.Unit1.toFixed(2)}}     </td>
                    <td> {{this.weekFire.November.one.Price1.toFixed(2)}}    </td>
                    <td> {{this.weekFire.November.two.Price1.toFixed(2)}}    </td>
                    <td> {{this.weekFire.November.two.Unit1.toFixed(2)}}     </td>
                    <td> {{this.weekFire.November.three.Unit1.toFixed(2)}}   </td>
                    <td> {{this.weekFire.November.three.Price1.toFixed(2)}}  </td>
                    <td> {{this.weekFire.November.four.Price1.toFixed(2)}}   </td>
                    <td> {{this.weekFire.November.four.Unit1.toFixed(2)}}    </td>
                    <td> {{this.weekFire.November.five.Unit1.toFixed(2)}}    </td>
                    <td> {{this.weekFire.November.five.Price1.toFixed(2)}}   </td>
                    <td> {{this.weekFire.November.five.Unit1.toFixed(2)}}    </td>
                    <td> {{this.weekFire.November.five.Price1.toFixed(2)}}   </td>
                  </tr>
                  <tr v-if ="Month === 11">   <!-- ธันวาคม  December -->
                    <td> {{this.weekFire.Unit1.toFixed(2)}} </td>    <!-- ค่าน้ำประปาวันนี้  Unit  -->
                    <td> {{this.weekFire.Price1.toFixed(2)}} </td>   <!-- ค่าน้ำประปาวันนี้  Bath  -->
                    <td> {{this.weekFire.December.one.Unit1.toFixed(2)}}     </td>
                    <td> {{this.weekFire.December.one.Price1.toFixed(2)}}    </td>
                    <td> {{this.weekFire.December.two.Price1.toFixed(2)}}    </td>
                    <td> {{this.weekFire.December.two.Unit1.toFixed(2)}}     </td>
                    <td> {{this.weekFire.December.three.Unit1.toFixed(2)}}   </td>
                    <td> {{this.weekFire.December.three.Price1.toFixed(2)}}  </td>
                    <td> {{this.weekFire.December.four.Price1.toFixed(2)}}   </td>
                    <td> {{this.weekFire.December.four.Unit1.toFixed(2)}}    </td>
                    <td> {{this.weekFire.December.five.Unit1.toFixed(2)}}    </td>
                    <td> {{this.weekFire.December.five.Price1.toFixed(2)}}   </td>
                    <td> {{this.weekFire.December.five.Unit1.toFixed(2)}}    </td>
                    <td> {{this.weekFire.December.five.Price1.toFixed(2)}}   </td>
                  </tr>
                </tr>
              </tbody>
              </table>
            </div>
          <div class="column"> </div>
        </div>
          <!-- จบ แสดงตาราง ไฟฟ้า  -->
</div>


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
                         <center>  <label for="recipient-name" class="form-control-label"><h3> แจ้งสถานะเครื่องซักผ้า </h3> </label> </center>
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
                         <td>  <a  v-if ="show.type === 'Usable'">    <!-- แสดง เครื่องซักผ้าที่ใช้ไดด้ -->
                                  <a class="button  is-success" @click="truee(key)">Usable </a>
                                  <a class="button " @click="falsee(key)">Defective</a>
                              </a>
                              <a  v-if ="show.type === 'Defective'">    <!-- แสดง เครื่องซักผ้าที่พัง -->
                                        <a class="button"  @click="truee(key)">Usable </a>
                                        <a class="button  is-danger " @click="falsee(key)">Defective</a>
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
                    <tr class="table-warning">
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
                    <tr >
                      <td>มกราคม</td>
                      <td> {{this.weekFire.January.totalUnit1.toFixed(2)}} </td>
                      <td> {{this.weekFire.January.totalPrice1.toFixed(2)}} </td>
                      <td> {{this.weekWater.January.totalUnit1.toFixed(2)}} </td>
                      <td> {{this.weekWater.January.totalPrice1.toFixed(2)}} </td>
                    </tr>
                    <tr>
                      <td>กุมภาพันธ์</td>
                      <td> {{this.weekFire.February.totalUnit1.toFixed(2)}} </td>
                      <td> {{this.weekFire.February.totalPrice1.toFixed(2)}} </td>
                      <td> {{this.weekWater.February.totalUnit1.toFixed(2)}} </td>
                      <td> {{this.weekWater.February.totalPrice1.toFixed(2)}} </td>
                    </tr>
                    <tr>
                      <td>มีนาคม</td>
                      <td> {{this.weekFire.March.totalUnit1.toFixed(2)}} </td>
                      <td> {{this.weekFire.March.totalPrice1.toFixed(2)}} </td>
                      <td> {{this.weekWater.March.totalUnit1.toFixed(2)}} </td>
                      <td> {{this.weekWater.March.totalPrice1.toFixed(2)}} </td>
                    </tr>
                    <tr>
                      <td>เมษายน</td>
                      <td> {{this.weekFire.April.totalUnit1.toFixed(2)}} </td>
                      <td> {{this.weekFire.April.totalPrice1.toFixed(2)}} </td>
                      <td> {{this.weekWater.April.totalUnit1.toFixed(2)}} </td>
                      <td> {{this.weekWater.April.totalPrice1.toFixed(2)}} </td>
                    </tr>
                    <tr>
                      <td>พฤษภาคม</td>
                      <td> {{this.weekFire.May.totalUnit1.toFixed(2)}} </td>
                      <td> {{this.weekFire.May.totalPrice1.toFixed(2)}} </td>
                      <td> {{this.weekWater.May.totalUnit1.toFixed(2)}} </td>
                      <td> {{this.weekWater.May.totalPrice1.toFixed(2)}} </td>

                    </tr>
                    <tr>
                      <td>มิถุนายน</td>
                      <td> {{this.weekFire.June.totalUnit1.toFixed(2)}} </td>
                      <td> {{this.weekFire.June.totalPrice1.toFixed(2)}} </td>
                      <td> {{this.weekWater.June.totalUnit1.toFixed(2)}} </td>
                      <td> {{this.weekWater.June.totalPrice1.toFixed(2)}} </td>
                    </tr>
                    <tr>
                      <td>กรกฎาคม</td>
                      <td> {{this.weekFire.July.totalUnit1.toFixed(2)}} </td>
                      <td> {{this.weekFire.July.totalPrice1.toFixed(2)}} </td>
                      <td> {{this.weekWater.July.totalUnit1.toFixed(2)}} </td>
                      <td> {{this.weekWater.July.totalPrice1.toFixed(2)}} </td>
                    </tr>
                    <tr>
                      <td>สิงหาคม</td>
                      <td> {{this.weekFire.August.totalUnit1.toFixed(2)}} </td>
                      <td> {{this.weekFire.August.totalPrice1.toFixed(2)}} </td>
                      <td> {{this.weekWater.August.totalUnit1.toFixed(2)}} </td>
                      <td> {{this.weekWater.August.totalPrice1.toFixed(2)}} </td>
                    </tr>
                    <tr>
                      <td>กันยายน</td>
                      <td> {{this.weekFire.September.totalUnit1.toFixed(2)}} </td>
                      <td> {{this.weekFire.September.totalPrice1.toFixed(2)}} </td>
                      <td> {{this.weekWater.September.totalUnit1.toFixed(2)}} </td>
                      <td> {{this.weekWater.September.totalPrice1.toFixed(2)}} </td>
                    </tr>
                    <tr>
                      <td>ตุลาคม</td>
                      <td> {{this.weekFire.October.totalUnit1.toFixed(2)}} </td>
                      <td> {{this.weekFire.October.totalPrice1.toFixed(2)}} </td>
                      <td> {{this.weekWater.October.totalUnit1.toFixed(2)}} </td>
                      <td> {{this.weekWater.October.totalPrice1.toFixed(2)}} </td>
                    </tr>
                    <tr>
                      <td>พฤศจิกายน</td>
                      <td> {{this.weekFire.November.totalUnit1.toFixed(2)}} </td>
                      <td> {{this.weekFire.November.totalPrice1.toFixed(2)}} </td>
                      <td> {{this.weekWater.November.totalUnit1.toFixed(2)}} </td>
                      <td> {{this.weekWater.November.totalPrice1.toFixed(2)}} </td>
                    </tr>
                    <tr>
                      <td>ธันวาคม</td>
                      <td> {{this.weekFire.December.totalUnit1.toFixed(2)}} </td>
                      <td> {{this.weekFire.December.totalPrice1.toFixed(2)}} </td>
                      <td> {{this.weekWater.December.totalUnit1.toFixed(2)}} </td>
                      <td> {{this.weekWater.December.totalPrice1.toFixed(2)}} </td>
                    </tr>
                </table>
              </div>
              <!-- -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-  -->
              <div class="column">
                <table class="table is-bordered"  >
                  <thead>
                    <tr>
                      <th colspan="5" >
                        <center>  <label for="recipient-name" class="form-control-label"><h3> สรุปผลกำไร </h3> </label> </center>
                      </th>
                    </tr>
                    <tr>
                      <th></th>
                      <th colspan="2">ค่าไฟฟ้า</th>
                      <th colspan="2">ค่าไฟฟ้า + ค่าน้ำประปา</th>
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
