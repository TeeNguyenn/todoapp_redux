import { createServer, Model } from 'miragejs';

export const setupServer = () => {
    createServer({
        models: {
            todos: Model,
            search: Model,
        },
        seeds(server) {
            server.search = ''; // Khởi tạo biến search là một chuỗi rỗng
        },
        routes() {
            this.get('/api/todos', (schema) => {
                return schema.todos.all();
            });

            this.post('/api/todos', (schema, request) => {
                const payload = JSON.parse(request.requestBody);

                return schema.todos.create(payload);
            });

            this.post('/api/updateTodo', (schema, request) => {
                const id = JSON.parse(request.requestBody);

                const currentTodo = schema.todos.find(id);

                currentTodo.update({ completed: !currentTodo.completed });

                return currentTodo;
            });

            // Route để cập nhật biến search
            this.post('/api/updateSearch', (schema, request) => {
                const { search } = JSON.parse(request.requestBody);
                schema.server.search = search; // Cập nhật giá trị biến search
                return { search: schema.server.search }; // Trả về giá trị search mới
            });
        },
    });
};
