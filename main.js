//@ts-ignore
var app = new Vue({
  el: "#app",
  data: {
    product: "Kojinėss",
    image: "./images/vmSocks-blue-onWhite.png",
    altText: "Viena pora kojinių",
    inStock: 1,
    onSale: true,
    details: [
      "80% medvilnė",
      "20% polisterolas",
      "spalva saulės poveikiui atspari."
    ],
    variants: [
      {
        variantId: 111,
        variantColor: 'žalia',
        variantImage: './images/vmSocks-green-onWhite.png'
      },
      {
        variantId: 112,
        variantColor: 'mėlyna',
        variantImage: './images/vmSocks-blue-onWhite.png'
      },
    ],
    cart: 0
  },
  methods: {
    addToCart() {
      this.cart++
    },
    removeFromCart() {
      this.cart--;
    },
    updateProduct(variantImage) {
      this.image = variantImage;
    }
  }
});
