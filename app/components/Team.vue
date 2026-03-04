<script setup lang="ts">
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const data = {
  header: "Команда",
  subheader: "Познакомьтесь со специалистами, которые реализуют и поддерживают IT-решения для бизнеса и частных клиентов.",
  cards: [
    {
      avatar: "images/members/1.png",
      name: "Алексей Смирнов",
      major: "Генеральный директор и основатель",
      bio: "10+ лет в IT-аутсорсе. Отвечает за стратегию, качество услуг и развитие долгосрочных партнерств."
    },
    {
      avatar: "images/members/2.png",
      name: "Анна Кузнецова",
      major: "Операционный директор",
      bio: "8+ лет в управлении проектами. Выстраивает процессы так, чтобы задачи выполнялись в срок и в рамках бюджета."
    },
    {
      avatar: "images/members/3.png",
      name: "Дмитрий Орлов",
      major: "Старший backend-разработчик",
      bio: "6+ лет в разработке серверных систем и интеграций. Специализируется на надежной архитектуре и масштабируемости."
    },
    {
      avatar: "images/members/4.png",
      name: "Мария Волкова",
      major: "Руководитель проектов",
      bio: "5+ лет координирует кросс-функциональные команды. Следит за прозрачной коммуникацией и достижением KPI."
    },
    {
      avatar: "images/members/5.png",
      name: "Илья Петров",
      major: "DevOps-инженер",
      bio: "7+ лет в администрировании и автоматизации инфраструктуры. Настраивает CI/CD, мониторинг и отказоустойчивость."
    },
    {
      avatar: "images/members/6.png",
      name: "Екатерина Соколова",
      major: "Специалист технической поддержки",
      bio: "4+ года помогает пользователям и бизнес-командам. Быстро решает инциденты и поддерживает стабильную работу сервисов."
    },
  ]
};
</script>

<template>
  <section id="team" class="mx-auto container px-6 py-10">
    <SectionHeader
      :header="data.header"
      :subheader="data.subheader"
    />

    <div class="pt-10 pb-5 md:py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <Card
        v-for="member in data.cards" :key="member.name"
        class="shadow-3xl"
      >
        <CardContent class="flex flex-col md:flex-row items-center md:items-end gap-4">
          <NuxtImg :src="member.avatar" width="80" />

          <div>
            <CardTitle class="text-2xl">{{ member.name }}</CardTitle>
            <CardDescription>{{ member.major }}</CardDescription>
          </div>
        </CardContent>

        <Separator class="mx-auto data-[orientation=horizontal]:w-[90%]" />

        <CardFooter>{{ member.bio }}</CardFooter>
      </Card>
    </div>

    <div class="flex justify-center lg:justify-end items-center">
      <Button size="lg" class="w-fit bg-secondary text-secondary-foreground hover:text-primary-foreground dark:bg-muted dark:hover:bg-primary">Смотреть всех специалистов</Button>
    </div>
  </section>
</template>
