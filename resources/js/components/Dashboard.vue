<template>
  <div>
    <navbar></navbar>
    <v-container>

      <v-layout row class="mb-3">
        <v-tooltip top>
          <v-btn small flat color="grey" @click="sortBy('title')" slot="activator">
            <v-icon left small>folder</v-icon >
            <span class="caption text-lowercase">By project name</span>
          </v-btn>
          <span>Sort by folder</span>
        </v-tooltip>
        <v-tooltip top>
          <v-btn small flat color="grey" @click="sortBy('person')" slot="activator">
            <v-icon left small>person</v-icon>
            <span class="caption text-lowercase">By person</span>
          </v-btn>
          <span>Sort by person</span>
        </v-tooltip>
      </v-layout>

      <v-card class=" mt-2 project " v-for="(item,index) in data" :key="index">
        <v-layout row wrap :class="`pa-4 project ${item.status}`">
          <v-flex xs12 md6 lg6>
            <div class="caption grey--text">Project Title</div>
            <div>{{item.title}}</div>         
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div>{{item.person}}</div>
          </v-flex>
           <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due by</div>
            <div>{{item.dueby}}</div>
          </v-flex>
           <v-flex class="mt-2" xs3 sm4 md2>
             <div class="right">
               <v-chip small :class="` ${item.status} white--text caption`">
                 {{item.status}}
               </v-chip>
             </div>
          </v-flex>
        </v-layout>
      </v-card>

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
      show: false,
      links:[
        {icon:'dashboard',text:'Dashboard',route:'/'},
        {icon:'folder',text:'My Projects',route:'/projects'},
        {icon:'person',text:'Team',route:'/team'},
      ],
      data:[
        {title:'Meu projeto',person:'Medina',dueby:'22/03/2019',status:'approved'},
        {title:'Projeto de testes',person:'Andrade',dueby:'10/03/2019',status:'rejected'},
        {title:'Project at working',person:'Me',dueby:'15/05/1998',status:'waiting'},
      ]
    };
  },
  methods:{
    sortBy(prop){
      this.data.sort((a,b)=> a[prop] < b[prop] ? -1:1)
    }
  }
};
</script>
<style>
  .project.approved{
    border-left: 4px solid #3cd1c2;
  }
  .project.waiting{
    border-left: 4px solid orange
  }
  .project.rejected{
    border-left: 4px solid tomato
  }
   .v-chip.approved{
    background:#3cd1c2
  }
  .v-chip.waiting{
    background: orange
  }
  .v-chip.rejected{
    background: tomato
  }
</style>
