<script setup>
import { ref, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';


const router = useRouter();
const route = useRoute();

const items = ref([
  {
    title: "home",
    path: "/",
    icon: "weui:home-filled",
  },
  {
    title: "about",
    path: "/about",
    icon: "mdi:about-variant",
  },
  {
    title: "skills",
    path: "/skills",
    icon: "carbon:skill-level-advanced",
  },
  {
    title: "education",
    path: "/education",
    icon: "mdi:book-education",
  },
  {
    title: "projects",
    path: "/projects",
    icon: "grommet-icons:projects",
  },
]);

const currentRoute = ref(route.path);

// Watch for route changes
watch(
  () => route.path,
  (newPath) => {
    currentRoute.value = newPath;
  }
);

const isActive = (path) => path === currentRoute.value;
</script>

<template>
  <div>
    <header class="flex flex-col items-center pt-4">
      <Logo />
      <p
        class="font-bold text-black text-xl text-center hover:scale-[101%] transition cursor-pointer w-[150px]"
      >
        Abduhakimov Abdushukur
      </p>
      <div class="px-4 grow pt-5">
        <div class="grid gap-2">
          <NuxtLink
            v-for="(item, index) in items"
            :key="index"
            :to="item.path"
            :class="[
              'flex items-center text-regular w-full gap-2 px-2 py-1 transition rounded cursor-pointer hover:scale-105 duration-300',
              isActive(item.path) ? 'bg-neutral-200 text-bold' : 'hover:text-bold'
            ]"
          >
            <Icon size="20" :name="item.icon" color="black" />
            <span>{{ item.title }}</span>
          </NuxtLink>
        </div>
      </div>
      <Switch class="mt-5" />
      <select v-model="$colorMode.preference">
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="sepia">Sepia</option>
    </select>
    </header>
  </div>
</template>
