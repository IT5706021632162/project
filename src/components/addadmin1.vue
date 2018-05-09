<template lang="html">
  <div class="a">
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
          <a class="navbar-item is-active">
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


  <div class="columns">
    <div class="column"></div>
      <div class="is-half">

        <!--  เริ่ม add admin -->
          <article class="message is-black" v-if ="type === 'addadmincolumn'" >

            <div class="message-header"> <!-- div นี้คือ ปุ่มกด Add Admin และ Delete Account ตรงกรอบอะ -->
              <a class="button is-info "  @click="addadmincolumn()"><span class="icon is-small">  <i class="fa fa-user-plus"></i></span><span >Add Admin</span></a>
              <a class="button is-danger is-outlined " @click="deleteaccount()" ><span class="icon is-small">  <i class="fa fa-trash"></i></span><span >Delete Account</span></a>
            </div>

          <div class="message-body">
            &nbsp;&nbsp;&nbsp;<label for="recipient-name" class="form-control-label"> <h3> New Account </h3></label>
              <nav class="level-item">
                <div class="level-left">
                  <div class="level-item"></div>
                    <div class="level-item">
                      <div class="field has-addons" >

                          <p class="control">
                            <input class="input" type="email"  v-model="email"  placeholder="E-mail">
                          </p>
                          <p class="control">
                            <input class="input" type="password"  v-model="password" placeholder="Password">
                          </p>

                            <!-- start Newaccount -->
                              <p class="control">
                               &nbsp;&nbsp;<a class="button is-info is-outlined" data-toggle="modal" data-target="#addadmincolumn1" data-whatever="@mdo"><span >Add</span><span class="icon is-small">  <i class="fa fa-user-plus"></i></span></a>
                                <div class="modal fade" id="addadmincolumn1" tabindex="-1" role="dialog" aria-labelledby="addadmincolumn2" aria-hidden="true">
                                  <div class="modal-dialog" role="document">
                                    <div class="modal-content">

                                        <div class="modal-header">
                                          <h5 class="modal-title" id="addadmincolumn2"><i class="fa fa-user-plus"></i>&nbsp;Confirm Password New Account : {{this.accountemail}}</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                              <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>

                                        <div class="modal-body">
                                          <form>
                                            <div class="form-group">
                                              <label for="recipient-name" class="form-control-label">Confirm Password : {{this.accountemail}}</label><br>
                                               <input type="password" class="form-control" id="recipient-name" v-model="confirmpassword">
                                            </div>
                                          </form>
                                        </div>

                                        <div class="modal-footer">
                                          <div  v-for = " (admin, key, count) in showAdmin">
                                            <p v-if ="admin.email === user ">
                                              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                              <button type="button" class="btn btn-primary"  data-dismiss="modal" @click="add(key)">confirm</button>
                                            </p>
                                          </div>
                                        </div>

                                    </div>
                                  </div>
                                </div>
                              </p>
                         <!-- end Newaccount -->
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </article>
          <!--  จบ add admin -->
          <!-- ............................................................................................................................................................................................................ -->
          <!--  เริ่ม delete admin -->
  <article class="message is-black" v-if ="type === 'deleteaccount'" >
      <div class="message-header">
        <a class="button is-info is-outlined "  @click="addadmincolumn()"><span class="icon is-small">  <i class="fa fa-user-plus"></i></span><span >Add Admin</span></a>
        <a class="button is-danger " @click="deleteaccount()" ><span class="icon is-small">  <i class="fa fa-trash"></i></span><span >Delete Account</span></a>
      </div>

    <div class="message-body">
      <nav class="level-item">
        <div class="level-left">
          <div class="level-item"></div>
            <div class="level-item">
              <div class="field has-addons" >

                <div  v-for = " (admin, key, count) in showAdmin">
                  <p v-if ="admin.email === user ">
                    <label class="label">  <h3> Delete You Account :  {{admin.email}} </h3> </label>
                  </p>
                </div>

                <!-- start deleteaccount -->
                <p class="control">
                &nbsp;&nbsp;&nbsp;&nbsp;<a class="button is-danger is-outlined" data-toggle="modal" data-target="#deleteadmincolumn1" data-whatever="@mdo"><span >Delete</span><span class="icon is-small">  <i class="fa fa-times"></i></span></a>
                  <div class="modal fade" id="deleteadmincolumn1" tabindex="-1" role="dialog" aria-labelledby="deleteadmincolumn2" aria-hidden="true">
                      <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="deleteadmincolumn2"><i class="fa fa-trash"></i>&nbsp;Delete You Account : {{this.accountemail}}</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                  <span aria-hidden="true">&times;</span>
                                </button>
                            </div>

                            <div class="modal-body">
                                <form>
                                  <div class="form-group">
                                    <label for="recipient-name" class="form-control-label">Confirm Password :</label>
                                    <input type="password" class="form-control" id="recipient-name" v-model="confirmpassword">
                                  </div>
                                </form>
                            </div>

                            <div class="modal-footer">
                              <div  v-for = " (admin, key, count) in showAdmin">
                                <p v-if ="admin.email === user ">
                                  <button type="button" class="btn btn-secondary" data-dismiss="modal" >Close</button>
                                  <button type="button" class="btn btn-primary" data-dismiss="modal" @click="remove(key)">confirm</button>
                                </p>
                              </div>
                            </div>
                        </div>
                     </div>
                </div>
                </p>
                <!-- end deleteaccount -->

            </div>
          </div>
        </div>
      </nav>
      <!--  จบ addd user -->

    </div>
  </article>
   <!--  จบ delete admin -->

      </div>
    <div class="column"></div>
  </div>

          <!--  แสดงตารางชื่อ Admin ทั้งหมด  -->
          <div  class="tableadmin" >
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">E-mail</th>
                  <th scope="col">Password</th>
                </tr>
              </thead>
                <tbody class="" v-for = " (admin, key, count) in showAdmin">
                  <tr>
                    <td>  {{count+1}}  </td>
                    <td> {{admin.email}} </td>
                    <td> ********  </td>
                  </tr>
                </tbody>
            </table>
         </div>
              <!--  แสดงตารางชื่อ Admin ทั้งหมด  -->
 </div>
