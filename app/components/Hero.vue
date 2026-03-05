<script setup lang="ts">
import { Button } from '@/components/ui/button';

const data = {
  title: "Создаем ИИ-решения, которые работают там, где остальные только обещают.",
  subheader: "Партнер, подтвердивший компетенции на международном уровне и в проектах с институтами развития.",
  description: "Мы не просто пишем код. Мы — технологический партнер полного цикла, который берет на себя ответственность за результат: от смелой идеи до круглосуточной поддержки готового продукта.",
  image: "images/illustrations/hero-illustration.png",
};
</script>

<template>
  <header id="hero" class="container px-6 mx-auto py-10 flex flex-col lg:flex-row items-center justify-between">
    <div class="w-full space-y-4">
      <div class="space-y-2">
        <h1 class="w-4/4 md:w-2/3 text-5xl md:text-6xl font-bold">{{ data.title }}</h1>

        <p class="w-5/6 md:w-4/9 text-muted-foreground">{{ data.subheader }}</p>
        <p class="w-5/6 md:w-4/9 text-muted-foreground">{{ data.description }}</p>
      </div>

      <a href="#contact">
        <Button size="lg" class="bg-secondary dark:bg-primary text-secondary-foreground hover:text-primary-foreground dark:text-primary-foreground cursor-pointer">Получить консультацию</Button>
      </a>
    </div>

    <div class="mt-12 md:mt-0">
      <NuxtImg
        :src="data.image"
        alt="Иллюстрация"
        width="100%"
      />
    </div>
  </header>
</template>
