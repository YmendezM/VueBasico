const router = new VueRouter({
        base: "basicoVue    ",
        routes:[
            { path: '/list_person', redirect: '/list_person_all'},
            { path: '/list_person_all', component: ListsPerson },
            { path: '/list_programing', component: ListsPrograming },
            { path: '/list_person_select', component: ListsPersonSelect },
            { path: '*', component: PageNotFound }
        ]
});

var app = new Vue({
    el: '#app',
    router,
    data:{
        img_prosp: "https://static.wikia.nocookie.net/doblaje/images/7/79/Naruto-Shippuden-PNG-File.png/revision/latest/top-crop/width/360/height/450?cb=20180819151446&path-prefix=es"  
    },
    mounted() {
        console.log(this.$route)
    },
});



/* Version 1
const Foo = { template: '<div>Prueba foo</div>' }
const Bar = { template: '<div>Prueba bar</div>' }


const routes = [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
  ]

const router = new VueRouter({
    routes // short for `routes: routes`
  })



var app = new Vue({
    el: '#app',
    router,
    data: {
        message: 'Hello Word',
        sum : 3+6,
        value : 6,
        isVisible : true,
        people : ['Ysrael', 'Ely', 'Montse'],
        content_html : "<h1>Hola Mundo</h1>",
        text: "Descripcion de nuestra imagen",
        src: "asset/images.jpeg",
        numero: 13,
        edad: '',
        errorAction: true
    },
    computed: {
        reversedMessage: function(){
            return this.message.split('').reverse().join('')
        }
    },
    methods:{
        calcularSuma(value1, value2){
            return value1 + value2
        },
        incremental(){
            this.numero++
        },
        decremental(){
            this.numero--
        }
    },
    watch:{
        //Observadores.
        numero: function(val){
            console.log("watch ", val)
        }
    }

});*/