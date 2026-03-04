<script setup lang="ts">
import { useColorMode } from "@vueuse/core";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-vue-next";

const mode = useColorMode();

const navigation = [
  { label: "О нас", to: "#hero" },
  { label: "Услуги", to: "#services" },
  { label: "Кейсы", to: "#cases" },
  { label: "Тарифы", to: "#contact" },
  { label: "Блог", to: "#contact" },
];
</script>

<template>
  <nav class="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl bg-(--background)/50 dark:bg-(--background)/70">
    <Logo />

    <NavbarMenu class="hidden lg:block" :navigation />
    
    <div class="flex items-center space-x-2">
      <Button variant="outline" @click="mode = mode === 'light' ? 'dark' : 'light'">
        <Moon v-if="mode === 'light'" class="group-hover:text-secondary dark:group-hover:text-primary transition-all" />
        <Sun v-else class="group-hover:text-secondary dark:group-hover:text-primary transition-all" />
      </Button>

      <a href="#contact" class="hidden lg:block">
        <Button variant="outline" class="w-full dark:hover:text-primary">Оставить заявку</Button>
      </a>

      <NavbarSheet class="lg:hidden" :navigation />
    </div>
  </nav>
</template>
