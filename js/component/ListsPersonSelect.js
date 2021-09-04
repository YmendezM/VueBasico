const ListsPersonSelect = {
    name: "ListsPersonSelect",
    template:
        `<div>
        <div class="form-group">
                <label>Nombre</label>
                <input type="text" class="form-control" v-model="filterField">
        </div>
        <select>
            <option v-if="filter(person)" v-for="(person, index) in people" :value="index">{{ person }}</option>
        </select>
        <div class="form-group">
                <label>Nombre</label>
                <input type="text" class="form-control" v-model="filterFieldTable">
        </div>
        <div class="form-group">
                <label>Inactivo</label>
                <input type="checkbox" v-model="filterFieldTableInactivo">
        </div>
        <div class="form-group">
                <label>Activo</label>
                <input type="checkbox" v-model="filterFieldTableActivo">
        </div>
        
        <table class="table">
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Edad</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            <tr v-if="filterTable(person)" v-for="person in ArrayObject">
                <td>{{ person.name }}</td>
                <td>{{ person.surname }}</td>
                <td>{{ person.age }}</td>
                <td>{{ person.active }}</td>
            </tr>
        </tbody>
        </table>
    </div>`,
    data: function () {
        return {
            people: ['Ysrael', 'Ely', 'Montse'],
            ArrayObject: [
                { name: "Ysrael", surname: "Mendez", age: 30, active: false },
                { name: "Ely", surname: "Redondo", age: 30, active: true },
                { name: "Montse", surname: "Mendez", age: 5, active: true },
                { name: "Douglas", surname: "Ramirez", age: 30, active: true },
                { name: "Ildemaro", surname: "Ramirez", age: 28, active: true },
                { name: "Papá", surname: "Mendez", age: 55, active: false },
                { name: "Mamá", surname: "Marciales", age: 50, active: true }
            ],
            filterField: '',
            filterFieldTable: '',
            filterFieldTableInactivo: false,
            filterFieldTableActivo: false
        }
    },
    created: function () {

    },
    methods: {
        filter(person) {
            return person.toLocaleLowerCase().indexOf(this.filterField.toLocaleLowerCase()) >= 0
        },
        filterTable(person) {
            //return person.name.toLocaleLowerCase().indexOf(this.filterFieldTable.toLocaleLowerCase()) >= 0
            var show = true
            if(person.name.toLocaleLowerCase().indexOf(this.filterFieldTable.toLocaleLowerCase()) < 0)
            show = false
            else if (person.active == false && this.filterFieldTableActivo)
            show = false
            else if (person.active == true && this.filterFieldTableInactivo)
            show = false
            return show
        }

    }
}