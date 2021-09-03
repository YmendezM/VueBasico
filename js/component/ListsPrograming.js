const ListsPrograming = {
    name: "ListsPrograming",
    template: 
    `<div>
        <ul>
            <li v-for="len in language">{{ len }}</li>
        </ul>
    </div>`,
    data: function(){
        return {
            language : ['Java', 'PHP', 'JS']
        }
    }
}