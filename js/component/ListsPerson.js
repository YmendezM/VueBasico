const ListsPerson = {
    name: "ListsPerson",
    template: 
    `<div>
        <lis-alert></lis-alert>
        <ul>
            <li v-for="person in people">{{ person }}</li>
            <!--Visualización de index en arreglo-->
            <li v-for="(person, index) in people">
            {{ index }} - {{ person }}
            <span v-if="index == people.length -1"> - Este es el ultimo elemento</span>
            </li>
        </ul>
        <button v-on:click="filterPeople" class="btn btn-primary">Filtro de caracter</button>
        <ul>
            <li v-for="person in ArrayObject">{{ person.name }} - {{ person.age }}</li>
            <!--Visualización de index en  de Objetos-->
            <!--<li v-for="(person, index) in ArrayObjetcs">
            {{ index }} - {{ person }}
            <span v-if="index == people.length -1"> - Este es el ultimo elemento</span>
            </li>-->
        </ul>
        <input v-model="filtro_edad" type="test">
        <button v-on:click="filterPeopleObject" class="btn btn-primary">Filtro de edad</button>
    </div>`,
    data: function(){
        return {
            filtro_edad: 1,
            people : ['Ysrael', 'Ely', 'Montse'],
            ArrayObject:[
                {name:"Ysrael", surname:"Mendez", age: 30},
                {name:"Ely", surname:"Redondo", age: 30},
                {name:"Montse", surname:"Mendez", age: 5},
                {name:"Douglas", surname:"Ramirez", age: 30},
                {name:"Ildemaro", surname:"Ramirez", age: 28},
                {name:"Papá", surname:"Mendez", age: 55},
                {name:"Mamá", surname:"Marciales", age: 50}
            ],
            ArrayObjectRespaldo:[],
        }
    },
    created: function() {
        //Se ejecuta cuando se carga el componente
        this.ArrayObjectRespaldo = this.ArrayObject
    },
    methods: {
        filterPeople: function(){
            this.people = this.people.filter(
                person => {
                    return person.length > 5
                }
            )
            console.log(this.people)
        },
        filterPeopleObject: function(){
            this.ArrayObject = this.ArrayObjectRespaldo
            this.ArrayObject = this.ArrayObject.filter(
                person => {
                    return person.age > this.filtro_edad
                }
            )
            console.log(this.ArrayObject)
        }

        
    }
}