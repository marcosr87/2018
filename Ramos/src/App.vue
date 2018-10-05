<template>
    <div id='app'>
        <p v-if="errors.length">
			<b>Para ingresar una Persona necesita completar los siguientes campos:</b>
			<ul>
				<li v-for="error in errors" :key="error.id">{{ error }}</li>
			</ul>
		</p>

        <section class="header">
			<personas @nombre="setNombre" @edad="setEdad" @sexo="setSexo" @agregar="agregar" 
			:nombre="persona.nombre" :edad="persona.edad" :sexo="persona.sexo"/>
		</section>
        
        
        
        <br>
		<br>
         <fieldset>
            <legend>LISTADO</legend>
            <label>Toque en la esfera para eliminar persona</label>
            <p>&nbsp;</p>        
            <table class="table table-striped text-white" v-if="total > 0">
                <thead>
                    <tr>
                        
                        <th width="10%"></th>
                        <th width="50%">Nombre y Apellido</th>
                        <th width="0%">Sexo</th>
                        <th width="0%">Edad</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </tfoot>                    
                <tbody>
                   
                    <tr v-for="(persona, index) in personas" :key="index">                    
                        <!--<template v-if="listado==='T' || listado==persona.sexo">!-->
                            <td align="right"><a class="btn btn-default" data-toggle="tooltip" v-bind:title='"Eliminar a "+persona.nombre' @click="borrarPersona(persona.id)"><img src="TP5/images/esfera.png" border="0"></a></td>
                            
                            <td> {{ persona.nombre }}</td>
                            <td> {{ persona.sexo }}</td>
                            <td> {{ persona.edad }}</td>
                       <!-- </template>!-->
                         
                    </tr>
                </tbody>
            </table>
            </fieldset>

        
        <section>
			<listado @sexolista="setSexolista" @listar="listar" :sexolista="sexolista"/>
		</section>

		<ul>
			<li v-for="(persona, index) in listado" :key="index">
				<a>{{ persona.nombre }} {{ persona.edad}} años</a>
			</li>
        </ul>
        


    </div>
  
</template>

<script>

    import Personas from './components/comp-personas.vue'
    import Listado from './components/comp-listado.vue'
export default {
	name: 'app',
	components: {
        Personas,
        Listado,
		
	},
	data() {
		return{
			errors: [],
            idInicial: 0,
            personas: [],
            persona: {                        
                nombre: "",
                edad: "",
                sexo: ""
            },
            sexolista: "",
            listado: []
        }
    },
    computed: {
		total() {
			return this.personas.length;
		},
		totallistado() {
			return this.listado.length;
        }
    },
	methods: {
        setNombre(nombre) {
        this.persona.nombre = nombre;
                },
        setEdad(edad) {
        this.persona.edad = edad;
        },
        setSexo(sexo){
        this.persona.sexo = sexo;
        },
        setSexolista(sexolista){
        this.sexolista = sexolista;
        },
        
	
        agregar() {
                        if (this.persona.nombre && this.persona.edad && this.persona.sexo) {
                        
                            this.personas.push({
                                id: this.idInicial++,
                                nombre: this.persona.nombre,
                                edad: this.persona.edad,
                                sexo: this.persona.sexo
                            });                        
                            this.persona.nombre = "";
                            this.persona.edad = "";
                            this.persona.sexo = "";
                            this.errors = [];
                            
                            
                            
                        } else 
                        {

                            this.errors = [];

                            if (!this.persona.nombre) {
                                this.errors.push('El Nombre es requerido');
                            }
                            if (!this.persona.edad) {
                                this.errors.push('La Edad es requerida');
                            }    
                            if (!this.persona.sexo) {
                                this.errors.push('El Sexo es Requerido');
                            }    
                             
                        
                        }
                    
                    },
                    
                    borrarPersona(id) {
                        this.personas = this.personas.filter(persona => persona.id !== id);
                    },
                    
                    listar(sexo) {
                        this.listado = this.personas.filter(persona => persona.sexo == sexo);
                    },
                                  
                }   
            }
		
        
        

	

</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.header{
  position: relative;
}

</style>