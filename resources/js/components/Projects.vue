<template>
  <div>
    <navbar></navbar>
    <v-layout row wrap>
      <v-flex xs12 sm8 offset-sm2>
        <v-expansion-panel>
          <v-expansion-panel-content v-for="(item,index) in item" :key="index">
            <div slot="header">{{item.title}}</div>
            <v-card>
              <v-card-text class="px-4 grey--text">
                <div class="font-weight-bold">Due by: {{item.name}} </div>
                {{item.text}}
                <div class="mt-2">{{item.date}} </div>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log("Component mounted.");
  },
  data() {
    return {
      search: "",
      item: [
       {title:'item1',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a nulla quam. Nullam eget ipsum dolor. Mauris elementum, ante ac finibus aliquam',name:'João Medina',date:'25/03/2019 02:08'},
       {title:'items',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a nulla quam. Nullam eget ipsum dolor. Mauris elementum, ante ac finibus aliquam',name:'Andrade',date:'05/03/2019 08:08'},
       {title:'Caralha',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a nulla quam. Nullam eget ipsum dolor. Mauris elementum, ante ac finibus aliquam',name:'O melhor',date:'11/01/2018 06:08'}
      ]
    };
  }
};
</script>
