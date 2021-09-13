<template>
  <v-app>
    <top-bar />
    <main-nav />
    <profile-right-nav />

    <v-content>
      <ProfilePage />
    </v-content>
  </v-app>
</template>

<script>
import ProfilePage from "@/pages/ProfilePage";
import MainNav from "@/components/MainNav";
import ProfileRightNav from "@/components/ProfileRightNav";
import TopBar from "@/components/TopBar";

export default {

  components: {
    ProfilePage,
    MainNav,
    ProfileRightNav,
    TopBar
  },

  data: () => ({
    drawer: true,
    group: null,
  }),

  watch: {
    group() {
      this.drawer = false;
    }
  },
};
</script>
