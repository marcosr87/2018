<template>
    <div id="listaFiltrada">
        <section>
			<h2>Lista aplicando filtro</h2>
			<select v-model="selected">
					<option disabled value="">seleccione genero</option>
	  				<option value="femenino">Femenino</option>
	  				<option value="masculino">Masculino</option>
			</select>
			<b-button is-info @click="filtrar()">Filtrar</b-button>
            <ul>
				<li v-for="(persona, index) in listado" :key="index">
					<p>ID:{{persona.id}} - Nombre: {{persona.nombre}} - Edad: {{persona.edad}} - Sexo: {{persona.sexo}}</p>
				</li>
			</ul>
		</section>
    </div>    
</template>


<script>
import personService from '@/services/personService'

export default {
    name: 'listaFiltrada',
    data(){
        return {
            selected: "masculino",
            listado: [],
            personas: []
        }
    }, 
    methods: {
        filtrar(){
					this.listado = this.personas.filter(persona => persona.sexo === this.selected);
				}
    },
    created() {
     this.personas = personService.traerTodos();
    }
};
</script>