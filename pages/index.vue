<template>
    <div class="flex items-center justify-between w-max gap-[200px]">
        <div class="flex flex-col items-start gap-4  pt-5 ">
            <h1 class="text-4xl w-[150px] font-medium">Hi, I am <strong>Abdushukur</strong></h1>
            <p class="text-lg font-regular w-[300px] py-2 ">I am a Full Stack Developer</p>
            <Button class="hover:scale-105 transition  sm:text-lg sm:w-[200px] sm:text-[18px]"><NuxtLink to="/projects">View My Portfolio</NuxtLink></Button>
        </div>
       <div class="relative animate-accordion-down lg:block sm:hidden boxs">
           <div class="absolute top-0 left-0">
                <!-- Box 1: Slow spin -->
                <div class="border-4 border-black w-[150px] h-[150px] absolute top-[-50px] left-10 animate-spin-slow duration-[30s]"></div>

                <!-- Box 2: Slower spin -->
                <div class="border-4 border-black w-[150px] h-[150px] absolute top-[40px] left-[270px] animate-spin-slow duration-[40s]"></div>

                <!-- Box 3: Reverse spin -->
                <div class="border-4 border-black w-[150px] h-[150px] absolute top-[90px] left-[130px] animate-spin-reverse duration-[50s]"></div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    @media screen and (max-width: 768px) {
        .boxs{
            display: none
        }
    }
</style>