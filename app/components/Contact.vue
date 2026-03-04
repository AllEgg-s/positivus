<script setup lang="ts">
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const formSchema = toTypedSchema(z.object({
  type: z.enum(["message", "quote"]),
  name: z.string().min(3).max(100),
  email: z.email(),
  message: z.string().min(10).max(255),
}));

const form = useForm({
  validationSchema: formSchema,
  initialValues: {
    type: "message",
  },
});

const onSubmit = form.handleSubmit((values) => {
  console.log("Form submitted!", values);
});

const data = {
  header: "Свяжитесь с нами",
  subheader: "Опишите задачу, и мы предложим подходящее IT-решение для бизнеса или личного проекта.",
  image: "images/illustrations/form-image.png"
};
</script>

<template>
  <section id="contact" class="mx-auto container px-8 py-10">
    <SectionHeader
      :header="data.header"
      :subheader="data.subheader"
    />

    <div class="mt-12 bg-muted rounded-3xl flex flex-col lg:flex-row justify-between items-center p-10 lg:py-0 lg:pe-0 gap-12">
      <form @submit="onSubmit" class="max-w-xl w-full">
        <div class="space-y-4 w-full">
          <FormField v-slot="{ componentField }" type="radio" name="type">
            <FormItem class="space-y-3">
              <FormControl>
                <RadioGroup
                  class="flex space-x-1"
                  v-bind="componentField"
                >
                  <FormItem class="flex items-center space-y-0 gap-x-2">
                    <FormControl>
                      <RadioGroupItem value="message" class="bg-white" />
                    </FormControl>
                    <FormLabel class="font-normal">
                      Нужна консультация
                    </FormLabel>
                  </FormItem>

                  <FormItem class="flex items-center space-y-0 gap-x-2">
                    <FormControl>
                      <RadioGroupItem value="quote" class="bg-white" />
                    </FormControl>
                    <FormLabel class="font-normal">
                      Нужен расчет стоимости
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>

          <FormField v-slot="{ componentField }" name="name">
            <FormItem>
              <FormLabel>Имя</FormLabel>

              <FormControl>
                <Input type="text" placeholder="Введите ваше имя" v-bind="componentField" class="bg-white" />
              </FormControl>

              <FormMessage />
            </FormItem>
          </FormField>

          <FormField v-slot="{ componentField }" name="email">
            <FormItem>
              <FormLabel>Эл. почта</FormLabel>

              <FormControl>
                <Input type="text" placeholder="Введите вашу почту" v-bind="componentField" class="bg-white" />
              </FormControl>

              <FormMessage />
            </FormItem>
          </FormField>

          <FormField v-slot="{ componentField }" name="message">
            <FormItem>
              <FormLabel>Описание задачи</FormLabel>

              <FormControl>
                <Textarea
                  placeholder="Опишите, что нужно сделать"
                  class="bg-white resize-none"
                  v-bind="componentField"
                  rows="8"
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          </FormField>
        </div>

        <Button type="submit" size="lg" class="bg-secondary text-secondary-foreground hover:text-primary-foreground mt-4 w-full cursor-pointer">
          Отправить заявку
        </Button>
      </form>

      <div class="w-full hidden lg:flex lg:justify-end lg:items-center lg:pr-0">
        <NuxtImg
          src="/images/illustrations/form-image.png"
          alt="Иллюстрация формы"
          width="300"
        />
      </div>
    </div>
  </section>
</template>
