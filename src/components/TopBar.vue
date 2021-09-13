<template>
	<v-app-bar flat app clipped-right color="white" clipped>
      <v-spacer></v-spacer>
      <div class="d-flex align-center">
        <v-card color="grey lighten-4" outlined width="300px" class="pa-2 ml-4">
          <v-layout>
            <v-flex>
              <v-icon color="grey">mdi-magnify</v-icon>
              <span class="ml-2 grey--text">Search(Disable now)</span>
            </v-flex>
            <v-flex class="text-right">
              <v-icon color="grey">mdi-microphone-outline</v-icon>
            </v-flex>
          </v-layout>
        </v-card>
      </div>

      <v-spacer></v-spacer>
      <v-btn dark color="#E7596F" class="mr-5" @click="create_post">
        <span class="mr-2">
          <v-icon class="mr-2">mdi-plus</v-icon>Create New Post
        </span>
      </v-btn>
      <v-btn icon class="mr-2">
        <v-icon>mdi-email-outline</v-icon>
      </v-btn>
      <v-btn icon class="mr-5">
        <v-icon>mdi-heart-outline</v-icon>
      </v-btn>

    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="white"
          fab
          dark
          small
          v-bind="attrs"
          v-on="on"
        >
          <v-avatar size="40">
            <img
              lazy-src="https://images.unsplash.com/photo-1491336477066-31156b5e4f35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
              src="https://images.unsplash.com/photo-1491336477066-31156b5e4f35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
              alt="Tim"
            />
          </v-avatar>
        </v-btn>
      </template>
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-btn
              depressed
              rounded
              text
              @click="logout"
            >
              Logout
            </v-btn>
            <v-divider class="my-3"></v-divider>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
      <!--
        <v-card>
          <v-list-item-content class="justify-center">
            <div class="mx-auto text-center">
              <v-avatar
                color="brown"
              >
                <span class="white--text text-h5">Test</span>
              </v-avatar>
              <h3>Name</h3>
              <p class="text-caption mt-1">
                Email
              </p>
              <v-divider class="my-3"></v-divider>
              <v-btn
                depressed
                rounded
                text
              >
                Edit Account
              </v-btn>
              <v-divider class="my-3"></v-divider>
              <v-btn
                depressed
                rounded
                text
              >
                Disconnect
              </v-btn>
            </div>
          </v-list-item-content>
        </v-card>
      -->
      
  </v-app-bar>
</template>

<script>

export default ({
	data: () => ({
    test: false,
	}),
	methods: {
    create_post() {
      this.$router.push('/createPost');
    },
    logout() {
      localStorage.clear();
      this.$router.push('/login');
    }
	}
})
</script>
