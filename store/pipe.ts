import { defineStore } from "pinia";
import { Pipe } from "@/models";
import gql from "graphql-tag";

// interface loginPayload {
//   email: string;
//   password: string;
// }

export const usePipeStore = defineStore("pipe", {
  state: () => ({
    pipe: {} as Pipe,
    pipes: [] as Pipe[],
  }),

  actions: {
    async index() {
      const { $apollo, $apolloHelpers } = this.$nuxt

      console.log($apolloHelpers.getToken())

      const { errors, data } = await $apollo.default.query({
        query: gql`
          query{
            pipes{
              id
              name
              filters{
                id name link
              }
            }
          }
        `,
        errorPolicy: "all",
      });

      if (errors) {
        return { success: false, message: errors[0].message, data: null };
      }

      this.pipes = data.pipes;

      return data.pipes;
    },
  },

  getters: {
    $all: (state) => state.pipes,
    $single: (state) => state.pipe,
  },
});
