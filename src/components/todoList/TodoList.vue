<script setup>
import { reactive, onMounted } from "vue";
    import TodoListAddForm from './TodoListAddForm.vue';
    import TodoListFooter from './TodoListFooter.vue';
    import Todo from './Todo.vue';
    import DB from "@/services/DB";

    const todos = reactive([]);
    onMounted (async () => {
      DB.setapiURL('https://68ad9558a0b85b2f2cf3e221.mockapi.io/');
      todos.splice(todos.length, 0, ...await DB.findAll());
      console.table(todos);
    });
</script>
<template><main class="w-full max-w-xl mt-10 bg-slate-300 rounded-xl">
      <!-- CARD LISTE -->
      <section
        class="bg-slate-50 rounded-xl shadow ring-1 ring-slate-200/60 overflow-hidden"
        aria-labelledby="todo-heading"
      >
        <h2 id="todo-heading" class="sr-only">Todo list</h2>
        <todoListAddForm/>
        <!-- LISTE DES TODOS -->
        <ul class="m-4 divide-y divide-slate-200" role="list" aria-label="Todos">
          <!-- ITEM (exemple) -->
          <todo v-for="todo in todos" :key="todo.id" :todo=todo @deleteTodo="console.log('Delete this todo')" />

          <!-- Message si aucun todo (à gérer en Vue) -->
          <li
            class="px-4 py-6 sm:px-5 text-slate-400 italic text-center hidden"
            role="listitem"
          >
            No tasks yet.
          </li>
        </ul>

            <TodoListFooter/>

      </section>
    </main></template>
<style scoped></style>