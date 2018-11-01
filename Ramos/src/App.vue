<template>
  <div id="app">
         
            <b-navbar is-dark role="navigation" aria-label="main navigation">
            <b-navbar-brand>
              <router-link to="/" class="navbar-item" >Agregar</router-link> 
              <router-link to="/editar" class="navbar-item" >Editar</router-link> 
              <router-link to="/eliminar" class="navbar-item" >Eliminar</router-link> 
              <router-link to="/filtrar" class="navbar-item" >Filtrar</router-link>
              
          </b-navbar-brand>
          </b-navbar>
          <router-view/>
  </div>
  
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
    }
  }
}
</script>
