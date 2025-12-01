<script setup>
import { todosStore } from '@/services/todosStore.js';
const props = defineProps({
  count: Number,
})
</script>
<template>
    <!-- Filtres -->
        <!-- FOOTER DE LISTE -->
        <div
          class="border-t border-slate-200 bg-slate-50 px-4 py-3 sm:px-5"
          role="contentinfo"
          aria-label="Todo list footer">
          <div class="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
            <!-- Compteur avec aria-live -->
            <p class="text-sm text-slate-600">
              <span
                id="items-left"
                class="font-medium"
                aria-live="polite"
                aria-atomic="true"
                >{{ todosStore.itemsLeftCount }}</span
              >
              items left
            </p>  
            <nav class="flex items-center gap-2" aria-label="Filters">
              <button
                class="px-3 py-1.5 text-sm rounded-full border border-slate-300 hover:border-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                aria-pressed="true"
                @click="$emit('allTodos')"
              >
                All
              </button>
              <button
                class="px-3 py-1.5 text-sm rounded-full border border-slate-300 hover:border-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                aria-pressed="false"
                @click="$emit('activeTodos',false)"
              >
                Active
              </button>
              <button
                class="px-3 py-1.5 text-sm rounded-full border border-slate-300 hover:border-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                aria-pressed="false"
                @click="$emit('completedTodos',true)"
              >
                Completed
              </button>
              <!-- Action secondaire -->
            <div class="sm:ml-auto">
              <button
                class="text-sm text-slate-600 hover:text-slate-800 underline underline-offset-2 decoration-slate-300 hover:decoration-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                @click="$emit('clearCompleted')"
              >
                Clear completed
              </button>
            </div>
          </nav>
        </div>
      </div>
</template>
<style></style>