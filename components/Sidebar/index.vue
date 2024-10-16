<script setup lang="ts">
import { ref } from 'vue'
const open = ref(false)
</script>

<template>
    <div>
        <div class="flex lg:hidden  z-50 flex items-center justify-between w-full h-full p-4">
            <Logo />
            <button ><Icon class="z-50 cursor-pointer left-3 top-3" name="ri:menu-3-fill" color="black" size="30" @click="open = !open"/></button>
            <!--  -->
            <div v-if="open" class="fixed left-0 top-0 w-full h-screen bg-white dark:bg-neutral-900 z-50 transition duration-300 h-screen">
                <!-- -->
                <button class="text-black"> <Icon class="absolute z-50 cursor-pointer text-white right-4 top-4" name="ri:close-line" size="30" @click="open = !open" /></button>
                <SidebarMenu @click="open = !open "/>
            </div>
        </div>
        <div class="hidden lg:flex w-[250px] h-screen flex flex-col justify-between border-r dark:border-r-neutral-800">
            <SidebarMenu />
        </div>
    </div>
</template>

<style  scoped>
 @media (max-width: 918px) {
    .sidebar-sm button {
        display: block;
    }
 }
</style>>
    
