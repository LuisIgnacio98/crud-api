<template>
 <h1 class="my-4">CRUD hecho en vue.js</h1>
  <form @submit.prevent="procesarFormulario">
    <Input :usuario="usuario" />
  </form>
  <hr>
  <TableUsuarios />
</template>

<script>
import { mapActions } from 'vuex';
// @ is an alias to /src
import Input from '../components/Input';
import TableUsuarios from '../components/TableUsuarios';

const shortid = require('shortid')

export default {
  name: 'Home',
  data(){
    return {
      usuario: {
        id: '',
        email: '',
        first_name: '',
        last_name: '',
        avatar: 'No hay foto'
      }
    }
  },
  methods: {
    ...mapActions(['setUsuarios']),
    procesarFormulario(){
      if(this.usuario.first_name.trim() === ""){
        alert('Campo Obligatorio');
        return
      }

      this.usuario.id = shortid.generate();

      this.setUsuarios(this.usuario);

      this.usuario= {
        id: '',
        email: '',
        first_name: '',
        last_name: '',
        avatar: 'No hay foto'
      }

    }
  },
  components: {
   Input,
   TableUsuarios
  },

}
</script>
