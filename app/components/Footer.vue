<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
</script>

<template>
    <footer class="mx-auto container px-0 md:px-8 pt-5 md:pt-10 text-white">
        <div class="bg-secondary rounded-0 lg:rounded-t-3xl px-10 pt-10">
            <div class="flex justify-center lg:justify-start">
                <span class="text-xl font-semibold text-foreground"
                    >ООО ИНТЕЛЛЕКТ ПЛЮС</span
                >
            </div>

            <div
                class="py-10 grid grid-cols-1 lg:grid-cols-2 gap-5 items-center lg:items-start lg:justify-between"
            >
                <div class="flex flex-col items-center lg:items-start gap-y-4">
                    <SectionHeader header="Контакты" />

                    <div class="space-y-2">
                        <a
                            href="mailto:info@iok-intellect.ru"
                            class="flex items-center space-x-2 hover:underline"
                        >
                            <Icon name="mdi:email" size="20" />
                            <span>info@iok-intellect.ru</span>
                        </a>

                        <a
                            href="tel:+79161648457"
                            class="flex items-center space-x-2 hover:underline"
                        >
                            <Icon name="mdi:phone" size="20" />
                            <span>+7 916 164-84-57</span>
                        </a>

                        <div class="flex items-center space-x-2">
                            <Icon name="mdi:location" size="20" />
                            <div class="flex flex-col">
                                <span>Москва, ул. Тверская, 12, офис 504</span>
                                <span>Работаем по всей России и удаленно</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    class="h-full flex flex-col items-center lg:items-end justify-center gap-6"
                >
                    <div class="space-x-4">
                        <Button
                            size="icon"
                            class="cursor-pointer rounded-full bg-muted"
                        >
                            <Icon
                                name="mdi:linkedin"
                                size="24"
                                class="text-secondary dark:text-muted-foreground dark:group-hover:text-muted transition-all"
                            />
                        </Button>

                        <Button
                            size="icon"
                            class="cursor-pointer rounded-full bg-muted"
                        >
                            <Icon
                                name="mdi:facebook"
                                size="24"
                                class="text-secondary dark:text-muted-foreground dark:group-hover:text-muted transition-all"
                            />
                        </Button>

                        <Button
                            size="icon"
                            class="cursor-pointer rounded-full bg-muted"
                        >
                            <Icon
                                name="mdi:twitter"
                                size="24"
                                class="text-secondary dark:text-muted-foreground dark:group-hover:text-muted transition-all"
                            />
                        </Button>
                    </div>
                </div>
            </div>

            <Separator class="bg-muted-foreground" />

            <div class="py-4">
                <h3 class="flex flex-col sm:flex-row space-x-1">
                    <span>
                        © {{ new Date().getFullYear() }}
                        <span class="text-primary font-semibold"
                            >ООО ИНТЕЛЛЕКТ ПЛЮС</span
                        >
                    </span>
                    <span>Все права защищены.</span>
                </h3>
            </div>
        </div>
    </footer>
</template>
