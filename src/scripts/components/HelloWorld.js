import {
  log
} from '../imported'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },

  mounted() {
    log('Hello, world')
  }
}