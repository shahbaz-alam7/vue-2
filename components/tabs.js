Vue.component("tabs", {
  props: {
    selectedtab: {
      type: Number,
      required: true,
    },
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
    <div class="tab">
      <span 
        v-for="(tab, index) in tabs" 
        :key="index" 
        @click="handleTab(index)" 
        :class="{ activeTab: selectedtab === index }"
      >
        {{ tab }} 
        <span v-if="index === 1 && reviews[selected_product] && reviews[selected_product].reviews.length">
          ({{ reviews[selected_product].reviews.length }})
        </span>
      </span>
    </div>
    `,
  data() {
    return {
      tabs: ["Add review", "Review"], // Tab names
    };
  },
  methods: {
    handleTab(index) {
      this.$emit("change-tab", index); // Emit an event when the tab is changed
    },
  },
});
