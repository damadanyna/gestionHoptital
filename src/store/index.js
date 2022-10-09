 
 import { createStore } from 'vuex' 
export default createStore({
  state: {
    darkMode:false,
    data:{
      //donnés utilisateur
      user:{
          nom:'admin',
          pwd:'admin',
          logged:true
      },
      //donnés clients
      clients:{},
      //donnés transfiré
      response:{}
    }, 
    dataSending:{},
    statut:{save:'',title:'',url:''},
    //charge l'affiche du login au début de l'application
    formLogin:false,
    formulaire:false, 
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
  async getDataBy(state,url){  
      try {
        const d= await window.axios.get(url) ;
        state.data.response= d;
      } catch (e) {
        console.log(e)
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
        setTimeout(() => { 
          this.state.formulaire=false;
        }, 3000);
      }if(d.data.status==false){ 
        this.state.messageDialogue.shown=true;
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
  }
  },
  actions: {
  },
  modules: {
  }
})
