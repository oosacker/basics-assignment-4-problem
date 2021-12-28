const app = Vue.createApp({
  data() {
    return {
      userInput: '',
      hidden: 'visible',
      inlineStyle: '' 
    };
  },

  computed: {
    paragraphStyle() {
      return `${this.userInput} ${this.hidden}`
    }
  },

  watch: {

  },

  methods: {
    btnClicked() {
      this.hidden = this.hidden === 'visible' ?  'hidden' : 'visible'
    }
  }
});

app.mount('#assignment');
