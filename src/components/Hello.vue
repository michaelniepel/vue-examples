<template>
  <div class="hello">
    <h2>{{ msg | capitalize }}</h2>
    <button @click="flipSeen">Flip</button>
    <p v-if="seen">{{ msg }} {{ reversedMessage }}</p>
    <ul>
      <todo-item v-for="todo in todos" :todo="todo"></todo-item>
    </ul>
  </div>
</template>

<script>
let TodoItem = {
  name: 'TodoItem',
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
}

export default {
  name: 'Hello',
  data () {
    return {
      msg: 'michael!',
      seen: false,
      todos: [
        { text: 'TEST' },
        { text: 'RUN' }
      ]
    }
  },
  components: {
    'todo-item': TodoItem
  },
  methods: {
    flipSeen () {
      this.seen = !this.seen
    }
  },
  filters: {
    capitalize (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  computed: {
    reversedMessage () {
      return this.msg.split('').reverse().join('')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
