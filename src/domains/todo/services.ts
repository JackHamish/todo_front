import { api } from "@/services/api";
import { CreateTodo, Todo, TodoQueryParams, UpdateTodo } from "./types";

export async function getAllTodos(params: TodoQueryParams): Promise<Todo[]> {
    return (await api.get("todos", { params })).data;
}

export async function createTodo(createTodoData: CreateTodo): Promise<Todo> {
    const res = await api.post("todos", createTodoData);

    return res.data;
}

export async function updateTodo({ id, data }: { id: string; data: UpdateTodo }) {
    const res = await api.patch(`todos/${id}`, data);

    return res.data;
}

export async function deleteTodo(id: string) {
    return await api.delete(`todos/${id}`);
}
