//@ts-ignore
var app = new Vue({ // eslint-disable-line
  el: "#app",
  data: {
    product: "Kojinės",
    image: "./images/vmSocks-blue-onWhite.png",
    altText: "Viena pora kojinių",
    inStock: 1,
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
        variantImage: './images/vmSocks-green-onWhite.png'
      },
      {
        variantId: 112,
        variantColor: "blue",
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
