<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="logo">
        <router-link to="/" tag="div">
          <a class="navbar-brand" href="#">AgregaUsuario.com</a>
        </router-link>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/form" tag="li">
              <a href="#" class="nav-link">Formulario</a>
            </router-link>
          </li>

          <li class="nav-item">
            <router-link to="/users" tag="li">
              <a href="#" class="nav-link">Usuarios</a>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script lang="js">

  export default  {
    name: 'src-components-navbar',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
li:hover{
  background-color: rgb(255, 220, 155);
  border-radius: 5px;
}
</style>
