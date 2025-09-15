<script lang="ts" setup>
import type { AccordionItem } from '@nuxt/ui'
import * as locales from '@nuxt/ui/locale'
//import { en, es, fr } from '@nuxt/ui/locale'

const locale = ref('en')


const items = ref<AccordionItem[]>([
  {
    label: 'Icons',
    icon: 'i-lucide-smile',
    content: 'You have nothing to do, @nuxt/icon will handle it automatically.'
  },
  {
    label: 'Colors',
    icon: 'i-lucide-swatch-book',
    content: 'Choose a primary and a neutral color from your Tailwind CSS theme.'
  },
  {
    label: 'Components',
    icon: 'i-lucide-box',
    content: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.'
  }
])

</script>

<template>
    <UContainer>


        <UCard>
            <template #header>
                <div class="h-8">
                    Locale
                </div>
            </template>

            <div class="h-10">
                <ULocaleSelect v-model="locale" :locales="Object.values(locales)" class="w-48" />
            </div>
        </UCard>

        <br/>

        <UCard>
            <template #header>
                <div class="h-8">
                    Locale
                </div>
            </template>

            <div class="h-32">
                <UAccordion :items="items" />
            </div>

            <template #footer>
            <Placeholder class="h-8" />
            </template>
        </UCard>



    </UContainer>
</template>

<style lang="css" scoped>
    
</style>
