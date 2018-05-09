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
            <span class="icon is-small"><i class="fa fa-users"></i></span>&nbsp;
            <span v-on:click="home()">MEMBER</span>
          </a>
          <a class="navbar-item">
            <span class="icon is-small"><i class="fa fa-user-plus"></i></span>&nbsp;
            <span v-on:click="addadmin()" >Add admin</span>
          </a>
          <a class="navbar-item is-active">
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

<!--  เมนูย่อย เครดิต -->
  <div class="columns">
    <div class="column"></div>
      <div class="column is-four-fifths">
        <div class="tabs is-fullwidth">

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
      </div>
    <div class="column"></div>
  </div>
<!-- จบ เมนูย่อย เครดิต -->


<!--  ตาราง user เครดิต -->

  <div  class="table1" >

  <table class="table is-hoverable" v-if= " type === 'addcredit'" >
    <thead class="table-secondary">
      <tr>
        <th scope="col">E-mail</th>
        <th scope="col">Photo</th>
        <th scope="col">Status</th>
        <th scope="col">Approved</th>
      </tr>
    </thead>
      <tbody  v-for = " (Users, key, count) in showimage"  >
        <tr   v-if= "Users.status === 'Waiting for Approve'">
          <td>  {{Users.email}} </td>
          <td width="17%">
              <img data-toggle="modal" :data-target="'#'+key" class="image is-48x48" v-bind:src="Users.url"/>
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
            <td>  <span class="tag is-danger">{{Users.status}}</span>   </td>
            <td>   <a type="button" class="btn btn-primary" data-toggle="modal" :href="'#'+Users.uid"  @click="keyimage(key)">Approved  </a>
               <div   v-for = " (User, key, count) in showusers"  >
                 <div class="modal fade" :id="User.id" tabindex="-1" role="dialog"  :href="'#'+Users.uid" aria-hidden="true">
                   <div class="modal-dialog" role="document">
                     <div class="modal-content">
                       <div class="modal-header">
                         <h5 class="modal-title" :id="User.id"><i class="fa fa-money" aria-hidden="true"></i> Add credit (<b>{{User.email}}</b>)</h5>
                         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                           <span aria-hidden="true">&times;</span>
                         </button>
                       </div>
                       <div class="modal-body">
                          Do you want to add money <input type="number" min="0" max="1000" class="button" name="" value="0" v-model="addmoney"> Bath
                       </div>
                       <div class="modal-footer">
                         <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                         <button type="button" class="btn btn-primary" data-dismiss="modal" @click="update(key,Users.key,User.money,addmoney,User.email,User.id,User.name)" >Submit</button>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </td>
     </tr>
      </tbody>
  </table>
  <!-- Modal -->


  <!-- ------------------------------------ -->
  <table class="table is-hoverable" v-if= " type === 'Success Approve'" >
    <thead class="table-secondary">
      <tr>

        <th scope="col">E-mail</th>
        <th scope="col">Photo</th>
        <th scope="col">Status</th>

      </tr>
    </thead>
      <tbody v-for = " (Users, key, count) in showimage"  >
        <tr   v-if= "Users.status === 'Approved'">

          <td>  {{Users.email}}  </td>
          <td width="30%">
            <img data-toggle="modal" :data-target="'#'+key" class="image is-48x48" v-bind:src="Users.url"/>
          <div :id="key" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                  <div class="modal-body">
                  <center>  <img v-bind:src="Users.url"/></center>
                  </div>
              </div>
            </div>
          </div>
          </td>
            <td>  <span class="tag is-success">{{Users.status}}</span>    </td>

            <!-- <td> <br><br> <a class="btn btn-primary" data-toggle="collapse" :href="'#'+Users.uid" aria-expanded="false" aria-controls="collapseExample"> Approved </a></td> -->
  </a>
     </tr>
      </tbody>
  </table>
  <!--  ----------------------------- -->
   <table class="table is-hoverable" v-if= " type === 'credit'" >
     <thead class="table-secondary">
       <tr>

         <th scope="col">#</th>
         <th scope="col">E-mail</th>
         <th scope="col">Money</th>
         <th scope="col">Edit Money</th>
         <th scope="col"></th>

       </tr>
     </thead>
       <tbody v-if="checkEdit !== key"  v-for = " (User, key, count) in showusers">
         <tr >

            <td>  {{count+1}}  </td>
           <td>  {{User.email}}  </td>
           <td> {{User.money}}</td>
           <td><button type="button" class="button is-danger is-outlined " name="buttonAdd" @click="swap(key)" >Edit money</button> </td>

         </tr>
       </tbody>
       <tbody v-else >
         <tr >

            <td>  {{count+1}}  </td>
           <td>  {{User.email}}  </td>
           <td> <input type="number" name=""  v-model="User.money"></td>
           <td> <button type="button" class="button button is-success " name="buttonAdd" @click="Editmoney(key,User.money,User.email)" >Save money</button> </td>
           <td> <button type="button" class="button is-danger" name="buttonAdd" @click="cancel()" >Cancel</button> </td>

         </tr>
       </tbody>
   </table>

  </div>
