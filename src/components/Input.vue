<template>
  <input
    type="text"
    class="form-control my-2"
    placeholder="Nombre"
    v-model="usuario.first_name"
  />
  <input
    type="text"
    class="form-control my-2"
    placeholder="Apellido"
    v-model="usuario.last_name"
  />
  <input
    type="email"
    class="form-control my-2"
    placeholder="Email"
    v-model="usuario.email"
  />
  <button
    class="btn btn-dark mt-2 btn-block"
    type="submit"
    :disabled="bloquear"
  >
    Procesar
  </button>
</template>

<script>
export default {
  name: "Input",
  props: {
    usuario: Object,
  },
  computed: {
    bloquear() {
      return this.usuario.first_name.trim() === "" ? true : false;
    },
  },
};
</script>

<style></style>
