import { reactive} from "vue";
export const DB = reactive({
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
        return newTodo;
        
    },
    async deleteOneById(id){
        const response = await fetch(DB.url + "todos/" + id, {method: 'DELETE'});
    },
    async updateOneById(data){
        const response = await fetch(DB.url + "todos/" + data.id, {method: 'PUT', headers: { "Content-Type": "application/json" }, body: JSON.stringify({content: data.content, completed: data.completed, createdAt: data.createdAt, id: data.id})});
    },
    });