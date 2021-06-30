<template>
 <div id="app">
   <h1 class="titile">
    SampleTestTodoList
   </h1>
    <form v-on:submit.prevent>
        <input type="text" v-model="newItem">
        </input>
       <v-btn v-on:click="addItem">add</v-btn>
    </form>
     <ul v-for="(todo,id) in todos">
        <li v-bind:key=id>
        {{todo.item}}
        </li>    
     </ul>
     <h2 class="subtitle">sample</h2>
   </div> 
</template>
<script>
//import Logo form '~/components/Logo.vue'
 
export default {
  components :{
  },
  data(){
    return{
      newItem:'',
      todos:[]
    }
  },
  methods:{
    addItem:function(event){
      var todo={
        item:this.newItem
      };
      this.todos.push(todo)
    }
  }
}
</script>