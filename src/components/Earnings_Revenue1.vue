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
            <br>
          </div>
      </section>
    <!--  จบ แทปฟ้า -->
<br>
  <div class="tabs is-centered is-boxed is-medium">
  <ul>
    <li >
      <a >
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
    <li >
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
<div class="columns">
  <div class="column"></div>
  <div class="column is-four-fifths">
    <!--  เมนูย่อย วัน -->
    <div class="tabs is-fullwidth">
      <ul class="nav nav-pills mb-3"  role="tablist">
      <li class="nav-item" v-on:click="credit_left()">
        <a class="btn-light active"  data-toggle="pill"   aria-controls="pills-home" aria-selected="true">Day</a>
      </li>
      <li class="nav-item" v-on:click="Add_credit_center()" >
        <a class="btn-light"  data-toggle="pill"   aria-controls="pills-profile" aria-selected="false">Week</a>
      </li>
      <li class="nav-item" v-on:click="Add_credit_right()">
        <a class="btn-light"  data-toggle="pill"   aria-controls="pills-contact" aria-selected="false">Month</a>
      </li>
    </ul>

    </div>
    <!-- จบ เมนูย่อย วัน -->
    <div class="box">
      <div class="graph">
        <div class="m"></div>
        <div class="tu"></div>
        <div class="w"></div>
        <div class="tr"></div>
        <div class="f"></div>
        <div class="sa"></div>
        <div class="su"></div>
      </div>
      </div>
    <h1>Daily CSS Images :: 30 Bar Graph</h1>
    ---
    <link href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' rel='stylesheet'>
    <chart-pie :data='chartData' :config='chartConfig'></chart-pie>
  </div>
    <div class="column"></div>
</div>
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
      showusers: '',
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

</script>

<style lang="css">
@import url('https://fonts.googleapis.com/css?family=Luckiest+Guy');
@import url('https://fonts.googleapis.com/css?family=Montserrat:900');
body{
  background: #FFC7C7;
  font-family: 'Luckiest Guy', cursive;
}
h1{
  font-family: 'Luckiest Guy', cursive;
  color: #FF8484;
  text-shadow: 2px 2px #BA6161;
  text-align: center;
}
.box{
  position: relative;
  height: 400px;
  margin: auto;
  overflow: hidden;
  top: 10px;
}
.graph{
  width: 90%;
  height: 80%;
  position: absolute;
  border-left: 2px solid #FF8484;
  border-bottom: 2px solid #FF8484;
  left: 5%;
}
.graph:after{
  content: 'Week';
  position: absolute;
  text-align: center;
  bottom: -25px;
  margin: auto;
  left: 0;
  color: #BA6161;
  right: 0;
}
.graph:before{
  content: 'Productivity';
  position: absolute;
  bottom: 50%;
  left:-64px;
  color: #BA6161;
  transform: rotate(-90deg);
}
.m{
  height: 80%;
  width: calc(100% / 8);
  background: #FF8484;
  position: absolute;
  bottom: 0;
  left: 0;
  animation: up1 1s ease-in;
}
@keyframes up1{
  0%{
    height: 0;
  }
  100%{
    height: 80%;
  }
}
.tu{
  height: 30%;
  width: calc(100% / 8);
  background: #FF8484;
  position: absolute;
  bottom: 0;
  left: 14.2857142857%;
  animation: up2 1s ease-in;
}
@keyframes up2{
  0%{
    height: 0;
  }
  100%{
    height: 30%;
  }
}
.w{
  height: 20%;
  width: calc(100% / 8);
  background: #FF8484;
  position: absolute;
  bottom: 0;
  left: 28.5714285714%;
  animation: up3 1s ease-in;
}
@keyframes up3{
  0%{
    height: 0;
  }
  100%{
    height: 20%;
  }
}
.tr{
  height: 30%;
  width: calc(100% / 8);
  background: #FF8484;
  position: absolute;
  bottom: 0;
  left: 42.8571428571%;
  animation: up4 1s ease-in;
}
@keyframes up4{
  0%{
    height: 0;
  }
  100%{
    height: 30%;
  }
}
.f{
  height: 50%;
  width: calc(100% / 8);
  background: #FF8484;
  position: absolute;
  bottom: 0;
  left: 57.1428571429%;
  animation: up5 1s ease-in;
}
@keyframes up5{
  0%{
    height: 0;
  }
  100%{
    height: 50%;
  }
}
.sa{
  height: 40%;
  width: calc(100% / 8);
  background: #FF8484;
  position: absolute;
  bottom: 0;
  left: 71.4285714286%;
  animation: up6 1s ease-in;
}
@keyframes up6{
  0%{
    height: 0;
  }
  100%{
    height: 40%;
  }
}
.su{
  height: 10%;
  width: calc(100% / 8);
  background: #FF8484;
  position: absolute;
  bottom: 0;
  left: 85.7142857143%;
  animation: up7 1s ease-in;
}
@keyframes up7{
  0%{
    height: 0;
  }
  100%{
    height: 10%;
  }
}
</style>
