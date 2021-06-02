import { createStore } from "vuex";
import router from "../router";

export default createStore({
  state: {
    usuarios: [],
    usuario: {
      id: "",
      email: "",
      first_name: "",
      last_name: "",
      avatar: "No hay foto",
    },
    user: null,
  },
  mutations: {
    setUser(state, payload) {
      this.user = payload;
    },
    cargar(state, payload) {
      state.usuarios = payload.data;
    },
    set(state, payload) {
      state.usuarios.push(payload);
    },
    delete(state, payload) {
      state.usuarios = state.usuarios.filter((item) => item.id !== payload);
    },
    usuario(state, payload) {
      /* if (!state.usuarios.find((item) => item.id === payload)) {
        router.push("/");
        return;
      }*/
      state.usuario = state.usuarios.find((item) => item.id === payload);
    },
    update(state, payload) {
      state.usuarios = state.usuarios.map((item) =>
        item.id === payload.id ? payload : item
      );
      router.push("/");
    },
  },
  actions: {
    cerrarSesion({commit}){
      commit('setUser', null);
      router.push('/ingreso');
    },
    // Usare la api de firebase para el login
    async ingresoUsuario({ commit }, user) {
      try {
        const res = await fetch(
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD1i1aE-P_xRjqlipzKclntR_1ZlMFCFMo",
          {
            method: "POST",
            body: JSON.stringify({
              email: user.email,
              password: user.pass,
              returnSecureToken: true,
            }),
          }
        );
        const userDB = await res.json();
        console.log("userDB", userDB);
        commit("setUser", userDB);
        router.push("/");
        localStorage.setItem("user", JSON.stringify(userDB));
      } catch (error) {
        console.log(error);
      }
    },
    // nota los estados se modifican en los mutations xd
    async consumirAPI({ commit }) {
      try {
        const data = await fetch("https://reqres.in/api/users");
        const array = await data.json();
        commit("cargar", array);
      } catch (error) {
        console.log(error);
      }
    },
    cargarLocalStorage({ commit }) {
      if (localStorage.getItem("user")) {
        commit("setUser", JSON.parse(localStorage.getItem("user")));
      } else {
        return commit("setUser", null);
      } 

    },
    setUsuarios({ commit }, usuario) {
      commit("set", usuario);
    },
    deleteUsuario({ commit }, id) {
      commit("delete", id);
    },
    setUsuario({ commit }, id) {
      commit("usuario", id);
    },
    updateUsuario({ commit }, usuario) {
      commit("update", usuario);
    },
  },
  getters: {
    usuarioAutenticado(state) {
      return !!state.user;
    },
  },
  modules: {},
});
