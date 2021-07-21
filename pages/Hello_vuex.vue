<template>
    <div>
        <ul>
            <li v-for="todo in todos" :key="todo.text">
                <input :checked="todo.done" @change="toggle(todo)" type="checkbox">
                <span :class="{ done: todo.done }">{{ todo.text }}</span>
            </li>
            <li><input @keyup.enter="addTodo" placeholder="What needs to be done?___" ></li>
            <v-btn @click="login">login</v-btn>
        </ul>
    </div>
</template>

<script>
import firebase from 'firebase'
import { mapMutations } from 'vuex'

export default {
    data: () => {
        return{ 
            
        }
    },
  computed: {
    todos () {
      return this.$store.state.todos.list
    }
  },
  methods: {

    login(){
      firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    },


    addTodo (e) {
      this.$store.commit('todos/add', e.target.value)
      e.target.value = ''
    },
    ...mapMutations({
      toggle: 'todos/toggle'
    })
  }
}
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>