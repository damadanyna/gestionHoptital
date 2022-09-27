<template>
  <div class="flex flex-row h-full bg-stone-100 ">
   <nav_bar></nav_bar>
    <router-view class=" h-full w-full pt-4 overflow-x-hidden " />
  </div>
</template>
<script>
import nav_bar from './components/nav_bar.vue';
export default {
    layout: "blog",
    components: { nav_bar }
};
</script>
