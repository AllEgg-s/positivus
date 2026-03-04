<script setup lang="ts">
import type { CarouselApi } from "@/components/ui/carousel";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { watchOnce } from "@vueuse/core";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,  
} from "@/components/ui/card";

const api = ref<CarouselApi>();
const count = ref(0);
const current = ref(0);

const setApi = (value: CarouselApi) => api.value = value;

watchOnce(api, (api) => {
  if (!api) return;

  count.value = api.scrollSnapList().length;
  current.value = api.selectedScrollSnap() + 1;

  api.on("select", () => {
    current.value = api.selectedScrollSnap() + 1;
  });
});

const data = [
  {
    id: 1,
    review: "Передали команде поддержку корпоративного портала и интеграции с CRM. За три месяца сократили количество инцидентов и ускорили выпуск обновлений почти в два раза.",
    author: "Ирина Павлова",
    major: "Операционный директор, торговая компания",
  },
  {
    id: 2,
    review: "Нужна была мобильная версия сервиса для клиентов. Ребята быстро подключились, сделали MVP и помогли с релизом. Получили рабочий продукт без найма внутренней команды.",
    author: "Максим Громов",
    major: "Основатель SaaS-стартапа",
  },
  {
    id: 3,
    review: "Обратилась как частный клиент: настроили домашний NAS, резервное копирование и удаленный доступ. Все объяснили простым языком, теперь данные под надежной защитой.",
    author: "Ольга Никитина",
    major: "Частный клиент",
  },
  {
    id: 4,
    review: "Перевели инфраструктуру в облако и настроили мониторинг 24/7. Система стала стабильнее, а расходы на обслуживание снизились благодаря грамотной оптимизации.",
    author: "Андрей Лебедев",
    major: "IT-директор, логистическая компания",
  },
  {
    id: 5,
    review: "Подключили аутсорс-поддержку офиса: рабочие места, сети и безопасность. Пользователи получают помощь быстро, а руководство видит понятные отчеты и прогноз по задачам.",
    author: "Евгений Козлов",
    major: "Руководитель административного отдела",
  },
];
</script>

<template>
  <section id="testimonials" class="container mx-auto px-8 py-10">
    <SectionHeader
      header="Отзывы"
      subheader="Что говорят наши клиенты о сотрудничестве и результатах услуг IT-аутсорса"
    />

    <div class="bg-secondary dark:bg-muted py-12 my-12 rounded-3xl">
      <Carousel
        v-slot="{ canScrollNext, canScrollPrev, scrollPrev, scrollNext }"
        @init-api="setApi"
        :opts="{ loop: true }"
      >
        <CarouselContent class="px-6 md:px-0">
          <CarouselItem v-for="testimonial in data" :key="testimonial.id" class="basis-1/1 md:basis-1/2">
            <Card class="bg-secondary border-primary">
              
              <CardContent class="text-muted dark:text-muted-foreground">
                <span>"{{ testimonial.review }}"</span>
              </CardContent>
              
              <CardHeader>
                <CardTitle class="text-primary">{{ testimonial.author }}</CardTitle>
                <CardDescription class="text-muted dark:text-muted-foreground">{{ testimonial.major }}</CardDescription>
              </CardHeader>
            </Card>
          </CarouselItem>
        </CarouselContent>
          
        <div class="mt-8 flex items-center justify-center gap-4 md:gap-10">
          <Button
            variant="secondary"
            size="icon"
            :disabled="!canScrollPrev"
            @click="scrollPrev"
          >
            <Icon name="mdi:arrow-left" size="22" class="dark:group-hover:text-primary cursor-pointer" />
          </Button>
  
          <div class="space-x-2 hidden md:block">
            <Button
              v-for="(_, index) in count"
              :key="index"
              variant="secondary"
              size="icon"
              @click="api?.scrollTo(index)"
            >
              <Icon name="mdi:star-four-points" size="20" :class="cn('dark:group-hover:text-primary cursor-pointer', { 'text-primary': current === index + 1 })" />
            </Button>
          </div>
  
          <Button
            variant="secondary"
            size="icon"
            :disabled="!canScrollNext"
            @click="scrollNext"
          >
            <Icon name="mdi:arrow-right" size="22" class="dark:group-hover:text-primary cursor-pointer" />
          </Button>
        </div>
      </Carousel>

    </div>
  </section>
</template>
