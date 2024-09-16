<template>
    <div class="grid lg:flex items-start">
        <Sidebar/>
        <div class="p-8 w-full flex flex-col justify-between h-screen">
            <slot/>
           <Footer/>
        </div>
    </div>
</template>