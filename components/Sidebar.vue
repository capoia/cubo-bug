<template>
  <div
    class="layout-menu-wrapper flex flex-column justify-content-between h-full fixed top-0 left-0 w-15rem z-5 border-round"
  >
    <div class="menu-container h-full overflow-y-auto">
      <div class="menu-logo flex justify-content-center p-4">
        <img
          src="https://app.cubocrm.com.br/_nuxt/img/logo.371a497.png"
          height="45"
        />
      </div>
      <PanelMenu
        :model="menuItems"
        v-model:expandedKeys="expandedKeys"
        exact
        class="w-full border-none"
      />
    </div>

    <Divider class="mb-0" />

    <div class="flex flex-column">
      <Button
        type="button"
        class="w-full h-5rem border-none p-button-sm bg-white-alpha-10 text-700"
        @click="toggleUserMenu"
      >
        <Avatar :image="authStore.$user.picture" class="mr-2" size="large" />
        <span class="font-bold">{{ authStore.$user.name }}</span>
      </Button>
      <Menu
        ref="userMenu"
        :model="userMenuItems"
        class="border-round shadow-1"
        :popup="true"
      />
    </div>
  </div>
</template>

<script setup>
import { usePipeStore } from "~/store/pipe";
import { useAuthStore } from "~/store/auth";

const pipeStore = usePipeStore();
const authStore = useAuthStore();

const expandedKeys = ref();
const userMenu = ref();

const { pending, refresh, data } = useLazyAsyncData("pipes", async () => await pipeStore.index(), {server: false});

watch(data, newPipes => {
  menuItems.value[0].items = newPipes.map(pipe => {
    return {
      key: `pipes${pipe.id}`,
      label: pipe.name,
      to: pipe.filters.length > 0 ? null : `pipes/${pipe.id}`,
      items: pipe.filters.length > 0
        ? pipe.filters.map(filter => {
            return {
              label: filter.name,
              to: `/pipes/${pipe.id}?${filter.link}`,
            };
          })
        : null,
    };
  });
})

const menuItems = ref([
  {
    key: "pipes",
    label: "Funil",
    icon: "pi pi-filter",
    items:  null,
  },
  {
    key: "contacts",
    label: "Contatos",
    icon: "pi pi-users",
    items: [
      {
        label: "Pessoas",
        to: "/contacts/peoples",
      },
      {
        label: "Organizacões",
        to: "/contacts/organizations",
      },
    ],
  },
  {
    label: "Produtos",
    key: "products",
    icon: "pi pi-box",
    items: [
      {
        label: "Produtos",
        to: "/products",
      },
    ],
  },
  {
    key: "activities",
    label: "Atividades",
    icon: "pi pi-calendar",
    items: [
      {
        label: "Atividades",
        to: "/calendar",
      },
    ],
  },
  {
    key: "reports",
    label: "Relatórios",
    icon: "pi pi-chart-pie",
    items: [
      {
        label: "Empresa",
        to: "/reports/company",
      },
      {
        label: "Funil",
        to: "/reports/pipe",
      },
      {
        label: "Safra",
        to: "/reports/harvest",
      },
      {
        label: "Campos Personalizados",
        to: "/reports/customfields",
      },
    ],
  },
  {
    key: "settings",
    label: "Configurações",
    icon: "pi pi-cog",
    items: [
      {
        label: "Campos Personalizados",
        to: "/customfields",
      },
      {
        label: "Motivos de Perda",
        to: "/settings/company?tab=2",
      },
      {
        label: "Templates de Mensagem",
        to: "/settings/templates",
      },
      {
        label: "Dominios",
        to: "/settings/company?tab=1",
      },
      {
        label: "Exportações",
        to: "/settings/company?tab=3",
      },
      {
        label: "Importação",
        to: "/settings/company?tab=4",
      },
      {
        label: "Perfil",
        to: "/settings/profile",
      },
      {
        label: "Empresa",
        to: "/settings/company",
      },
      {
        label: "Usuários",
        to: "/settings/users",
      },
    ],
  },
]);

const userMenuItems = ref([
  {
    label: "Sair",
    icon: "pi pi-fw pi-power-off",
    command: () => {
      authStore.logout();
      useRouter().push("/auth/login");
    },
  },
]);

onMounted(() => {
  const path = useRoute().path.split("/")[1];
  expandedKeys.value = { pipes: true, [path]: true };
});

const toggleUserMenu = (event) => {
  userMenu.value.toggle(event);
};
</script>

<style>
.layout-menu-wrapper {
  background-color: white;
  box-shadow: 0 0 15px 0 rgb(34 41 47 / 5%);
}

.layout-menu-wrapper
  .menu-container
  .p-panelmenu
  .p-panelmenu-panel
  .p-panelmenu-content
  .p-menuitem-link.router-link-active-exact {
  border-radius: var(--border-radius);
  background: linear-gradient(118deg, #526dee, rgb(82 109 238 / 69%));
  box-shadow: 0 0 10px 1px rgb(105 127 240 / 70%);
}

.p-panelmenu
  .p-panelmenu-content
  .p-menuitem
  .p-menuitem-link.router-link-active-exact:not(.p-disabled):hover
  .p-menuitem-text {
  color: #fff;
}

.p-panelmenu
  .p-panelmenu-content
  .p-menuitem
  .p-menuitem-link:not(.p-disabled):hover
  .p-menuitem-text {
  transition: transform 0.25s ease, -webkit-transform 0.25s ease;
  transform: translateX(5px);
}

.p-panelmenu
  .p-panelmenu-content
  .p-menuitem
  .p-menuitem-link.router-link-active-exact:not(.p-disabled)
  .p-menuitem-text {
  transition: transform 0.25s ease, -webkit-transform 0.25s ease;
}

.layout-menu-wrapper
  .p-panelmenu
  .p-panelmenu-panel
  .p-menuitem-link.router-link-active-exact
  .p-menuitem-text {
  color: #fff;
}

.layout-breadcrumb-container
  .p-menuitem-link.router-link-active.router-link-active-exact
  span {
  color: #526dee;
}

.layout-menu-wrapper
  .p-component.p-panelmenu-header.p-highlight
  .p-panelmenu-header-link {
  color: #526dee;
}

.layout-menu-wrapper .p-panelmenu-header-link {
  border-style: none;
  border-width: 0 !important;
  background-color: #ffffff !important;
  border-radius: var(--border-radius) !important;
}

.layout-menu-wrapper .p-panelmenu-content {
  border-style: none;
  border-width: 0 !important;
}

.layout-menu-wrapper .p-menuitem-link {
  border-radius: var(--border-radius) !important;
  margin: 10px;
}

.layout-menu-wrapper .p-menuitem-link.router-link-active-exact {
  background-color: rgb(82 109 238 / 12%) !important;
}
</style>
