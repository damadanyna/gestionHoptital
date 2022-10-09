<template>
    <div class=" py-3 flex flex-col w-full">
        <div class=" flex flex-row w-full">
            <div class=" bg-white rounded-full my-shadow">
                <svg class=" w-72" viewBox="0 0 24 24"><path class=" fill-current text-indigo-300" d="M12 4a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4z" /></svg>
            </div>
            <div class=" flex flex-col justify-end w-full mb-24"> 
                    <div class="flex flex-row justify-between" > 
                        <div  v-if="!isEditable" class=" flex flex-col ml-6"> 
                            <span class=" text-4xl text-indigo-500 font-bold" v-text="lastenameStr"> </span>
                            <span v-text="nameStr"></span>
                        </div> 
                        <div v-else  class=" flex flex-col ml-6">
                            <input type="text" class=" text-stone-800 outline-none border mb-2 border-stone-400 px-3 focus:border-indigo-600" v-model="lastenameStr" >
                            <input type="text" class=" text-stone-800 outline-none border border-stone-400 px-3 focus:border-indigo-600" v-model="nameStr" >
                        </div>
                        <div class=" flex ">
                            <div @click="isEditable=true"  v-if="!isEditable" class=" flex items-center mt-7 rounded-3xl pl-3 pr-5 cursor-pointer transform hover:scale-125 h-8 bg-indigo-600">
                                <svg class=" w-6" viewBox="0 0 24 24"><path d="M20.71 7.04c-.34.34-.67.67-.68 1-.03.32.31.65.63.96.48.5.95.95.93 1.44-.02.49-.53 1-1.04 1.5l-4.13 4.14L15 14.66l4.25-4.24-.96-.96-1.42 1.41-3.75-3.75 3.84-3.83c.39-.39 1.04-.39 1.41 0l2.34 2.34c.39.37.39 1.02 0 1.41M3 17.25l9.56-9.57 3.75 3.75L6.75 21H3v-3.75z" /></svg>
                                <span class=" text-stone-100">Editer</span>
                            </div>
                            <div v-else class=" flex ">
                                <div @click="isEditable=false" class=" flex mr-9 items-center mt-7 rounded-3xl pl-3 pr-5 cursor-pointer transform hover:scale-125 h-8 bg-indigo-600">
                                    <svg class=" w-6" viewBox="0 0 24 24"><path d="M21 7 9 19l-5.5-5.5 1.41-1.41L9 16.17 19.59 5.59 21 7z" /></svg>
                                    <span class=" text-stone-100">Enregistrer</span>
                                </div>
                                <div @click="isEditable=false"   class=" flex items-center mt-7 rounded-3xl pl-3 pr-5 cursor-pointer transform hover:scale-125 h-8 bg-gray-600">
                                    <svg class=" w-6" viewBox="0 0 24 24"><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" /></svg>
                                     <span class=" text-stone-100">Annuler</span>
                                </div>
                            </div>
                        </div>
                    </div> 
                <div class=" border-b border-stone-200"></div>
            </div>   
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            isEditable:false,
            nameStr:'DAMA Dany',
            lastenameStr:'Mr Dany'
        }
    }
}
</script>

<style>

</style>