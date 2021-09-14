<template>
  <div class="mt-10">
    <v-layout>
      <v-flex>
        <div class="title">Latest Feed</div>
      </v-flex>
      <v-flex text-right>
        <v-btn icon>
          <v-icon>mdi-menu</v-icon>
        </v-btn>
        <v-btn color="#E7596F" icon>
          <v-icon>mdi-view-grid-outline</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
    <v-row class="mt-5">
      <v-col v-for="(image, i) in feedImages" :key="i">
        <v-card elevation="12" height="230" width="210" color="red lighten-5" class="mr-4">
          <v-img height="230" :src="image"></v-img>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      serverURL: process.env.VUE_APP_URL,
      feedImages: [],
      //User: "tim.chenbw@gmail.com",
      User: localStorage.getItem("userName"),
    };
  },
  async created() {
    console.log("Function call start!")
    // send request 
    const response = await fetch(this.serverURL+'/v1/img/getImage/'+this.User, {
        method: 'GET',
        mode: 'cors',
        headers: {
          "Content-type": "application/json",
          //"Access-Control-Allow-Origin": "*",
        },
    });
    const result = await response.json()
    if (response.status != 200) {
        // login fail
        this.feedImages = []
    } else {
        // work !
        console.log(result)
        this.feedImages = result.ImgURLs
    }
    console.log("Function call finish!")
  }
};
</script>

<style>
</style>