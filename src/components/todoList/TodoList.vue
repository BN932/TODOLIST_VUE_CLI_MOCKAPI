<script setup>
    import { reactive, ref, onMounted } from "vue";
    import TodoListAddForm from './TodoListAddForm.vue';
    import TodoListFooter from './TodoListFooter.vue';
    import Todo from './Todo.vue';
    import { DB } from '@/services/DB.js';
    const props = defineProps({
      apiURL: {type: String, required: true},
    })
    onMounted (async () => {
      DB.setapiURL(props.apiURL);
      
      DB.todos.splice(DB.todos.length, 0, ...await DB.findAll());
    });
</script>
<template><main class="w-full max-w-xl mt-10 bg-slate-300 rounded-xl">
      <!-- CARD LISTE -->
      <section
        class="bg-slate-50 rounded-xl shadow ring-1 ring-slate-200/60 overflow-hidden"
        aria-labelledby="todo-heading"
      >
        <h2 id="todo-heading" class="sr-only">Todo list</h2>
        <todoListAddForm @onSubmitNewTodo="DB.addOne"/>
        <!-- LISTE DES TODOS -->
        <ul class="m-4 divide-y divide-slate-200" role="list" aria-label="Todos">
          <!-- ITEM (exemple) -->
          <todo v-for="todo in DB.todos" :key="todo.id" :todo=todo 
          @onDelete="DB.deleteOneById"
          @onToggle="DB.updateOneById"
          @onUpdate="DB.updateOneById" />

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