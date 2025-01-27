Vue.component("review-form", {
  template: `
  <form>
    <div class="review-form">
      <div>
        <label for="name">Name</label>
        <input v-model="name"/>
        <p v-if="error.name" :style="{color: 'red'}">Name is required</p>
      </div>
      <div>
        <label for="review">Review</label>
        <textarea v-model="review"/>
        <p v-if="error.review" :style="{color: 'red'}">Review is required</p>
      
      </div>
      <div>
        <label for="rating">Rating</label>
        <select v-model.number="rating">
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
       </select>
       <p v-if="error.rating" :style="{color: 'red'}">Rating is required</p>
      </div>
      <button @click.prevent="handleSubmit">Submit</button>
    </div>
  </form>
  `,
  data() {
    return {
      name: "",
      rating: 0,
      review: "",
      error: {
        name: "",
        rating: 0,
        review: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      if (this.name && this.rating && this.review) {
        const review = {
          name: this.name,
          rating: this.rating,
          review: this.review,
        };
        this.$emit("sumbit-review", review);
        this.name = "";
        this.rating = 0;
        this.review = "";
      } else {
        if (!this.name) this.error.name = true;
        if (!this.rating) this.error.rating = true;
        if (!this.review) this.error.review = true;
      }
    },
  },
});
