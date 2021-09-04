const ListsPrograming = {
    name: "ListsPrograming",
    template: 
    `<div>
        <!--<lis-alert-default :message="saludo"></lis-alert-default>-->
        <lis-alert-default></lis-alert-default>
        <ul>
            <li v-for="len in language">{{ len }}</li>
        </ul>
    </div>`,
    data: function(){
        return {
            language : ['Java', 'PHP', 'JS'],
            saludo: "Bienvenidos a Bienvenidos..!!"
        }
    }
}