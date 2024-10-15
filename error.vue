<template>
  <NuxtLayout name="404" class="flex flex-col items-center justify-center h-screen ">
    <div>
      <div class="text-4xl">You've Arrived Here on Error, boss</div>
      <button class="font-bold button w-full pt-5 p-5 text-2xl rounded bg-white flex items-center justify-center" @click="goBack ">Back</button>
    </div>
  </NuxtLayout>
</template>

<script>

export default {
  methods: {
    goBack() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.button {
  padding: 4px 6px;
  margin: 10px 0px;
  background: black;
  color: white;
}
</style>
