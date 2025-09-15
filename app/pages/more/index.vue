<script setup lang="ts">
import type { TimelineItem } from '@nuxt/ui'
import type { AvatarProps } from '@nuxt/ui'
const appConfig = useAppConfig()


const pic_items = [
  'https://picsum.photos/640/640?random=1',
  'https://picsum.photos/640/640?random=2',
  'https://picsum.photos/640/640?random=3',
  'https://picsum.photos/640/640?random=4',
  'https://picsum.photos/640/640?random=5',
  'https://picsum.photos/640/640?random=6',
  'https://picsum.photos/468/468?random=1',
  'https://picsum.photos/468/468?random=2',
  'https://picsum.photos/468/468?random=3',
  'https://picsum.photos/468/468?random=4',
  'https://picsum.photos/468/468?random=5',
  'https://picsum.photos/468/468?random=6'
]


const props = defineProps<{
  title: string
  description: string,
  icon: string,
  avatar: AvatarProps
}>()
const toast = useToast()
function showToast() {
   toast.add({
    title: 'Uh oh! Something went wrong.',
    description: 'There was a problem with your request.',
    icon: props.icon,
    avatar: props.avatar
  })
}

const file_value = ref(null)
const value = ref('')
const page = ref(5)
const items = ref<TimelineItem[]>([
  {
    date: 'Mar 15, 2025',
    title: 'Project Kickoff',
    description: 'Kicked off the project with team alignment. Set up project milestones and allocated resources.',
    icon: 'i-lucide-rocket'
  },
  {
    date: 'Mar 22 2025',
    title: 'Design Phase',
    description: 'User research and design workshops. Created wireframes and prototypes for user testing.',
    icon: 'i-lucide-palette'
  },
  {
    date: 'Mar 29 2025',
    title: 'Development Sprint',
    description: 'Frontend and backend development. Implemented core features and integrated with APIs.',
    icon: 'i-lucide-code'
  },
  {
    date: 'Apr 5 2025',
    title: 'Testing & Deployment',
    description: 'QA testing and performance optimization. Deployed the application to production.',
    icon: 'i-lucide-check-circle'
  }
])
</script>
<template>
  <div class="flex min-h-screen flex-col items-center justify-center bg-black-100">
     <UAlert title="Heads up!" />

     <UAlert
        title="Heads up!"
        description="You can change the primary color in your app config."
        :avatar="{
          src: 'https://github.com/nuxt.png'
        }"
      />

      <UBadge />

      <UFileUpload v-model="file_value" class="w-96 min-h-48" />


      <UCarousel v-slot="{ item }" :items="pic_items" class="w-full max-w-xs mx-auto" :ui="{ item: 'basis-1/5' }">
        <img :src="item" width="320" height="320" class="rounded-lg">
      </UCarousel>


      <UButton label="Show toast" color="neutral" variant="outline" @click="showToast" />

      <UCalendar color="neutral" />

      <UDrawer direction="left" inset>
        <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

        <template #content>
          <div class="min-w-96 min-h-96 size-full m-4">
              DRAWER
          </div>
        </template>
      </UDrawer>


      <UInput v-model="value" placeholder="Enter your name" />

      <UKbd color="secondary" value="K">K</UKbd>

      <UModal>
        <UButton label="Open" color="neutral" variant="subtle" />
        <template #content>
          <Placeholder class="h-48 m-4" />
        </template>
      </UModal>

      <UPagination v-model:page="page" :total="100" />
      <USeparator />
      <USeparator icon="i-simple-icons-nuxtdotjs" />

      <UTextarea v-model="value" />

      <UTimeline :default-value="2" :items="items" class="w-96" />

      <USwitch label="Check me" description="This is a checkbox." />


  </div>

  
</template>