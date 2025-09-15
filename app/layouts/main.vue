<script lang="ts" setup>

</script>

<template>
    <UDashboardPanel resizable>
    
        <template #header>
        <NavBar />
        </template>

        <template #body>
        <div class="h-full">
            <slot />
        </div>
        </template>

    </UDashboardPanel>
</template>

<style lang="css" scoped>
    
</style>
