Vue.component("reviews", {
  props: {
    reviews: {
      type: Array,
      default: () => [],
    },
    selected_product: {
      type: Number,
      required: true,
    },
  },
  template: `
  <div>
    <p v-if="!reviews[selected_product] || reviews[selected_product].reviews.length === 0">
      No reviews added on this product
    </p>
    <table v-if="reviews[selected_product] && reviews[selected_product].reviews.length > 0">
      <thead>
        <tr>
          <th>Name</th>
          <th>Review</th>
          <th>Ratings</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="review in reviews[selected_product].reviews" :key="review.name">
          <td>{{review.name}}</td>
          <td>{{review.review}}</td>
          <td>{{review.rating}}</td>
        </tr>
      </tbody>
    </table>
  </div>
  `,
});
