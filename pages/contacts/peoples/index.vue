<template>
  <Card class="shadow-custom">
    <template #title> Pessoas </template>
    <template #subtitle> Listagem de pessoas </template>
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
            :disabled="!selectedPeoples || !selectedPeoples.length"
          />
        </template>
        <template #end>
          <span class="p-input-icon-left">
            <i class="pi pi-search" />
            <InputText placeholder="Procurar Pessoas..." />
          </span>
        </template>
      </Toolbar>

      <DataView
        :value="peoples"
        :layout="layout"
        :paginator="true"
        :rows="9"
        :sortOrder="sortOrder"
        :sortField="sortField"
      >
        <template #header>
          <div class="grid grid-nogutter">
            <div class="col-6" style="text-align: left">
              <Dropdown
                v-model="sortKey"
                :options="sortOptions"
                optionLabel="label"
                placeholder="Sort By Price"
                @change="onSortChange($event)"
              />
            </div>
            <div class="col-6" style="text-align: right">
              <DataViewLayoutOptions v-model="layout" />
            </div>
          </div>
        </template>

        <template #list="slotProps">
          <div class="col-12">
            <div class="product-list-item">
              <div class="product-list-detail">
                <div class="product-name">{{ slotProps.data.name }}</div>
                <div class="product-description">
                  {{ slotProps.data.organization }}
                </div>

                <i class="pi pi-tag product-category-icon"></i
                ><span class="product-category">{{
                  slotProps.data.phone
                }}</span>
              </div>
              <div class="product-list-action">
                <span class="product-price">{{ slotProps.data.status }}</span>
              </div>
            </div>
          </div>
        </template>

        <!-- <template #grid="slotProps">
          <div class="col-12 md:col-4">
            <div class="product-grid-item card">
              <div class="product-grid-item-top">
                <div>
                  <i class="pi pi-tag product-category-icon"></i>
                  <span class="product-category">{{
                    slotProps.data.category
                  }}</span>
                </div>
                <span
                  :class="
                    'product-badge status-' +
                    slotProps.data.inventoryStatus.toLowerCase()
                  "
                  >{{ slotProps.data.inventoryStatus }}</span
                >
              </div>
              <div class="product-grid-item-content">
                <img
                  src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"
                  :alt="slotProps.data.name"
                />
                <div class="product-name">{{ slotProps.data.name }}</div>
                <div class="product-description">
                  {{ slotProps.data.description }}
                </div>
              </div>
              <div class="product-grid-item-bottom">
                <span class="product-price">${{ slotProps.data.price }}</span>
                <Button
                  icon="pi pi-shopping-cart"
                  :disabled="slotProps.data.inventoryStatus === 'OUTOFSTOCK'"
                ></Button>
              </div>
            </div>
          </div>
        </template> -->
      </DataView>
    </template>
  </Card>
</template>

<script setup>
definePageMeta({
  layout: "internal",
  middleware: 'auth'
});

const layout = ref("grid");
const sortKey = ref();
const sortOrder = ref();
const sortField = ref();
const sortOptions = ref([
  { label: "Price High to Low", value: "!price" },
  { label: "Price Low to High", value: "price" },
]);

const peoples = ref([
  {
    id: "1000",
    name: "Wellington Capoia",
    phone: "(17) 99206-1486",
    organization: "Cubo Suite",
    status: "active",
    created_at: "16/05/1996 18:00:00",
  },
  {
    id: "1001",
    name: "Lorem Ipsum",
    phone: "(17) 99206-1486",
    organization: "Empresa",
    status: "active",
    created_at: "18/05/1996 18:00:00",
  },
]);

const selectedPeoples = ref();
</script>
<style lang="scss" scoped></style>
