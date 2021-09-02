var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Word',
        sum : 3+6,
        value : 6,
        isVisible : true,
        people : ['Ysrael', 'Ely', 'Montse'],
        content_html : "<h1>Hola Mundo</h1>",
        text: "Descripcion de nuestra imagen",
        src: "asset/images.jpeg"
    },
    computed: {
        reversedMessage: function(){
            return this.message.split('').reverse().join('')
        }
    },
    methods:{
        calcularSuma(value1, value2){
            return value1 + value2
        }
    }

});