<template>
  <div class="container mb-5">
    <h1 class="my-5">Ingreso</h1>
    <form @submit.prevent="procesarFormulario">
      <input type="email" class="form-control my-2" placeholder="email" v-model.trim="email"/>
      <input type="password" class="form-control my-2" placeholder="password" v-model.trim="pass"/>
      <button class="btn btn-primary btn-block btn-sm"> Ingresar</button>
    </form>
  </div>
</template>

<script>
import { computed } from 'vue';
import { mapActions } from 'vuex';
export default {
    data(){
        return {
            email: '',
            pass: ''
        }
    },
    methods: {
        ...mapActions(['ingresoUsuario']),
        procesarFormulario(){
            this.ingresoUsuario({email: this.email, pass: this.pass});
            this.email = '';
            this.pass = '';
        }
    }
};
</script>

<style></style>
