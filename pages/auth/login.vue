<template>
  <form class="p-fluid grid mt-3" @submit.prevent="login(!v$.$invalid)">
    <div class="field col-12 md:col-12">
      <span class="p-float-label p-input-icon-left">
        <i class="pi pi-envelope" />
        <InputText
          type="text"
          v-model="v$.email.$model"
          :class="{ 'p-invalid': v$.email.$invalid && formLogin.submitted }"
        />
        <label :class="{ 'p-error': v$.email.$invalid && formLogin.submitted }"
          >E-mail</label
        >
      </span>
      <small
        v-for="(error, index) in v$.email.$errors"
        :key="index"
        class="p-error"
      >
        {{ error.$message }}
      </small>
    </div>
    <div class="field col-12 md:col-12">
      <span class="p-float-label p-input-icon-left">
        <i class="pi pi-lock" />
        <Password
          id="password"
          :class="{ 'p-invalid': v$.password.$invalid && formLogin.submitted }"
          v-model="v$.password.$model"
          toggleMask
          :feedback="false"
        />
        <label
          :class="{ 'p-error': v$.password.$invalid && formLogin.submitted }"
          >Senha</label
        >
      </span>
      <small
        v-for="(error, index) in v$.password.$errors"
        :key="index"
        class="p-error"
      >
        {{ error.$message }}
      </small>
    </div>
    <div class="field col-12 md:col-12">
      <Button
        type="submit"
        label="Entrar"
        icon="pi pi-arrow-right"
        iconPos="right"
        :loading="formLogin.loading"
      />
    </div>
  </form>
</template>

<script setup lang="ts">
import { email, required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import { useAuthStore } from "~/store/auth";

definePageMeta({
  layout: "external",
});

const router = useRouter()
const authStore = useAuthStore();

const formLogin = reactive({
  email: "",
  password: "",
  keepLogin: true,
  loading: false,
  submitted: false,
});

const rules = {
  email: { required, email },
  password: { required },
};

const v$ = useVuelidate(rules, formLogin);

const login = async (isValid) => {
  Object.assign(formLogin, { ...formLogin, loading: true, submitted: true });

  if (!isValid) {
    Object.assign(formLogin, { ...formLogin, loading: false });
    return;
  }

  await authStore.login(formLogin);

  router.push('/pipe')

  Object.assign(formLogin, { ...formLogin, loading: false });
  return;
};
</script>

<style></style>
