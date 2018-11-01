<template>
  <div id="app">
    <section>
        <h2>Agregar persona - Cantidad actual: {{total}}</h2>
				<b-label>Nombre: </b-label>                  
				<input type="text" v-model="persona.nombre">
				<b-label>Edad:</b-label>
				<input type="number" v-model="persona.edad">

				<b-label>Sexo:</b-label>
				<select v-model="persona.sexo">
						<option disabled>seleccione genero</option>
						<option value="femenino">Femenino</option>
						<option value="masculino" selected>Masculino</option>
				</select>
			
		
				<b-button is-success @click="agregar()">Ingresar</b-button>
			
			<b-table>
				<tr>
					<th>ID</th>
					<th>Nombre</th> 
					<th>Edad</th>
					<th>Sexo</th>
				</tr>
				<tr  v-for="(people, index) in personas" :key="index">
					<td>{{people.id}}</td>
					<td>{{people.nombre}}</td>
					<td>{{people.edad}}</td> 
					<td>{{people.sexo}}</td>
				</tr>
			</b-table>

    </section>
  </div>
</template>
    


<script>
import personService from '@/services/personService'

export default {
  name: 'app',
  data() {
    return {
      personas: [],
        persona: {
            nombre: "",
            edad: 0,
            sexo: ""
				}
		}
  },
  computed: {
				total(){
					return this.personas.length;
				}
			},
  methods: {
				agregar(){
					if(this.persona.nombre != null &&
							this.persona.nombre.length > 0 &&
							this.persona.edad != null &&
							this.persona.edad > 0 &&
							this.persona.edad.length > 0) 
						 	{ 
								personService.guardarPersona(this.persona.nombre, this.persona.edad, this.persona.sexo);
								this.personas = personService.traerTodos();
								this.persona.nombre = "";
								this.persona.edad = "";
							} 
							else { alert('ningun campo debe estar vacio y la edad no debe ser negativa');}
				}
	},
		created() {
    this.personas = personService.traerTodos();
		}
}
</script>

<style>
th, td {
    padding: 15px;
    text-align: left;
}

table {
	width: 40%;
}

input {
	margin-right: 10px;
}
</style>

