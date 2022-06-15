<template>
  <div
    class="layout-wrapper flex flex-column justify-content-between min-h-screen"
  >
    <div class="layout-main flex flex-column min-h-screen">
      <Sidebar />

      <Topbar />

      <div class="layout-main-content mt-3">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style>
body {
  background: rgb(245, 246, 248);
  background: linear-gradient(0deg,#f5f6f8 75%,rgb(82 109 238 / 70%) 0);
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
