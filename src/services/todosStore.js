import { reactive, computed } from 'vue';
import { DB } from './DB.js';
export const todosStore = reactive({
    todos: reactive([]),
    itemsLeftCount: computed(()=> {return todosStore.todos.filter((todo)=> todo.completed === true).length}),
    async setup(url){
        DB.setapiURL(url);
        //todosStore.todos.splice(0, 0, ...await todosStore.findAll());
        todosStore.todos = await DB.findAll();
    },
    async findAll(){
        return DB.findAll();
    },
    async addOne(content){
        const newTodo = await DB.addOne(content);
        todosStore.todos.push({id: newTodo.id, content: newTodo.content, completed: newTodo.completed});
    },
    async deleteOneById(id){
        DB.deleteOneById(id);
        const index = todosStore.todos.findIndex((todo)=>todo.id == id);
        todosStore.todos.splice(index, 1);
    },
    async updateOneById(data){
        DB.updateOneById(data);
        const index = todosStore.todos.findIndex((todo)=>todo.id == data.id);
        todosStore.todos[index].content = data.content;
    },
    async displayAllTodos(){
        todosStore.todos = await todosStore.findAll();
    },
    filterTodosOnStatus(state){
        todosStore.todos = todosStore.todos.filter((todo)=>todo.completed===state);
    },
        async deleteCompleted(){
        todosStore.todos.filter((todo)=> todo.completed ===true).forEach((todo)=>todosStore.deleteOneById(todo.id));
    }
})

