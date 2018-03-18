<template>
  <div class="login">
      <div class="hero is-medium is-primary is-bold">
            <div class="content"></br></br>
              <h1 class="title is-1" style="font-family:  'Russo One', sans-serif;" >W A S H </h1>
            <figure>
            <br>
              <img src="../assets/logo1.gif">
            <br>
            </figure>
            <div class="login1" @keyup.enter="signIn()"> <!-- enter เข้าระบบ -->
              <div class="columns">
        <div class="column">
        </div>
        <div class="column">
          <article class="tile is-child">
            <div class="field">
              <div class="control">
                <label class="label" >E-mail
                    <input  class="input" type="email" v-model="email"  placeholder="E-mail">
                </label>
              </div>
            </div>
            <div class="field">
              <div class="control">
                <label class="label">Password
                    <input class="input" type="password" v-model="password"  placeholder="Password">
                </label>
              </div>
            </div>
            <div class="" v-for = " (admin, key, count) in showAdmin">
              <div v-if="email === admin.email ">
                {{admin.email}}
              </div>
          </div>
                <a class="button is-white is-outlined"> <span class="icon is-small"> <i class="fa fa-sign-in"></i>  </span>    <span @click="signIn(admin.email)">Login</span>
              </a> <br><br><br>
          </article>
        </div>
        <div class="column">
        </div>
      </div>
        </div>

<br><br><br><br><br><br><br><br><br><br><br>
            </div>
      </div>
</div>
</template>
<script>
  import firebase from 'firebase'
  export default {
    name: 'login',
    data: function () {
      return {
        data: {
          email: '',
          password: ''
        },
        showAdmin: '',
        ma: ''
      }
    },
    created: function () {
      this.pullData()
    },
    methods: {
      pullData: function () {
        let that = this
        firebase.database().ref('/Admin/').once('value').then(function (snapshot) {
          that.showAdmin = snapshot.val()
        })
      },
      signIn: function (dbadmin) {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
          (user) => {
            this.$router.replace('home1')
          },
          (err) => {
            // alert('Oops. ' + err.message)
            for (var mai in this.showAdmin) {
              if (this.email === this.showAdmin[mai].email) {
                this.ma = 'true'
              }
            }
            if (this.ma === 'true') {
              firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                (user) => {
                  firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
                    (user) => {
                      this.$router.replace('home1')
                    }
                  )
                }
              )//
            } else {
              this.$dialog.alert({
                title: 'Error',
                message: 'Opps. ' + err.message,
                type: 'is-danger',
                hasIcon: true,
                icon: 'times-circle',
                iconPack: 'fa'
              })
            }
          }
        )
      }
    }
  }
</script>

<style scoped>  /* "scoped" attribute limit the CSS to this component only */
  .login {
    text-align: center;
    height: 100%;
    width:  100%;
  /*  background-color: red;*/
  }
/* .login1{
  width:  150%;
} */
.label{
  color: #FFFFFF;
}
input[type=email], input[type='password']  {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 1px solid #FFFFFF;
  background-color: #624ec1;
  color: #FFFFFF;
}
</style>
