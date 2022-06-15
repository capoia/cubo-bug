<template>
  <Card class="shadow-custom">
    <template #title> Organizações </template>
    <template #subtitle> Listagem de organizações </template>
    <template #content>
      <Toolbar class="mb-4">
        <template #start>
          <Button
            label="Adicionar"
            icon="pi pi-plus"
            class="p-button-primary mr-2"
          />
          <Button
            label="Excluir"
            icon="pi pi-trash"
            class="p-button-danger"
            :disabled="!selectedOrganizations || !selectedOrganizations.length"
          />
        </template>
        <template #end>
          <span class="p-input-icon-left">
            <i class="pi pi-search" />
            <InputText
              v-model="filters['global'].value"
              placeholder="Procurar Organizações..."
            />
          </span>
        </template>
      </Toolbar>
      <DataTable
        ref="tableOrganizations"
        :value="organizations"
        v-model:selection="selectedOrganizations"
        dataKey="id"
        :paginator="true"
        :rows="10"
        :filters="filters"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        :rowsPerPageOptions="[5, 10, 25]"
        currentPageReportTemplate="Exibindo {first} de {totalRecords} organizações"
        responsiveLayout="scroll"
      >
        <Column
          selectionMode="multiple"
          style="width: 3rem"
          :exportable="false"
        ></Column>

        <Column
          field="name"
          header="Nome"
          :sortable="true"
          style="min-width: 12rem"
        ></Column>

        <Column
          field="status"
          header="Status"
          :sortable="true"
          style="min-width: 12rem"
        >
          <template #body="slotProps">
            <span :class="`product-badge`">{{
              slotProps.data.status
            }}</span>
          </template>
        </Column>

        <Column
          field="created_at"
          header="Data de Criação"
          :sortable="true"
          style="min-width: 8rem"
        >
          <template #body="slotProps">
            {{ slotProps.data.created_at }}
          </template>
        </Column>
        <!-- <Column :exportable="false" style="min-width: 8rem">
          <template #body="slotProps">
            <Button
              icon="pi pi-pencil"
              class="p-button-rounded p-button-success mr-2"
              @click="editProduct(slotProps.data)"
            />
            <Button
              icon="pi pi-trash"
              class="p-button-rounded p-button-warning"
              @click="confirmDeleteProduct(slotProps.data)"
            />
          </template>
        </Column> -->
      </DataTable>
    </template>
  </Card>
</template>

<script setup>
import { FilterMatchMode } from "primevue/api";

definePageMeta({
  layout: "internal",
});

const organizations = ref([
  {
    id: "1000",
    name: "Cubo CRM",
    status: "active",
    created_at: "16/05/1996 18:00:00",
  },
  {
    id: "1001",
    name: "Lorem Ipsum",
    status: "active",
    created_at: "18/05/1996 18:00:00",
  },
]);

const tableOrganizations = ref();
const selectedOrganizations = ref();
const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
});
</script>
<style lang="scss" scoped></style>
