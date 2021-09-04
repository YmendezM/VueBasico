Vue.component('lis-alert-default', {
    props:{
      //message: String
      //Parametros por defecto
      message: {
        type: String,
        default: "Bienvenidos a Bienvenidos Default"
      }
    },
    template: `<div class="alert alert-warning" role="alert">
      {{ message }}
  </div>`
})