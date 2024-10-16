<script setup >
const educations = ref([
    {
        title:'PROWEB',
        sertificate:'https://drive.google.com/file/d/1_WmD-aAg5vAzSNiSgV0YBAhcJqo2ousO/view?usp=drive_link',
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
       <h2 class="lg:text-3xl sm:text-3xl sm:pt-2 lg:pt-4  text-black dark:text-neutral-300"><strong>Education</strong></h2>
      <div class="flex flex-col md:flex-row md:flex-wrap gap-5 pt-5 items-center justify-center lg:justify-start">
           <div v-for="(education, index) in educations" :key="index" class="flex flex-col items-center gap-4 w-full md:w-max p-4 border border-black dark:border-neutral-300">
                <div class="flex items-center justify-between w-full border-b pb-2">
                    <h3>{{education.title}}</h3>
                    <a :href="education.sertificate" class="text-[#36aece] underline">Sertificate</a>
                </div>
                <p>{{education.type}}</p>
                <div class="flex flex-col w-full border-t pt-2">
                    <div class="flex items-center justify-between w-full">
                        <span>Date start:</span>
                        <span>{{education.date_start}}</span>
                    </div>
                    <div class="flex items-center justify-between w-full">
                        <span>Date end:</span>
                        <span>{{education.date_end}}</span>
                    </div>
                </div>
           </div>
       </div>   
    </div>
</template>