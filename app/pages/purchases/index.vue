<template>
  <div class="dashboard">
    <h1 class="text-2xl font-bold mb-4">Purchase Dashboard</h1>

    <div class="stats grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div class="stat-box bg-white p-4 shadow rounded">
        <h2 class="text-lg font-semibold">Total Purchases</h2>
        <p class="text-2xl font-bold">${{ totalPurchases.toFixed(2) }}</p>
      </div>
      <div class="stat-box bg-white p-4 shadow rounded">
        <h2 class="text-lg font-semibold">Average Purchase Value</h2>
        <p class="text-2xl font-bold">${{ averagePurchaseValue.toFixed(2) }}</p>
      </div>
      <div class="stat-box bg-white p-4 shadow rounded">
        <h2 class="text-lg font-semibold">Recent Purchases</h2>
        <ul>
          <li v-for="purchase in recentPurchases" :key="purchase.id">
            {{ purchase.name }} - ${{ purchase.amount.toFixed(2) }}
          </li>
        </ul>
      </div>
    </div>

    <h2 class="text-xl font-bold mb-4">Purchase History</h2>
    <UNavigationMenu :items="tableData" class="w-full" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

// Sample Purchase Data
const purchases = ref([
  { id: 1, name: 'Office Supplies', amount: 150.75 },
  { id: 2, name: 'Electronics', amount: 220.50 },
  { id: 3, name: 'Furniture', amount: 800.00 },
  { id: 4, name: 'Software Licenses', amount: 300.00 },
]);

const totalPurchases = computed(() => {
  return purchases.value.reduce((acc, purchase) => acc + purchase.amount, 0);
});

const averagePurchaseValue = computed(() => {
  return purchases.value.length > 0
    ? totalPurchases.value / purchases.value.length
    : 0;
});

const recentPurchases = computed(() => {
  return purchases.value.slice(-3); // Get the last three purchases
});

// Prepare data for UNavigationMenu or table
const tableData = purchases.value.map(purchase => ({
  label: purchase.name,
  description: `Amount: $${purchase.amount.toFixed(2)}`,
  to: `/purchases/${purchase.id}` // Assuming you have a detailed view for each purchase
}));

</script>

<style scoped>
.dashboard {
  padding: 20px;
}

.stat-box {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  background-color: #ffffff;
  shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}
</style>