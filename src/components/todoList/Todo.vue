<script setup>
import { ref } from "vue";
  const props = defineProps({
    todo: Object,
  })
  let isEditing = ref(false);
</script>
<template>
    <li class="px-4 py-3 sm:px-5" role="listitem">
            <div class="flex items-center gap-3">
              <!-- La ligne entière est cliquable via label -->
              <input
                type="checkbox"
                class="h-4 w-4 text-blue-600 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500" v-model="todo.completed" @change="$emit('onToggle', todo)"
              />
              <label class="flex-1 cursor-pointer" :class="{'line-through text-slate-300' :todo.completed}"
              @dblclick="isEditing=true"
              v-if="!isEditing">
                {{todo.content}}
              </label>
              <!-- Champ d'édition (masqué par défaut, visible en mode edit) -->
              <input
              v-else
              class="mt-2 w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              v-model="todo.content" @keyup.enter="$emit('onUpdate', todo); isEditing=false;"
            />
              <button
              class="text-red-600/90 hover:text-red-700 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded"
              aria-label="Delete task"
              title="Delete" @click="$emit('onDelete', Number(todo.id))">
              ✕
            </button>
            </div>
          </li>
</template>
<style></style>