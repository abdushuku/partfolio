<script setup lang="ts">
const educations = ref([
    {
        title:'PROWEB',
        sertificate:'https://certificate.astrum.uz/student/BD0000016/',
        type:'Front end',
        date_start:'19/06/2022',
        date_end:'30/04/2023'
    },
    {
        title:'Qwasar Sillicon Valley',
        sertificate:'https://certificate.astrum.uz/student/BD0000016/',
        type:'Full stack/Back end',
        date_start:'4/09/2023',
        date_end:'8/08/2024'
    }
])
</script>


<template>
    <div>
       <h2 class="lg:text-3xl sm:text-3xl sm:pt-2 lg:pt-4  text-black"><strong>Education</strong></h2>
       <div class="grid grid-cols-2 gap-3 pt-5">
           <div v-for="(education, index ) in educations" :key="index" class="flex items-center gap-4 w-max p-4 flex-col border border-black">
                <div class="flex items-center gap-3 justify-between gap-[50px]">
                    <h3>{{education.title}}</h3>
                    <a :href="education.sertificate" class="text-[#36aece] text-underline">Sertificate</a>
                </div>
                <div class="flex items-center gap-3 flex-col ">
                    <div class="flex items-center gap-[45px]"><span class="">date start</span>{{education.date_start}}</div>
                    <div class="flex items-center gap-[45px]"><span>date end</span> {{education.date_end}}</div>
                </div>
           </div>
       </div>
    </div>
</template>