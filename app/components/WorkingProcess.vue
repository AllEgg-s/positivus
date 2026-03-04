<script setup lang="ts">
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const accordion = ref();

const data = [
  {
    id: "01",
    title: "Знакомство и аудит",
    text: "Погружаемся в вашу задачу, анализируем текущую инфраструктуру и определяем приоритеты: что нужно сделать в первую очередь для бизнеса или личного проекта.",
  },
  {
    id: "02",
    title: "План и оценка",
    text: "Формируем понятный план работ, сроки и бюджет. Согласовываем формат сотрудничества: фиксированные задачи, почасовая модель или выделенная команда.",
  },
  {
    id: "03",
    title: "Реализация",
    text: "Разрабатываем и внедряем решение: пишем код, настраиваем сервисы, автоматизируем процессы и обеспечиваем совместимость с вашей текущей системой.",
  },
  {
    id: "04",
    title: "Тестирование и запуск",
    text: "Проверяем стабильность, безопасность и производительность, устраняем замечания и выводим решение в продакшен без лишних рисков.",
  },
  {
    id: "05",
    title: "Поддержка и SLA",
    text: "После запуска берем проект на сопровождение: мониторинг, обновления, обработка инцидентов и поддержка пользователей по согласованным SLA.",
  },
  {
    id: "06",
    title: "Отчеты и развитие",
    text: "Регулярно предоставляем отчеты по результатам и предлагаем улучшения, чтобы IT-система продолжала развиваться вместе с вашими целями.",
  },
];
</script>

<template>
  <section id="process" class="container mx-auto px-6">
      <SectionHeader
        header="Как мы работаем"
        subheader="Пошаговый подход к запуску, поддержке и развитию IT-решений для бизнеса и частных клиентов."
      />

      <div class="py-10">
        <Accordion type="single" collapsible class="gap-20 space-y-4" v-model="accordion">
          <AccordionItem v-for="(process, index) in data" :key="process.id" :value="`${process.title}-${index + 1}`" class="bg-muted rounded-xl px-10 py-4 shadow-3xl dark:shadow">
            <AccordionTrigger class="items-center">
              <div class="px-4 flex items-center justify-start gap-3 lg:gap-2">
                <span class="font-bold text-2xl">0{{ index + 1 }}</span>
                <span class="text-lg font-medium">{{ process.title }}</span>
              </div>

              <template #icon>
                <Button class="rounded-full" size="icon">
                  <Icon v-if="`${process.title}-${index + 1}` !== accordion" name="lucide:plus" size="24" />
                  <Icon v-else name="lucide:minus" size="24" />
                </Button>
              </template>
            </AccordionTrigger>

            <Separator v-if="`${process.title}-${index + 1}` === accordion" class="my-4 dark:bg-white " />
            
            <AccordionContent>{{ process.text }}</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
  </section>
</template>
