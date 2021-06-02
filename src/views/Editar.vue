<template>
  <h1 class="my-4">Editar</h1>
  <form @submit.prevent="updateUsuario(usuario)"> 
     <Input :usuario="usuario" />
  </form>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Input from "../components/Input";
export default {
  name: "Editar",
  computed: {
    ...mapState(["usuario"]),
  },
  methods: {
    ...mapActions(["setUsuario", "updateUsuario"]),
  },
  created() {
    this.setUsuario(this.$route.params.id);
  },
  components: {
    Input,
  },
};
</script>

<style></style>
