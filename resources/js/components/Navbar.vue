<template>
  <div>
    <v-toolbar>
      <v-toolbar-side-icon class="grey--text" @click="show = !show"></v-toolbar-side-icon>
      <v-toolbar-title class="grey--text text--upercase">
        <span>The beast ticket</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">

        <v-menu offset-y>
          <v-btn color="grey" flat dark slot="activator">
            <v-icon left>expand_more</v-icon>
            <span>Menu</span>
          </v-btn>
          <v-list>
            <v-list-tile v-for="(item,index) in links" :key="index" router :to="item.route">
              <v-list-tile-title>{{ item.text }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>

        <v-btn flat class="grey--text">
          <span>Sign Out</span>
          <v-icon right>exit_to_app</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-navigation-drawer app absolute class="materialgrey" temporary v-model="show">
      <v-layout column wrap>
        <v-flex xs6 sm4 lg6 offset-sm4 offset-xs4 offset-lg4 class="mb-4 mt-2">
          <v-avatar size="100" class="grey lighten-2">
            <img src="/avatar2.jpg">
          </v-avatar>
          <p class="dark--text subheading mt-2">João Medina</p>
        </v-flex>
      </v-layout>
      <v-list class="pt-0" dense>
        <v-list-tile v-for="(data,index) in links" :key="index" router :to="data.route">
          <v-list-tile-action>
            <v-icon>{{data.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{data.text}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log("Component mounted.");
  },
  data() {
    return {
      show: false,
      links: [
        { icon: "dashboard", text: "Dashboard", route: "/" },
        { icon: "folder", text: "My Projects", route: "/projects" },
        { icon: "person", text: "Team", route: "/team" }
      ]
    };
  }
};
</script>
