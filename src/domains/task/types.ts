export enum TaskStatus {
  "DONE" = "DONE",
  "UNDONE" = "UNDONE",
}

export type Task = {
  id: string;
  createdAt: string;
  updatedAt: string;
  title: string;
  priority: number;
  status: TaskStatus;
};

export type CreateTask = {
  title: string;
  priority: number;
};

export type UpdateTask = {
  status: TaskStatus;
};

export type TaskQueryParams = {
  title?: string;
  status?: string;
  sortField?: string;
  sortOrder?: string;
};
