<template>
  <div class="login">
      <div class="tile is-ancestor">
        <div class="tile is-vertical is-8">
          <div class="tile">
          <div class="tile is-parent">
          <article class="tile is-child notification is-danger">
          <figure class="image is-16by9">
          </br>
            <img src="../assets/aaa.gif">
            </br>
          </figure>
          </article>
          </div>
          </div>
        </div>

        <div class="tile is-parent">
          <article class="tile is-child notification is-warning">
            <div class="content"></br></br>
            <p class="title">W e l c o m e   !</p> </br></br>
            <div class="login1" @keyup.enter="signIn()">
                <div class="tile is-ancestor">
                  <div class="tile is-vertical is-8">
                    <div class="tile">
                        <div class="tile is-parent">
                          <article class="tile is-child box">

                            <div class="field"></br>
                              <p class="control has-icons-left has-icons-right">
                                <input class="input" type="email" v-model="email" placeholder="Email">
                                <span class="icon is-small is-left">
                                  <i class="fa fa-envelope"></i>
                                </span>
                                <span class="icon is-small is-right">
                                </span>
                              </p>
                            </div>

                            <div class="field">
                              <p class="control has-icons-left">
                                <input class="input" type="password" v-model="password"  placeholder="Password">
                                <span class="icon is-small is-left">
                                  <i class="fa fa-lock"></i>
                                </span>
                              </p>
                            </div>

                            </br>
                                <a class="button is-info is-outlined"> <span class="icon is-small"> <i class="fa fa-sign-in"></i>  </span>    <span @click="signIn()">Login</span>
                              </a>

                          </article>
                        </div>
                    </div>
                  </div>
                </div>
            </div>

            </div>
          </article>
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
        }
      }
    },
    methods: {
      signIn: function () {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
          (user) => {
            this.$router.replace('home1')
          },
          (err) => {
            alert('Oops. ' + err.message)
          }
        )
      }
    }
  }
</script>

<style scoped>  /* "scoped" attribute limit the CSS to this component only */
  .login {
    text-align: center;
    margin-top: 25px;
    height: 100%;
    width:  100%;
  /*  background-color: red;*/
  }
.login1{
  width:  150%;
}
input[type=email], input[type='password']  {
    border: none;
    border-bottom: 1px solid #F2C45A;
    width:  90%;
}
</style>
