<script setup lang="ts">
const open = ref(false)
</script>

<template>
    <div>
        <div class="flex lg:hidden  z-50 flex items-center justify-between w-full h-full p-4">
            <Logo />
            <Icon class="z-50 cursor-pointer left-2 top-2" name="ri:menu-3-fill " color="black" size="30" @click="open = !open"/>
            <div v-if="open" class="fixed left-0 top-0 w-full h-screen bg-white z-50 transition duration-300">
                <Icon class="absolute z-50 cursor-pointer right-4 top-4" name="ri:close-line" size="30" @click="open = !open" />
                <SidebarMenu/>
            </div>
        </div>
        <div class="hidden lg:flex w-[250px] h-screen flex flex-col justify-between border-r">
            <SidebarMenu />
        </div>
    </div>
</template>