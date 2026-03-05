<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import logoSkolkovo from "@/assets/logo-header.svg";

const data = {
  header: "Наши проекты и партнёры",
  subheader: "Реализованные проекты с ведущими организациями России",
  ctaText: "Хочу такой же проект",
  projects: [
    {
      number: 1,
      partnerName: "Сколково",
      partnerLogo: { type: "image" as const, src: logoSkolkovo },
      tags: ["LMS", "RAG", "EdTech"],
      title: "AI LMS система для Сколково",
      description: "Разработка интеллектуальной образовательной платформы с использованием ИИ для персонализации обучения и автоматизации создания учебных материалов.",
      results: [
        "Автоматизировали создание учебных материалов",
        "Внедрили RAG-модуль для работы с корпоративной базой знаний",
        "Интеграция с существующей инфраструктурой Сколково",
      ],
    },
    {
      number: 2,
      partnerName: "Финансовый университет при Правительстве РФ",
      partnerLogo: { type: "sprite" as const, href: "/sprite-partners.svg", symbolId: "logo" },
      tags: ["Симулятор", "ИИ", "Обучение"],
      title: "Текстовый симулятор управления",
      description: "ИИ-симулятор для обучения принятию управленческих решений в текстовом формате с обратной связью и сценариями на основе реальных кейсов.",
      results: [
        "Интерактивный тренажёр для обучения руководителей",
        "Генерация сценариев и оценка решений на базе ИИ",
        "Адаптация под программы университета",
      ],
    },
  ],
};
</script>

<template>
  <section id="cases" class="mx-auto container px-6 py-10">
    <SectionHeader
      :header="data.header"
      :subheader="data.subheader"
    />

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12">
      <Card
        v-for="(project, index) in data.projects"
        :key="index"
        class="shadow-3xl bg-card dark:bg-card border border-border overflow-hidden relative"
      >
        <CardHeader class="pb-2">
          <div class="flex items-start justify-between gap-4">
            <div class="flex items-start gap-3 min-w-0">
              <div class="rounded-lg bg-primary/10 dark:bg-primary/20 p-3 shrink-0 flex items-center justify-center size-20 min-w-20">
                <img
                  v-if="project.partnerLogo.type === 'image'"
                  :src="project.partnerLogo.src"
                  :alt="project.partnerName"
                  class="h-14 w-14 object-contain"
                />
                <svg
                  v-else
                  class="h-14 w-14 shrink-0 text-primary min-h-14 min-w-14"
                  width="56"
                  height="56"
                  role="img"
                  :aria-label="project.partnerName"
                >
                  <use :href="`${project.partnerLogo.href}#${project.partnerLogo.symbolId}`" />
                </svg>
              </div>
              <div class="min-w-0">
                <p class="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Партнер
                </p>
                <p class="font-semibold text-foreground truncate">
                  {{ project.partnerName }}
                </p>
              </div>
            </div>
            <span
              class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold"
            >
              #{{ project.number }}
            </span>
          </div>
        </CardHeader>

        <CardContent class="space-y-4 pt-0">
          <div class="flex flex-wrap gap-2">
            <Badge
              v-for="tag in project.tags"
              :key="tag"
              variant="secondary"
              class="text-xs"
            >
              {{ tag }}
            </Badge>
          </div>

          <h3 class="text-lg font-bold text-foreground leading-tight">
            {{ project.title }}
          </h3>

          <p class="text-muted-foreground text-sm leading-relaxed">
            {{ project.description }}
          </p>

          <div>
            <p class="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">
              Результаты:
            </p>
            <ul class="space-y-1.5">
              <li
                v-for="(result, i) in project.results"
                :key="i"
                class="flex items-start gap-2 text-sm text-foreground/90 dark:text-muted-foreground"
              >
                <span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>{{ result }}</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>

    <div class="mt-10 text-center">
      <a
        href="#contact"
        class="inline-flex items-center gap-2 text-primary font-medium hover:underline focus:outline-none focus:underline"
      >
        {{ data.ctaText }}
        <Icon name="mdi:arrow-right" size="20" />
      </a>
    </div>
  </section>
</template>
