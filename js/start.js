
var wz = new Vue({ 
    el: '#wz' ,
    data: {
     message: 'Hello Vue!' 
    } 
 })
 
 var wz1 = new Vue({ 
    el: '#wz1' ,
    data: {
      message: 'Hello Vue.js!'
    },
    methods: {          reverseMessage: function () { this .message = this .message.split('').reverse().join('')
    }
   }
 })