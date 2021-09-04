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
    </div>`,
    data: function(){
        return {
            people : ['Ysrael', 'Ely', 'Montse']
        }
    }
}