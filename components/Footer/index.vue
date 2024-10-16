<script setup lang="ts">
import { ref } from 'vue'
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
    <div class="lg:p-6 border-t sm:border-t  dark:border-t-neutral-800  flex items-center  flex-row justify-between lg:gap-4 sm:gap-2  sm:p-0 footer">
        <div>
            <h2 class="lg:text-3xl sm:text-3xl sm:pt-2 md:text-center lg:pt-4 uppercase text-black dark:text-neutral-300"><strong>Contacts</strong></h2>      
            <div class="flex items-start justify-start gap-4 sm:group">
                <div v-for="(contact, index) in contacts" :key="index" class=" flex items-center gap-4 my-4 cursor-pointer">
                    <UPopover :popper="{ placement: 'top-end',  arrow: true  }">
                        <Icon :name="contact.icon" class="text-3xl"/>
                        <template #panel>
                        <div class="p-4 dark:text-neutral-300 text-black bg-neutral-200 dark:bg-neutral-800">
                            <a :href="contact.url" target="_blank" class="text-[16px]  transition ease-in-out  duration-300">{{contact.title}}</a>
                        </div>
                        </template>
                    </UPopover>
                    
                </div>
                
            </div>
        </div>
        <div class="flex flex-col items-start gap-3 footer-left">
            <div class="text-[16px] text-neutral-400 pb-3 flex items-center gap-2"> <Icon name="clarity:email-solid"/>abduhakimovabdushukur@gmail.com</div>
            <div class="flex items-center gap-2">
                <Icon name="teenyicons:phone-solid"/>
                <a href="tel:+998903940615">+998(90) 394-06-15</a>
            </div>
            <div class="flex items-center gap-2">
                <Icon name="teenyicons:phone-solid"/>
                <a href="tel:+998951590619">+998(95) 159-06-19</a>
            </div>
        </div>
    </div>
</template>

<style scoped>
@media (max-width: 610px) {
    .footer{
        padding-top: 30px;
        gap: 10px;
        flex-direction: column;
    }
    .footer-left{
        align-items: center;
    }
}
</style>