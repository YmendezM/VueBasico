Vue.component('img-post', {
    template: `<img :src="imgPost()" :alt="name" :title="name">`,
    props: {
        url: String
    },
    data: function(){
        return{
            name: "Titulo de la Imagenes"
        }
    },
    methods: {
        imgPost(){
            if(this.url != ""){
                return this.url
            }
            return "https://upload.wikimedia.org/wikipedia/commons/c/c9/Naruto_logo.svg"
        }
    },
})