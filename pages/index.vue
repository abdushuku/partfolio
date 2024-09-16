<template>
    <div class="flex items-center justify-between ">
        <div class="flex flex-col items-start gap-4  pt-5 ">
            <h1 class="text-4xl w-[150px] font-medium">Hi, I am <strong>Abdushakur</strong></h1>
            <p class="text-lg font-regular w-[300px] py-2 ">I am a Full Stack Developer</p>
            <Button class="hover:scale-105 transition"><NuxtLink to="/projects">View My Portfolio</NuxtLink></Button>
        </div>
        <div class="relative">
            <div class="border-4 border-black w-[150px] h-[150px] absolute top-5 left-8 transform "></div>
            <div class="border-4 border-black w-[150px] h-[150px] absolute top-[50px] left-[20px] transform "></div>
            <div class="border-4 border-black w-[150px] h-[150px] absolute top-[100px] left-[80px] transform "></div>
        </div>

    </div>
</template>