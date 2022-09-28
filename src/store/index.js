import { createStore } from 'vuex'


export default createStore({
  state: {
    data:{
      user:{
          nom:'admin',
          pwd:'admin',
          logged:false
      },
      clients:[
          {
            nom:"Rock",
            prenom:"Lee",
            sexe:"M",
            addresse :"Talatamy",
            numTel :"0349459128",
            anne:"",
            moi:"",
            jours:"",
            heure:"",
            type_client:"",
            nombre:"",
            type_reservation:"",
            etat:true,
            num_table:null,
          },
      ],
    },
    years:[
      2016,2017,2018,2019,2020,2021,2022
    ],
    indexOnglet:0,
    indexOngletOfConfig:0,
    indexOngletOfStock:[0,0],
    
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
