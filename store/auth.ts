import { defineStore } from "pinia";
import { User } from "@/models";
import gql from "graphql-tag";
import { useCookies } from '@vueuse/integrations/useCookies'

interface loginPayload {
  email: string;
  password: string;
}

export const useAuthStore = defineStore("auth", {
  persist: true,
  
  state: () => ({
    token: ref(""),
    user: {} as User,
  }),

  actions: {
    async login(payload: loginPayload) {
      const { $apolloHelpers, $apollo } = this.$nuxt

      const { errors, data } = await $apollo.default.mutate({
        mutation: gql`
          mutation ($email: String!, $password: String!, $expiration: Int) {
            login(email: $email, password: $password, expiration: $expiration) {
              id
              name
              phone
              token
              api_key
              timezone
              date_format
              language
              currency
              email
              status
              type
              picture
              created_at
              updated_at
              order_by
              order_direction
              company {
                id
              }
              filters {
                id
                name
                link
                created_at
                updated_at
              }
            }
          }
        `,
        variables: payload,
        errorPolicy: "all",
      });

      if (errors) {
        return { success: false, message: errors[0].message, data: null };
      }

      this.token = data.login.token;
      this.user = data.login;
      await $apolloHelpers.onLogin(data.login.token, 'default', 7)

      return data;
    },

    async logout() {
      const { $apolloHelpers } = this.$nuxt
      const cookies = useCookies()
      
      this.token = ""
      this.user = {} as User

      await cookies.remove('auth')
      await $apolloHelpers.onLogout()
    },
  },

  getters: {
    $user: (state) => state.user,
    $token: (state) => state.token,
  },

});
