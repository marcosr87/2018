<template>
    <section class="personas">
        <fieldset>
            <legend>COMPLETE FORMULARIO</legend>
                <p>
                    <strong><label for="model">Ingrese Nombre</label></strong>
                    <input type="text" @input="nameChanged" :value="nombre" id="name" placeholder="Ingrese su nombre">
                </p>
                <p>
                    <strong><label for="model">Ingrese Edad</label></strong>
                    <input type="number" @input="ageChanged" :value="edad" id="edad" placeholder="Ingrese su edad">
                </p>
                <p> 
                        
                    <strong><label for="sexo">Sexo</label></strong>
                    <select name="sexo" @input="sexChanged" :value="sexo" id="sexo">
                        <option disabled value="">Por favor seleccione su sexo</option>
                        <option>Masculino</option>
                        <option>Femenino</option>
              
                     </select>
                        <!--<strong><label for="model">Ingrese Sexo</label></strong>
                        <input type="radio" name="genero" v-model="se" v-bind:value="sexChanged" id="sexo" > Masculino
                        <input type="radio" name="genero" v-model="persona.sexo" value="M" checked> Masculino !-->
                        <!-- <input type="radio" name="genero2" v-on:input="sexChanged" v-bind:value="Femenimo" id="sexo"> Femenino
                        <<input type="radio" name="genero" value="F"> Femenino!-->  
                </p>
                <button @click="agregar()">Agregar</button>
            
        </fieldset>
    </section>
</template> 

<script>
export default {
    name: 'personas',
    props:{
        nombre: String,
        edad: 0,
        sexo: String

    },
    methods :{
        nameChanged(event) {
        this.$emit('nombre', event.target.value);
      },
      ageChanged(event) {
        this.$emit('edad', event.target.value);
      },
      sexChanged(event) {
        this.$emit('sexo', event.target.value);
      },
      agregar() {
        this.$emit('agregar');

    }

}
}
</script>

<style>
    .personas{
    width: 100%;
  }

</style>
