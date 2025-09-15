<script setup lang="ts">
import type { TabsItem } from '@nuxt/ui'
import NavMenu from './NavMenu.vue';

const items: TabsItem[] = [
  {
    label: 'All',
    value: 'all'
  },
  {
    label: 'Unread',
    value: 'unread'
  }
]
</script>

<template>
  <UDashboardNavbar title="Dashboard">
    <template #leading>
      <UDashboardSidebarCollapse />
    </template>

    <template #trailing>
      <UBadge label="4" variant="subtle" />
      <NavMenu />
    </template>

    <template #right>
      <UTabs :items="items" default-value="all" size="sm" class="w-40" :content="false" />
      <UColorModeButton />

      <UTooltip text="Open on GitHub" :kbds="['meta', 'G']">
        <UButton
          color="neutral"
          variant="ghost"
          to="https://github.com/nuxt/ui"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
        />
      </UTooltip>
    </template>
  </UDashboardNavbar>
</template>
