<template>
  <section class="src-components-users">
    <div v-if="users.length == 0">
      <div class="jumbotron text-center my-4">
        <h2>{{mensaje}}</h2>
      </div>
    </div>
    <div v-else>
      <table class="table">
        <thead>
          <tr>
            <th scope="col"># id</th>
            <th scope="col">Nombre</th>
            <th scope="col">Edad</th>
            <th scope="col">Email</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <th scope="row">{{user.id}}</th>
            <td>{{user.nombre}}</td>
            <td>{{user.edad}}</td>
            <td>{{user.email}}</td>
            <td>
              <button class="btn btn-danger btn-sm" v-on:click="quitar(user.id)">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script lang="js">
  import axios from 'axios'

  export default  {
    name: 'src-components-users',
     props: [],
    beforeMount(){
      this.mensaje = 'Cargando...';      
    },
    mounted () {
      this.cargar();
    },
    data () {
      return {
        mensaje: '',
        users: [],
        url: 'https://5eaca2f64bf71e00166a0a11.mockapi.io/users/'
      }
    },
    methods: {
      quitar(id) {
       axios.delete(this.url + id).then( res => {
         console.log(res.data);
         this.cargar();
       })
      },
      cargar(){
        axios.get(this.url).then( res =>{
            this.mensaje = 'No hay usuarios cargados';
            this.users = res.data;
        });
      }
    },
    computed: {

    }
}
</script>

<style scoped lang="css">
.jumbotron {
  background-color: rgb(255, 220, 155);
}
tbody tr:hover {
  background-color: rgb(255, 220, 155);
}
</style>
