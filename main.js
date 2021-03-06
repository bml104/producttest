
Vue.component('product',{
  template: ``



})




var app = new Vue({
  el: '#app',
  data:{
    product: 'Red Shoes',
    brand: "TPL Dev",
    description: 'Red Baller Shoes',
    image: '/img/red.png',
    shoeUrl: 'https://www.tangeroutlet.com/daytona',
    inventory: 0,
    inStock: true,
    onSale: false,
    details: ["cotton", "red", "low top", "white laces"],
    shoeSizes: ["9", "10", "11", "11.5"],
    cart: 0,
    variants: [
    {
      variantId: 2234,
      variantColor: 'red',
      variantImage: './img/red.png'
    },
    {
      variantId: 4774,
      variantColor: 'blue',
      variantImage: '/img/blue.png'
    }
  ]
  },
  methods: {
    addToCart: function(){
      this.cart += 1
    },
    updateProduct: function(variantImage){
      this.image = variantImage
    }
  },
  computed: {
   title(){
     return this.brand + " - " + this.product
   } 
  }

})