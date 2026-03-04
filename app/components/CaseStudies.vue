<script setup lang="ts">
const data = {
  header: "Кейсы",
  subheader: "Реальные примеры того, как наш IT-аутсорс помогает компаниям и частным клиентам решать задачи быстрее и эффективнее.",
  cards: [
    {
      title: "Для сети кафе мы разработали систему онлайн-заказов и интегрировали ее с кассой. В результате время обработки заказов сократилось на 40%, а выручка выросла на 22%.",
    },
    {
      title: "Для B2B-компании автоматизировали продажи: связали CRM, телефонию и аналитику. Команда стала закрывать сделки на 30% быстрее и снизила ручные операции вдвое.",
    },
    {
      title: "Для частного клиента собрали персональное облако, настроили резервные копии и защиту данных. Все устройства синхронизированы, а риск потери важных файлов минимизирован.",
    },
  ]
};
</script>

<template>
  <section id="cases" class="mx-auto container px-6 py-10">
    <SectionHeader
      :header="data.header"
      :subheader="data.subheader"
    />

    <div class="my-12 flex flex-col lg:flex-row items-start bg-secondary dark:bg-muted rounded-3xl p-10 lg:divide-x divide-muted dark:divide-muted-foreground divide gap-6">
      <div v-for="(card, index) in data.cards" :key="index" class="w-full lg:w-1/3 px-6">
        <p class="text-muted dark:text-muted-foreground">{{ card.title }}</p>

        <NuxtLink to="#" class="flex items-center mt-2 md:mt-5 gap-2 text-primary w-fit">
          <span>Подробнее</span>
          <Icon name="mdi:arrow-top-right" size="20" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
