const router = new VueRouter({
        base: "basicoVue    ",
        routes:[
            { path: '/list', component: Lists }
        ]
});

var app = new Vue({
    el: '#app',
    router
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