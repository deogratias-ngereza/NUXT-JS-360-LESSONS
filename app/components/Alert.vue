<template>
  <div class="alert" role="alert">
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.alert {
  padding: 12px 16px;
  border: 1px solid transparent;
  border-radius: 4px;
  margin-bottom: 16px;
  color:red;
}

.alert.info {
  background-color: #e7f3fe;
  border-color: #b3d4fc;
  color: #31708f;
}

.alert.success {
  background-color: #dff0d8;
  border-color: #d6e9c6;
  color: #3c763d;
}

.alert.error {
  background-color: #f2dede;
  border-color: #ebccd1;
  color: #a94442;
}
</style>