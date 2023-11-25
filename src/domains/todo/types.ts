export enum TodoStatus {
    "DONE",
    "UNDONE",
}

export type Todo = {
    id: string;
    createdAt: string;
    updatedAt: string;
    title: string;
    priority: number;
    status: TodoStatus;
};

export type CreateTodo = {
    title: string;
    priority: number;
};

export type UpdateTodo = {
    status: TodoStatus;
};

export type TodoQueryParams = {
    title?: string;
    status?: string;
    sortField?: string;
    sortOrder?: string;
};
