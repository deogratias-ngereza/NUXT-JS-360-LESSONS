<script lang="ts" setup>


const {data}  = await useFetch("https://jsonplaceholder.typicode.com/posts");


</script>

<template>
    <UContainer>

       <UTable :data="data" class="flex-1" loading loading-color="primary" loading-animation="carousel" />

       
    </UContainer>
</template>

<style lang="css" scoped>
    
</style>
