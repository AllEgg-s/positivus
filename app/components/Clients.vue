<script setup lang="ts">
import logoSkolkovo from "@/assets/logo-header.svg";
import logoTarp from "@/assets/logo-tarp.png";

const clients = [
  {
    name: "Сколково",
    type: "image" as const,
    src: logoSkolkovo,
  },
  {
    name: "Финансовый университет при Правительстве РФ",
    type: "sprite" as const,
    href: "/sprite-partners.svg",
    symbolId: "logo",
  },
  {
    name: "ТАРП СВАО",
    type: "image" as const,
    src: logoTarp,
  },
];
</script>

<template>
  <section id="clients" class="container mx-auto px-6 py-10 w-full overflow-hidden">
    <h2 class="text-center text-lg font-semibold text-muted-foreground mb-8">
      Наши партнеры:
    </h2>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center max-w-3xl mx-auto">
      <template v-for="client in clients" :key="client.name">
        <div class="flex items-center justify-center w-full min-w-0 h-16 min-h-16 sm:h-20 sm:min-h-20 max-w-[180px] rounded-lg bg-muted/30 dark:bg-muted/20 p-2">
          <img
            v-if="client.type === 'image'"
            :src="client.src"
            :alt="client.name"
            class="max-w-full max-h-full w-auto h-auto object-contain opacity-90 dark:opacity-100"
          />
          <svg
            v-else
            class="w-full h-full min-h-[3rem] text-foreground opacity-90 dark:opacity-100 object-contain"
            viewBox="0 0 140 56"
            role="img"
            :aria-label="client.name"
            preserveAspectRatio="xMidYMid meet"
          >
            <use :href="`${client.href}#${client.symbolId}`" />
          </svg>
        </div>
      </template>
    </div>
  </section>
</template>
