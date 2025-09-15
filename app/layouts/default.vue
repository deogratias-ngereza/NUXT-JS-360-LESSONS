<template>
  <UApp>
    
    <UDashboardGroup>
      <SideBar />
      <UDashboardPanel resizable>

          <template #header>
          <NavBar />
          </template>

          <template #body>
          <div class="h-full">
              <slot />
          </div>
          </template>

          <template #footer>
          <Footer />
          </template>

      </UDashboardPanel>

    </UDashboardGroup>

  </UApp>
</template>
