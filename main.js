//@ts-ignore
var app = new Vue({ 
  el: "#app",
  data: {
    brand: '"Armani"',
    product: 'Kojinės',
    selectedVariant: 0,
    altText: "Viena pora kojinių",
    onSale: true,
    details: [
      "80% medvilnė",
      "20% polisterolas",
      "spalva saulės poveikiui atspari"
    ],
    variants: [
      {
        variantId: 111,
        variantColor: 'green',
        variantImage: './images/vmSocks-green-onWhite.png',
        variantQuantity: 10
      },
      {
        variantId: 112,
        variantColor: "blue",
        variantImage: './images/vmSocks-blue-onWhite.png',
        variantQuantity: 0
      },
    ],
    cart: 0
  },
  methods: {
    addToCart() {
      this.cart++;
    },
    removeFromCart() {
      this.cart--;
    },
    updateProduct(index) {
      this.selectedVariant = index;
      console.log(index);
    },
    
  },
  computed: {
    tittle() {
      return this.brand + ' ' + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].variantImage;
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity;
    }
  },
});
