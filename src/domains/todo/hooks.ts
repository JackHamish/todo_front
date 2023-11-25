import { keepPreviousData, useMutation, useQuery } from "@tanstack/react-query";
import {
    CreateTodo,
    TodoQueryParams,
    UpdateTodo,
    createTodo,
    deleteTodo,
    getAllTodos,
    updateTodo,
} from ".";

export const useTodos = (params: TodoQueryParams) =>
    useQuery({
        queryKey: ["todos", params],
        queryFn: () => getAllTodos(params),
        placeholderData: keepPreviousData,
    });

export const useAddTodo = () => {
    return useMutation({
        mutationKey: ["create-todo"],
        mutationFn: (data: CreateTodo) => createTodo(data),
    });
};

export const useUpdateTodo = () => {
    return useMutation({
        mutationKey: ["update-todo"],
        mutationFn: ({ id, data }: { id: string; data: UpdateTodo }) => updateTodo({ id, data }),
    });
};

export const useDeleteTodo = () => {
    return useMutation({
        mutationKey: ["delete-todo"],
        mutationFn: (id: string) => deleteTodo(id),
    });
};
