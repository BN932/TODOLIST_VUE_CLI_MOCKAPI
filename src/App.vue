<script setup>
  import appHeader from '@/components/appHeader.vue';
  import appFooter from '@/components/appFooter.vue';
  import TodoList from '@/components/todoList/TodoList.vue';
  import '@/main.css';
</script>

<template>
  <appHeader/>
  <main>
    <TodoList/>
  </main>
  <appFooter/>
</template>

<style>
</style>
