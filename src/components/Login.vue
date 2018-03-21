<template>
  <div class="login">
      <div class="hero is-medium is-primary is-fullheight">
            <div class="content"></br></br>

              <h1 class="title is-1" style="font-family:  'Russo One', sans-serif;" >W A S H </h1>
            <figure> <br> <img src="../assets/logo1.gif"> <br> </figure>

          <div class="login1" @keyup.enter="signIn()"> <!-- enter เข้าระบบ -->
              <div class="columns">
                <div class="column"></div>
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
                          <div v-if="email === admin.email ">{{admin.email}}</div>
                        </div>
                            <a class="button is-white is-outlined"> <span class="icon is-small"> <i class="fa fa-sign-in"></i>  </span>    <span @click="signIn()">Login</span></a>
                              <br><br><br>
                    </article>
                  </div>
              <div class="column"></div>
          </div>
      </div>


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
        status: 'false'
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
      signIn: function () {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
          (user) => {
            this.$router.replace('home1')
          },
          (err) => {
            // alert('Oops. ' + err.message)
            for (var mai in this.showAdmin) {
              if (this.email === this.showAdmin[mai].email && this.password === this.showAdmin[mai].password) {
                this.status = 'true'
              }
            }
            if (this.status === 'true') {
              console.log('this.status : ' + this.status)
              firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                (user) => {
                  firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
                    (user) => {
                      this.$router.replace('home1')
                    }
                  )
                }
              )
            } if (this.status === 'false') {
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
  }


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
