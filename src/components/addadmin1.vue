<template lang="html">
  <div class="a">
    <!--  แทปฟ้า -->
    <section class="hero is-primary is-bold">
        <div class="container"><br>
          <h1 class="title is-1" style="font-family: 'Seymour One', sans-serif;">
         W a s h  {{this.user}}
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
<ul>
  <li >
    <a >
      <span class="icon is-small"><i class="fa fa-users"></i></span>
      <span  v-on:click="home()">MEMBER</span>
    </a>
  </li>
  <li class="is-active">
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
  <li>
    <a>
      <span class="icon is-small"><i class="fa fa-pie-chart"></i></span>
      <span v-on:click="Earnings_Revenue()">Earnings Revenue</span>
    </a>
  </li>
</ul>
</div>
<!--  จบ เมนู -->

<!--  เริ่ม add user -->
<div class="columns">
  <div class="column"></div>
  <div class="is-half">
        <article class="message is-info" v-if ="type === 'addadmincolumn'" >
          <div class="message-header">
            <a class="button  button is-info "  @click="addadmincolumn()"><span class="icon is-small">  <i class="fa fa-user-plus"></i></span><span >Add Admin</span></a>
            <a class="button is-info " @click="deleteaccount()" ><span class="icon is-small">  <i class="fa fa-trash"></i></span><span >Delete Account</span></a>

          </div>
          <div class="message-body">

            <!-- Main container -->
            <nav class="level-item">
              <!-- Left side -->
              <div class="level-left">
                <div class="level-item">
                </div>
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
                                                  <input type="text" class="form-control" id="recipient-name" v-model="confirmpassword">
                                                </div>

                                              </form>
                                          </div>

                                              <div class="modal-footer">

                                                <div  v-for = " (admin, key, count) in showAdmin">
                                                    <p v-if ="admin.email === user ">
                                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                    <button type="button" class="btn btn-primary"  @click="add(key)">confirm</button>

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
            <!--  จบ add user -->

          </div>
        </article>


  <article class="message is-danger" v-if ="type === 'deleteaccount'" >
    <div class="message-header">
      <a class="button  button is-danger "  @click="addadmincolumn()"><span class="icon is-small">  <i class="fa fa-user-plus"></i></span><span >Add Admin</span></a>
      <a class="button is-danger " @click="deleteaccount()" ><span class="icon is-small">  <i class="fa fa-trash"></i></span><span >Delete Account</span></a>
    </div>



  <div class="message-body">

    <!-- Main container -->
    <nav class="level-item">
      <!-- Left side -->
      <div class="level-left">
        <div class="level-item">
        </div>
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
                                <input type="text" class="form-control" id="recipient-name" v-model="confirmpassword">
                              </div>

                            </form>
                        </div>

                            <div class="modal-footer">

                              <div  v-for = " (admin, key, count) in showAdmin">
                                  <p v-if ="admin.email === user ">
                                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                  <button type="button" class="btn btn-primary"  @click="remove(key)">confirm</button>

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
  </div>



  <div class="column"></div>
</div>
          <!--  ตาราง user  -->
            <div  class="table1" >
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">E-mail</th>
                  <th scope="col">Password</th>
                  <th scope="col">Delete Account</th>
                </tr>
              </thead>
                <tbody class="" v-for = " (admin, key, count) in showAdmin">
                  <tr>
                    <td>  {{count+1}}  </td>
                    <td> {{admin.email}} </td>
                    <td> ********  </td>
                    <td  v-if = "admin.email === user">
                    </td>
                    <td  v-else = "admin.email !== user">
                      </td>
                  </tr>
                </tbody>

            </table>

            </div>
              <!-- จบ ตาราง user  -->
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
    Earnings_Revenue () {
      this.$router.push({path: '/Earnings_Revenue1'})
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
        this.pullData()
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
.table1{
  width: 80%;
  margin-left: 10%;
}
</style>
