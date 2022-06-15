<template>
  <div
    class="layout-wrapper flex flex-column justify-content-center align-items-center min-h-screen"
  >
    <Card class="w-30rem p-5 shadow-custom">
      <template #header>
        <div class="flex flex-column justify-content-center align-items-center">
          <img
            src="https://app.cubocrm.com.br/_nuxt/img/logo.371a497.png"
            class="w-6"
          />
        </div>
      </template>
      <template #content> 
        <NuxtPage />
      </template>
    </Card>
  </div>
</template>

<script setup></script>

<style>
body {
  background: rgb(245, 246, 248);
  background: linear-gradient(0deg, #f5f6f8 50%, rgb(82 109 238 / 50%) 0);
}

.layout-main {
  margin-left: 16rem;
}

.layout-wrapper {
  background-color: transparent;
}

body::-webkit-scrollbar,
.menu-container::-webkit-scrollbar {
  width: 5px;
}

body::-webkit-scrollbar,
.menu-container::-webkit-scrollbar-track {
  background-color: #e4e4e4;
  border-radius: 100px;
}

body::-webkit-scrollbar,
.menu-container::-webkit-scrollbar-thumb {
  background-color: rgb(82 109 238 / 12%);
  border-radius: 100px;
}
</style>
