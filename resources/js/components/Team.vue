<template>
  <div>
    <navbar></navbar>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="(person,index) in team" :key="index">
          <v-card flat class="text-xs-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey lighten-2">
                <img :src="`${person.avatar}`" >
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{person.name}}</div>
              <div class="grey--text">{{person.role}}</div>
            </v-card-text>
            <v-card-actions>
              <v-tooltip bottom>
                <v-btn flat color="grey" slot="activator">
                  <v-icon small left>message</v-icon>
                  <span>Message</span>
                </v-btn>
                <span>send a message</span>
              </v-tooltip>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log("Component mounted.");
  },
  data() {
    return {
      team:[
        {name:'Andrade',role:'Little Kid',avatar:'/avatar1.jpg'},
        {name:'João Medina',role:'Web student developer',avatar:'/avatar2.jpg'},
        {name:'Eu mesmo só que Melhor',role:'Android developer',avatar:'/avatar3.jpg'},
        {name:'Giullia',role:'Quimica',avatar:'/avatar4.png'},
      ]
    };
  }
};
</script>
<style>

</style>
