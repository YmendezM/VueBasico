const ListsPersonSelect = {
    name: "ListsPersonSelect",
    template: 
    `<div>
        <select>
            <option v-if="filter(person)" v-for="(person, index) in people" :value="index">{{ person }}</option>
        </select>
        <input type="text" v-model="filterField">
    </div>`,
    data: function(){
        return {
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
            filterField: ''
        }
    },
    created: function() {

    },
    methods: {
        filter(person){
            return person.toLocaleLowerCase().indexOf(this.filterField.toLocaleLowerCase()) >= 0
        }
        
    }
}