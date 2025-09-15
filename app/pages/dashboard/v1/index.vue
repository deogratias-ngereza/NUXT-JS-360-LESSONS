<script lang="ts" setup>
import { ref, onMounted } from 'vue';

interface Transaction {
  id: number;
  product: string;
  quantity: number;
  total: number;
  date: string;
}

const transactions = ref<Transaction[]>([]);
const totalSales = ref(0);
const topProduct = ref<{ name: string; sales: number }>({ name: '', sales: 0 });

const generateSampleData = () => {
  const sampleData: Transaction[] = [];
  const productNames = ["Product A", "Product B", "Product C", "Product D"];
  const currentDate = new Date();

  for (let i = 0; i < 10; i++) {
    const productIndex = Math.floor(Math.random() * productNames.length);
    const quantity = Math.floor(Math.random() * 10) + 1;
    const total = Number((quantity * (Math.random() * 20 + 5)).toFixed(2)); // Random price between $5 and $25

    sampleData.push({
      id: i + 1,
      product: productNames[productIndex],
      quantity,
      total,
      date: currentDate.toLocaleDateString() + ' ' + currentDate.toLocaleTimeString()
    });
  }

  return sampleData;
};

const calculateTotals = () => {
  totalSales.value = transactions.value.reduce((acc, transaction) => acc + transaction.total, 0);
  calculateTopProduct();
};

const calculateTopProduct = () => {
  const productCounts: Record<string, number> = transactions.value.reduce((acc, transaction) => {
    acc[transaction.product] = (acc[transaction.product] || 0) + transaction.quantity;
    return acc;
  }, {});

  const topProductKey = Object.keys(productCounts).reduce((a, b) => productCounts[a] > productCounts[b] ? a : b);
  topProduct.value.name = topProductKey;
  topProduct.value.sales = productCounts[topProductKey];
};

onMounted(() => {
  transactions.value = generateSampleData();
  calculateTotals();
});
</script>

<template id="home">

  <div class="h-full dashboard">
    <h1>POS Dashboard</h1>
    <div class="stats">
      <div class="stat-box">
        <h2>Total Sales</h2>
        <p>\$ {{ totalSales.toFixed(2) }}</p>
      </div>
      <div class="stat-box">
        <h2>Number of Transactions</h2>
        <p>{{ transactions.length }}</p>
      </div>
      <div class="stat-box">
        <h2>Top Product</h2>
        <p>{{ topProduct.name }} ({{ topProduct.sales }})</p>
      </div>
    </div>
    
    <h2>Recent Transactions</h2>
    <div class="table-responsive">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="transaction in transactions" :key="transaction.id">
            <td>{{ transaction.id }}</td>
            <td>{{ transaction.product }}</td>
            <td>{{ transaction.quantity }}</td>
            <td>\$ {{ transaction.total.toFixed(2) }}</td>
            <td>{{ transaction.date }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>



<style scoped>
.dashboard {
  padding: 20px;
}
.stats {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
}
.stat-box {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  flex: 1;
  margin: 0 10px;
}
.table-responsive {
  overflow-x: auto;
}
table {
  width: 100%;
  border-collapse: collapse;
}
th, td {
  padding: 10px;
  border: 1px solid #ccc;
  text-align: left;
}
th {
  background-color: #f0f0f0;
}
</style>
