<template>
<div>
	<v-form v-model="valid">
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
            required
          ></v-text-field>
        </v-col>
      </v-row>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="login"
    >
      Login
    </v-btn>
      
    </v-container>
	</v-form>
</div>
</template>

<script>
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
      ]
    }),
    methods: {
      login(){
        //write login authencation logic here!
        if( this.email == 'abcd@1234' && this.password == '1234' ){
            console.log("login success")
          localStorage.setItem('token', 'ImLogin')
          this.$router.push('/');
        } else{
            console.log("login failed")
        }
      }
    } 
  }
</script>