 
 import { createStore } from 'vuex' 
export default createStore({
  state: {
    data:{
      //donnés utilisateur
      user:{
          nom:'admin',
          pwd:'admin',
          logged:true,
          //connexion 
          access:3
      },
      //donnés clients
      clients:{},
      //donnés transfiré
      response:{}
    }, 
    dataSending:{},
    pageIndex:0,
    statut:{save:'',title:'',url:'',methode:''
    },
    
    //charge l'affiche du login au début de l'application
    darkMode:false,
    formLogin:false,
    formulaire:false,
    plusOption:false, 
    messageYesNoDialogue:false, 
    
    indexOnglet:0,
    indexOngletOfConfig:0,
    indexOngletOfStock:[0,0],
    indexOngletOfPatient:[0,0],
    messageDialogue:{shown:false,success:true,message:'success'}, 
  },
  getters: {
  },
  mutations: { 
  async getDataBy(state,donnes){  
      try { 
         const d= await window.axios.get(donnes.url,{params:donnes.data}) ; 
        state.data.response= d;
      } catch (e) { 
        state.data.response= e;
      }  
  },
  async saveData(state,donnes){ 
    
      console.log(donnes)
     try {
      const d= await window.axios.post(donnes.url,donnes.data) ;  
      console.log(d.data.status)
      if(d.data.status==true){ 
        this.state.messageDialogue.shown=true;
        this.state.messageDialogue.success=d.data.status;
        this.state.messageDialogue.message='Enregistrement fait'
      }if(d.data.status==false){ 
        this.state.messageDialogue.shown=true;
        console.log(d)
        this.state.messageDialogue.success=d.data.status;
        this.state.messageDialogue.message='Numéro de patient déjà existé';
      } 
    } catch (e) {
      this.state.messageDialogue.shown=true;
      this.state.messageDialogue.success=false;
      this.state.messageDialogue.message=e.message 
    }  
    setTimeout(() => {
      this.state.messageDialogue.shown=false;
    }, 2800);
  },
  async deleteData(state,donnes){  
     try {
      const d= await window.axios.post(donnes.url,donnes.data) ;  
      console.log(d)
      if(d.data.status==true){ 
        this.state.messageDialogue.shown=true;
        this.state.messageDialogue.success=d.data.status;
        this.state.messageDialogue.message='Suppréssion fait' 
      }if(d.data.status==false){ 
        this.state.messageDialogue.shown=true;
        this.state.messageDialogue.success=d.data.status;
        this.state.messageDialogue.message='Erreur de suppréssion';
      } 
    } catch (e) {
      this.state.messageDialogue.shown=true;
      this.state.messageDialogue.success=false;
      this.state.messageDialogue.message=e.message 
    }  
  }
  },
  actions: {
  },
  modules: {
  }
})
