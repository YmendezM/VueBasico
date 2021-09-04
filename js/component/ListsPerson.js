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
        <button v-on:click="filterPeople" class="btn btn-primary">Filtro mayor a 5</button>
    </div>`,
    data: function(){
        return {
            people : ['Ysrael', 'Ely', 'Montse'],
            ArrayObjetcs:[
                {name:"Ysrael", surname:"Alberto", age:"30"},
                {name:"Ysrael", surname:"Alberto", age:"30"},
                {name:"Ysrael", surname:"Alberto", age:"30"},
                {name:"Ysrael", surname:"Alberto", age:"30"},
                {name:"Ysrael", surname:"Alberto", age:"30"},
                {name:"Ysrael", surname:"Alberto", age:"30"},
                {name:"Ysrael", surname:"Alberto", age:"30"}
            ]
        }
    },
    methods: {
        filterPeople: function(){
            this.people = this.people.filter(
                person => {
                    return person.length > 5
                }
            )
            console.log(this.people)
        }

        
    }
}