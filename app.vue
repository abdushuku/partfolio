<template>
 <NuxtLayout>
  <NuxtPage/>
 </NuxtLayout>
</template>

<style>
.page-enter-active, .page-leave-active{
    transition: all 1.2s;
}
.page-enter-from, .page-leave-to{
    opacity: 0;
    transform: translateY(100%);
}

</style>

