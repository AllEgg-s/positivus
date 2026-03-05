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
  phone_number: z.string().min(10, "Введите корректный номер телефона"),
  message: z.string().min(10).max(1000),
}));

const form = useForm({
  validationSchema: formSchema,
  initialValues: {
    type: "message",
  },
});

const isSubmitting = ref(false);
const submitSuccess = ref(false);
const submitError = ref("");

const onSubmit = form.handleSubmit(async (values) => {
  isSubmitting.value = true;
  submitError.value = "";
  submitSuccess.value = false;
  try {
    const typeLabel = values.type === "message" ? "Нужна консультация" : "Нужен расчет стоимости";
    const comment = `Тип: ${typeLabel}\n\n${values.message}`;
    await $fetch("https://api.iok-intellect.online/applications", {
      method: "POST",
      body: {
        name: values.name,
        phone_number: values.phone_number,
        comment,
      },
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    submitSuccess.value = true;
    form.resetForm();
  } catch (e) {
    submitError.value = "Не удалось отправить заявку. Попробуйте позже или свяжитесь по телефону.";
  } finally {
    isSubmitting.value = false;
  }
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

    <div class="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
      <a href="mailto:info@iok-intellect.ru" class="flex items-center gap-2 hover:text-foreground hover:underline">
        <Icon name="mdi:email" size="18" />
        info@iok-intellect.ru
      </a>
      <a href="tel:+79161648457" class="flex items-center gap-2 hover:text-foreground hover:underline">
        <Icon name="mdi:phone" size="18" />
        +7 916 164-84-57
      </a>
    </div>

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

          <FormField v-slot="{ componentField }" name="phone_number">
            <FormItem>
              <FormLabel>Телефон</FormLabel>

              <FormControl>
                <Input type="tel" placeholder="+7 999 123-45-67" v-bind="componentField" class="bg-white" />
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

        <p v-if="submitSuccess" class="text-sm text-green-600 dark:text-green-400 mt-2">
          Заявка отправлена. Мы свяжемся с вами в ближайшее время.
        </p>
        <p v-if="submitError" class="text-sm text-red-600 dark:text-red-400 mt-2">
          {{ submitError }}
        </p>
        <Button
          type="submit"
          size="lg"
          class="bg-secondary text-secondary-foreground hover:text-primary-foreground mt-4 w-full cursor-pointer"
          :disabled="isSubmitting"
        >
          {{ isSubmitting ? "Отправка..." : "Отправить заявку" }}
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
