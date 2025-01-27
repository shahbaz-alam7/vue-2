Vue.component("product", {
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
    cart: {},
    selected_product: {
      type: Number,
      required: true,
    },
  },
  template: `
  <div class="product">
  <div class="product-image">
    <img :src="image" />
  </div>

  <div class="product-info">
    <h1>{{title}}</h1>
    <p :style="{ display: premium? 'block':'none'}">Discount of 20% for premium user</p>
    <p v-if="inStock">In Stock</p>
    <p v-else>Out of Stock</p>
    <h5>Price: {{price}}</h5>
    <ul>
      <li v-for="detail in details">{{ detail }}</li>
    </ul>
    <div>
      <h3>Smililar Products</h3>
      <div class="varients">
        <p
        v-for="(variant, index) in variants"
        :key="variant.product_id"
          class="color-box"
          @mouseover="handleMouseOver(index)"
          :style="{backgroundColor:variant.product_color}"
        />
        <div>
          <button
            @click="addToCart"
            :disabled="!inStock"
            :class="{disabledButton:!inStock}"
          >
            Add to Cart
          </button>
          <button v-on:click="resetCart">Reset Cart</button>
        </div>
      </div>
    </div>
  </div>
</div>
     `,
  data() {
    return {
      product: "Socks",
      brand: "Vue-2",
      // selected_product: 0,
      details: ["80% cotton", "20% polyester", "Gender-neutral"],
      variants: [
        {
          product_id: 1,
          product_color: "green",
          image:
            "https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg",
          quantity: 5,
          price: 200,
        },
        {
          product_id: 2,
          product_color: "blue",
          image:
            "https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg",
          quantity: 4,
          price: 240,
        },
      ],
    };
  },
  methods: {
    handleMouseOver(id) {
      this.$emit("select-product", id);
    },
    addToCart() {
      this.$emit(
        "add-to-cart",
        this.variants[this.selected_product].product_id
      );
    },
    resetCart() {
      this.$emit("reset-cart");
    },
  },
  computed: {
    title() {
      return this.product + " " + this.brand;
    },
    image() {
      return this.variants[this.selected_product].image;
    },
    inStock() {
      const selctedItem = this.variants[this.selected_product];
      const countOfAddedItem = this.cart.filter(
        (each) => each == selctedItem.product_id
      ).length;
      const quantity = selctedItem.quantity;
      return quantity > countOfAddedItem;
    },

    price() {
      let productPrice = this.variants[this.selected_product].price;
      if (this.premium) productPrice = productPrice * (1 - 0.2);
      return productPrice;
    },
  },
});
