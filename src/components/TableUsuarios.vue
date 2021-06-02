<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Name</th>
        <th scope="col">Lastname</th>
        <th scope="col">Email</th>
        <th scope="col">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in usuarios" :key="item.id">
        <th scope="row">{{ item.id }}</th>
        <td>{{ item.first_name }}</td>
        <td>{{ item.last_name }}</td>
        <td>{{ item.email }}</td>
        <td>
          <button
            class="btn btn-danger ml-2 btn-sm"
            @click="deleteUsuario(item.id)"
          >
            Eliminar
          </button>
          <router-link
            class="btn btn-warning ml-2 btn-sm"
            :to="{
              name: 'Editar',
              params: {
                id: item.id,
              },
            }"
            >Editar</router-link>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "TableUsuarios",
  computed: {
    ...mapState(["usuarios"]),
  },
  methods: {
    ...mapActions(["deleteUsuario"]),
  },
};
</script>

<style></style>
