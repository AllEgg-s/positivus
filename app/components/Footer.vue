<script setup lang="ts">
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Separator } from "@/components/ui/separator"

const formSchema = toTypedSchema(z.object({
  email: z.email(),
}));

const form = useForm({
  validationSchema: formSchema,
});

const onSubmit = form.handleSubmit((values) => {
  console.log('Form submitted!', values)
});
</script>

<template>
  <footer class="mx-auto container px-0 md:px-8 pt-5 md:pt-10 text-white">
    <div class="bg-secondary rounded-0 lg:rounded-t-3xl px-10 pt-10">
      <div class="flex justify-center lg:justify-start ">
        <NuxtImg src="/images/logo-dark.png" alt="Логотип" width="150" />
      </div>

      <div class="py-10 grid grid-cols-1 lg:grid-cols-2 gap-5 items-center lg:items-start lg:justify-between">
        <div class="flex flex-col items-center lg:items-start gap-y-4">
          <SectionHeader header="Контакты" />

          <div class="space-y-2">
            <div class="flex items-center space-x-2">
              <Icon name="mdi:email" size="20" />
              <span>hello@positivus-it.ru</span>
            </div>
            
            <div class="flex items-center space-x-2">
              <Icon name="mdi:phone" size="20" />
              <span>+7 (999) 123-45-67</span>
            </div>

            <div class="flex items-center space-x-2">
              <Icon name="mdi:location" size="20" />
              <div class="flex flex-col">
                <span>Москва, ул. Тверская, 12, офис 504</span>
                <span>Работаем по всей России и удаленно</span>
              </div>
            </div>
          </div>
        </div>


        <div class="h-full flex flex-col items-center lg:items-end justify-between gap-6 lg:gap-0">
          <div class="space-x-4">
            <Button size="icon" class="cursor-pointer rounded-full bg-muted">
              <Icon name="mdi:linkedin" size="24" class="text-secondary dark:text-muted-foreground dark:group-hover:text-muted transition-all" />
            </Button>

            <Button size="icon" class="cursor-pointer rounded-full bg-muted">
              <Icon name="mdi:facebook" size="24" class="text-secondary dark:text-muted-foreground dark:group-hover:text-muted transition-all" />
            </Button>

            <Button size="icon" class="cursor-pointer rounded-full bg-muted">
              <Icon name="mdi:twitter" size="24" class="text-secondary dark:text-muted-foreground dark:group-hover:text-muted transition-all" />
            </Button>
          </div>

          <form @submit="onSubmit">
            <FormField v-slot="{ componentField }" name="email">
              <FormItem>                
                <FormControl>
                  <InputGroup class="border-primary">
                    <InputGroupInput v-bind="componentField" placeholder="Введите email" />
  
                    <InputGroupAddon align="inline-end">
                      <InputGroupButton variant="default">Подписаться</InputGroupButton>
                    </InputGroupAddon>
                  </InputGroup>
                </FormControl>
  
                <FormMessage />
              </FormItem>
            </FormField>
          </form>
        </div>
      </div>

      <Separator class="bg-muted-foreground" />
      
      <div class="py-4">
        <h3 class="flex flex-col sm:flex-row space-x-1">
          <span>
            © {{ new Date().getFullYear() }}
            <NuxtLink to="https://www.figma.com/community/file/1230604708032389430" target="_blank" class="text-primary">Positivus</NuxtLink>
            & <NuxtLink to="https://github.com/prpanto" target="_blank" class="text-transparent bg-clip-text bg-linear-to-r to-blue-600 from-sky-400">Pro. Pantos</NuxtLink>.
          </span>
          <span>Все права защищены.</span>
        </h3>
      </div>
    </div>
  </footer>
</template>
