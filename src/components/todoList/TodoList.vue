<script setup>
    import { onMounted, computed } from "vue";
    import TodoListAddForm from './TodoListAddForm.vue';
    import TodoListFooter from './TodoListFooter.vue';
    import Todo from './Todo.vue';
    import { todosStore } from '@/services/todosStore.js';
    const props = defineProps({
    apiURL: {type: String, required: true},
    })
    onMounted (async () => {
        todosStore.setup(props.apiURL);
    });
</script>
<template><main class="w-full max-w-xl mt-10 bg-slate-300 rounded-xl">
      <!-- CARD LISTE -->
      <section
        class="bg-slate-50 rounded-xl shadow ring-1 ring-slate-200/60 overflow-hidden"
        aria-labelledby="todo-heading"
      >
        <h2 id="todo-heading" class="sr-only">Todo list</h2>
        <todoListAddForm @onSubmitNewTodo="todosStore.addOne($event)"/>
        <!-- LISTE DES TODOS -->
        <ul class="m-4 divide-y divide-slate-200" role="list" aria-label="Todos">
          <!-- ITEM (exemple) -->
          <todo v-for="todo in todosStore.todos" :key="todo.id" :todo=todo
          @onDelete="todosStore.deleteOneById($event)"
          @onToggle="todosStore.updateOneById($event)"
          @onUpdate="todosStore.updateOneById($event)" />

          <!-- Message si aucun todo (à gérer en Vue) -->
          <li
            class="px-4 py-6 sm:px-5 text-slate-400 italic text-center hidden"
            role="listitem"
          >
            No tasks yet.
          </li>
        </ul>

            <TodoListFooter :count="itemsLeftCount" 
            @allTodos="todosStore.displayAllTodos"
            @activeTodos="todosStore.filterTodosOnStatus"
            @completedTodos="todosStore.filterTodosOnStatus"
            @clearCompleted="todosStore.deleteCompleted"/>

      </section>
    </main></template>
<style scoped></style>