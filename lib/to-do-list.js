import { createApp } from "vue";

createApp({
  data() {
    return {
      todos: [
        { title: "Code a to-do list", done: false },
        { title: "Eat breakfast", done: true },
        { title: "Do some exercise", done: false },
        { title: "Water the plants", done: true }
      ],
      newTodo: null,
    };
  },
  methods: {
    addTodo() {
      console.log("Adding a todo...");
      const userInputTodo = this.newTodo;
      this.todos.push({ title: userInputTodo, done: false });
      this.newTodo = "";
    },
    deleteTodo(index) {
      console.log("Deleting a todo...");
      this.todos.splice(index, 1);
    }
  }
}).mount('#todosContainer')
