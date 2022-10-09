<template>
    <div class="flex flex-row h-full  w-full  bg-slate-100 start-window-drag ">
      <div class=" w-full h-full bg-stone-700  flex justify-center items-center">  
          <div class=" absolute top-0 left-4">
            <span class=" text-white">
              Page d'Accueil
            </span>
          </div>         
        <div class="flex absolute top-0 right-0 px-3 flex-row w-36 justify-center z-50 h-7 stop-window-drag" >  
          <svg  class=" w-7 transform hover:scale-150 cursor-pointer mr-5 -mt-2" xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path  class=" fill-current text-stone-200" d="M10 25.5v-3h28v3Z"/></svg>
          <svg class=" w-4 transform hover:scale-150 cursor-pointer mr-5" viewBox="0 0 24 24"><path class=" fill-current text-stone-200" d="M19 19V5H5v14h14m0-16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-8  " /></svg>
          <svg class=" w-5 transform hover:scale-150 cursor-pointer group "  viewBox="0 0 24 24"><path class=" group-hover:text-red-600 fill-current text-stone-200" d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" /></svg>
        </div> 
       <div class=" grid grid-cols-3">
        <div v-for="item, i in list_app" :key="i" class=" mx-16 my-10" @click="selectedBox(i)" >
            <router-link :to="item.url"   class=" group border-4 border-transparent hover:border-white my-shadow   px-24 py-8 stop-window-drag rounded-md flex flex-col"
            :class="i==0?'bg-indigo-400 ':i==index?'border-white ':''">
            <div class="transform group-hover:scale-150 cursor-pointer  items-center justify-center flex flex-col">
                <div v-html="item.ico"></div> 
                <span class=" " v-text="item.text"
                :class="i==0?'  text-white':'text-stone-300'"></span> 
            </div> 
          </router-link>
        </div>
       </div>
      </div> 
    <div v-if="this.$store.state.formLogin"  class="stop-window-drag justify-center items-center absolute blures_dark w-full flex h-screen top-0 left-0"> 
    <div class=" flex flex-col py-5 bg-white my-shadow rounded-xl"> 
        <div class=" w-full flex text-center">
          <span  class=" text-4xl text-gray-500 w-full text-center pb-5">Authentification </span>
          <div class=" ">
            <div @click="this.$store.state.formLogin=false" class=" group absolute -ml-9  transform cursor-pointer duration-200">
              <svg class=" group-hover:scale-150 duration-150 w-6" viewBox="0 0 24 24"><path class=" fill-current group-hover:text-red-500" d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" /></svg>
            </div>
          </div>
        </div>
        <div class="flex-row flex px-12 py-3">
          <div class=" flex flex-col px-7">
            <div class=" flex flex-col mb-3">
              <span class=" text-stone-500 text-sm">Entrez votre Nom</span>
              <input type="text" placeholder="Ex: Rakot..." class=" border border-stone-300 outline-none rounded-lg py-1 px-3 focus:border-indigo-600 w-64">
            </div>
            <div class=" flex flex-col mb-3">
              <span class=" text-stone-500 text-sm">Ensuite votre mots de passe</span>
              <input type="password" placeholder="Mots de passe utilisateur" class=" border border-stone-300 outline-none rounded-lg py-1 px-3 focus:border-indigo-600 w-64">
            </div> 
          </div>  
        </div>
        <div class=" w-full flex flex-center px-20">
          <button @click="login()" class=" bg-stone-400 w-full py-2 rounded-xl text-white font-semibold">Enregistrer</button>
        </div>
    </div> 
    </div>  
    </div>
  </template>
  <script> 
  export default {
      layout: "blog",
      data(){
        return{
          index:0,
          list_app:[
          {
              text: 'Tableau de Bord',
              url: '/',
              ico: `
            <svg class=" w-32 " viewBox="0 0 24 24">
              
              <path 
                 class="fill-current text-white" d="M17 17h-2v-4h2m-4 4h-2V7h2M9 17H7v-7h2m10-7H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" />
            </svg>`,
            },
            {
              text: 'Patients',
              url: '/patients',
              ico: `
            <svg class=" w-32 " viewBox="0 0 24 24"> 
              <path
              class="fill-current text-white"
                d="M12 5.5A3.5 3.5 0 0 1 15.5 9a3.5 3.5 0 0 1-3.5 3.5A3.5 3.5 0 0 1 8.5 9 3.5 3.5 0 0 1 12 5.5M5 8c.56 0 1.08.15 1.53.42-.15 1.43.27 2.85 1.13 3.96C7.16 13.34 6.16 14 5 14a3 3 0 0 1-3-3 3 3 0 0 1 3-3m14 0a3 3 0 0 1 3 3 3 3 0 0 1-3 3c-1.16 0-2.16-.66-2.66-1.62a5.536 5.536 0 0 0 1.13-3.96c.45-.27.97-.42 1.53-.42M5.5 18.25c0-2.07 2.91-3.75 6.5-3.75s6.5 1.68 6.5 3.75V20h-13v-1.75M0 20v-1.5c0-1.39 1.89-2.56 4.45-2.9-.59.68-.95 1.62-.95 2.65V20H0m24 0h-3.5v-1.75c0-1.03-.36-1.97-.95-2.65 2.56.34 4.45 1.51 4.45 2.9V20z"
              />  
            </svg>`,
            },
            {
              text: 'Caisse',
              url: '/caisse',
              ico: `
            <svg class=" w-32 " viewBox="0 0 24 24">
              <path
                class="fill-current text-white"
                d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z"
              />
            </svg>`,
            },
            {
              text: 'Stocks',
              url: '/stocks',
              ico: `
            <svg class=" w-32 " viewBox="0 0 24 24"> 
              <path 
                class="fill-current text-white" d="M17 13h-4v4h-2v-4H7v-2h4V7h2v4h4m2-8H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" />
            </svg>`,
            },
            {
              text: 'Utilisateur',
              url: '/utilisateur',
              ico: `
            <svg class=" w-32 " viewBox="0 0 24 24"> 
              <path
                    class="fill-current text-white"
                d="M12 19.2c-2.5 0-4.71-1.28-6-3.2.03-2 4-3.1 6-3.1s5.97 1.1 6 3.1a7.232 7.232 0 0 1-6 3.2M12 5a3 3 0 0 1 3 3 3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3m0-3A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10c0-5.53-4.5-10-10-10z"
              />
            </svg>`,
            },
            {
              text: 'Configuration',
              url: '/configuration',
              ico: `
            <svg class=" w-32 " viewBox="0 0 24 24">  
              <path
                    class="fill-current text-white"
                d="m21.71 20.29-1.42 1.42a1 1 0 0 1-1.41 0L7 9.85A3.81 3.81 0 0 1 6 10a4 4 0 0 1-3.78-5.3l2.54 2.54.53-.53 1.42-1.42.53-.53L4.7 2.22A4 4 0 0 1 10 6a3.81 3.81 0 0 1-.15 1l11.86 11.88a1 1 0 0 1 0 1.41M2.29 18.88a1 1 0 0 0 0 1.41l1.42 1.42a1 1 0 0 0 1.41 0l5.47-5.46-2.83-2.83M20 2l-4 2v2l-2.17 2.17 2 2L18 8h2l2-4z" />
            </svg>`,
            }
          ]
        }
      },
      methods:{
        login(){
          this.$store.state.data.user.logged=true
          this.$store.state.formLogin=false
        },
        selectedBox(i){
          this.$store.state.formLogin=true
          this.index=i;
        }
      } 
  };
  </script>
  <style> 
    #nav,.nav-bg{
      background: #282A42;
    } 
    *{
      transition: 300ms;
    } 
  </style>