//@ts-ignore
Vue.component('product', {
  template:`
  <div class="product">
    <div class="product-image">
      <img :src="image" :alt="altText" />
    </div>

    <div class="product-info">
      <h1>{{ tittle }}</h1>
      <p v-if="inStock > 10">
        <span class="onSale" v-show="onSale"> Išpardavimas! </span>
        Sandėlyje 10+ vnt.
      </p>
      <p v-else-if="inStock <= 10 && inStock > 0">
        <span class="onSale" v-show="onSale"> Išpardavimas! </span>
        Liko {{ inStock }} vnt.
      </p>
      <p v-else="inStock">Sandėlyje nėra</p>

      <ul>
        <li v-for='detail in details'>{{ detail }}</li>
      </ul>

      <h3>Galimos spalvos:</h3>
      <div 
        class="color-box" 
        :style="{ backgroundColor: variant.variantColor }" 
        v-for="(variant, index) in variants" :key="variant.variantId"
        @mouseover='updateProduct(index)'>
      </div>
      
      <div>
        <!-- @click arba v-on:click=.... -->
        <button @click='addToCart'
          :disabled='cart>=inStock'
          :class= '{disabledButton: cart>=inStock}' >
          Įdėti į krepšelį
        </button>

        <button class='removeFromCart' v-if='cart > 0 ' @click='removeFromCart'>Išimti iš krepšelio</button> 
        <div class="cart">
          <p>Cart: {{ cart }}</p>
        </div>

      </div>
    </div>
  </div>
  `,
  data() {
    return {
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
    }
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
    }
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
  }
})

//@ts-ignore
var app = new Vue({ 
  el: "#app",
});
