const ListsPerson = {
    name: "ListsPerson",
    template: 
    `<div>
        <lis-alert></lis-alert>
        <ul>
            <li v-for="person in people">{{ person }}</li>
        </ul>
    </div>`,
    data: function(){
        return {
            people : ['Ysrael', 'Ely', 'Montse']
        }
    }
}