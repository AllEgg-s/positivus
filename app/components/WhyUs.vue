<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

const data = {
    header: 'Нам доверяют сложные задачи',

    items: [
        {
            title: 'Экспертиза подтверждена практикой',
            text: 'Наш опыт включает успешные внедрения для крупнейших государственных компаний и институтов развития. Мы знаем требования госкомпаний к безопасности и надежности.',
        },
        {
            title: 'Признание на высшем уровне',
            text: 'Победы в международных конкурсах и статус в реестре стартапов — это не просто награды, а доказательство нашей способности решать нестандартные задачи лучше других.',
        },
        {
            title: 'Сквозная экспертиза (Full cycle)',
            text: 'Мы не бросаем проекты на полпути. Мы сопровождаем клиента на всех этапах: аудит и формирование гипотезы → разработка MVP → интеграция в существующую IT-инфраструктуру → обучение сотрудников → поддержка и развитие.',
        },
        {
            title: 'Результат',
            text: 'Вы получаете не просто красивую презентацию, а работающий ИИ-инструмент, который встраивается в бизнес и приносит измеримую прибыль уже завтра.',
        },
    ],
}
</script>

<template>
    <section id="why-us" class="mx-auto container px-6 py-10">
        <SectionHeader :header="data.header" :subheader="data.subheader" />

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <Card
                v-for="(item, index) in data.items"
                :key="index"
                class="shadow-3xl bg-card dark:bg-card border border-border"
            >
                <CardHeader>
                    <CardTitle
                        class="text-xl lg:text-2xl leading-snug text-foreground"
                    >
                        {{ item.title }}
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p
                        class="text-foreground/90 dark:text-muted-foreground text-base leading-relaxed"
                    >
                        {{ item.text }}
                    </p>
                </CardContent>
            </Card>
        </div>
    </section>
</template>
