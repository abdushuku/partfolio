<script setup lang="ts">
const contacts = ref([
    {
        title:'Github',
        icon:'mdi:github',
        url:'https://github.com/abdushuku'
    },
    {
        title:'Email',
        icon:'carbon:email',
        url:'https://mail.google.com/mail/u/0/#inbox'
    },
    {
        title:'Telegram',
        icon:'icon-park:telegram',
        url:'https://t.me/abdushukur_0615'
    },
    {
        title:'Instagram',
        icon:'ri:instagram-fill',
        url:'https://www.instagram.com/abdushukur_0615/'
    },
    {
        title:'Linkedin',
        icon:'jam:linkedin',
        url:'https://www.linkedin.com/in/abdushukur-abduhakimov-2864ba252/'
    }
])
</script>

<template>
    <div class="">
        <h1 class="text-4xl uppercase text-bold pb-4 text-balck-400"><strong>About</strong></h1>
        <p class="text-[16px] text-justify text-neutral-400 ">
            Hi, I'm Abdushakur, a dedicated and passionate Full Stack Developer with a strong interest in building dynamic web applications and learning new technologies.
            I specialize in JavaScript, Vue.js , Nuxt.js, Node.js, Nest.js, and have hands-on experience with databases like PostgresSQL and MySQL. I'm continuously expanding my skills in both frontend and backend development, always eager to learn new frameworks and technologies.
            I've built several projects that showcase my development skills, including a task management app and a responsive portfolio site. These projects have helped me understand best practices in web development and given me the confidence to work on real-world problems.
            I'm passionate about writing clean, efficient code and solving challenging problems. I enjoy working on creative solutions that enhance user experience and contribute to the digital landscape.
            I'm excited to continue building my portfolio and working on projects that challenge me to grow as a developer. Feel free to check out my work or reach out to collaborate!
        </p> 
        <h2 class="text-3xl pt-4 uppercase text-black"><strong>Contact</strong></h2>      
        <div v-for="(contact, index) in contacts" :key="index" class="group flex items-center gap-4 my-4 cursor-pointer">
            <Icon :name="contact.icon" class="text-3xl"/>
            <a :href="contact.url" target="_blank" class="text-[16px] hidden group-hover:block transition ease-in-out  duration-300">{{contact.title}}</a>
        </div>
    </div>
</template>