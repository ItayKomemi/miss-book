export default {
  props: {
    txt: {
      type: String,
      required: true,
    },
    length: {
      type: Number,
      required: false,
      default: 100,
    },
  },
  template: `
        <p> {{handelTxtLength}}
            <button @click="changeShow" v-if="txt.length > length"><span>{{changeButtonTxt}}</span></button>    
        </p>
    `,
  data() {
    return {
      isWholeTxt: true,
    }
  },
  methods: {
    changeShow() {
      this.isWholeTxt = !this.isWholeTxt
    },
  },
  computed: {
    handelTxtLength() {
      if (this.txt.length > 100 && this.isWholeTxt) {
        return this.txt.slice(0, 100)
      } else return this.txt
    },
    changeButtonTxt() {
      if (this.isWholeTxt) return "Read more.."
      else return "Read less"
    },
  },
}
