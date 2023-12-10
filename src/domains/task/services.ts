import { api } from "@/services/api";
import { CreateTask, Task, TaskQueryParams, UpdateTask } from "./types";

export async function getAllTasks(params: TaskQueryParams) {
    return (await api.get<Task[]>("tasks", { params })).data;
}

export async function createTask(createTaskData: CreateTask) {
    return (await api.post<Task>("tasks", createTaskData)).data;
    console.log("`");
}

export async function updateTask({ id, data }: { id: string; data: UpdateTask }) {
    return (await api.patch<Task>(`tasks/${id}`, data)).data;
}

export async function deleteTask(id: string) {
    return (await api.delete<Task>(`tasks/${id}`)).data;
}
