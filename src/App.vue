<script setup>
  import appHeader from '@/components/appHeader.vue';
  import appFooter from '@/components/appFooter.vue';
  import TodoList from '@/components/todoList/TodoList.vue';
  import '@/main.css';
</script>

<template>
  <appHeader/>
  <main>
    <TodoList apiURL="https://68ad9558a0b85b2f2cf3e221.mockapi.io/"/>
  </main>
  <appFooter/>
</template>

<style>
</style>
