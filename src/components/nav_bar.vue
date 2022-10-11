<template>
  <nav class="flex flex-col h-screen"> 
    
    <div :style="this.$store.state.darkMode==false?'background:#2f2f2f;border-right:1px solid #181818;':'background:#282A42'" :class="this.$store.state.darkMode==false?'':'my-shadow'" class="flex flex-col h-full  bg-white">
      <!-- header-bar -->
      <div  class="flex w-full   justify-between " :class="wrapMenu ? '  py-4' : 'mt-4'" >  
        <div v-if="wrapMenu"  class=" flex items-center justify-center  ">
          <svg class=" w-7" viewBox="0 0 24 24"><path d="M20 2v16c0 1.11-.89 2-2 2H6c-1.11 0-2-.89-2-2V2c0-1.105.89-2 2-2h1v7l2.5-1.5L12 7V0h6a2 2 0 0 1 2 2M7 24h2v-2H7v2m8 0h2v-2h-2v2m-4 0h2v-2h-2v2z" /></svg>
          <span class=" text-2xl font-semibold text-violet-400"> Menu</span>
        </div>
        <div class=" px-2">
          <svg  v-if="wrapMenu" viewBox="0 0 24 24" v-on:click="wrapMenu = false"  class=" w-6 transform hover:scale-150 group cursor-pointer" >
            <path  class="fill-current" d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
          </svg>
          <svg v-else  v-on:click="wrapMenu = true" viewBox="0 0 24 24" class="w-6 transform hover:scale-150 group cursor-pointer" >
            <path  class="fill-current"  d="M4 11v2h12l-5.5 5.5 1.42 1.42L19.84 12l-7.92-7.92L10.5 5.5 16 11H4z" />
          </svg>
        </div>
      </div>
      <!-- logo -->
      <div v-if="wrapMenu" class="flex text-white flex-between px-2">
        <div class=" flex flex-col">
          <span class=" mt-2 text-xs font-bold text-center">HOPITAL LUTHERIENNE ANTSIRABE</span>
       </div> 
      </div> 
      <!-- title -->
      <div v-if="wrapMenu" class=" pt-14" ><span class=" delay-100 text-sm text-stone-400 text-center px-6" >APPS & PAGES</span></div>
      
      <!-- liste -->
      <div :class="wrapMenu ? '  px-6 mt-7'  : 'mt-20'" class="flex flex-col ">
        <div  v-for="liste,i in listItem" :key="i" class="flex w-full" > 
          <router-link   v-if="i==this.$store.state.data.user.access || i==4 || i==5 "  :class="wrapMenu ? ' m-1 py-1  px-1 ' : 'my-1 py-4  px-3'" :to="liste.url" class=" w-full ">
            <div class="flex flex-row">
              <div :title="liste.text"  v-html="liste.ico"></div>
              <span  v-if="wrapMenu"  v-text="liste.text"  class="  ml-3" ></span>
            </div>
          </router-link> 
         <div   @click=" this.$store.state.data.user.logged=false "  v-if="  i==6"  :class="wrapMenu ? ' m-1 py-1  px-1 ' : ' my-1 py-4    px-3'" :to="liste.url" class=" w-full ">
            <div class="flex flex-row cursor-pointer" id="sortie_cont">
              <div :title="liste.text"  v-html="liste.ico"></div>
              <span  v-if="wrapMenu"  v-text="liste.text"  class="  ml-3" ></span>
            </div>
          </div>
        </div>
      </div>
    </div> 
  </nav>
</template>

