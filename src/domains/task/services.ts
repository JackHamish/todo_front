import { api } from "@/services/api";
import { CreateTask, Task, TaskQueryParams, UpdateTask } from "./types";

export async function getAllTasks(params: TaskQueryParams): Promise<Task[]> {
  return (await api.get("tasks", { params })).data;
}

export async function createTask(createTaskData: CreateTask): Promise<Task> {
  const res = await api.post("tasks", createTaskData);

  return res.data;
}

export async function updateTask({
  id,
  data,
}: {
  id: string;
  data: UpdateTask;
}) {
  const res = await api.patch(`tasks/${id}`, data);

  return res.data;
}

export async function deleteTask(id: string) {
  return await api.delete(`tasks/${id}`);
}
