<script setup lang="ts">
definePageMeta({
    layout : "default"
})
</script>


<template>
<UContainer>

    <UModal
        title="Modal with description"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    >
        <UButton label="Open" color="neutral" variant="subtle" />

        <template #body>
        <div class="h-48">
            MODAL DATA HERE
        </div>
        </template>
    </UModal>
</UContainer>
</template>

