<script setup>
import { ref, watch } from 'vue'

const colorMode = useColorMode()
const selected = ref(false)


const toggleColorMode = () => {
  colorMode.preference = colorMode.preference === 'light' ? 'dark' : 'light'
}

watch(selected, (newVal) => {
  toggleColorMode()
})
</script>

<template>
    <div>
        <UToggle
          on-icon="iconamoon:mode-light"
          off-icon="ic:outline-dark-mode"
          v-model="selected"
          size="xl"
          :ui="{ active: 'bg-neutral-400', inactive: 'bg-neutral-200' }"
        />

    </div>
</template>