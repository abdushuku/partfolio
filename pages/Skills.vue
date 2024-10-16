<script setup lang="ts">
import { ref } from 'vue'
const Frontskills = ref([

    {
        title:"Html",
        icon:"vscode-icons:file-type-html"
    },
    {
        title:"Css",
        icon:"devicon:css3"
    },{
        title:"Javascript",
        icon:"logos:javascript"
    },{
        title:"Typescript",
        icon:"devicon:typescript"
    },{
        title:"Vue.js",
        icon:"devicon:vuejs"
    },{
        title:"Nuxt.js",
        icon:"devicon:nuxtjs"
    },{
        title:"Scss",
        icon:"vscode-icons:file-type-scss"
    },{
        title:"Bootstrap",
        icon:"devicon:bootstrap"
    },{
        title:"Tailwind",
        icon:"vscode-icons:file-type-tailwind"
    },{
        title:"Git",
        icon:"devicon:git"
    },{
        title:"Ejs",
        icon:"file-icons:ejs"
    },
])

const Backskills = ref([
    {
        title:"Node.js",
        icon:"logos:nodejs"
    },{
        title:"Nest.js",
        icon:"logos:nestjs"
    },{
        title:"express.js",
        icon:"logos:express"
    },{
        title:"Mysql",
        icon:"logos:mysql"
    },{
        title:"Postgresql",
        icon:"logos:postgresql"
    },
])

</script>


<template>
    <div>
        <h2 class="text-3xl  font-bold dark:text-neutral-300"><strong>Skills</strong></h2>
        <div class="pt-3">
            <h2 class="text-xl font-medium text-neutral-500 drak:text-neutral-300">Front end</h2>
             <div class="grid lg:grid-cols-3 sm:grid-cols-2 lg:place-items-start sm:place-items-center gap-3 sm:gap-2 md:gap-3 pt-2 text-neutral-400">
                <div v-for="(skill, index) in Frontskills" :key="index" class="flex items-center gap-2 md:flex-row md:flex-wrap">
                    <Icon :name="skill.icon" size="30" />
                    <span>{{ skill.title }}</span>
                </div>
            </div>
        </div>
        <div class="pt-5">
            <h2 class="text-xl font-medium text-neutral-500 dark:text-neutral-300">Back end</h2>
            <div class="grid lg:grid-cols-3 sm:place-items-center sm:grid-cols-2 lg:place-items-start gap-3 pt-2 text-neutral-400">
                <div v-for="(skill, index) in Backskills" :key="index" class="flex items-center gap-2">
                    <Icon :name="skill.icon" size="30" color="black dark:text-white" />
                    <span>{{ skill.title }}</span>
                </div>
            </div>
        </div>
    </div>
</template>