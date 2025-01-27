var app = new Vue({
  el: "#app",
  data: {
    cart: [],
    premium: true,
    reviews: [],
    selectedTab: 0,
    selectedProduct: 0,
  },
  methods: {
    updateCart(id) {
      this.cart.push(id);
    },
    resetCart() {
      this.cart = [];
    },
    handleReviewSubmit(review) {
      let selectedProduct = this.reviews.find(
        (product) => product.id === this.selectedProduct
      );
      if (selectedProduct) selectedProduct.reviews.push(review);
      else this.reviews.push({ id: this.selectedProduct, reviews: [review] });
    },
    updateTab(index) {
      this.selectedTab = index;
    },
    handleProduct(id) {
      this.selectedProduct = id;
    },
  },
});
