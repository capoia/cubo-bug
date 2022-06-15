<template>
  <Card class="layout-breadcrumb-container mt-2">
    <template #content>
      <div class="flex justify-content-between align-items-center">
        <Breadcrumb
          :home="home"
          :model="breadcrumbItems"
          class="border-none surface-0 shadow-0"
        />
        <span class="p-input-icon-left">
          <i class="pi pi-search" />
          <InputText type="text" v-model="search" placeholder="Procurar" />
        </span>
      </div>
    </template>
  </Card>
</template>

<script setup>
const home = ref({
  icon: "pi pi-filter",
  to: "/pipes",
});

const breadcrumbItems = ref([
  { label: "Contatos" },
  { label: "Pessoas", to: "/contacts/peoples" },
]);

const search = ref("");
</script>

<style>
.p-card.layout-breadcrumb-container .p-card-content{
  padding: 0px!important;
}

.p-card.layout-breadcrumb-container{
  box-shadow: 0 0 15px 0 rgb(34 41 47 / 5%);
}

</style>