<!-- จบ ตาราง user เครดิต -->
<!-- Button trigger modal -->
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
      input: 'show',
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
      keyimage1: '',
      addEditmoney: 0,
      num: '',
      Status: 'Waiting for Approve',
      Transfer_money: 0
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
    pullData: function () {   /* แสดงชือตาราง User ที่ส่งรูปมาให้ Approved */
      let that = this
      firebase.database().ref('/image/').once('value').then(function (snapshot) {
        that.showimage = snapshot.val()
      })
      firebase.database().ref('/users/').once('value').then(function (snapshot) {
        that.showusers = snapshot.val()
      })
      for (var mai in this.showimage) {
        this.num = this.showimage[mai].email
      }
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
    update: function (key, key1, money, addmoney, mail, id, name) {
      console.log(key)
      console.log(this.keyimage)
      money = +money + +addmoney
      this.Transfer_money = +this.Transfer_money + +addmoney
      if (addmoney > 0 && addmoney <= 1000) {
        this.$dialog.confirm({
          title: 'Add Credit',
          message: 'Are you sure you want to <u>Add Credit </u> </br><b> ' + mail + ' </br> <h3> Money : ' + addmoney + '  Bath.</h3></b>',
          confirmText: 'Confirm',
          type: 'is-success',
          hasIcon: true,
          onConfirm: () => {
            if (money >= 0) {
              firebase.database().ref('/users/').child(key).update({
                money: money,
                Transfer_money: this.Transfer_money
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
          message: 'Please enter the money 1-1000 bath</br> <b>Please try again. </b> ',
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
    cancel: function () {
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
    },
    Editmoney: function (key, addEditmoney, email) {
      console.log('passdsa')
      this.checkEdit = ''
      if (addEditmoney > 0 && addEditmoney <= 1000) {
        this.$dialog.confirm({
          title: 'Edit Credit',
          message: 'Are you sure you want to <u>Edit Credit </u> </br><b> ' + email + ' </br> <h3> Money : ' + addEditmoney + '  Bath.</h3></b>',
          confirmText: 'Confirm',
          type: 'is-success',
          hasIcon: true,
          onConfirm: () => {
            firebase.database().ref('/users/').child(key).update({
              money: addEditmoney
            })
            this.pullData()
          }
        })
      } else {
        this.$dialog.alert({
          title: 'Error',
          message: 'Please enter the money 1-1000 bath</br> <b>Please try again. </b> ',
          type: 'is-danger',
          hasIcon: true,
          icon: 'times-circle',
          iconPack: 'fa'
        })
        this.pullData()
      }
      this.pullData()
    }
  }
}
</script>

<style lang="css">
.table1{
  width: 60%;
  margin-left: 20%;
}
</style>
