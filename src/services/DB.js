import { reactive, ref } from "vue";
export const DB = reactive({
    isLoading : ref(true),
    async setapiURL (data){
        DB.url = data;
    },

    async findAll() {
        const response = await fetch(DB.url + "todos");
        DB.isLoading = false;
        return response.json();
    },
    async addOne(content) {
        const response = await fetch(DB.url + "todos", {method: 'POST', headers: { "Content-Type": "application/json" }, body: JSON.stringify({content: content, completed: false}),})
        const newTodo = await response.json();
        DB.todos.push({id: newTodo.id, content: newTodo.content, completed: newTodo.completed});
        
    },
    async deleteOneById(id){
        const response = await fetch(DB.url + "todos/" + id, {method: 'DELETE'});
        const index = DB.todos.findIndex((todo)=>todo.id == id);
        DB.todos.splice(index, 1);
    },
    async deleteCompleted(){
        this.todosComplete.map((todo)=>{
            DB.deleteTodo(todo.id);
        })
    },
    async updateOneById(data){
        const response = await fetch(DB.url + "todos/" + data.id, {method: 'PUT', headers: { "Content-Type": "application/json" }, body: JSON.stringify({content: data.content, completed: data.completed, createdAt: data.createdAt, id: data.id})});
        const index = DB.todos.findIndex((todo)=>todo.id == data.id);
        DB.todos[index].content = data.content;
    },
    todos: reactive([]),
    });