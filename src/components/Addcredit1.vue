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
<!--  เมนู -->
<div class="tabs is-centered is-boxed is-medium">
<ul >
  <li>
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
  <li class="is-active">
    <a>
      <span class="icon is-small"><i class="fa fa-money"></i></span>
      <span  v-on:click="Add_user_credit()" >Add user credit</span>
    </a>
  </li>
  <li >
    <a>
      <span class="icon is-small"><i class="fa fa-pie-chart"></i></span>
      <span v-on:click="Earnings_Revenue()">Earnings Revenue</span>
    </a>
  </li>
</ul>
</div>

<!--  จบ เมนู -->

<!--  เมนูย่อย เครดิต -->
<div class="tabs is-fullwidth">
  <!-- <ul>
    <li v-on:click="credit_left()" >
      <a >
        <span class="icon"><i class="fa fa-angle-left"></i></span>
        <span >Add Credit</span>
      </a>
    </li>
    <li v-on:click="Add_credit_center()" >
      <a>
        <span>Status Approve </span>
        <span class="icon"><i class="fa fa-angle-up"></i></span>
      </a>
    </li>
    <li v-on:click="Add_credit_right()" >
      <a>
        <span>Credit</span>
        <span class="icon"><i class="fa fa-angle-right"></i></span>
      </a>
    </li>
  </ul> -->

  <ul class="nav nav-pills mb-3"  role="tablist">
  <li class="nav-item" v-on:click="credit_left()">
    <a class="btn-light active"  data-toggle="pill"   aria-controls="pills-home" aria-selected="true">Add Credit</a>
  </li>
  <li class="nav-item" v-on:click="Add_credit_center()" >
    <a class="btn-light"  data-toggle="pill"   aria-controls="pills-profile" aria-selected="false">Success Approve</a>
  </li>
  <li class="nav-item" v-on:click="Add_credit_right()">
    <a class="btn-light"  data-toggle="pill"   aria-controls="pills-contact" aria-selected="false">Credit</a>
  </li>
</ul>

</div>
<!-- จบ เมนูย่อย เครดิต -->


<!--  ตาราง user เครดิต -->

  <div  class="table1" >

  <table class="table is-hoverable" v-if= " type === 'addcredit'" >
    <thead>
      <tr>
        <th scope="col">E-mail</th>
        <th scope="col">Photo</th>
        <th scope="col">Status</th>
      </tr>
    </thead>
      <tbody v-for = " (Users, key, count) in showimage"  >
        <tr   v-if= "Users.status === 'Waiting for Approve'">
          <td>  {{Users.email}}  </td>
          <td width="17%">
              <img data-toggle="modal" :data-target="'#'+key" class="image is-128x128" v-bind:src="Users.url"/>
            <div :id="key" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-body">
                    <center>  <img v-bind:src="Users.url"/> </center>
                    </div>
                </div>
              </div>
            </div>
            <!-- <a class="lightbox" :href="'#'+key"><img class="image is-128x128" v-bind:src="Users.url"/></a>
              <div class="lightbox-target" :id="key"><a class="lightbox-close" href="#"></a></div> -->
          </td>
            <td> <br><br> <span class="tag is-danger">{{Users.status}}</span>    </td>
            <td> <br><br> <a class="btn btn-primary" data-toggle="collapse" :href="'#'+Users.uid" aria-expanded="true" aria-controls="collapseExample"  @click="keyimage(key)">Approved </a></td>
          <tr v-if= "Users.status === 'Waiting for Approve'">
              <td colspan="4">
                    <div   v-for = " (User, key, count) in showusers"  >
                      <div class="collapse" :id="User.id">
                        <div class="card card-body">
                          <table>
                              <thead>
                                <tr>
                                  <th scope="col">E-mail</th>
                                  <th scope="col">Money</th>
                                  <th scope="col">Addmoney</th>
                                   <!-- <th scope="col">Edit money</th> -->
                                </tr>
                                <tr>

                                  <td>  {{User.email}}</td>
                                  <td>  {{User.money}}</td>
                                  <td>  <input type="number" class="button" name="" value="" v-model="addmoney"> </td>
                                  <td>  <button type="button" class="button is-info is-outlined" name="buttonAdd" @click="update(key,Users.key,User.money,addmoney,User.email,User.id,User.name)" >Submit</button>  </td>
                                  <td>   <a class="btn btn-danger" data-toggle="collapse" :href="'#'+User.id" aria-expanded="false" aria-controls="collapseExample"> Cancel </a> </td>
                                </tr>
                              </thead>
                          </table>
                        </div>
                      </div>
                    </div>  <br>
              </td>
          </tr>
     </tr>
      </tbody>
  </table>
  <!-- ------------------------------------ -->
  <table class="table" v-if= " type === 'Success Approve'" >
    <thead>
      <tr>

        <th scope="col">E-mail</th>
        <th scope="col">Photo</th>
        <th scope="col">Status</th>
      </tr>
    </thead>
      <tbody v-for = " (Users, key, count) in showimage"  >
        <tr   v-if= "Users.status === 'Approved'">

          <td>  {{Users.email}}  </td>
          <td width="17%">
            <img data-toggle="modal" :data-target="'#'+key" class="image is-128x128" v-bind:src="Users.url"/>
          <div :id="key" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                  <div class="modal-body">
                  <center>  <img v-bind:src="Users.url"/> </center>
                  </div>
              </div>
            </div>
          </div>
          </td>
            <td> <br><br> <span class="tag is-success">{{Users.status}}</span>    </td>
            <!-- <td> <br><br> <a class="btn btn-primary" data-toggle="collapse" :href="'#'+Users.uid" aria-expanded="false" aria-controls="collapseExample"> Approved </a></td> -->
  </a>
     </tr>
      </tbody>
  </table>
  <!--  ----------------------------- -->
   <table class="table" v-if= " type === 'credit'" >
     <thead>
       <tr>
         <th scope="col">#</th>
         <th scope="col">Name</th>
         <th scope="col">Money</th>
          <!-- <th scope="col">Edit money</th> -->
       </tr>
     </thead>
       <tbody v-if="checkEdit !== key"  v-for = " (User, key, count) in showusers">
         <tr >
            <td>  {{count+1}}  </td>
           <td>  {{User.email}}  </td>
           <td> {{User.money}}</td>
           <!-- <td><button type="button" class="button is-danger is-outlined" name="buttonAdd" @click="swap(key)" >Edit money</button> </td> -->

         </tr>
       </tbody>
   </table>

  </div>
