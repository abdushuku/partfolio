<template>
    <div class="flex items-center justify-between w-max gap-[200px]">
        <div class="flex flex-col items-start gap-4  pt-5 sm:w-full ">
            <h1 class="text-4xl w-[150px] font-medium">Hi, I am <strong>Abdushukur</strong></h1>
            <p class="text-lg font-regular w-[300px] py-2 ">I am a Full Stack Developer</p>
            <UButton variant="ghost" color='white' class="hover:scale-105 border border-neutral-300  transition p-4 dark:hover:border dark:hover:border-neutral-300 text-neutral-900 text-medium dark:text-neutral-300 "><a href="https://github.com/abdushuku">View My Portfolio</a></UButton>
        </div>
       <div class="relative animate-accordion-down lg:block sm:hidden boxs">
            <div class="absolute top-0 left-0 sm:top-1 sm:left-1">
                <div class="border-4 border-black dark:border-neutral-300 w-[150px] h-[150px] absolute top-[-50px] left-10 animate-spin-slow duration-[30s]"></div>
                <div class="border-4 border-black dark:border-neutral-300 w-[150px] h-[150px] absolute top-[40px] left-[270px] animate-spin-slow duration-[40s]"></div>
                <div class="border-4 border-black dark:border-neutral-300 w-[150px] h-[150px] absolute top-[90px] left-[130px] animate-spin-reverse duration-[50s]"></div>
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