</template>

<script>
// Initialize Firebase
import firebase from 'firebase'
export default {
  name: 'addadmin',
  data () {
    return {
      isPublic: true,
      data: {
        email: '',
        password: ''
      },
      showAdmin: '',
      count: 0,
      user: '',
      type: 'addadmincolumn',
      accountemail: '',
      accountepassword: '',
      confirmpassword: '',
      key: ''
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
    pullData: function () {  /* แสดงชืตาราง Admin */
      let that = this
      firebase.database().ref('/Admin/').once('value').then(function (snapshot) {
        that.showAdmin = snapshot.val()
        console.log(Object.keys(that.showAdmin))
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
    add: function () {
      if (this.confirmpassword === this.accountepassword) {
        this.data.email = this.email
        this.data.password = this.password
        firebase.database().ref('Admin').push(this.data)
        this.$router.replace('/addadmin1')
        this.pullData()
        this.email = ''
        this.password = ''
        this.confirmpassword = ''
      } else {
        this.$dialog.alert({
          title: 'Error',
          message: 'Incorrect. Enter your password again.',
          type: 'is-danger',
          hasIcon: true,
          icon: 'times-circle',
          iconPack: 'fa'
        })
      }
    },
    remove: function (key) {
      if (this.confirmpassword === this.accountepassword) {
        this.$dialog.confirm({
          title: 'Delete Account',
          message: 'Are you sure you want to <u>Delete</u> </br><b> </b> Account :  ' + this.accountemail + ' <br>This action cannot be undone.',
          confirmText: 'Delete Account',
          type: 'is-danger',
          hasIcon: true,
          onConfirm: () => {
            firebase.database().ref('Admin').child(key).remove()
            var user = firebase.auth().currentUser
            user.delete().then(function () {
              // User deleted.
            })
            firebase.auth().signOut().then(() => {
              this.$router.replace('/')
              this.pullData()
            })
          }
        })
        this.confirmpassword = ''
        this.pullData()
      } else {
        this.$dialog.alert({
          title: 'Error',
          message: 'Incorrect. Enter your password again.',
          type: 'is-danger',
          hasIcon: true,
          icon: 'times-circle',
          iconPack: 'fa'
        })
        this.confirmpassword = ''
      }
    },
    addadmincolumn () {
      this.type = 'addadmincolumn'
      for (var mai in this.showAdmin) {
        if (this.user === this.showAdmin[mai].email) {
          this.accountemail = this.showAdmin[mai].email
          this.accountepassword = this.showAdmin[mai].password
        }
      }
    },
    deleteaccount () {
      this.type = 'deleteaccount'
      for (var mai in this.showAdmin) {
        if (this.user === this.showAdmin[mai].email) {
          this.accountemail = this.showAdmin[mai].email
          this.accountepassword = this.showAdmin[mai].password
        }
      }
    }
  }
}
</script>

<style lang="css">
.tableadmin{
  width: 40%;
  margin-left: 30.5%;;
}
</style>