<!-- จบ ตาราง user เครดิต -->

 </div>
</template>

<script>
// Initialize Firebase
import firebase from 'firebase'
export default {
  name: 'Add_user_credit',
  data () {
    return {
      mail: '',
      status: '',
      data: {
        name: '',
        surname: '',
        addmoney: 0
      },
      showusers: '',
      showimage: '',
      checkEdit: '',
      checkEdit1: '',
      type: 'addcredit',
      img: this.$route.params.img,
      keyimage1: ''
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
    update: function (key, key1, money, addmoney, mail, id, name) {
      console.log(key)
      console.log(this.keyimage)
      money = +money + +addmoney
      if (addmoney > 0) {
        this.$dialog.confirm({
          title: 'Add Credit',
          message: 'Are you sure you want to <u>Add Credit </u> </br><b> ' + mail + ' </br>  Money : ' + addmoney + '  Bath.</b>',
          confirmText: 'Confirm',
          type: 'is-success',
          hasIcon: true,
          onConfirm: () => {
            if (money >= 0) {
              firebase.database().ref('/users/').child(key).update({
                money: money
              })
              firebase.database().ref('/image/').child(this.keyimage1).update({
                status: 'Approved'
              })
              this.$toast.open({
                message: '<i class="fa fa-check-circle"></i> Add credit Success !',
                type: 'is-success'
              })
              this.checkEdit = ''
              this.addmoney = 0
              this.pullData()
            } else {
              firebase.database().ref('/users/' + key).set({
                money: addmoney,
                email: mail,
                name: name,
                id: id
              })
              firebase.database().ref('/image/').child(this.keyimage1).update({
                status: 'Approved'
              })
              this.$toast.open({
                message: '<i class="fa fa-check-circle"></i>Add credit Success !',
                type: 'is-success'
              })
            }
            this.checkEdit = ''
            this.addmoney = 0
            this.pullData()
          }
        })
      } else {
        this.$dialog.alert({
          title: 'Error',
          message: 'Please enter the money.</br> <b>Please try again. </b> ',
          type: 'is-danger',
          hasIcon: true,
          icon: 'times-circle',
          iconPack: 'fa'
        })
        this.pullData()
      }
      this.checkEdit = ''
      this.addmoney = 0
      this.pullData()
    },
    cancel: function (key, money) {
      this.checkEdit = ''
    },
    swap: function (key) {
      this.checkEdit = key
    },
    swap2: function () {
      this.checkEdit1 = 'edit'
    },
    credit_left: function () {
      this.type = 'addcredit'
    },
    Add_credit_right: function () {
      this.type = 'credit'
    },
    Add_credit_center: function () {
      this.type = 'Success Approve'
    },
    status: function (key) {
      this.status = key
    },
    keyimage (key) {
      console.log('pass')
      console.log(key)
      this.keyimage1 = key
    }
  }
}
</script>

<style lang="css">
.table1{
  width: 80%;
  margin-left: 10%;
}
</style>
