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
    <div class="lg:p-6 border-t  flex items-center  flex-row justify-between lg:gap-4 sm:gap-2 sm:p-0  ">
        <div>
            <h2 class="lg:text-3xl sm:text-3xl sm:pt-2 lg:pt-4 uppercase text-black"><strong>Contacts</strong></h2>      
            <div class="flex items-start justify-start gap-4 sm:group">
                <div v-for="(contact, index) in contacts" :key="index" class="group flex items-center gap-4 my-4 cursor-pointer">
                    <Icon :name="contact.icon" class="text-3xl"/>
                    <a :href="contact.url" target="_blank" class="text-[16px] hidden group-hover:block transition ease-in-out  duration-300">{{contact.title}}</a>
                </div>
                
            </div>
        </div>
        <div>
            <p class="text-[16px] text-neutral-400">abduhakimovabdushukur@gmail.com</p>
            <a href="tel:+998903940615">+998(90) 394-06-15</a>
        </div>
    </div>
</template>