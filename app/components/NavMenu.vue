<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import { ref } from 'vue';

const items = ref<NavigationMenuItem[]>([
  {
    label: 'Inventory',
    icon: 'i-lucide-box',
    children: [
      {
        label: 'Products',
        icon: 'i-lucide-list',
        description: 'Manage your products and stock levels.',
        to: '/inventory/products'
      },
      {
        label: 'Categories',
        icon: 'i-lucide-tags',
        description: 'Organize products into categories.',
        to: '/inventory/categories'
      },
      {
        label: 'Suppliers',
        icon: 'i-lucide-users',
        description: 'Manage product suppliers and vendors.',
        to: '/inventory/suppliers'
      }
    ]
  },
  {
    label: 'Accounts',
    icon: 'i-lucide-credit-card',
    children: [
      {
        label: 'View Accounts',
        icon: 'i-lucide-eye',
        description: 'View and manage all accounts.',
        to: '/accounts/view'
      },
      {
        label: 'Add Account',
        icon: 'i-lucide-plus-circle',
        description: 'Create a new account.',
        to: '/accounts/add'
      },
      {
        label: 'Account Statements',
        icon: 'i-lucide-file-text',
        description: 'View account statements and activity.',
        to: '/accounts/statements'
      }
    ]
  },
  {
    label: 'Sales',
    icon: 'i-lucide-shopping-cart',
    children: [
      {
        label: 'New Sale',
        icon: 'i-lucide-clipboard',
        description: 'Process new sales transactions.',
        to: '/sales/new'
      },
      {
        label: 'Sales History',
        icon: 'i-lucide-history',
        description: 'View past sales transactions.',
        to: '/sales/history'
      }
    ]
  },
  {
    label: 'Purchases',
    icon: 'i-lucide-shopping-bag',
    children: [
      {
        label: 'New Purchase',
        icon: 'i-lucide-clipboard',
        description: 'Record new purchase transactions.',
        to: '/purchases/new'
      },
      {
        label: 'Purchase History',
        icon: 'i-lucide-history',
        description: 'View past purchase transactions.',
        to: '/purchases/history'
      }
    ]
  },
  {
    label: 'Reports',
    icon: 'i-lucide-bar-chart-2',
    children: [
      {
        label: 'Sales Report',
        icon: 'i-lucide-file-text',
        description: 'Generate and view sales reports.',
        to: '/reports/sales'
      },
      {
        label: 'Inventory Report',
        icon: 'i-lucide-file-text',
        description: 'Generate inventory assessment reports.',
        to: '/reports/inventory'
      },
      {
        label: 'Accounts Report',
        icon: 'i-lucide-file-text',
        description: 'View account summaries and reports.',
        to: '/reports/accounts'
      }
    ]
  },
  {
    label: 'Help',
    icon: 'i-lucide-circle-help',
    disabled: false,
    to: '/help'
  }
]);
</script>

<template>
  <UNavigationMenu :items="items" class="w-full justify-center" />
</template>