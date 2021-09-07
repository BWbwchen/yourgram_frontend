<template>
  <v-navigation-drawer class="pa-4 mt-6" app clipped floating permanent right v-model="drawer">
    <v-layout>
      <v-card height="300" width="100%">
        <v-img
          height="300"
          width="100%"
          src="https://images.unsplash.com/photo-1491336477066-31156b5e4f35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
        ></v-img>
      </v-card>
    </v-layout>
    <v-layout class="mt-6">
      <div class="title">Bo Wei Chen</div>
    </v-layout>
    <v-layout>
      <v-flex>
        <v-layout>
          <div class="subtitle-2">666</div>
          <div class="subtitle-2 ml-1 grey--text">Photos</div>
        </v-layout>
      </v-flex>
      <v-flex>
        <v-layout>
          <div class="subtitle-2">66</div>
          <div class="subtitle-2 ml-1 grey--text">Followers</div>
        </v-layout>
      </v-flex>
    </v-layout>
    <v-layout class="mt-4 subtitle-2 grey--text">
      Bo-Wei, Tim, is a backend engineer based in Taiwan now.
      <br />
      <br />He is seeking software engineer position now.
    </v-layout>
    <v-layout class="mt-5">
      <v-flex>
        <div class="subtitle-2">Locations</div>
        <div class="subtitle-2 grey--text">Based in HsinChu, Taiwan.</div>
      </v-flex>
    </v-layout>
    <v-layout class="mt-5">
      <v-flex>
        <div class="subtitle-2">Profession</div>
        <div class="subtitle-2 grey--text">Backend Developer</div>
      </v-flex>
    </v-layout>
  </v-navigation-drawer>
</template>

<script>
export default {};
</script>

<style>
</style>