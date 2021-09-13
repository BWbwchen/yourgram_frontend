<template>
<div>
	<v-form v-model="valid" @submit.prevent="login">
    <v-container>
    <h1>Login Page</h1>

      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="username"
            label="Name"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="password"
            :rules="passwordRules"
            label="Password"
            type="password"
            required
          ></v-text-field>
        </v-col>
      </v-row>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      type="submit"
    >
      Login
    </v-btn>

    <v-btn
      :disabled="!valid"
      color="warning"
      class="mr-4"
      @click="register"
    >
      Register
    </v-btn>
      
    <h1>{{ login_status }}</h1>
    </v-container>
	</v-form>
</div>
</template>

<script>
const axios = require('axios');
export default {
	data: () => ({
      valid: false,
      username: '',
      nameRules: [
        v => !!v || 'Name is required',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Password is required', 
      ],
      login_status: '',
    }),
    methods: {
      login(){
        //write login authencation logic here!
        let that = this 
        axios.post(process.env.VUE_APP_URL+'/v1/account/auth', {
          Email: this.email,
          Name: this.username,
          Password: this.password
        })
        .catch(function () {
          // handle error
          that.reset("Email, username, or password is wrong")
        })
        .then(function (response) {
          // handle success
          localStorage.setItem('token', 'ImLogin')
          localStorage.setItem('jwt', response.data.JWTToken)
          localStorage.setItem('user', that.username || that.username)
          that.$router.push('/');
        })
      },
      reset(status_message) {
        this.login_status = status_message
        this.username = ""
        this.email = ""
        this.password = ""
      },

      register() {
        let that = this 
        axios.post(process.env.VUE_APP_URL+'/v1/account/create', {
          Email: this.email,
          Name: this.username,
          Password: this.password
        })
        .catch(function () {
          // handle error
          that.reset("Email, username, or password have been registed!")
        })
        .then(function () {
          // handle success
          that.reset("register success! \n Please Login again")
        })
      }
    } 
  }
</script>