<script>
  export default {
    data() {
      return {
        listItem: [
          {
            text: 'Tableau de Bord',
            url: '/',
            ico: `
          <svg class=" w-6 transform hover:scale-150 group cursor-pointer" viewBox="0 0 24 24">
            
            <path 
               class="fill-current group-hover:text-white" d="M17 17h-2v-4h2m-4 4h-2V7h2M9 17H7v-7h2m10-7H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" />
          </svg>`,
          },
          {
            text: 'Patients',
            url: '/patients',
            ico: `
          <svg class=" w-6 transform hover:scale-150 group cursor-pointer" viewBox="0 0 24 24"> 
            <path
            class="fill-current group-hover:text-white"
              d="M12 5.5A3.5 3.5 0 0 1 15.5 9a3.5 3.5 0 0 1-3.5 3.5A3.5 3.5 0 0 1 8.5 9 3.5 3.5 0 0 1 12 5.5M5 8c.56 0 1.08.15 1.53.42-.15 1.43.27 2.85 1.13 3.96C7.16 13.34 6.16 14 5 14a3 3 0 0 1-3-3 3 3 0 0 1 3-3m14 0a3 3 0 0 1 3 3 3 3 0 0 1-3 3c-1.16 0-2.16-.66-2.66-1.62a5.536 5.536 0 0 0 1.13-3.96c.45-.27.97-.42 1.53-.42M5.5 18.25c0-2.07 2.91-3.75 6.5-3.75s6.5 1.68 6.5 3.75V20h-13v-1.75M0 20v-1.5c0-1.39 1.89-2.56 4.45-2.9-.59.68-.95 1.62-.95 2.65V20H0m24 0h-3.5v-1.75c0-1.03-.36-1.97-.95-2.65 2.56.34 4.45 1.51 4.45 2.9V20z"
            />  
          </svg>`,
          },
          {
            text: 'Caisse',
            url: '/caisse',
            ico: `
          <svg class=" w-6 transform hover:scale-150 group cursor-pointer" viewBox="0 0 24 24">
            <path
              class="fill-current group-hover:text-white"
              d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z"
            />
          </svg>`,
          },
          {
            text: 'Stocks',
            url: '/stocks',
            ico: `
          <svg class=" w-6 transform hover:scale-150 group cursor-pointer" viewBox="0 0 24 24">
           
            <path 
              class="fill-current group-hover:text-white" d="M17 13h-4v4h-2v-4H7v-2h4V7h2v4h4m2-8H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" />
          </svg>`,
          },
          {
            text: 'Utilisateur',
            url: '/utilisateur',
            ico: `
          <svg class=" w-6 transform hover:scale-150 group cursor-pointer" viewBox="0 0 24 24"> 
            <path
                  class="fill-current group-hover:text-white"
              d="M12 19.2c-2.5 0-4.71-1.28-6-3.2.03-2 4-3.1 6-3.1s5.97 1.1 6 3.1a7.232 7.232 0 0 1-6 3.2M12 5a3 3 0 0 1 3 3 3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3m0-3A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10c0-5.53-4.5-10-10-10z"
            />
          </svg>`,
          },
          {
            text: 'Configuration',
            url: '/configuration',
            ico: `
          <svg class=" w-6 transform hover:scale-150 group cursor-pointer" viewBox="0 0 24 24">  
            <path
                  class="fill-current group-hover:text-white"
              d="m21.71 20.29-1.42 1.42a1 1 0 0 1-1.41 0L7 9.85A3.81 3.81 0 0 1 6 10a4 4 0 0 1-3.78-5.3l2.54 2.54.53-.53 1.42-1.42.53-.53L4.7 2.22A4 4 0 0 1 10 6a3.81 3.81 0 0 1-.15 1l11.86 11.88a1 1 0 0 1 0 1.41M2.29 18.88a1 1 0 0 0 0 1.41l1.42 1.42a1 1 0 0 0 1.41 0l5.47-5.46-2.83-2.83M20 2l-4 2v2l-2.17 2.17 2 2L18 8h2l2-4z" />
          </svg>`,
          },
          {
            text: 'Sort"ir',
            url: '/patients', 
            ico: `
          <svg class=" w-6 transform hover:scale-150 group cursor-pointer" viewBox="0 0 24 24">  
            <path
                  class="fill-current group-hover:text-white"
              d="M11.92 19.92 4 12l7.92-7.92 1.41 1.42-5.5 5.5H22v2H7.83l5.51 5.5-1.42 1.42M4 12V2H2v20h2V12z" />
          </svg>`, 
          }
        ],
        wrapMenu: false,
      };
    },
    mounted(){
      
    }, 
  };
  </script>
  
<style> 
  a span,path,#sortie_cont { 
    font-weight: 500; 
    color:#8b869c; 
    fill: #8b869c; 
  } 
  a.router-link-exact-active,a.router-link-exact-active path {
    background:#181818; 
    border-left:3px solid #5249ff;
    fill: #5249ff;
  } 
  a {
    border-left:3px solid transparent;
  } 
 
 
</style>
