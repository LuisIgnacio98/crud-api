<template>
  <div class="navbar navbar-dark bg-dark">
    <router-link to="/" class="navbar-brand">CRUD PRUEBA</router-link>
    <div class="d-flex">
      <router-link to="/" class="btn btn-dark"> Usuarios </router-link>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Navbar",
  computed: {
    ...mapGetters(["usuarioAutenticado"]),
  },
  methods: {
    ...mapActions(["cerrarSesion"]),
  },
};
</script>
