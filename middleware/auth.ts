import { useAuthStore } from "~/store/auth";

export default defineNuxtRouteMiddleware((to) => {
  const authStore = useAuthStore();

  if(!authStore.$token || !authStore.$user){
    return navigateTo('/auth/login')
  }
  
  return
})