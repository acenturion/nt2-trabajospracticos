<template>
  <section class="components-form">
    <div class="jumbotron mt-3">
      <h2>Agregar nuevo usuario</h2>
      <hr />

      <vue-form :state="formState" @submit.prevent="enviar()">
        <validate tag="div">
          <label for="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            class="form-control"
            name="nombre"
            v-model.trim="formData.nombre"
            autocomplete="off"
            required
          />
        </validate>
        <field-messages name="nombre" show="$dirty">
          <div slot="required" class="alert alert-danger my-1">El nombre es requerido</div>
        </field-messages>

        <validate tag="div">
          <label for="edad">Edad</label>
          <input
            type="number"
            id="edad"
            class="form-control"
            name="edad"
            v-model.number="formData.edad"
            :min="minEdad"
            :max="maxEdad"
            required
          />
        </validate>
        <field-messages name="edad" show="$dirty">
          <div slot="required" class="alert alert-danger my-1">La edad es requerida</div>
          <div slot="min" class="alert alert-danger my-1">la edad minima es de {{minEdad}} años</div>
          <div slot="max" class="alert alert-danger my-1">la edad maxima es de {{maxEdad}} años</div>
        </field-messages>

        <validate tag="div">
          <label for="email">Email</label>
          <input
            type="text"
            id="email"
            class="form-control"
            name="email"
            v-model.trim="formData.email"
            autocomplete="off"
            required
          />
        </validate>
        <field-messages name="email" show="$dirty">
          <div slot="required" class="alert alert-danger my-1">El email es requerido</div>
        </field-messages>

        <button class="btn btn-success my-4" :disabled="formState.$invalid" type="submit">Enviar</button>
      </vue-form>

      <div
        class="alert alert-success"
        v-if="nuevoUsuario"
        v-on:click="nuevoUsuario = false"
      >Se agrego el usuario {{nuevoUsuario}}.</div>
    </div>
  </section>
</template>

<script lang="js">
  import axios from 'axios'
  export default  {
    name: 'components-form',
    props: [],
    mounted () {

    },
    data () {
      return {
        formState: {},
        formData: this.getInitialData(),
        minEdad: 18,
        maxEdad: 120,
        url: 'https://5eaca2f64bf71e00166a0a11.mockapi.io/users/',
        nuevoUsuario: false
      }
    },
    methods: {
      getInitialData() {
        return {
          nombre : '',
          edad: '',
          email: ''
        }
      },
      enviar(){
        axios.post(this.url, this.formData).then( res =>{
          this.nuevoUsuario = res.data.nombre;  
        }).catch( err => {
          console.log(err);
          
        })
        this.formData = this.getInitialData();
        this.formState._reset();
      }

    },
    computed: {
  
    }
}


</script>

<style scoped lang="css">

.jumbotron{
 background-color: rgb(255, 220, 155)
}

</style>
